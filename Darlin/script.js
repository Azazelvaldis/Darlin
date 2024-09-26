// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});

// Fade in effect for the hero section on load
window.onload = function() {
    const heroText = document.querySelector('.hero h2');
    heroText.style.opacity = 0;
    setTimeout(() => {
        heroText.style.transition = 'opacity 2s ease-in-out';
        heroText.style.opacity = 1;
    }, 500);
};
