document.addEventListener('DOMContentLoaded', function() {
    // ScrollReveal Animations
    const sr = ScrollReveal({ reset: true });
    sr.reveal('.home-text, .rede-sociais, .scroll-down-link, .button', { duration: 1600 });
    sr.reveal('.about', { duration: 2200 });
    sr.reveal('.certificacoes', { duration: 2000 });
    sr.reveal('.portfolio-footer', { duration: 1800 });

// Menu Hamburguer Functionality
const menuBtn = document.querySelector('.menu-hamburguer');
const navMenu = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.close-menu');

if (menuBtn && navMenu && closeMenuBtn) {
    // Abrir menu
    menuBtn.addEventListener('click', () => {
        navMenu.classList.add('active');
    });

    // Fechar menu com botão X
    closeMenuBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

    // Theme Toggle Functionality
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');
    const body = document.body;
    
    if (toggleThemeBtn) {
        // Set initial theme
        const storedTheme = localStorage.getItem('theme') || 'light-theme';
        body.classList.add(storedTheme);

        toggleThemeBtn.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light-theme');
            } else {
                body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark-theme');
            }
        });
    }

    // Hide/Show Header on Scroll
    const header = document.querySelector('.header');
    if (header) {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            backToTopButton.classList.toggle('show', window.pageYOffset > 300);
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Update Current Year in Footer
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});