// script.js - portfolio interactivity

// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const contactForm = document.getElementById('portfolio-contact-form');
const formFeedback = document.getElementById('form-feedback');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');

    // switch hamburger icon to X and back
    if (!isExpanded) {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
    } else {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
    }
});

// close mobile menu when a link is clicked
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
});

// Contact form - simple client side feedback (no backend yet)
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const senderName = document.getElementById('name').value;

    formFeedback.textContent = `Thank you, ${senderName}! Areesha will get back to you soon.`;
    formFeedback.classList.remove('hidden');

    contactForm.reset();

    // hide the message after a few seconds
    setTimeout(() => {
        formFeedback.classList.add('hidden');
    }, 4000);
});

// header shadow appears once user scrolls a bit
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('bg-white/95', 'shadow-sm');
        header.classList.remove('bg-white/80');
    } else {
        header.classList.remove('bg-white/95', 'shadow-sm');
        header.classList.add('bg-white/80');
    }
});