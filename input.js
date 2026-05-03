// MENU TOGGLE (mobile)
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}

// SCROLL ANIMATION
const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// PAGE LOAD EFFECT
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// 🛒 ADD TO CART SYSTEM
let count = 0;

function addToCart() {
    count++;

    // agar cart-count exist karta hai to update kare
    const cart = document.getElementById("cart-count");
    if (cart) {
        cart.innerText = count;
    }

    alert("Product added to cart 🛒\nTotal items: " + count);
}
