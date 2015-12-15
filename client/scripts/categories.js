$(document).ready(function(){

    console.log("Testing the categories page");

    categorySearch();

});

var categorySearch = function(){
    console.log("Category Search!");
    $.ajax({
        method: "GET",
        url: "/categorysearch",
        success: function(data){
            console.log("Response received");
        }
    })
}