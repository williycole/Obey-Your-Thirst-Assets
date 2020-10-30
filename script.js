
// funciton for hamburger nav menu
function myFunction() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}


// JS animations
//// Notes to self for further learning
//// here I query my footer image, and use the classlist from prototype
//// to add and remove the spin class
const footerImg = document.querySelector('.footer-img');
footerImg.classList.add('spin');
footerImg.classList.remove('spin');
// console.log(footerImg.classList);

//// next I create a function called toggleSpin and grab that footer image
//// to toggle the add remove seen above
function toggleSpin() {
footerImg.classList.toggle('spin');
navLogo.classList.toggle('spin');
}
//// finally I add an event listener and pass reference
//// to my toggleSpin funciton
footerImg.addEventListener('click', toggleSpin);


//// here I do the same as above but with the header image
const navLogo = document.querySelector('.nav-logo');
navLogo.classList.add('spin');
navLogo.classList.remove('spin');



