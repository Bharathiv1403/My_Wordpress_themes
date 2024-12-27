// Sample JavaScript functionality
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working!");

    // Example: Toggle a class on the menu-bar
    const menuBar = document.querySelector('.menu-bar img');
    menuBar.addEventListener('click', () => {
        alert("Menu bar clicked!");
    });
});
