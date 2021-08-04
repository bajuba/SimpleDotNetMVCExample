// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// JavaScript source code

function generateCard() {

    var nameField = document.getElementById("name");
    var jobTitleField = document.getElementById("job-title");
    var businessField = document.getElementById("business");
    var addressField = document.getElementById("address");
    var emailField = document.getElementById("email");
    var phoneNumField = document.getElementById("phone-number");

    document.getElementById("name-card").innerHTML = nameField.value;
    document.getElementById("job-title-card").innerHTML = jobTitleField.value;
    document.getElementById("business-card").innerHTML = businessField.value;
    document.getElementById("address-card").innerHTML = "Address: " + addressField.value;
    document.getElementById("email-card").innerHTML = "Email: " + emailField.value;
    document.getElementById("phone-number-card").innerHTML = "Phone #: " + phoneNumField.value;

}