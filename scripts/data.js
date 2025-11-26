// ============================================
// QUICKSUPPLY E-COMMERCE - DATA MANAGEMENT
// ============================================

// Initialize products data
const productsData = [
    // Project Kits
    {
        id: 1,
        name: "Arduino Starter Kit",
        description: "Complete Arduino kit with board, sensors, and components",
        price: 1299,
        category: "project-kits",
        image: "🔧",
        badge: "Popular"
    },
    {
        id: 2,
        name: "Raspberry Pi 4 Kit",
        description: "Raspberry Pi 4 with accessories and power supply",
        price: 4499,
        category: "project-kits",
        image: "🖥️",
        badge: "Hot"
    },
    {
        id: 3,
        name: "IoT Smart Home Kit",
        description: "Build your own smart home automation system",
        price: 2499,
        category: "project-kits",
        image: "🏠"
    },
    {
        id: 4,
        name: "Robotics Starter Kit",
        description: "Everything needed to build your first robot",
        price: 3299,
        category: "project-kits",
        image: "🤖",
        badge: "New"
    },

    // Project Items
    {
        id: 5,
        name: "Breadboard Set",
        description: "Pack of 3 breadboards with jumper wires",
        price: 199,
        category: "project-items",
        image: "📋"
    },
    {
        id: 6,
        name: "LED Assortment Pack",
        description: "100 LEDs in various colors",
        price: 149,
        category: "project-items",
        image: "💡"
    },
    {
        id: 7,
        name: "Resistor Kit",
        description: "500+ resistors in common values",
        price: 249,
        category: "project-items",
        image: "⚡"
    },
    {
        id: 8,
        name: "Sensor Module Set",
        description: "10 different sensor modules for projects",
        price: 599,
        category: "project-items",
        image: "📡"
    },

    // Printouts
    {
        id: 9,
        name: "Black & White Prints",
        description: "High quality B&W printing per page",
        price: 2,
        category: "prints",
        image: "🖨️"
    },
    {
        id: 10,
        name: "Color Prints",
        description: "Premium color printing per page",
        price: 5,
        category: "prints",
        image: "🎨"
    },
    {
        id: 11,
        name: "Project Report Binding",
        description: "Professional spiral binding service",
        price: 50,
        category: "prints",
        image: "📚",
        badge: "Popular"
    },

    // Emergency Essentials
    {
        id: 12,
        name: "Emergency Stationery Kit",
        description: "Pen, pencil, eraser, ruler combo",
        price: 99,
        category: "essentials",
        image: "✏️",
        badge: "Fast"
    },
    {
        id: 13,
        name: "Calculator Scientific",
        description: "Casio FX-991EX scientific calculator",
        price: 899,
        category: "essentials",
        image: "🔢"
    },
    {
        id: 14,
        name: "USB Flash Drive 32GB",
        description: "High-speed USB 3.0 flash drive",
        price: 399,
        category: "essentials",
        image: "💾"
    },
    {
        id: 15,
        name: "Emergency Charger",
        description: "Universal phone charger with cable",
        price: 299,
        category: "essentials",
        image: "🔌",
        badge: "Hot"
    },

    // Study Supplies
    {
        id: 16,
        name: "Notebook Pack (5)",
        description: "Set of 5 ruled notebooks",
        price: 199,
        category: "study",
        image: "📓"
    },
    {
        id: 17,
        name: "Pen Set Premium",
        description: "Pack of 10 ballpoint pens",
        price: 149,
        category: "study",
        image: "🖊️"
    },
    {
        id: 18,
        name: "Highlighter Set",
        description: "6 fluorescent highlighter markers",
        price: 99,
        category: "study",
        image: "🖍️"
    },
    {
        id: 19,
        name: "Sticky Notes Pack",
        description: "Colorful sticky notes - 6 pads",
        price: 79,
        category: "study",
        image: "📝"
    },
    {
        id: 20,
        name: "Graph Paper Book",
        description: "100 sheets graph paper notebook",
        price: 89,
        category: "study",
        image: "📐"
    }
];

// Store products in localStorage on first load
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(productsData));
}

// Configuration
const config = {
    deliveryCharge: 30,
    freeDeliveryThreshold: 500,
    taxRate: 0.18, // 18% GST
    promoCodes: {
        'FIRST50': { discount: 50, type: 'fixed' },
        'SAVE10': { discount: 10, type: 'percent' },
        'STUDENT20': { discount: 20, type: 'percent' }
    }
};
