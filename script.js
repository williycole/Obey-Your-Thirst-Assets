
// funciton for hamburger nav menu
function myFunction() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}






// Function for site counter api
const counting = document.getElementById("#count");

function visitUpdate(){
  fetch('https://api.countapi.xyz/update/boren-sprite-clone/sprite-clone/?amount=1')
  .then(res => res.json())
  .then(res => {
    counting.innerHTML = res.value;
  });
}
visitUpdate();