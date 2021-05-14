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
