$(document).ready(function() {

        //$('#storeAdminSearch').on('return', 'search', findStore);

        //updateDOM(data);

        $("#storeContainer").on('click', '.delete', deleteStore);

             getStores();
                updateDOM();

});
        function getStores() {

            $.ajax({
                type: "GET",
                url: "/getstores",
                success: function (data) {
                    updateDOM(data)
                }
            });
        }

        function updateDOM(data) {
            $('#storeContainer').empty();

            for (var i = 0; i < data.length; i++) {
                var el = "<div class='well col-md-3'>" +
                    "<p>" + data[i].name + "</p>" +
                    "<button class='btn btn-danger delete' data-id='" + data[i]._id + "'>Delete</button>" +
                    "<button class='btn btn-primary edit'>Edit</button>" +
                    "</div>";
                $("#storeContainer").append(el);
            }
        }
        // So _id and id is weird    data-id in UPDATE DOM.  Need "id" in deleteStore,
        // but data[i]._id in UpdateDom
        function deleteStore() {
            var deletedId = {"id": $(this).data("id")};

            console.log(deletedId);

            $.ajax({
                type: "DELETE",
                url: "/deletestores",
                data: deletedId,
                success: function (data) {
                    clearPage();
                }
            });
        }

    function clearPage() {
        $.ajax({
            type: 'GET',
            url: '/getstores',
            success: function (data) {
                updateDOM(data);
            }

        })
    }

    //
    //function findStore(data) {
    //    $('#storeAdminSearch').keypress(function (e) {
    //        if (e.which == 13) {
    //            var el = "<div class='well col-md-3'>" +
    //                "<p>" + data[i].name + "</p>" +
    //                "<button class='btn btn-danger delete' data-id='" + data[i].id + "'>Delete</button>" +
    //                "button class='btn btn-primary edit' data-id='" + data[i].id + "'>Edit</button>" +
    //                "</div>";
    //            $('storeContainer').append(el);
    //        }
    //    });
    //}                                                                                                          ////Function to find the store -- called within getCurrentLocation
//var findStore = function(){
//    console.log("The location data being sent to the db as search criteria: ", myLatLng);
//    $.ajax({
//        type: "GET",
//        url: "/addStore",
//        data: myLatLng,
//        success: function(data){
//            console.log("The data response from the db: ", data);
//            storesFound = data;
//            console.log("The storesFound: ", storesFound);
//            initMap(myLatLng, storesFound);
//            return storesFound;
//        }
//    });
//};

//search store database
//function findStore() {
//    event.preventDefault();
//    var stores = {};
//
//    $.each($(this).serializeArray(), function (i, field) {
//        stores[field.name] = field.value;
//    });
//
////clears the search input after enter
//    $('#storeSearchAdd').find("input[type=text]").val("");
//
//    $.ajax({
//        type: "GET",
//        url: "/data",
//        data: stores,
//        success: function (data) {
//            getStores();
//        }
//    });
//}