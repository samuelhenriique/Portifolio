window.sr = ScrollReveal({ reset: true});
sr.reveal ('.home-text, .rede-sociais, .scroll-down-link,.button', {duration: 1600});
sr.reveal ('.about', {duration: 2200})
sr.reveal ('.certificacoes', { duration: 2000})


const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const body = document.body;

// Carregar o tema armazenado
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    body.classList.add(storedTheme);
} else {
    body.classList.add('light-theme'); // Tema padrão
}

toggleThemeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
});

// Cabeçalho "Sumir"
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Rolou para baixo - Esconder o cabeçalho
        header.classList.add('hidden');
    } else {
        // Rolou para cima - Mostrar o cabeçalho
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

//  Footer
let year = document.querySelector("#year");

$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});

