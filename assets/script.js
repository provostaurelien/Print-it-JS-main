const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Définition des contantes

let i = 0;
let flechedroite = document.querySelector("#banner .arrow_right");
let flechegauche = document.querySelector("#banner .arrow_left");
const dots = document.querySelectorAll(".dot");
const img = document.querySelector("#banner .banner-img");
const texte = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
console.log(texte);


// Ajout dynamique des dots selon le nombre d'éléments dans le tableau des slides
function generateDots() {
  // Vider le container des dots
  dotsContainer.innerHTML = "";

  // Ajouter autant de dots que de slides
  slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    
    // Ajout d'un écouteur d'événement pour chaque dot (clic pour changer de slide)
    dot.addEventListener("click", () => {
      i = index;
      updateSlide(i);
    });

    // Ajouter la dot au container
    dotsContainer.appendChild(dot);
  });
}

function updateSlide(i) {
  // Ajout de la constante dots dans la fonction car créer par fonction précédente
  const dots = document.querySelectorAll(".dot");
  //Gestion des dots foreach indiqué par ia
  dots.forEach((dot) => dot.classList.remove("dot_selected"));

  dots[i].classList.add("dot_selected");

  // Changement des images

  img.src = "./assets/images/slideshow/" + slides[i].image;

  // Changement de paragraphe

  texte.innerHTML = slides[i].tagLine;
}
// Initialisation des constantes
generateDots();
updateSlide(i);

// Gestion des flèches du caroussel

flechedroite.addEventListener("click", function () {
  i++;
  if (i >= slides.length) {
    i = 0;
  }
  console.log(i);
  updateSlide(i);
});

flechegauche.addEventListener("click", function () {
  i--;
  if (i === -1) {
    i = slides.length - 1;
  }
  console.log(i);
  updateSlide(i);
});




