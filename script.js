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
document.addEventListener('DOMContentLoaded', function() {
    // Fade in effect for all pages
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Add scroll animations for project cards
    const projectCards = document.querySelectorAll('.project-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
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

    // Add hover effects for project cards
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect for landing page title (if on landing page)
    const landingTitle = document.querySelector('.landing-title');
    if (landingTitle && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
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