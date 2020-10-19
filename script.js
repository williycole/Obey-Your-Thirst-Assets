
// funciton for hamburger nav menu
function myFunction() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}


// Contact form validation
function formValidator() {
  const name = document.getElementById('name');
  const comments = document.getElementById('comments');
  const form = document.getElementById('contact-form');
  const submit = document.getElementById('submit');
  if(name.value === '' || name.value == null ){
      console.log('it works');
      alert('Please provide your full name and comments before submitting the form.');
      return false;

  }else if(comments.value === '' || comments.value == null){
      alert('Please provide your full name and comments before submitting the form.');
      return false;
  }else {
      return true;
  }
}

//page counter
function btnAnimate() {

}

