function form() {
    var name = document.forms["contactForm"]["name"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name === "") {
        alert("Please enter name.");
        return false;
    } else if (phone === "" || isNaN(phone)) {
        alert("Please enter valid phone number."); 
        return false;
    } else if (email === "") {
        alert("Please enter email address.");
        return false;
    } else if (message === "") {
        alert("Please enter address.");
        return false;
    } else {
        return true;
    }
}