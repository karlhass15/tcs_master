var varLatLong = {};
var myLatLng = {};

$(document).ready(function(){
    getCurrentLocation();
    findStore();
});


var getCurrentLocation = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            myLatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

//Function to find the store
var findStore = function(){
    $.ajax({
        type: "GET",
        url: "/addStore",
        data: myLatLng,
        success: function(data){
            var latlong = data[0].latlong;
            var latitude = parseFloat(latlong[0]);
            var longitude = parseFloat(latlong[1]);
            varLatLong.lat = latitude;
            varLatLong.lng = longitude;
            initMap();
        }
    });
};

var initMap = function () {
    var myLatLng = {lat: 44.9778, lng: -93.2650};
    //var varLatLong = {};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'

    });
    marker.addListener('click', function() {
        console.log("center");
    });

    //{lat: 44.8548689, lng: -93.2444035}
    var otherMarker = new google.maps.Marker({
        position: varLatLong,
        map: map,
        title: 'Hi mall!',
        icon : 'http://maps.google.com/mapfiles/ms/micons/purple-dot.png'

    });
    otherMarker.addListener('click', function() {
        console.log("mall");
        infowindow.open(map, otherMarker);
    });

//    var contentString = '<p>working</p>';

    var contentString =
        '<div class="container">' +

        '<div class="col-xs-4">' +
        '<img src="http://www.logoorange.com/thumb-portfolio/logo_thumbnail_military-design-logo.png" alt="store logo"/>'+
        '</div>' +

        '<div class="col-xs-8">' +
        '<h4>Store Name</h4>' +
        '<h5>Description</h5>'+
        '<h5>Distance</h5>' +
        '<h5>Website</h5>' +
        '<h5>Directions</h5>' +
        '</div>'+


        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content : contentString
    });




    /////end init map
}

