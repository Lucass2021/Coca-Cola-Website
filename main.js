function imageSlider(event) {
    document.querySelector(".coke").src = event;
}

function changeBackgroundColor(color) {
    const section1 = document.querySelector(".section1");
    section1.style.background = color;
}

function menuToggle() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navegation = document.querySelector(".navegation");
    toggleMenu.classList.toggle("active");
    navegation.classList.toggle("active");
}