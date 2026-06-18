document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollReveal();
    initSmoothScroll();
    initMobileMenu();
    initAnimatedCounters();
    initProgressBar();
    initBackToTop();
    initThemeToggle();
});

function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });
    revealElements.forEach(el => revealObserver.observe(el));
}

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link, .hero-actions a[href^="#"], .back-to-top');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    closeMobileMenu();
                }
            }
        });
    });
}

function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            updateToggleAnimation(navToggle);
        });
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        updateToggleAnimation(navToggle);
    }
}

function updateToggleAnimation(toggle) {
    const spans = toggle.querySelectorAll('span');
    if (toggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const suffix = counter.getAttribute('data-suffix') || '';
                const duration = 1500;
                const steps = 60;
                const increment = target / steps;
                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + suffix;
                    }
                }, duration / steps);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

function initProgressBar() {
    const bar = document.getElementById('progressBar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        bar.style.width = scrollPercent + '%';
    });
}

function initBackToTop() {
    const button = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
}

function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.classList.add(savedTheme);
    if (savedTheme === 'light') {
        document.body.classList.add('light');
    }
    toggle.addEventListener('click', () => {
        const isLight = html.classList.contains('light');
        if (isLight) {
            html.classList.remove('light');
            html.classList.add('dark');
            document.body.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            document.body.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('visible'));
}

console.log('%cHey there! Welcome to my resume site.', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cReach out: sundarlohar007@gmail.com', 'color: #60a5fa; font-size: 12px;');
