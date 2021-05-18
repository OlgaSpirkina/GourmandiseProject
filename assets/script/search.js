// La barre de recherche
const search = document.getElementById("search");
const productName = document.querySelectorAll(".article h5");
var gridItems = document.querySelectorAll('.item')

search.addEventListener("keyup", searchBar);
function searchBar(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        }else {
            product.parentElement.parentElement.style.display = "show"
        }
    })
}
   
element.classList.remove('show')