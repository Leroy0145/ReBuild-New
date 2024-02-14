document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.getElementById("burger-icon");
    const menuItems = document.querySelector(".menu-items ul");

    burgerIcon.addEventListener("click", toggleMenu);

    function toggleMenu() {
        console.log("Hamburger icon clicked");
        menuItems.classList.toggle("show");
    }
});