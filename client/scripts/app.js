$(document).ready(function() {

    $("#addStoreForm").submit(addStore);

});

    function addStore(){
        event.preventDefault();

        var storeInfo = {};

        $.each($(this).serializeArray(), function (i, field) {
            storeInfo[field.name] = field.value;
        });

        var categories = $('input:checkbox:checked.group1').map(function () {
            return this.value;
        }).get();

        storeInfo.categories = categories;

        $(".appendDom").empty();
        $(this).find("input[type=text]").val("");
        $(this).find("textarea").val("");
        $(this).find("input[type=checkbox]").removeAttr('checked');


        //POST storeInfo to Mongo
        $.ajax({
            type: "POST",
            url: "/data",
            data: storeInfo,
            success: function(data){

            }
        });

    }








