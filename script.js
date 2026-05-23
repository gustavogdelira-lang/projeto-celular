const cards = document.querySelectorAll('.card');

function animarCards(){

  cards.forEach((card) => {

    const topoCard = card.getBoundingClientRect().top;

    if(topoCard < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }

  });

}

cards.forEach((card) => {

  card.style.opacity = "0";

  card.style.transform = "translateY(50px)";

  card.style.transition = "0.8s";

});

window.addEventListener('scroll', animarCards);

animarCards();