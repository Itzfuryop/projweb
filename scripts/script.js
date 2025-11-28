// ============================================
// Craft Catalyst E-COMMERCE - MAIN SCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize app
    initializeApp();
});

function initializeApp() {
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1000);

    // Check if first visit for onboarding
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding && window.innerWidth <= 768) {
        showOnboarding();
    }

    // Setup event listeners
    setupEventListeners();
    
    // Update UI
    updateCartCount();
    updateWishlistCount();
    updateUserInfo();
    
    // Load products
    loadHomeProducts();
    
    // Check online status
    checkOnlineStatus();
}

// ========== EVENT LISTENERS ==========

function setupEventListeners() {
    // Menu button
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleSideMenu);
    }

    // User menu
    const userBtn = document.getElementById('userBtn');
    if (userBtn) {
        userBtn.addEventListener('click', toggleUserMenu);
    }

    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Close menus on outside click
    document.addEventListener('click', (e) => {
        const userMenu = document.getElementById('userMenu');
        const userBtn = document.getElementById('userBtn');
        const sideMenu = document.getElementById('sideMenu');
        const menuBtn = document.getElementById('menuBtn');

        if (userMenu && !userMenu.contains(e.target) && e.target !== userBtn) {
            userMenu.classList.add('hidden');
        }

        if (sideMenu && !sideMenu.contains(e.target) && e.target !== menuBtn) {
            sideMenu.classList.remove('active');
        }
    });
}

// ========== ONBOARDING ==========

let currentSlide = 0;
const totalSlides = 3;

function showOnboarding() {
    const onboarding = document.getElementById('onboardingScreen');
    if (onboarding) {
        onboarding.classList.remove('hidden');
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.onboarding-slide');
    const dots = document.querySelectorAll('.dot');
    const btn = document.querySelector('.onboarding-btn');

    currentSlide++;

    if (currentSlide >= totalSlides) {
        skipOnboarding();
        return;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    if (currentSlide === totalSlides - 1) {
        btn.textContent = 'Get Started';
    }
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.onboarding-slide');
    const dots = document.querySelectorAll('.dot');

    currentSlide = index;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function skipOnboarding() {
    const onboarding = document.getElementById('onboardingScreen');
    if (onboarding) {
        onboarding.classList.add('hidden');
    }
    localStorage.setItem('hasSeenOnboarding', 'true');
}

// ========== MENU FUNCTIONS ==========

function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu) {
        sideMenu.classList.toggle('active');
    }
}

function closeSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu) {
        sideMenu.classList.remove('active');
    }
}

function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    if (userMenu) {
        userMenu.classList.toggle('hidden');
    }
}

function updateUserInfo() {
    const user = getCurrentUser();
    const userInfo = document.getElementById('userInfo');
    const authBtn = document.getElementById('authBtn');

    if (user && userInfo) {
        userInfo.innerHTML = `<strong>${user.name}</strong><br><small>${user.email}</small>`;
    }

    if (user && authBtn) {
        authBtn.innerHTML = '🚪 Logout';
        authBtn.onclick = () => logoutUser();
    }
}

// ========== PRODUCT LOADING ==========

function loadHomeProducts() {
    const products = JSON.parse(localStorage.getItem('products'));
    
    // Load project kits
    const projectKits = products.filter(p => p.category === 'project-kits').slice(0, 4);
    displayProducts('projectKitsGrid', projectKits);
    
    // Load essentials
    const essentials = products.filter(p => p.category === 'essentials').slice(0, 4);
    displayProducts('essentialsGrid', essentials);
    
    // Load recommended (random selection)
    const recommended = products.sort(() => 0.5 - Math.random()).slice(0, 4);
    displayProducts('recommendedGrid', recommended);
}

function displayProducts(gridId, products) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = products.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const inWishlist = isInWishlist(product.id);
    const badge = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';
    
    return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            ${badge}
            <button class="wishlist-btn ${inWishlist ? 'active' : ''}" 
                    onclick="event.stopPropagation(); toggleWishlist(${product.id}); this.classList.toggle('active')">
                ❤️
            </button>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price">${formatCurrency(product.price)}</div>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ========== NAVIGATION ==========

function navigateToCategory(category) {
    window.location.href = `pages/category.html?cat=${category}`;
}

function viewProduct(productId) {
    window.location.href = `pages/product.html?id=${productId}`;
}

function exploreProducts() {
    window.location.href = 'pages/category.html?cat=all';
}

function goToCart() {
    window.location.href = 'pages/cart.html';
}

function goToWishlist() {
    window.location.href = 'pages/wishlist.html';
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        window.location.href = `pages/category.html?search=${encodeURIComponent(searchInput.value)}`;
    }
}

function handleAuth() {
    const user = getCurrentUser();
    if (user) {
        logoutUser();
    } else {
        window.location.href = 'pages/login.html';
    }
}

// ========== OFFLINE DETECTION ==========

function checkOnlineStatus() {
    window.addEventListener('online', () => {
        closeOfflinePopup();
        showNotification('You are back online!', 'success');
    });

    window.addEventListener('offline', () => {
        showOfflinePopup();
    });
}

function showOfflinePopup() {
    const popup = document.getElementById('offlinePopup');
    if (popup) {
        popup.classList.remove('hidden');
    }
}

function closeOfflinePopup() {
    const popup = document.getElementById('offlinePopup');
    if (popup) {
        popup.classList.add('hidden');
    }
}
