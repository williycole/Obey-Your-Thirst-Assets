
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
visitUpdate();
function visitUpdate(){
  fetch('https://api.countapi.xyz/update/coleboren/spriteclone?amount=1')
  .then(res => res.json())
  .then(res => {
    counting.innerHTML = res.value;
  });
}
'https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1'