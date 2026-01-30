document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email address.";
    isValid = false;
    }

    if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
    isValid = false;
    }

    if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("signupForm").reset(); // Reset form fields
    }
    });

let oscuro = false;

function changeText() {
    document.getElementById("message").innerHTML = "You have changed the text by clicking the button";
}
        
function cambiarFondo() {
    if (oscuro) {
        document.body.style.backgroundColor = "#e5e5e5";
    } else {
        document.body.style.backgroundColor = "#707070";
    }
    oscuro = !oscuro;
    }
    