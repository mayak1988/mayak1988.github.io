


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ToggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
