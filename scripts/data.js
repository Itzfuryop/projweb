// ============================================
// Craft Catalyst E-COMMERCE - DATA MANAGEMENT
// ============================================

const productsData = [

    // kits
    
    {
        id: 1,
        name: "Drone Starter Kit",
        description: "Beginner drone-building kit with motors & controller",
        price: 3999,
        category: "project-kits",
        image: "images/dronekit.jpeg",
        badge: "Trending"
    },
    {
        id: 2,
        name: "Solar Energy Kit",
        description: "Build working solar-powered projects",
        price: 499,
        category: "project-kits",
        image: "images/solar-energy-kit.jpeg"
    },
    {
        id: 3,
        name: "Hydraulic Lift Kit",
        description: "DIY hydraulic lift model using syringes & pipes",
        price: 399,
        category: "project-kits",
        image: "images/hydraulic-kit.jpeg"
    },
    {
        id: 4,
        name: "Bridge Model Kit",
        description: "Craft stick kit to build strong model bridges",
        price: 199,
        category: "project-kits",
        image: "images/bridge-kit.jpeg"
    },


    // PROJECT ITEMS 

    {
        id: 12,
        name: "LED Assortment Pack",
        description: "100 LEDs in various colors",
        price: 149,
        category: "project-items",
        image: "💡"
    },
    {
        id: 13,
        name: "Resistor Kit",
        description: "300+ resistors in 30 different values",
        price: 599,
        category: "project-items",
        image: "⚡"
    },
    {
        id: 14,
        name: "Sensor Module Set",
        description: "10 different sensor modules for projects",
        price: 599,
        category: "project-items",
        image: "📡"
    },
    {
        id: 15,
        name: "Mini Motor Pack",
        description: "Pack of 5 high-speed DC motors",
        price: 149,
        category: "project-items",
        image: "⚙️"
    },
    {
        id: 16,
        name: "Jumper Wire Pack",
        description: "40pcs male-to-male and female jump wires",
        price: 79,
        category: "project-items",
        image: "🔌"
    },
    {
        id: 17,
        name: "Glue Gun + Sticks",
        description: "Hot glue gun with 5 glue sticks",
        price: 249,
        category: "project-items",
        image: "🔥",
        badge: "Popular"
    },
    {
        id: 18,
        name: "Cardboard Sheets Pack",
        description: "Set of 10 strong A4 cardboard sheets",
        price: 99,
        category: "project-items",
        image: "📦"
    },
    {
        id: 19,
        name: "Thermocol Sheets",
        description: "3 thick thermocol sheets for model making",
        price: 89,
        category: "project-items",
        image: "🧊"
    },
    {
        id: 20,
        name: "Copper Wire Roll",
        description: "10m copper wire for motor and science projects",
        price: 59,
        category: "project-items",
        image: "🧵"
    },

    //  PRINTS
    {
        id: 21,
        name: "Black & White Prints",
        description: "High quality B&W printing per page",
        price: 2,
        category: "prints",
        image: "🖨️"
    },
    {
        id: 22,
        name: "Color Prints",
        description: "Premium color printing per page",
        price: 5,
        category: "prints",
        image: "🎨"
    },
    {
        id: 23,
        name: "Project Report Binding",
        description: "Professional spiral binding service",
        price: 50,
        category: "prints",
        image: "📚",
        badge: "Popular"
    },
    {
        id: 24,
        name: "A3 Poster Printing",
        description: "High-quality poster printing for school projects",
        price: 25,
        category: "prints",
        image: "🖼️"
    },
    {
        id: 25,
        name: "Laminate Sheets",
        description: "Glossy lamination per sheet",
        price: 15,
        category: "prints",
        image: "📎"
    },
    {
        id: 26,
        name: "Certificate Printing",
        description: "Premium certificate print with textured paper",
        price: 30,
        category: "prints",
        image: "📜"
    },
    {
        id: 27,
        name: "Notebook Custom Cover",
        description: "Print custom notebook covers",
        price: 20,
        category: "prints",
        image: "📔"
    },
    {
        id: 28,
        name: "Chart Paper Prints",
        description: "Printed A2/A3 project charts",
        price: 20,
        category: "prints",
        image: "📄"
    },
    {
        id: 29,
        name: "File Folder Printing",
        description: "Custom printed project folders",
        price: 40,
        category: "prints",
        image: "🗂️"
    },
    {
        id: 30,
        name: "ID Card Printing",
        description: "Instant printed ID cards",
        price: 60,
        category: "prints",
        image: "🪪"
    },

    //   EMERGENCY ESSENTIALS
    {
        id: 31,
        name: "Emergency Stationery Kit",
        description: "Pen, pencil, eraser, ruler combo",
        price: 99,
        category: "essentials",
        image: "✏️",
        badge: "Fast"
    },
    {
        id: 32,
        name: "Scientific Calculator",
        description: "Casio FX-991EX scientific calculator",
        price: 899,
        category: "essentials",
        image: "🔢"
    },
    {
        id: 33,
        name: "USB Flash Drive 32GB",
        description: "High-speed USB 3.0 flash drive",
        price: 399,
        category: "essentials",
        image: "💾"
    },
    {
        id: 34,
        name: "Emergency Charger",
        description: "Universal phone charger with cable",
        price: 299,
        category: "essentials",
        image: "🔌",
        badge: "Hot"
    },
    {
        id: 35,
        name: "Portable Power Bank",
        description: "10000mAh compact power bank",
        price: 899,
        category: "essentials",
        image: "🔋"
    },
    {
        id: 36,
        name: "Emergency Umbrella",
        description: "Compact foldable umbrella",
        price: 249,
        category: "essentials",
        image: "☔"
    },
    {
        id: 37,
        name: "First Aid Mini Kit",
        description: "Bandages, antiseptic wipes, cotton, tape",
        price: 149,
        category: "essentials",
        image: "🩹"
    },
    {
        id: 38,
        name: "Water Bottle 500ml",
        description: "Cold water for hot days & emergencies",
        price: 20,
        category: "essentials",
        image: "🥤"
    },
    {
        id: 39,
        name: "Mask & Sanitizer Combo",
        description: "1 sanitizer + 2 masks",
        price: 49,
        category: "essentials",
        image: "🧴"
    },
    {
        id: 40,
        name: "Energy Chocolate Bar",
        description: "Instant energy boost snack",
        price: 30,
        category: "essentials",
        image: "🍫"
    },

    // 41–50 STUDY SUPPLIES 
    {
        id: 41,
        name: "Notebook Pack (5)",
        description: "Set of 5 ruled notebooks",
        price: 199,
        category: "study",
        image: "📓"
    },
    {
        id: 42,
        name: "Pen Set Premium",
        description: "Pack of 10 ballpoint pens",
        price: 149,
        category: "study",
        image: "🖊️"
    },
    {
        id: 43,
        name: "Highlighter Set",
        description: "6 fluorescent highlighter markers",
        price: 99,
        category: "study",
        image: "🖍️"
    },
    {
        id: 44,
        name: "Sticky Notes Pack",
        description: "Colorful sticky notes - 6 pads",
        price: 79,
        category: "study",
        image: "📝"
    },
    {
        id: 45,
        name: "Graph Paper Book",
        description: "100 sheets graph notebook",
        price: 89,
        category: "study",
        image: "📐"
    },
    {
        id: 46,
        name: "A4 Sheets Pack (100)",
        description: "High-quality A4 printing sheets",
        price: 149,
        category: "study",
        image: "📄"
    },
    {
        id: 47,
        name: "Eraser Pack (4)",
        description: "Smooth, dust-free erasers",
        price: 39,
        category: "study",
        image: "🧽"
    },
    {
        id: 48,
        name: "Sharpener Metal",
        description: "Durable metal blade sharpener",
        price: 29,
        category: "study",
        image: "🔪"
    },
    {
        id: 49,
        name: "Geometry Box Premium",
        description: "Compass, divider, protractor & ruler",
        price: 159,
        category: "study",
        image: "📏"
    },
    {
        id: 50,
        name: "Sticky Flags Set",
        description: "Colorful bookmarks for notes",
        price: 49,
        category: "study",
        image: "🏷️"
    }
];



localStorage.setItem('products', JSON.stringify(productsData));

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
