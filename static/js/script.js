



let slideIndex = 0;
let cart = [];

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(() => {
        moveSlide(1);
    }, 5000);
});

function addToCart(button) {
    const product = button.parentElement;
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));

    const cartItem = cart.find(item => item.name === name);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Tu carrito está vacío</p>';
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <span>${item.name}</span>
                <span>${item.price.toFixed(2)} €</span>
                <span>${item.quantity}</span>
                <button onclick="removeFromCart('${item.name}')">Eliminar</button>
            `;
            cartItems.appendChild(itemDiv);
        });
    }
}

function removeFromCart(name) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        updateCart();
    }
}

function checkout() {
    alert('Gracias por tu compra!');
    cart = [];
    updateCart();
}