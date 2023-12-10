// signup.js

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add form validation logic here
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;

        // Example: Basic validation for non-empty fields
        if (!username || !email || !password || !dob) {
            alert('All fields are required');
            return;
        }


        console.log('Form data submitted:', { username, email, password, dob });

        // You can redirect the user to another page after successful submission
        window.location.href = 'success.html';
    });
});
