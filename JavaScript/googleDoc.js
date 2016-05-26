jQuery( document ).ready(function( $ ) {
    // variable to hold request
    var request;
    // bind to the submit event of our form

    $("#contactForm").submit(function(event){

        if (form()) {
            
            if (request) {
                request.abort();
            }
            var $form = $(this);
            var $inputs = $form.find("input, select, button, textarea");
            var serializedData = $form.serialize();

            $inputs.prop("disabled", true);
            $('#result').text('Sending data...');

            request = $.ajax({
                url: "https://script.google.com/macros/s/AKfycbxPX9EWXAdEICifs59iNO7o_yfwCrxbJ_U1c6UipY6KEf_iI6s/exec",
                type: "post",
                data: serializedData
            });

            request.done(function (response, textStatus, jqXHR){
                location.reload();
                console.log(response, textStatus, jqXHR);
                    $('#result').html('<a href="https://docs.google.com/spreadsheets/d/14C3zwfnJteuBO20p-Gub4WkoqMcaBFRDP5o7jQLwFzQ/edit#gid=0" target="_blank">Success - see Google Sheet</a>');
                    console.log("Hooray, it worked!");
                  });

            request.fail(function (jqXHR, textStatus, errorThrown){
                console.error(
                    "The following error occured: "+
                    textStatus, errorThrown
                );
            });

            request.always(function () {
                $inputs.prop("disabled", false);
            });
            event.preventDefault();
            alert("Contact form sent!");
        } else {
            return false;
        }
    });

});
