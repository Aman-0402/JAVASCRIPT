// ── Theme Toggle ──
function initProjectsTheme() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('js-projects-theme') || 'dark';

    if (savedTheme === 'light') {
        html.classList.add('light-theme');
    }
}

initProjectsTheme();

// ── Project Cards Initialization ──
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    // Smooth scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    // Add smooth transition for flip animation
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });

    // Add keyboard accessibility
    cards.forEach(card => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');

        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.classList.toggle('flipped');
                e.preventDefault();
            }
        });
    });
});

// ── Scroll Animation ──
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

document.querySelectorAll('.project-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ── Analytics/Logging ──
console.log('%c JavaScript Projects Page Loaded', 'color: #f7df1e; font-weight: bold; font-size: 14px;');
console.log('%c Choose a project and start building!', 'color: #22c55e; font-size: 12px;');
