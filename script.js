// Custom Game of Life Landing Page
const canvas = document.getElementById('life-canvas');
const ctx = canvas.getContext('2d');

// Smaller cells for finer grid
const CELL_SIZE = 8; // px
const CELL_GAP = 1; // px
const BG_COLOR = '#181818';
const CELL_COLOR = '#fff';

let cols, rows, cells;
let logoImg = new Image();
logoImg.src = 'logo.png';
let logoMask = null;
let logoX = 0, logoY = 0, logoW = 0, logoH = 0;
let pendingActivations = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cols = Math.floor(canvas.width / (CELL_SIZE + CELL_GAP));
  rows = Math.floor(canvas.height / (CELL_SIZE + CELL_GAP));
  if (logoImg.complete) {
    centerLogo();
    createLogoMask();
  }
  // Recreate cells array, preserving existing state if possible
  const newCells = Array.from({ length: cols }, (_, x) =>
    Array.from({ length: rows }, (_, y) => (cells && cells[x] && cells[x][y]) ? cells[x][y] : false)
  );
  cells = newCells;
}

function centerLogo() {
  // Scale logo to fit 60% of the smaller canvas dimension (increased from 40%)
  const scale = 0.6 * Math.min(canvas.width / logoImg.width, canvas.height / logoImg.height);
  logoW = logoImg.width * scale;
  logoH = logoImg.height * scale;
  logoX = (canvas.width - logoW) / 2;
  logoY = (canvas.height - logoH) / 2;
}

function createLogoMask() {
  // Draw logo to an offscreen canvas to use as a mask
  const maskCanvas = document.createElement('canvas');
  maskCanvas.width = logoW;
  maskCanvas.height = logoH;
  const maskCtx = maskCanvas.getContext('2d');
  maskCtx.drawImage(logoImg, 0, 0, logoW, logoH);
  logoMask = maskCtx.getImageData(0, 0, logoW, logoH);
}

function isInLogoWhite(x, y) {
  // x, y are canvas coordinates
  if (!logoMask) return false;
  const lx = x - logoX;
  const ly = y - logoY;
  if (lx < 0 || ly < 0 || lx >= logoW || ly >= logoH) return false;
  const idx = (Math.floor(ly) * logoMask.width + Math.floor(lx)) * 4;
  // More robust white area detection: R,G,B all > 180, alpha > 100
  // This accounts for anti-aliasing and slight color variations
  return (
    logoMask.data[idx + 3] > 100 &&
    logoMask.data[idx] > 180 &&
    logoMask.data[idx + 1] > 180 &&
    logoMask.data[idx + 2] > 180
  );
}

function draw() {
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Optional: Draw a subtle outline around the logo area for debugging
  // Uncomment the next 3 lines if you want to see the logo boundary
  // ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  // ctx.lineWidth = 1;
  // ctx.strokeRect(logoX, logoY, logoW, logoH);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const cx = x * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
      const cy = y * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
      if (cells[x][y] && !isInLogoWhite(cx, cy)) {
        ctx.fillStyle = CELL_COLOR;
        ctx.fillRect(
          x * (CELL_SIZE + CELL_GAP),
          y * (CELL_SIZE + CELL_GAP),
          CELL_SIZE,
          CELL_SIZE
        );
      }
    }
  }
  requestAnimationFrame(gameLoop);
}

function activateCellAt(x, y) {
  // x, y are canvas coordinates
  const col = Math.floor(x / (CELL_SIZE + CELL_GAP));
  const row = Math.floor(y / (CELL_SIZE + CELL_GAP));
  if (
    col >= 0 && col < cols &&
    row >= 0 && row < rows
  ) {
    const cx = col * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
    const cy = row * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
    if (!isInLogoWhite(cx, cy)) {
      pendingActivations.push([col, row]);
    }
  }
}

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  activateCellAt(x, y);
});

window.addEventListener('resize', resizeCanvas);

function seedRandom(density = 0.18) {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const cx = x * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
      const cy = y * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
      if (!isInLogoWhite(cx, cy) && Math.random() < density) {
        cells[x][y] = true;
      }
    }
  }
}

logoImg.onload = () => {
  console.log('Logo loaded');
  centerLogo();
  createLogoMask();
  resizeCanvas();
  seedRandom();
  requestAnimationFrame(gameLoop);
};
logoImg.onerror = () => {
  console.warn('Logo image failed to load, running without mask.');
  logoMask = null;
  resizeCanvas();
  seedRandom();
  requestAnimationFrame(gameLoop);
};

function countNeighbors(x, y) {
  let count = 0;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 && nx < cols &&
        ny >= 0 && ny < rows
      ) {
        const cx = nx * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
        const cy = ny * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
        if (!isInLogoWhite(cx, cy) && cells[nx][ny]) {
          count++;
        }
      }
    }
  }
  return count;
}

function evolve() {
  const newCells = Array.from({ length: cols }, () => Array(rows).fill(false));
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const cx = x * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
      const cy = y * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
      if (isInLogoWhite(cx, cy)) {
        newCells[x][y] = false;
        continue;
      }
      const neighbors = countNeighbors(x, y);
      if (cells[x][y]) {
        // Survive with 2 or 3 neighbors
        newCells[x][y] = neighbors === 2 || neighbors === 3;
      } else {
        // Born with exactly 3 neighbors
        newCells[x][y] = neighbors === 3;
      }
    }
  }
  cells = newCells;
}

function applyPendingActivations() {
  for (const [col, row] of pendingActivations) {
    if (
      col >= 0 && col < cols &&
      row >= 0 && row < rows
    ) {
      const cx = col * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
      const cy = row * (CELL_SIZE + CELL_GAP) + CELL_SIZE / 2;
      if (!isInLogoWhite(cx, cy)) {
        cells[col][row] = true;
      }
    }
  }
  pendingActivations = [];
}

function gameLoop() {
  applyPendingActivations();
  evolve();
  draw();
} 
