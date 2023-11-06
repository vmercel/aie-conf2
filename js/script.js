// function toggleMenu() {
//     var x = document.getElementById("menu");
//     if (x.className === "menu") {
//     x.className += " responsive";
//     } else {
//     x.className = "menu";
//     }
//     }

/* JavaScript for toggling the menu */
function toggleMenu() {
  var x = document.querySelector(".menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}