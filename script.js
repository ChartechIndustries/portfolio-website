// Navigation Functions
function enterPortfolio() {
    // Add a smooth transition effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 500);
}

function navigateToProject(projectId) {
    // Add a smooth transition effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        window.location.href = `${projectId}.html`;
    }, 500);
}

function goBack() {
    // Add a smooth transition effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 500);
}

// Page Load Animations
function initializePageAnimations() {
    // Fade in effect for all pages
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Add scroll animations for project rows
    const projectRows = document.querySelectorAll('.project-row');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);

    projectRows.forEach(row => {
        row.style.opacity = '0';
        row.style.transform = 'translateX(-50px)';
        row.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(row);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects for project rows
    projectRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });

        row.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add typing effect for landing page title (if on landing page)
    const landingTitle = document.querySelector('.landing-title');
    if (landingTitle && (window.location.pathname.includes('index.html') || window.location.pathname === '/')) {
        const text = landingTitle.textContent;
        landingTitle.textContent = '';
        landingTitle.style.borderRight = '2px solid white';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                landingTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                landingTitle.style.borderRight = 'none';
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Add parallax effect for floating shapes on landing page
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length > 0) {
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 20;
                const y = (mouseY - 0.5) * speed * 20;
                
                shape.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // Add scroll-triggered animations for about page
    const skillCategories = document.querySelectorAll('.skill-category');
    if (skillCategories.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.3 });

        skillCategories.forEach(category => {
            category.style.opacity = '0';
            category.style.transform = 'translateX(-30px)';
            category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            skillObserver.observe(category);
        });
    }

    // Add loading animation for project detail pages
    const projectImageLarge = document.querySelector('.project-image-large');
    if (projectImageLarge) {
        projectImageLarge.style.opacity = '0';
        projectImageLarge.style.transform = 'scale(0.9)';
        projectImageLarge.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            projectImageLarge.style.opacity = '1';
            projectImageLarge.style.transform = 'scale(1)';
        }, 300);
    }

    // Add interactive hover effects for tech tags
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
            this.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Add smooth reveal animation for project descriptions
    const projectDescriptions = document.querySelectorAll('.project-description');
    if (projectDescriptions.length > 0) {
        const descObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.2 });

        projectDescriptions.forEach(desc => {
            desc.style.opacity = '0';
            desc.style.transform = 'translateY(30px)';
            desc.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            descObserver.observe(desc);
        });
    }

    // Initialize video features
    initializeVideoFeatures();
}

// Video functionality (for future use)
function initializeVideoFeatures() {
    // Video placeholder click handlers
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // This will be enhanced when videos are added
            console.log('Video placeholder clicked - ready for video integration');
        });
    });

    // Video thumbnail hover effects
    const videoThumbnails = document.querySelectorAll('.project-video-thumbnail');
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1.2)';
        });
        
        thumbnail.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

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
  // Scale logo to fit 40% of the smaller canvas dimension
  const scale = 0.4 * Math.min(canvas.width / logoImg.width, canvas.height / logoImg.height);
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
  // White area: R,G,B all > 200, alpha > 128
  return (
    logoMask.data[idx + 3] > 128 &&
    logoMask.data[idx] > 200 &&
    logoMask.data[idx + 1] > 200 &&
    logoMask.data[idx + 2] > 200
  );
}

function draw() {
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

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

// Game of Life logic
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

// Initialize
cells = [];
resizeCanvas();

// Handle both DOMContentLoaded and page show events
document.addEventListener('DOMContentLoaded', initializePageAnimations);

// Handle browser back/forward navigation
window.addEventListener('pageshow', function(event) {
    // Reinitialize animations when page is shown (including from cache)
    if (event.persisted) {
        // Page was loaded from cache (back/forward navigation)
        setTimeout(() => {
            initializePageAnimations();
        }, 50);
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Page became visible again
        setTimeout(() => {
            initializePageAnimations();
        }, 50);
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to go back
    if (e.key === 'Escape') {
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            goBack();
        }
    }
    
    // Enter key to trigger enter portfolio button
    if (e.key === 'Enter') {
        const enterBtn = document.querySelector('.enter-btn');
        if (enterBtn && document.activeElement === enterBtn) {
            enterPortfolio();
        }
    }
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function() {}, {passive: true});

// Add smooth page transitions
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Add loading state for project links
document.querySelectorAll('.project-link-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.href === '#') {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

// Add intersection observer for navbar background
const navbar = document.querySelector('.navbar');
if (navbar) {
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            }
        });
    }, { threshold: [0, 1] });

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        navObserver.observe(heroSection);
    }
} 