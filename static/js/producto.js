let cart = [];

function addToCart(button) {
    const product = button.parentElement;
    const productId = product.getAttribute('data-id');
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price} x ${item.quantity} <button onclick="removeFromCart('${item.id}')">Eliminar</button>`;
    }
    )
}

