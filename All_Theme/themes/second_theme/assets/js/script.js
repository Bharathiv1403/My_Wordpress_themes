const menuBar = document.querySelector('.menu-bar');
const menuItems = document.getElementById('menuItems');

menuBar.addEventListener('mouseover', () => {
    menuItems.classList.remove('hidden');
    menuItems.classList.add('visible');
});

menuBar.addEventListener('mouseout', () => {
    menuItems.classList.remove('visible');
    menuItems.classList.add('hidden');
});

menuItems.addEventListener('mouseover', () => {
    menuItems.classList.remove('hidden');
    menuItems.classList.add('visible');
});

menuItems.addEventListener('mouseout', () => {
    menuItems.classList.remove('visible');
    menuItems.classList.add('hidden');
});



function handleSearch(event) {
    event.preventDefault(); // Prevent form submission
    const searchInput = document.getElementById('searchInput').value.trim();
    const searchResults = document.getElementById('searchResults');

    if (!searchInput) {
        searchResults.innerHTML = "NOT FOUND";
        searchResults.classList.remove('hidden');
        return;
    }

    // You can add dynamic logic here for searching content or items.
    const mockResults = ["Home", "About", "Application", "Contact", "Settings"]; // Example data
    const result = mockResults.find(item => item.toLowerCase().includes(searchInput.toLowerCase()));

    if (result) {
        searchResults.innerHTML = `Search result: ${result}`;
    } else {
        searchResults.innerHTML = "NOT FOUND";
    }
    searchResults.classList.remove('hidden');
}

// Predefined list of applications
const applications = [
    "Saga Dash", "Saga Mail", "Saga Drive", "Saga CRM", "Saga HR",
    "Saga Dashboard", "Saga Gameplan", "Saga HelpDesk", "Saga Calendar",
    "Saga Meet", "Saga Chat", "Saga ERP"
];

document.getElementById("searchButton").addEventListener("click", function() {
    var searchInput = document.getElementById("searchInput").value.trim(); // Remove any extra spaces at the beginning and end

    // Check if the input is empty
    if (searchInput === "") {
        alert("Please enter an application name.");
        return;
    }

    // Check if the input matches any of the predefined applications
    var foundApplication = applications.some(function(app) {
        return app.toLowerCase() === searchInput.toLowerCase(); // Case-insensitive comparison
    });

    // Show error if no application found
    if (!foundApplication) {
        document.getElementById("searchResults").classList.add("hidden");
        document.getElementById("errorMessage").classList.remove("hidden");

        // Hide the error message after 5 seconds
        setTimeout(function() {
            document.getElementById("errorMessage").classList.add("hidden");
        }, 5000); // 5000 milliseconds = 5 seconds
    } else {
        // Hide error message and show search results
        document.getElementById("errorMessage").classList.add("hidden");
        document.getElementById("searchResults").classList.remove("hidden");
        document.getElementById("searchResults").innerHTML = "<p>Sent application</p>"; // Only show "Sent application" message
    }
});



document.querySelectorAll('.menu-items a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

