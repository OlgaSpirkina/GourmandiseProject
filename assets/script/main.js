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
                            '<p class="font-weight-bold mb-0 cart-item-title">' + prod + '</p>' +
                            '<img src=' + img + ' style="width: 30%; margin: .2rem">' +
                            '<span>$</span>' +
                            '<span class="cart-item-price" class="mb-0">' + prix + '</span>' +
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
}
// supprimer les article un par un
function emptyTrash(item_id){
  let removedPrice = document.querySelector("#item_" + item_id + " > .item-text > .cart-item-price").innerHTML;
  document.getElementById("total").innerHTML -= removedPrice; // décroitre la summe total quand un article est supprimé du panier
  document.querySelector("#item_" + item_id).remove();
  allRemoved(); // s'il n'y a plus d'articles dans le panier appeler la fonction allRemoved()
}
function allRemoved(){
  if(document.getElementById("total").innerHTML == "0"){ // si la somme total est égale à 0
    document.getElementById("total").style.visibility = "hidden"; // le compteur disparait
    document.querySelector("h4").style.visibility = "visible"; // afficher le text "votre panier est vide"
    document.getElementById("btn-in-cart").style.visibility = "hidden"; // cacher le bouton "Valider la commande"
    sum = 0; // remettre le compteur à 0
  }
}
