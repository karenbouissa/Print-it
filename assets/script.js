const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides);

// Récupèrer tous les éléments du carroussel

const bannerImg = document.querySelector(".banner-img");
const precedent = document.querySelector(".arrow_left");
const suivant = document.querySelector(".arrow_right");
const dots = document.querySelector(".dot")
let currentIndex = 0; // Un compteur qui permet de savoir sur quelle slide on se trouve

// Fonction pour mettre à jour les points indicateurs, l'image et le texte
function updateCarousel(index, direction) {
	//correction du bug pour la première et la dernière image
	if (currentIndex === -1 && direction === 'left') {
	  currentIndex = slides.length - 1;
  } else if (currentIndex === slides.length && direction === 'right') {
	  currentIndex = 0;
  }

  // MAJ images
  const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${currentIndex + 1}`;

  // MAJ du texte
  const tagLine = slides[currentIndex].tagLine;
  document.querySelector('p').innerHTML = tagLine;

  console.log(`Clic sur la flèche ${direction}`);
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
precedent.addEventListener('click', function () {
  currentIndex = (currentIndex - 1);
  updateCarousel(currentIndex, 'left');
  updateDots(currentIndex); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
suivant.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) ;
  updateCarousel(currentIndex, 'right');
  updateDots(currentIndex); // Mettez à jour les points indicateurs
});
