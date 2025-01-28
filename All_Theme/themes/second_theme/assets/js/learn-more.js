document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    learnMoreBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action (if any)

        // Check if the JavaScript is working and the event is fired
        console.log("Learn More button clicked!");

        // Perform the redirection to the application.php page
        window.location.href = 'application.php'; // Redirect to application.php
    });
});
