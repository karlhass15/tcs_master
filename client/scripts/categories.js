$(document).ready(function(){

    $('#categoriesList').on('click', '.category', function(){
        var testValue = $(this).text();
        console.log("This is the testValue: ", testValue);
        categorySearch();
    });


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