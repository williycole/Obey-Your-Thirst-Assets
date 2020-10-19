
// funciton for hamburger nav menu
function myFunction() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}


// contact form validation
function formValidator() {
  const name = document.getElementById('name');
  const comments = document.getElementById('comments');
  const form = document.getElementById('contact-form');
  const submit = document.getElementById('submit');
  if(name.value=== '' || name.value == null  && comments.value === '' || comments.value == null){
      false;
      alert('Please provide your full name and comments before submitting the form.');
  }else {
      alert('Your form as been submited!');
  }
}

