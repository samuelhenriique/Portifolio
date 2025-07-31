# 💼 Portfólio Pessoal - Samuel Henrique (SH Dev.)

Este projeto é um portfólio pessoal desenvolvido para apresentar meus principais projetos, habilidades e informações profissionais. Foi desenvolvido com foco em um layout moderno, responsivo e leve, utilizando HTML, CSS e JavaScript puros (sem frameworks).

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## 📱 Responsividade

O layout foi cuidadosamente construído com media queries para oferecer uma boa experiência tanto em dispositivos móveis quanto em desktops.

## ✨ Funcionalidades

- **Design responsivo:** se adapta automaticamente a diferentes tamanhos de tela.
- **Animações suaves:** efeito de fade-in ao rolar a página, melhorando a experiência do usuário.
- **Scroll interativo:** navegação fluida com rolagem suave entre seções.
- **Links para redes sociais e repositórios:** fácil acesso ao GitHub e outras plataformas.
- **Menu de navegação fixo:** facilita a navegação entre seções da página.
- **Exibição dos projetos desenvolvidos:** área dedicada a mostrar projetos com links clicáveis.

## 🛠️ Em Desenvolvimento

- A seção **Fale Comigo** terá um backend implementado em **PHP**, que permitirá o envio de mensagens diretamente para o e-mail do desenvolvedor.  
  (⚙️ Em breve: funcionalidade de envio de mensagens com validação e feedback para o usuário.)

## 📁 Estrutura de Arquivos

├── assets/
│ ├── script.js # Scripts JavaScript
│ ├── style.css # Estilos CSS
│ └── imagens/ # Imagens utilizadas no site
├── index.html # Página principal do portfólio
└── README.md # Documentação do projeto


## 🧠 Como Funcionam os Scripts

- Os scripts são responsáveis por adicionar efeitos visuais ao site, como:
  - **Scroll Reveal:** faz com que os elementos apareçam com animação ao rolar a tela.
  - **Scroll Suave:** ao clicar em um item do menu, a rolagem até a seção correspondente é suave.

```js
// Exemplo de rolagem suave
document.querySelectorAll('.header a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});

```


🔗 Acesse o Portfólio
👉 Veja online aqui: https://samuelhenrique.netlify.app/

🧑‍💻 Sobre mim
Desenvolvedor apaixonado por tecnologia e sempre em busca de novos desafios. Tenho experiência com desenvolvimento front-end e back-end, e estou constantemente evoluindo minhas habilidades.

📬 Contato
Email: samu.hwf@gmail.com

LinkedIn: https://www.linkedin.com/in/samuelwenceslau/

GitHub: github.com/samuelhenriique

