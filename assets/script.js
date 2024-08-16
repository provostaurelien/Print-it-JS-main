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

// Définition des contantes

let i=0
let flechedroite = document.querySelector("#banner .arrow_right")
let flechegauche = document.querySelector("#banner .arrow_left")
const dots = document.querySelectorAll(".dot");

function updateSlide(i) {
	//Gestion des dots foreach indiqué par ia
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	
	dots[i].classList.add("dot_selected");
}

updateSlide(i);
// Gestion des flèches du caroussel 



flechedroite.addEventListener("click", function() {
	i++
	if (i>= slides.length) {
		i= 0
	}
	console.log(i)
	updateSlide(i)
})

flechegauche.addEventListener("click", function() {
	i--
	if (i===-1) {
		i= slides.length -1
	}
	console.log(i)
	updateSlide(i)
})


