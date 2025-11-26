// This file contains the client-side JavaScript code that manages the shopping cart functionality, including adding and removing items from the cart.

const cart = [];

// Load cart items from local storage
function loadCart() {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        parsedCart.forEach(item => cart.push(item));
    }
    displayCart();
}

// Save cart items to local storage
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function addItem() {
    const nameInput = document.getElementById('itemName');
    const quantityInput = document.getElementById('itemQuantity');
    
    const name = nameInput.value.trim();
    const quantity = parseFloat(quantityInput.value);

    if (!name) {
        alert('Selecione um nome válido para o item');
        return;
    }

    if (!quantity || quantity <= 0) {
        alert('Por favor, insira uma quantidade válida');
        return;
    }

    const item = {
        name: name,
        quantity: quantity
    };

    cart.push(item);
    
    // Clear inputs
    nameInput.value = '';
    quantityInput.value = '';
    
    // Save to local storage
    saveCart();
    
    // Refresh display
    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}

function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const itemCountDiv = document.getElementById('itemCount');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart">O carrinho está vazio</div>';
        itemCountDiv.textContent = '0';
        return;
    }

    cartItemsDiv.innerHTML = '';
    
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-quantity">Quantity: ${item.quantity}</div>
            </div>
            <button class="btn btn-danger" onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    itemCountDiv.textContent = cart.length;
}

// Allow Enter key to add items
document.getElementById('itemQuantity').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addItem();
    }
});

// Load cart on page load
loadCart();