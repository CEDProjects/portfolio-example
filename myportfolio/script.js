const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));
// Initialize progress bars
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent;
    });
}

// Animate progress bars when they come into view
ScrollReveal().reveal('.skill-card', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100,
    afterReveal: function(el) {
        const progressBar = el.querySelector('.progress-bar');
        if (progressBar) {
            const percent = progressBar.getAttribute('data-percent');
            progressBar.style.width = percent;
        }
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Initialize ScrollReveal for animations
    ScrollReveal().reveal('.skill-card', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100
    });
    
    ScrollReveal().reveal('.hero-content', {
        delay: 200,
        distance: '20px',
        origin: 'top'
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });