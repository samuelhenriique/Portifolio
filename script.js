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

//Cabeçalho sumir 

    let lastScrollTop = 0; // Armazena a posição da última rolagem
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Posição atual da rolagem

        if (scrollTop > lastScrollTop) {
            // Rolando para baixo
            header.classList.add('hidden'); // Adiciona a classe para esconder o cabeçalho
        } else {
            // Rolando para cima
            header.classList.remove('hidden'); // Remove a classe para mostrar o cabeçalho
        }
        lastScrollTop = scrollTop; // Atualiza a posição da última rolagem
    });


//  Footer
let year = document.querySelector("#year");

$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});