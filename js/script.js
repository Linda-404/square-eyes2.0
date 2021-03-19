const hamburgerMenu = document.querySelector(".hamburgermenu");
const hamburgerNav = document.querySelector(".hamburgernav");

function accessDropdown() {
    function hamburger() {
        hamburgerNav.classList.toggle("show");
    }
}

hamburgerMenu.onclick = accessDropdown();