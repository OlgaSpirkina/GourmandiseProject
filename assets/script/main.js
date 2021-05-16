// fonction pour les catégories

// Create a var to select item
var gridItems = document.querySelectorAll('.item')

function showAll() {
    gridItems.forEach(function(element) {
        element.classList.add('show')
    })
}

function showCategory(category) {
    gridItems.forEach(function(element){
        if (element.classList.contains(category)) {
            element.classList.add('show')
        }
        else {
            element.classList.remove('show')
        }
    })
}
showAll()

// fin fonction catégories

// début fonction voir plus
$(function () {
    $('#b1').click(function(){
        $('#test1').toggle();
        $('#test2').toggle();
        $('#test3').toggle();
        $('#test4').toggle();
        $('#test5').toggle();
        $('#test6').toggle();
        $('#test7').toggle();
        $('#test8').toggle();
        $('#test9').toggle();
        $('#test10').toggle();
        $('#test11').toggle();
        $('#test12').toggle();
    });
});
// fin fonction voir plus
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
