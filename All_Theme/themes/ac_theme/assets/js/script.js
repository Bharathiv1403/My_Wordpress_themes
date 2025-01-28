document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item.has-children");

    menuItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const submenu = this.querySelector(".sub-menu");
            if (submenu) {
                submenu.classList.toggle("active");
            }
        });
    });
});
