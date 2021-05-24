// La barre de recherche

// Récupère la l'information de mon input
const search = document.getElementById("search");

// Va chercher  l'information dans la classe article et h5
const productName = document.querySelectorAll(".article h5");
// var gridItems = document.querySelectorAll('.item')

// Je demande à ma variable search d'écouter l'évenement keyup qui déclencher une action  au relachement de la touche du clavier, searchBar nom de ma fonction.
search("keyup", searchBar);
// la const text va cibler la valeur de l'imput, a chaque fois que j'appuie sur une touche de mon clavier du converti l'information en minuscule
function searchBar(e) {
    const text = e.target.value.toLowerCase();
    //ProductName va éxécuter la fonction sur chaque produit
    productName.forEach(function(product) {
        // Va récupérer le contenu du 1er enfant de chaque produit
        const item = product.firstChild.textContent;
        //Des qu'il dectecte une lettre ne correspondant pas à l'imput  les article reste telle quelle
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
            // Sinon tu me les affiches en  allant chercher les éléments parent/enfants
        }else {
            product.parentElement.parentElement.style.display = "show"
        }
    })
}

