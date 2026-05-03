function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}

const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
