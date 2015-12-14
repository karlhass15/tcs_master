$(document).ready(function() {

    $('#navMenu').click(function() {
        $(this)
            .stop(true, false)
            .animate({
                bottom: 150
            }, 600);
    });

    //$('#navMenu').toggle(
    //    function() {
    //        $(this)
    //            .stop(true, false)
    //            .animate({
    //            bottom: 150
    //        }, 600);
    //    },
    //    function() {
    //        $(this).stop(true, false)
    //            .animate({
    //            bottom: -150
    //        }, 600);
    //
    //});




    initMap();

});

function initMap() {
    var myLatLng = {lat: 44.9778, lng: -93.2650};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
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