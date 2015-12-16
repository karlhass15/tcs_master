var myLatLng = {};
var storesFound = [];
var storeContent = [];


$(document).ready(function(){


    getCurrentLocation();


});


//Function to find the store -- called within getCurrentLocation
var findStore = function(){
    console.log("The location data being sent to the db as search criteria: ", myLatLng);
    $.ajax({
        type: "GET",
        url: "/addStore",
        data: myLatLng,
        success: function(data){
            console.log("The data response from the db: ", data);
            storesFound = data;
            //console.log("The storesFound: ", storesFound);
            appDom(storesFound);
            return storesFound;
        }
    });
};

//Geolocation function to get current location
var getCurrentLocation = function() {
    myLatLng = {};

    //Geolocation to get the current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            myLatLng.lat = parseFloat(position.coords.latitude);
            myLatLng.lng = parseFloat(position.coords.longitude);
            console.log("The variable LatLng: ", myLatLng);
            findStore();
        });
    } else {
        //Geolocation isn't supported by the browser
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }
}





var setContentstring = function(store){
    contentString =
        '<div class="container">' +
        '<div class="col-xs-12">' +
            //'<img src="http://www.logoorange.com/thumb-portfolio/logo_thumbnail_military-design-logo.png" alt="store logo"/>'+
            //    '<img src='+store.image+'>' + ///this line grabs url input from form correctly
        '</div>' +
        '<div class="col-xs-12">' +
        '<h4>'+store.name+'</h4>' +
        '<h5>' + store.description + '</h5>'+
        '<h5>Distance</h5>' +
            //'<h5><a href=" '+var+' "></a>Website</h5>' + NEED TO SET UP DIRECTIONAL DATA
        '<h5>Directions</h5>' +
        '</div>'+
        '</div>';
    return contentString;
};

function appDom(array) {




    for (var i = 0; i < array.length -1; i++) {

        var miles = (array[i].distance * 3963.2).toFixed(1);
        var query = "http://maps.google.com/?q=";
        var address = array[i].address;
        var mapsLink = query + address;

        $('#storeList').append( '<div class="container">' +
            '<div class="col-xs-4">' +
                '<img src="http://www.logoorange.com/thumb-portfolio/logo_thumbnail_military-design-logo.png" alt="store logo"/>'+
            '</div>' +
            '<div class="col-xs-8">' +
            '<h4><strong></strong>'+ array[i].name +' </strong>' + miles+ ' miles</h4>' +
            '<h4><a href=" '+ mapsLink+ ' ">Directions</h4>' +
            '</div>'+
            '</div>');
    }


}