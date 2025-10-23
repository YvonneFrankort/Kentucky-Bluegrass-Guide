const LOCAL_KEY_RESTAURANTS = 'bluegrass_saved_restaurants';

const restaurants = [
    {
        name: "Engine House",
        city: "frankfort",
        category: "Cafe",
        address: "3070 W Main St, Frankfort",
        description: "Coffeeshop in the oldest extant firehouse of Kentucky.",
        img: "images/restaurants/cafe.jpg"
    },
    {
        name: "Staxx BBQ",
        city: "frankfort",
        category: "BBQ",
        address: "11 Carson Place, Frankfort",
        description: "Old school barbecue with a cozy local feel.",
        img: "images/restaurants/bbq.jpg"
    },
    {
        name: "Melisa’s Family Diner",
        city: "frankfort",
        category: "Diner",
        address: "859 E Main St, Frankfort",
        description: "Homemade breakfast and lunch in downtown Frankfort.",
        img: "images/restaurants/diner.jpg"
    },
    {
        name: "Cliffside Diner",
        city: "frankfort",
        category: "Diner",
        address: "175 Lawrenceburg Rd, Frankfort",
        description: "Classic American diner with river views.",
        img: "images/restaurants/diner.jpg"
    },
    {
        name: "Bourbon On Main",
        city: "frankfort",
        category: "Burger",
        address: "103 W Main St, Frankfort",
        description: "Burgers and bourbon at the State Capitol.",
        img: "images/restaurants/burger.jpg"
    },
    {
        name: "Cypress & Oak",
        city: "frankfort",
        category: "Fine Dining",
        address: "106 E Broadway St, Frankfort",
        description: "Elegant dining with a refined southern menu.",
        img: "images/restaurants/fine_dining.jpg"
    },
    {
        name: "Limewater",
        city: "frankfort",
        category: "Fine Dining",
        address: "900 Wilkinson Blvd, Frankfort",
        description: "Upscale dining in a historic brick building on the Kentucky River.",
        img: "images/restaurants/fine_dining.jpg"
    },
    {
        name: "DaVinci’s Pizza",
        city: "frankfort",
        category: "International",
        address: "805 Louisville Rd, Frankfort",
        description: "Italian comfort food with a modern twist.",
        img: "images/restaurants/international.jpg"
    },
    {
        name: "Agave",
        city: "frankfort",
        category: "International",
        address: "1303 US Hwy 127 S, Frankfort",
        description: "Authentic Mexican dishes and margaritas.",
        img: "images/restaurants/international.jpg"
    },
    {
        name: "Andy’s Artisan Bread",
        city: "frankfort",
        category: "Bakery",
        address: "127 E Todd St, Frankfort",
        description: "Handcrafted breads and baked goods made fresh daily.",
        img: "images/restaurants/bakery.jpg"
    },
    {
        name: "Old School Coffee",
        city: "lexington",
        category: "Cafe",
        address: "380 S Mill St Ste.110, Lexington",
        description: "Coffeeshop in an old historic old school.",
        img: "images/restaurants/cafe.jpg"
    },
    {
        name: "High on Arts & Coffee",
        city: "lexington",
        category: "Cafe",
        address: "523 E High St, Lexington",
        description: "Coffee, food and local arts.",
        img: "images/restaurants/cafe.jpg"
    },
    {
        name: "Blue Door Smokehouse",
        city: "lexington",
        category: "BBQ",
        address: "819 National Ave Suite 140, Lexington",
        description: "Freshly smoked barbeque.",
        img: "images/restaurants/bbq.jpg"
    },
    {
        name: "LX BBQ",
        city: "lexington",
        category: "BBQ",
        address: "226 Walton Ave, Lexington",
        description: "Authentic smoked meats.",
        img: "images/restaurants/bbq.jpg"
    },
    {
        name: "Ramsey’s Diner",
        city: "lexington",
        category: "Diner",
        address: "151 W Zandale Dr, Lexington",
        description: "Country Food Restaurant.",
        img: "images/restaurants/diner.jpg"
    },
    {
        name: "Jack Brown’s Beer & Burger",
        city: "lexington",
        category: "Burger",
        address: "155 North Limestone, Lexington",
        description: "Offering daily specials.",
        img: "images/restaurants/burger.jpg"
    },
    {
        name: "Bad Wolfs Burger",
        city: "lexington",
        category: "Burger",
        address: "1401 N Forbes Rd, Lexington",
        description: "Locally owned burger restaurant.",
        img: "images/restaurants/burger.jpg"
    },
    {
        name: "Carson’s Food & Drink",
        city: "lexington",
        category: "Fine Dining",
        address: "362 E Main St, Lexington",
        description: "Award winning dishes.",
        img: "images/restaurants/fine_dining.jpg"
    },
    {
        name: "Watan Mediterranean Grill",
        city: "lexington",
        category: "International",
        address: "33440Partner Pl Ste 6, Lexington",
        description: "Eastern Mediterranean kitchen.",
        img: "images/restaurants/international.jpg"
    },
    {
        name: "World of Gourmet",
        city: "lexington",
        category: "International",
        address: "543 S Limestone, Lexington",
        description: "Global Flavors.",
        img: "images/restaurants/international.jpg"
    },
    {
        name: "Bluegrass Baking Company",
        city: "lexington",
        category: "Bakery",
        address: "3101 Clays Mill Rd, Lexington",
        description: "Fresh bread, pastries and bakery goods.",
        img: "images/restaurants/bakery.jpg"
    },
    {
        name: "Brew & Sip",
        city: "louisville",
        category: "Cafe",
        address: "2860 Packerland Way, Louisville",
        description: "Coffee and Breakfast.",
        img: "images/restaurants/cafe.jpg"
    },
    {
        name: "Shack in the Back BBQ",
        city: "louisville",
        category: "BBQ",
        address: "10706 W Manslick Rd, Louisville",
        description: "Award winning barbeque restaurant.",
        img: "images/restaurants/bbq.jpg"
    },
    {
        name: "Metro Diner",
        city: "louisville",
        category: "Diner",
        address: "4901 Outer Loop Road, Louisville",
        description: "Diner classics and comfort food.",
        img: "images/restaurants/diner.jpg"
    },
    {
        name: "Hillview Family Diner",
        city: "louisville",
        category: "Diner",
        address: "1679 Old Preston Hwy N, Louisville",
        description: "Traditional family Diner.",
        img: "images/restaurants/diner.jpg"
    },
    {
        name: "Mussels & Burger Bar",
        city: "louisville",
        category: "Burger",
        address: "113 S 7th St, Louisville",
        description: "Bar and Grill.",
        img: "images/restaurants/burger.jpg"
    },
    {
        name: "Hammerheads",
        city: "louisville",
        category: "Burger",
        address: "921 Swan St, Louisville",
        description: "Smoked barbeque and burgers.",
        img: "images/restaurants/burger.jpg"
    },
    {
        name: "Jeff Ruby’s Steakhouse Louisville",
        city: "louisville",
        category: "Fine Dining",
        address: "325 West Main Street, Louisville",
        description: "Luxurious and lively fine dining.",
        img: "images/restaurants/fine_dining.jpg"
    },
    {
        name: "Repeal Oak Fired Steakhouse",
        city: "louisville",
        category: "Fine Dining",
        address: "101 W Main St, Louisville",
        description: "Oak-fired steaks and seafood.",
        img: "images/restaurants/fine_dining.jpg"
    },
    {
        name: "Bellissimo",
        city: "louisville",
        category: "International",
        address: "2217 Steier Ln, Louisville",
        description: "Authentic Italian cuisine.",
        img: "images/restaurants/international.jpg"
    },
    {
        name: "The Charcoal Restaurant",
        city: "louisville",
        category: "International",
        address: "2805 N Hurstbourne Pkwy, Louisville",
        description: "Middle-Eastern chicken food .",
        img: "images/restaurants/international.jpg"
    },
    {
        name: "Jasmin Bakery European Bread",
        city: "louisville",
        category: "Bakery",
        address: "2205 Steier Ln, Louisville",
        description: "Bakery with European specialties.",
        img: "images/restaurants/bakery.jpg"
    },    

];

