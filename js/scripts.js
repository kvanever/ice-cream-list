$(function() {
    var favoriteIceCream = ["chocolate", "vanilla", "strawberry"];

    var printList = function(array1) {
      array1.forEach(function(item){
        $("ul#output").append("<li>" + item + "</li>");
      });
    }
    printList(favoriteIceCream);
});
