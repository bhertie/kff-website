// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// WhatsApp Order Function
function orderProduct(productName) {

    const phoneNumber = "2348063786859";

    const message =
        `Hello KFF, I would like to order ${productName}.`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}