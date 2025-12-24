document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initParallax();
    initNavHighlighter();
});

/**
 * Initialize Intersection Observer for fade-in animations
 */
function initAnimations() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible to run only once
                // observer.unobserve(entry.target);
            }
        });
    }, options);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Initialize Parallax Effect for History Section
 */
function initParallax() {
    const historyBg = document.querySelector('.history__background');
    const historySection = document.querySelector('.history');

    if (!historyBg || !historySection) return;

    window.addEventListener('scroll', () => {
        const rect = historySection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Calculate relative scroll position (0 to 1)
            const speed = 0.3;
            const yPos = (rect.top) * speed;
            historyBg.style.transform = `translateY(${yPos}px)`;
        }
    });
}

/**
 * Highlight active Navigation Item on scroll
 */
function initNavHighlighter() {
    const sections = document.querySelectorAll('section, header');
    const navLi = document.querySelectorAll('.bottom-nav__item');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjustment for offset
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
}
