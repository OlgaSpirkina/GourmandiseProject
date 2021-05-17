// $(document).ready(function(){
//   $("#buttonCake").click(function(){
//   $("#birthdayCake").toggle();
// });
// });
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("buttonContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// faire apparaitre et disparaitre le panier
// document.querySelector(".fa-shopping-cart").addEventListener("click", () => {
//   const $shopping = document.querySelector(".shopping-card");
//   $shopping.style.display = $shopping.style.display === "none" ? "inline-block" : "none";
// });
(function(){
const cartInfo = document.querySelector(".fa-shopping-cart");
const cart = document.getElementById("cart");
cartInfo.addEventListener("click", function(){
  cart.classList.toggle('show-cart');
})
})();

// (function(){
//   const choosenItem = document.querySelector(".card-title");
//   // const price = document.getElementById("price").text;
//   const addToCart = document.querySelectorAll(".add-to-cart");
//   addToCart.addEventListener("click", function(){
//     for(let i = 0; i < addToCart.length; i++){
//       choosenItem.innerHTML = "500000";
//       document.querySelector(".cart-item-title").innerHTML = "coucou";
//       document.querySelector(".cart-item-price").innerHTML = "hello";
//     }
//
//   })
// })();
document.querySelectorAll(".add-to-cart").forEach(addCart =>
  addCart.addEventListener("click", () =>
  myFunction()
)
)
function myFunction() {
let price = document.querySelectorAll(".span-price");
var i;
for(i = 0; i < price.length; i++) {
  document.querySelector(".cart-item-price").innerHTML = "coucou",
  document.querySelector(".card-title").innerHTML = i
}
}

  // let choosenItem = document.querySelector(".card-title").text;
  // let price = document.querySelector(".card-text").text;
