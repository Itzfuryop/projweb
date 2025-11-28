// ============================================
// Craft Catalyst E-COMMERCE - UTILITY FUNCTIONS
// ============================================

// ========== LOCAL STORAGE HELPERS ==========

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function getWishlistItems() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function saveCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

function saveOrders(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function getOrderById(orderId) {
    const orders = getOrders();
    return orders.find(order => order.id === orderId);
}

// ========== CART OPERATIONS ==========

function addToCart(productId) {
    const products = JSON.parse(localStorage.getItem('products'));
    const product = products.find(p => p.id === productId);
    
    if (!product) return;

    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart(cart);
    showNotification('Added to cart!', 'success');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function updateCartQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart(cart);
        }
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// ========== WISHLIST OPERATIONS ==========

function toggleWishlist(productId) {
    let wishlist = getWishlistItems();
    const index = wishlist.indexOf(productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist!', 'success');
    }

    saveWishlist(wishlist);
}

function isInWishlist(productId) {
    const wishlist = getWishlistItems();
    return wishlist.includes(productId);
}

// ========== UI UPDATE FUNCTIONS ==========

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    const badges = document.querySelectorAll('#cartCount, #bottomCartCount');
    badges.forEach(badge => {
        if (badge) badge.textContent = count;
    });
}

function updateWishlistCount() {
    const wishlist = getWishlistItems();
    const badge = document.getElementById('wishlistCount');
    if (badge) badge.textContent = wishlist.length;
}

// ========== FORMATTING HELPERS ==========

function formatCurrency(amount) {
    return '₹' + amount.toFixed(2);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// ========== NOTIFICATION SYSTEM ==========

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    if (!notification || !notificationText) return;

    notificationText.textContent = message;
    notification.classList.remove('hidden');
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 300);
    }, 3000);
}

// ========== AUTH FUNCTIONS ==========

function loginUser(email, password) {
    // Simple mock authentication
    const user = {
        name: email.split('@')[0],
        email: email,
        phone: '+91 98765 43210',
        createdAt: new Date().toISOString()
    };
    
    saveCurrentUser(user);
    showNotification('Login successful!', 'success');
    return true;
}

function logoutUser() {
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully', 'info');
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1000);
}

function signupUser(name, email, password, phone) {
    const user = {
        name: name,
        email: email,
        phone: phone,
        createdAt: new Date().toISOString()
    };
    
    saveCurrentUser(user);
    showNotification('Account created successfully!', 'success');
    return true;
}

// ========== ORDER FUNCTIONS ==========

function createOrder(orderData) {
    const orders = getOrders();
    const orderId = 'ORD' + Date.now();
    
    const order = {
        id: orderId,
        ...orderData,
        date: new Date().toISOString(),
        status: 'Processing'
    };
    
    orders.push(order);
    saveOrders(orders);
    
    return orderId;
}
