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
(function(){
  const cartInfo = document.querySelector(".fa-shopping-cart");
  const cart = document.getElementById("cart");
  cartInfo.addEventListener("click", function(){
    cart.classList.toggle('show-cart'); // la div invisible avec width=0 prend la largeur est devien visible
  })
})();
// le tableau qui va contenir tout les prix d'article permettant de faire des calcules
let arrayShoppingCart = [];
let sum = 0;
// ajouter les articles dans le panier
function addPriceToCart(prix, prod, id, img) {
  let shoppingCart = '<div id=item_'+ id +' class="cart-item d-flex justify-content-between text-capitalize my-3">' +
                          '<div class="item-text">' +
                            '<p class="font-weight-bold mb-0 cart-item-title prod-title">' + prod + '</p>' +
                            '<img src=' + img + ' style="width: 30%; margin: .2rem">' +
                            '<span>€</span>' +
                            '<span class="cart-item-price" class="mb-0">' + prix +  '</span>' +
                          '</div>' +
                          '<a href="#" class="cart-item-remove" style="margin-top: 1.5rem" onclick="emptyTrash(' + id + ')">' +
                            '<i class="fas fa-trash"></i>' +
                          '</a>' +
                        '</div>';
    document.getElementById("total").style.visibility = "visible"; // #total - la somme totale des articles dans le panier
  // la div vide #cart prend la structure définie ci-dessous pour afficher chaque article dans le panier
    document.getElementById("cart").innerHTML += shoppingCart;
    alert("le produit " + prod + " a été rajouté dans le panier");
    document.getElementById("btn-in-cart").style.visibility = "visible"; // le bouton "Valide le panier" apparait
    document.querySelector("h4").style.visibility = "hidden";   // le text "votre panier est vide" disparait
  // calcul et affichage de la somme totale
    let price = parseInt(prix, 10);
      arrayShoppingCart.push(price);
      sum += price;
      document.getElementById("total").innerHTML = sum;
      document.getElementById("totalPrice").innerHTML = "Total €:";

}
// supprimer les article un par un
function emptyTrash(item_id){
  let removedItem = document.querySelector("#item_" + item_id + " > .item-text > .prod-title").innerHTML;
  let removedPrice = document.querySelector("#item_" + item_id + " > .item-text > .cart-item-price").innerHTML;
  document.getElementById("total").innerHTML -= removedPrice; // décroitre la summe total quand un article est supprimé du panier
  document.querySelector("#item_" + item_id).remove();
  alert("Voulez-vous supprimer l'article: " + removedItem + " ?");
  allRemoved(); // s'il n'y a plus d'articles dans le panier appeler la fonction allRemoved()
}
function allRemoved(){
  if(document.getElementById("total").innerHTML == "0"){ // si la somme total est égale à 0
    document.getElementById("total").style.visibility = "hidden"; // le compteur disparait
    document.querySelector("h4").style.visibility = "visible"; // afficher le text "votre panier est vide"
    document.getElementById("btn-in-cart").style.visibility = "hidden"; // cacher le bouton "Valider la commande"
    sum = 0; // remettre le compteur à 0
    document.getElementById("totalPrice").innerHTML = "";
  }
}
// la FIN de la fonction allRemoved() et de toutes les fonction appliquées au PANIER
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
