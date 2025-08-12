


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ToggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener('load', () => {
  const navHeight = document.getElementById('desktop-nav').offsetHeight;
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      // Wait a tiny bit to let browser do default jump
      setTimeout(() => {
        const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementTop - navHeight,
          behavior: 'smooth'
        });
      }, 10);
    }
  }
});
