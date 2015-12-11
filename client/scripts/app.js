$(document).ready(function() {

    $("#addStoreForm").submit(addStore);


    //CategoriesTab and informationTab can be combined if we want the same naming convention for both (Tab instead of categoriesTab, etc.
    $('#categoriesTab a').click(function (e) {
        if($(this).parent('li').hasClass('active')){
            $( $(this).attr('href') ).hide();
        }
        else {
            e.preventDefault();
            $(this).tab('show');
        }
    });

    $('#informationTab a').click(function (e) {
        if($(this).parent('li').hasClass('active')){
            $( $(this).attr('href') ).hide();
        }
        else {
            e.preventDefault();
            $(this).tab('show');
        }
    });

    //$('#goods').tab('show'); // Select tab by name
    //$('#ethicalStandard').tab('show'); // Select tab by name


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
            url: "/addStore",
            data: storeInfo,
            success: function(data){

            }
        });

    }








