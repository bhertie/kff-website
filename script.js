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
const WHATSAPP_NUM = "2348063786859"; // Nigeria code + your 08063786859

// For "Order Now" buttons on each product
function orderProduct(productName) {
  let message = `Hi KFF! I want to order: ${productName}%0A%0APlease send me price + sizes available.`;
  let url = `https://wa.me/${WHATSAPP_NUM}?text=${message}`;
  window.open(url, '_blank');
}

// For the main order form "Send Order" button
function sendFormOrder(e) {
  e.preventDefault(); // stops page from reloading
  
  let name = document.getElementById('custName').value;
  let phone = document.getElementById('custPhone').value;
  let order = document.getElementById('custOrder').value;
  
  let message = `New Order!%0A%0AName: ${name}%0APhone: ${phone}%0AOrder: ${order}`;
  let url = `https://wa.me/${WHATSAPP_NUM}?text=${message}`;
  
  window.open(url, '_blank');
  
  // Clear form after opening WhatsApp
  e.target.reset();
}