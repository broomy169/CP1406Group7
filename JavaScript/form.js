function form() {
    var name = document.forms["contactForm"]["name"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var email = document.forms["contactForm"]["email"].value;
    var address = document.forms["contactForm"]["address"].value;

    if (name === "") {
        alert("Please enter name.");
        return false;
    } else if (phone === "" || isNaN(phone)) {
        alert("Please enter valid phone number."); 
        return false;
    } else if (email === "") {
        alert("Please enter email address.");
        return false;
    } else if (address === "") {
        alert("Please enter address.");
        return false;
    } else {
        alert("Form sent. Thank you!");
        return true; 
    }
}