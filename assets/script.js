// Définition des slides du carrousel
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et événements</span>",
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

// Slide actuel
let currentSlide = 0;

// Nombre total de slides
const totalSlides = slides.length;

// Affichage initial du premier slide et des points (dots)
createSlides(currentSlide);
dotsUpdate();

// Sélection des éléments du DOM
const banner = document.getElementById("banner");
const bannerImg = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const dotSelected = document.querySelectorAll(".dot.dot_selected");

// Mise en place d'event listener sur les flèches gauche et droite
arrowLeft.addEventListener("click", function () {
  // Vérification si on est sur le premier slide
  if (currentSlide === 0) {
    // Si oui, passer au dernier slide
    currentSlide = totalSlides - 1;
  } else {
    // Sinon, passer au slide précédent
    currentSlide--;
  }
  // Mise à jour des slides
  createSlides(currentSlide);
});

arrowRight.addEventListener("click", function () {
  // Vérification si on est sur le dernier slide
  if (currentSlide === totalSlides - 1) {
    // Si oui, passer au premier slide
    currentSlide = 0;
  } else {
    // Sinon, passer au slide suivant
    currentSlide++;
  }
  // Mise à jour des slides
  createSlides(currentSlide);
});

// Fonction pour mettre à jour l'état des points (dots)
function dotsUpdate() {
  const dotsList = document.querySelectorAll(".dot");
  for (let index = 0; index < dotsList.length; index++) {
    const dot = dotsList[index];
    // Vérification si le point correspond au slide actuel
    if (index === currentSlide) {
      // Si oui, le marquer comme sélectionné
      dot.classList.add("dot_selected");
    } else {
      // Sinon, le désélectionner
      dot.classList.remove("dot_selected");
    }
  }
}

// Fonction pour créer et afficher les slides
function createSlides(currentSlide) {
  // Récupération des données du slide actuel
  const element = slides[currentSlide];
  // Mise à jour de l'image du banner
  const img = document.querySelector(".banner-img");
  img.setAttribute("src", "./assets/images/slideshow/" + element.image);

  // Mise à jour du texte du banner
  const p = document.querySelector(".banner-txt");
  p.innerHTML = element.tagLine;

  // Mettre à jour de l'état des points (dots)
  dotsUpdate();
}
