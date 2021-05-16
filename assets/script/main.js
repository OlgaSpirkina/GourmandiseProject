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