// Select the correct container
const restaurantContainer = document.getElementById('restaurantCards');

// --- Filters ---
let currentCity = 'all';
const cityButtons = document.querySelectorAll('.filter-btn');
cityButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentCity = btn.dataset.city;
        renderRestaurants();
    });
});

// --- Render ---
function renderRestaurants() {
    restaurantContainer.innerHTML = '';

    const filtered = restaurants.filter(r => currentCity === 'all' || r.city === currentCity);

    filtered.forEach(r => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <h3>${r.name}</h3>
            <img src="${r.img}" alt="${r.name}">
            <p><strong>Category:</strong> ${r.category}</p>
            <p>${r.description}</p>
            <p><strong>Address:</strong> ${r.address}</p>
            <button></button>
        `;

        const btn = card.querySelector('button');

        // Check if already saved in localStorage
        const savedRestaurants = JSON.parse(localStorage.getItem(LOCAL_KEY_RESTAURANTS) || '[]');
        if (savedRestaurants.some(s => s.name === r.name)) {
            btn.textContent = 'Saved!';
            btn.disabled = true;
        } else {
            btn.textContent = 'Add to Planner';
            btn.addEventListener('click', () => {
                saveRestaurant(r);
                btn.textContent = 'Saved!';
                btn.disabled = true;
                showToast(`${r.name} added to planner!`);
            });
        }

        restaurantContainer.appendChild(card);
    });
}


// --- Save ---
function saveRestaurant(restaurant) {
    const saved = JSON.parse(localStorage.getItem(LOCAL_KEY_RESTAURANTS) || '[]');
    if (!saved.some(r => r.name === restaurant.name)) {
        saved.push(restaurant);
        localStorage.setItem(LOCAL_KEY_RESTAURANTS, JSON.stringify(saved));
    }
}

// --- Toast ---
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// --- Init ---
document.addEventListener('DOMContentLoaded', renderRestaurants);
