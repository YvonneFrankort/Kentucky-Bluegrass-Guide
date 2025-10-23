
const LOCAL_KEY_IMAGES = 'bluegrass_saved_images';
const LOCAL_KEY_EVENTS = 'bluegrass_saved_events';
const LOCAL_KEY_RESTAURANTS = 'bluegrass_saved_restaurants';

const savedImagesContainer = document.getElementById('savedImages');
const savedRestaurantsContainer = document.getElementById('savedRestaurants');
const savedEventsContainer = document.getElementById('savedEvents');

document.addEventListener('DOMContentLoaded', () => {
  loadSavedImages();
  loadSavedEvents();
  loadSavedRestaurants();
});

// ---- Images ----
function loadSavedImages() {
  const savedImages = JSON.parse(localStorage.getItem(LOCAL_KEY_IMAGES) || '[]');
  savedImagesContainer.innerHTML = '';

  if (savedImages.length === 0) {
    savedImagesContainer.innerHTML = '<p>No images saved yet. Go to the Images page to add some!</p>';
    return;
  }

  savedImages.forEach(image => {
    const card = document.createElement('div');
    card.className = 'saved-image-card';
    card.innerHTML = `
      <img src="${image.src}" alt="${image.alt || ''}" />
      <h4>${image.title}</h4>
      <button class="remove-btn">Remove</button>
    `;
    const btn = card.querySelector('.remove-btn');
    btn.addEventListener('click', () => {
      removeImage(image.src);
      card.remove();

      // Show message immediately if container is now empty
      if (!savedImagesContainer.querySelector('.saved-image-card')) {
        savedImagesContainer.innerHTML = '<p>No images saved yet. Go to the Images page to add some!</p>';
      }
    });
    savedImagesContainer.appendChild(card);
  });
}

function removeImage(src) {
  let saved = JSON.parse(localStorage.getItem(LOCAL_KEY_IMAGES) || '[]');
  saved = saved.filter(img => img.src !== src);
  localStorage.setItem(LOCAL_KEY_IMAGES, JSON.stringify(saved));
}

// ---- Events ----
function loadSavedEvents() {
  const savedEvents = JSON.parse(localStorage.getItem(LOCAL_KEY_EVENTS) || '[]');
  savedEventsContainer.innerHTML = '';

  if (savedEvents.length === 0) {
    savedEventsContainer.innerHTML = '<p>No events saved yet. Check out the Events page to add some!</p>';
    return;
  }

  savedEvents.forEach(event => {
    const card = document.createElement('div');
    card.className = 'saved-card';
    card.innerHTML = `
      <h4>${event.title}</h4>
      <p>${event.type}</p>
      <p>${event.date}</p>
      <p>${event.location}</p>
      <button class="remove-btn">Remove</button>
    `;
    const btn = card.querySelector('.remove-btn');
    btn.addEventListener('click', () => {
      removeItem(LOCAL_KEY_EVENTS, event.id);
      card.remove();

      // Show message immediately if container is now empty
      if (!savedEventsContainer.querySelector('.saved-card')) {
        savedEventsContainer.innerHTML = '<p>No events saved yet. Check out the Events page to add some!</p>';
      }
    });
    savedEventsContainer.appendChild(card);
  });
}

function removeItem(key, id) {
  let saved = JSON.parse(localStorage.getItem(key) || '[]');
  saved = saved.filter(item => item.id !== id);
  localStorage.setItem(key, JSON.stringify(saved));
}

// ---- Restaurants ----
function loadSavedRestaurants() {
  const saved = JSON.parse(localStorage.getItem(LOCAL_KEY_RESTAURANTS) || '[]');
  savedRestaurantsContainer.innerHTML = '';

  if (saved.length === 0) {
    savedRestaurantsContainer.innerHTML = '<p>No restaurants saved yet. Have a look at restaurants at our restaurant page.</p>';
    return;
  }

  saved.forEach(r => {
    const card = document.createElement('div');
    card.className = 'saved-restaurant-card';
    card.innerHTML = `
      <img src="${r.img}" alt="${r.name}" />
      <h4>${r.name}</h4>
      <p><strong>Category:</strong> ${r.category}</p>
      <p>${r.description}</p>
      <p><strong>Address:</strong> ${r.address}</p>
      <button class="remove-btn">Remove</button>
    `;
    const btn = card.querySelector('.remove-btn');
    btn.addEventListener('click', () => {
      removeRestaurant(r.name);
      card.remove();

      // Show message immediately if container is now empty
      if (!savedRestaurantsContainer.querySelector('.saved-restaurant-card')) {
        savedRestaurantsContainer.innerHTML = '<p>No restaurants saved yet. Have a look at restaurants at our restaurant page.</p>';
      }
    });
    savedRestaurantsContainer.appendChild(card);
  });
}

function removeRestaurant(name) {
  let saved = JSON.parse(localStorage.getItem(LOCAL_KEY_RESTAURANTS) || '[]');
  saved = saved.filter(r => r.name !== name);
  localStorage.setItem(LOCAL_KEY_RESTAURANTS, JSON.stringify(saved));
}
