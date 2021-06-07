// création du tableau
const items = [
  {
    id: 'cupcakes',
    title: "Cupcake Framboise",
    text: "Délicieux cupcake à la framboise recouvert de glaçage vanille de bourbon",
    price: 3.99,
    img: "./assets/img/cupcakes/cupcake_2.jpg"
  },
  {
    id: 'donuts',
    title: "Donut arc-en-ciel",
    text: "Irrésistible donut nature fourré à la crème avec un glaçage vanille et arc-en-ciel",
    price: 2.99,
    img: "./assets/img/donuts/donut_1.jpg"
  },
  {
    id: 'macarons',
    title: "Boîte de 12 macarons",
    text: "Choisissez parmi notre sélélection 12 de nos merveilleux macarons",
    price: 20,
    img: "./assets/img/macarons/macarons_10.jpg"
  },
  {
    id: 'gateaux',
    title: "Gâteau à la fraise",
    text: "Magnifique gâteau à la fraise et glaçage vanille de bourbon",
    price: 60,
    img: "./assets/img/birthday-cake/cake_3.jpg"
  },
  {
    id: 'cupcakes',
    title: "Cupcakes nature",
    text: "Cupcake saveur vanille et glaçage vanille de bourbon",
    price: 3.99,
    img: "./assets/img/cupcakes/cupcake_3.jpg"
  },
  {
    id: 'gateaux',
    title: "Gâteau occasion spéciale",
    text: "Gâteau réalisé sur mesure. Merci de nous contacter au 06 50 99 20 18.",
    price: 80,
    img: "./assets/img/birthday-cake/cake_5.jpg"
  },
  {
    id: 'donuts',
    title: "Donuts chocolat",
    text: "Succulent donut fourré au chocolat avec glaçage chocolat",
    price: 2.99,
    img: "./assets/img/donuts/donut_3.jpg"
  },
  {
    id: 'macarons',
    title: "Macaron lavande",
    text: "Macaron moelleux à la saveur de lavande de Provence",
    price: 1.80,
    img: "./assets/img/macarons/macarons_4.jpg"
  },
  {
    id: 'cupcakes',
    title: "Cupcake chocolat",
    text: "Délicieux cupcake au chocolat enrobé de glaçage pur cacao",
    price: 3.99,
    img: "./assets/img/cupcakes/pexels-photo-818789.jpeg"
  },
  {
    id: 'macarons',
    title: "Boite de 20 macarons",
    text: "Choisissez parmi notre sélélection 20 de nos merveilleux macarons",
    price: 35,
    img: "./assets/img/macarons/boxmacarons.jpg"
  },
  {
    id: 'donuts',
    title: "Donut Caramel beurre salé",
    text: "Délectable donut au caramel d'Isigny et beurre salé avec un glaçage vanille et noisettes caramelisées",
    price: 2.99,
    img: "./assets/img/donuts/donut-5191099_640.jpg"
  },
  {
    id: 'donuts',
    title: "Donut vanille pistache",
    text: "Savoureux donut à la pistache avec son glaçage à la vanille de bourbon",
    price: 2.99,
    img: "./assets/img/donuts/donut_5.jpg"
  },
  {
    id: 'donuts',
    title: "Boîte de 6 donuts",
    text: "Choisissez parmi notre sélélection 6 de nos merveilleux donuts",
    price: 16,
    img: "./assets/img/donuts/donut_6.jpeg"
  },
  {
    id: 'cupcakes',
    title: "Cupcake arc-en-ciel",
    text: "Fantaisiste cupcake nature avec un glaçage à la fraise et décoration bonbons",
    price: 3.99,
    img: "./assets/img/cupcakes/cupcake_1.jpg"
  },
  {
    id: 'cupcakes',
    title: "Boîte de 6 cupcakes",
    text: "Choisissez parmi notre sélélection 6 de nos merveilleux cupcakes",
    price: 22,
    img: "./assets/img/cupcakes/cupcake_5.jpg"
  },
  {
    id: 'macarons',
    title: "Macaron framboise",
    text: "Exquis macaron à la framboise fourré d'une gelée à la framboise",
    price: 1.80,
    img: "./assets/img/macarons/macaron_2.jpg"
  },
  {
    id: 'macarons',
    title: "Macaron pistache café chocolat",
    text: "Délectable macaron saveur pistache café fourré au chocolat",
    price: 1.80,
    img: "./assets/img/macarons/macaron_1.jpg"
  },
  {
    id: 'gateaux',
    title: "Gâteau au chocolat",
    text: "Succulent gâteau au chocolat au lait fourré de truffes au chocolat blanc et noir",
    price: 70,
    img: "./assets/img/birthday-cake/pie-2980431_960_720.jpg"
  },
  {
    id: 'gateaux',
    title: "Gâteau marriage",
    text: "Gâteau réalisé sur mesure. Merci de nous contacter au 06 50 99 20 18.",
    price: 120,
    img: "./assets/img/birthday-cake/cake_2.jpg"
  },

  {
    id: 'gateaux',
    title: "Gâteau anniversaire",
    text: "Gâteau réalisé sur mesure. Merci de nous contacter au 06 50 99 20 18.",
    price: 90,
    img: "./assets/img/birthday-cake/birthday-3021071_960_720.jpg"
  },
];
// le tableau qui va contenir tout les prix d'article permettant de faire des calcules
let arrayShoppingCart = [];
let sum = 0;
// sum = parseFloat(sum.toFixed(2));
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
    let price = parseFloat(prix);
      arrayShoppingCart.push(price);
      sum += price;
      document.getElementById("total").innerHTML = parseFloat(sum.toFixed(2));
      document.getElementById("totalPrice").innerHTML = "Total €:";

}
function bestSellers() {
  firstEight = items.filter((item,idx) => idx < 8)
  if(firstEight){
    firstEight.forEach(function(item, i){
      document.getElementById("div-display-items").innerHTML += '<div class="row item col-md-6 col-lg-3 mb-3">' +
                    '<div class="card">' +
                      '<img class="card-img-top" src=' + item.img + ' alt="Card image cap">' +
                      '<div class="card-body">' +
                        '<h5 class="card-title">' + item.title + '</h5>' +
                        '<p class="card-text">' + item.text + '</p>' +
                        '<span>€</span>' +
                        `<span class="span-price mr-3"> ${item.price} </span><button onclick="addPriceToCart('${item.price}', '${item.title}', ${i}, '${item.img}')" type="button" class="btn btn-danger rounded-pill">Ajouter au panier</button>` +
                      '</div>' +
                    '</div>' +
                  '</div>';
                })
  }

}
window.onload = bestSellers;
// faire apparaitre et disparaitre le panier
(function(){
  const cartInfo = document.querySelector(".fa-shopping-cart");
  const cart = document.getElementById("cart");
  cartInfo.addEventListener("click", function(){
    cart.classList.toggle('show-cart'); // la div invisible avec width=0 prend la largeur est devien visible
  })
})();
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
var input, filter;
input = document.getElementById("mySearch");
input.addEventListener('input', function () {
  let  filter = input.value.toLowerCase();
  document.getElementById("div-display-items").innerHTML = "";
  items.forEach(function(item, i){
     if(item.id.charAt(0) == filter.charAt(0)){
      // document.getElementById("parent").style.display = "none";
      document.getElementById("see-more").style.display = "none";
      document.getElementById("div-display-items").innerHTML += '<div class="row item show col-md-6 col-lg-3 mb-3">' +
                         '<div class="card">' +
                           '<img class="card-img-top" src=' + item.img + ' alt="Card image cap">' +
                           '<div class="card-body">' +
                             '<h5 class="card-title">' + item.title + '</h5>' +
                             '<p class="card-text">' + item.text + '</p>' +
                             '<span>€</span>' +
                             `<span class="span-price mr-3"> ${item.price} </span><button onclick="addPriceToCart('${item.price}', '${item.title}', ${i}, '${item.img}')" type="button" class="btn btn-danger rounded-pill">Ajouter au panier</button>` +
                           '</div>' +
                         '</div>' +
                       '</div>';
    }
    else if(filter == ""){
      // document.getElementById("parent").style.display = "block";
      document.getElementById("see-more").style.display = "block";
    }
  })
});

  function showCategory(category){
  document.getElementById("div-display-items").innerHTML = "";
  items.forEach(function(item, i){
    if(item.id == category){
      document.getElementById("div-display-items").innerHTML += '<div class="row item col-md-6 col-lg-3 mb-3">' +
                      '<div class="card">' +
                        '<img class="card-img-top" src=' + item.img + ' alt="Card image cap">' +
                        '<div class="card-body">' +
                          '<h5 class="card-title">' + item.title + '</h5>' +
                          '<p class="card-text">' + item.text + '</p>' +
                          '<span>€</span>' +
                          `<span class="span-price mr-3"> ${item.price} </span><button onclick="addPriceToCart('${item.price}', '${item.title}', ${i}, '${item.img}')" type="button" class="btn btn-danger rounded-pill">Ajouter au panier</button>` +
                        '</div>' +
                      '</div>' +
                    '</div>';
    }else if(category == 'all'){
      document.getElementById("div-display-items").innerHTML += '<div class="row item col-md-6 col-lg-3 mb-3">' +
                      '<div class="card">' +
                        '<img class="card-img-top" src=' + item.img + ' alt="Card image cap">' +
                        '<div class="card-body">' +
                          '<h5 class="card-title">' + item.title + '</h5>' +
                          '<p class="card-text">' + item.text + '</p>' +
                          '<span>€</span>' +
                          `<span class="span-price mr-3"> ${item.price} </span><button onclick="addPriceToCart('${item.price}', '${item.title}', ${i}, '${item.img}')" type="button" class="btn btn-danger rounded-pill">Ajouter au panier</button>` +
                        '</div>' +
                      '</div>' +
                    '</div>';
    }
  })
}
// la function bouton "Voir Plus ..." / "Voir Moins"
let seeMore = document.getElementById("see-more");
seeMore.addEventListener('click', function () {
  $(this).html() == "Voir Plus ..." ? $(this).html("Voir Moins") : $(this).html("Voir Plus ...");
  firstEight = items.filter((item,idx) => idx < 8)
  allItems = items.filter((item,idx) => idx < 20)
  if(firstEight){
    document.getElementById("div-display-items").innerHTML = "";
    allItems.forEach(function(item, i){
      document.getElementById("div-display-items").innerHTML += '<div class="row item col-md-6 col-lg-3 mb-3">' +
                    '<div class="card">' +
                      '<img class="card-img-top" src=' + item.img + ' alt="Card image cap">' +
                      '<div class="card-body">' +
                        '<h5 class="card-title">' + item.title + '</h5>' +
                        '<p class="card-text">' + item.text + '</p>' +
                        '<span>€</span>' +
                        `<span class="span-price mr-3"> ${item.price} </span><button onclick="addPriceToCart('${item.price}', '${item.title}', ${i}, '${item.img}')" type="button" class="btn btn-danger rounded-pill">Ajouter au panier</button>` +
                      '</div>' +
                    '</div>' +
                  '</div>';
                })
  }else{
    document.getElementById("div-display-items").innerHTML = "";
    bestSellers();
  }
  })
