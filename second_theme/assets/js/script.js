function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    if (menuItems.classList.contains('hidden')) {
        menuItems.classList.remove('hidden');
        menuItems.classList.add('visible');
    } else {
        menuItems.classList.remove('visible');
        menuItems.classList.add('hidden');
    }
}
