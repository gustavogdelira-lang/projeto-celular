// =========================
// ARQUIVO: script.js
// =========================

// MENU MOBILE

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// FECHAR MENU AO CLICAR

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// ANIMAÇÃO AO ROLAR

const cards = document.querySelectorAll(
    '.product-card, .testimonial-card'
);

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold: 0.2
});

cards.forEach((card)=>{
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);
});

// BOTÃO COMPRAR

const buttons = document.querySelectorAll('.product-card button');

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        alert('Produto adicionado ao carrinho!');
    });
});