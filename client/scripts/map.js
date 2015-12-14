var varLatLong = {};
var myLatLng = {};

$(document).ready(function(){
    getCurrentLocation();
    //initMap();
    //findStore();
});


//Function to find the store
var findStore = function(){
    console.log("The location data being sent to the db as search criteria: ", myLatLng);
    $.ajax({
        type: "GET",
        url: "/addStore",
        data: myLatLng,
        success: function(data){
            console.log("The data response from the db: ", data);
            //var latlong = data[0].latlong;
            //var latitude = parseFloat(latlong[0]);
            //var longitude = parseFloat(latlong[1]);
            //varLatLong.lat = latitude;
            //varLatLong.lng = longitude;
        }
    });
};

var testObj = {
    //_id : ObjectId("566b2e0ed64e757405c414dd"), obect id seems to break it
    name : "Big Mall",
    address : " 60 E Broadway, Bloomington, MN 55425",
    description : ";sdlkjf;alskdjf",
    website : "http://www.mallofamerica.com/",
    image : "http://www.logoorange.com/thumb-portfolio/logo_thumbnail_military-design-logo.png",
    latlong : [
        "44.8543221",
        "-93.24264970000002"
    ],
    __v : 0
};

var contentString =
    '<div class="container">' +

    '<div class="col-xs-4">' +
    '<img src="http://www.logoorange.com/thumb-portfolio/logo_thumbnail_military-design-logo.png" alt="store logo"/>'+
    '</div>' +

    '<div class="col-xs-8">' +
    '<h4>'+testObj.name+'</h4>' +
    '<h5>' + testObj.description + '</h5>'+
    '<h5>Distance</h5>' +
        //'<h5><a href=" '+var+' "></a>Website</h5>' +
    '<h5>Directions</h5>' +
    '</div>'+


    '</div>';


var getCurrentLocation = function() {
    myLatLng = {};

    //Geolocation to get the current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            myLatLng.lat = parseFloat(position.coords.latitude);
            myLatLng.lng = parseFloat(position.coords.longitude);
            console.log("The latitude location: ", myLatLng.lat);
            console.log("The longitude location: ", myLatLng.lng);
            console.log("The variable LatLng: ", myLatLng);
            findStore();
            initMap(myLatLng);
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

//Map initialization function
var initMap = function(myLocation){
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: myLocation //myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLocation,  //myLatLng
        map: map,
        title: 'Hello World!',

    });
    marker.addListener('click', function() {
        console.log("center");
    });


    var otherMarker = new google.maps.Marker({
        position: {lat: 44.8548689, lng: -93.2444035},
        map: map,
        title: 'Hi mall!',
        icon : 'http://maps.google.com/mapfiles/ms/micons/purple-dot.png',

    });
    otherMarker.addListener('click', function() {
        console.log("mall");
        infowindow.open(map, otherMarker);
    });


    var infowindow = new google.maps.InfoWindow({
        content : contentString
    });



    /////end init map
}