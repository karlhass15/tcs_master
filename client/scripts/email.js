
$(document).ready(function(){
    $("#contactForm").submit(function(event){
        event.preventDefault();
        var values = {};

        //$.each($(this).serializeArray(), function(i, field){
        //    //do I need to change field.value????????
        //    values[field.name] = field.value;
        //});
    });

    $("#contactForm").submit(addContact);
});

function addContact() {
    event.preventDefault();
    var values = {};

    $.each($(this).serializeArray(), function (i, field) {
        values[field.name] = field.value;

    });
    //clearing the fields after submit
    $(this).find("input[type=text]").val("");
    $(this).find("textarea").val("");

    $.ajax({
        type: "POST",
        url: "/contact",
        data: values,
        success: function (data) {
            //emailSent()
            console.log('post made it');
        }
    });
    //added from angular functions used to send????????????
//    function emailSent() {
//        this.sendMail = function () {
//console.log("email fired");
//            var data = ({
//                name: this.name,
//                email: this.email,
//                message: this.message
//            });
//console.log(email);
//        }
//
//    }
}

