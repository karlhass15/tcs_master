$(document).ready(function() {

    $("#addStoreForm").submit(addStore);

});

    function addStore(){
        event.preventDefault();

        var storeInfo = {};
        var categories = [];
        var geocoder = new google.maps.Geocoder();

        $.each($(this).serializeArray(), function (i, field) {
            storeInfo[field.name] = field.value;
        });

        //Taking the checklist and building it into an array
        var objectBuilder = $('input:checkbox:checked.group1').map(function () {
            return this.value;
        }).get();

        //Taking the array and converting it into an array of objects. This will facilitate database searching
        for (var i=0; i<objectBuilder.length; i++){
            categories.push({'category': objectBuilder[i]});
        }


        storeInfo.categories = categories;

        //Geocode the address
        geocoder.geocode({'address': storeInfo.address}, function(results, status){
            if (status == google.maps.GeocoderStatus.OK){
                var latitude=results[0].geometry.location.lat();
                var longitude=results[0].geometry.location.lng();
                var latlong = [];
                latlong.push(latitude);
                latlong.push(longitude);
                storeInfo.latlong = latlong;
                postStore();
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });

        $(".appendDom").empty();
        $(this).find("input[type=text]").val("");
        $(this).find("textarea").val("");
        $(this).find("input[type=checkbox]").removeAttr('checked');



        //POST storeInfo to Mongo
        var postStore = function(){
            $.ajax({
                type: "POST",
                url: "/addStore",
                data: storeInfo,
                success: function(data){

                }
            });
        }

    }








