// home.js

document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    // Get the "Sign Up" button element
    const signUpButton = document.querySelector('.cta-button');

    // Add a click event listener to the "Sign Up" button
    signUpButton.addEventListener('click', function () {
        // Redirect to the sign-up page (you can replace 'signup.html' with the actual URL)
        window.location.href = 'signup.html';
    });

    // You can add more JavaScript functionality related to the home page here as needed
});
