// events.js
const LOCAL_KEY_EVENTS = 'bluegrass_saved_events';
const eventContainer = document.getElementById('eventCards');

// Ticketmaster API
const API_KEY = CONFIG.TICKETMASTER_KEY;
const cities = [
  { name: 'Frankfort', lat: 38.2009, lon: -84.8733 },
  { name: 'Lexington', lat: 38.0406, lon: -84.5037 },
  { name: 'Louisville', lat: 38.2527, lon: -85.7585 }
];

const RADIUS_MILES = 50; // search radius
const MONTH_AHEAD = 30; // days

// Filters
let currentCity = 'all';
let currentType = 'all';
const cityButtons = document.querySelectorAll('.filter-btn');
const typeButtons = document.querySelectorAll('.filter-type-btn');

cityButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentCity = btn.dataset.city;
    filterEvents();
  });
});

typeButtons?.forEach(btn => {
  btn.addEventListener('click', () => {
    currentType = btn.dataset.type;
    filterEvents();
  });
});

function filterEvents() {
  const eventCards = document.querySelectorAll('.event-card');
  eventCards.forEach(card => {
    const matchesCity = currentCity === 'all' || card.dataset.city === currentCity;
    const matchesType = currentType === 'all' || card.dataset.type === currentType;
    card.style.display = (matchesCity && matchesType) ? 'block' : 'none';
  });
}

// Ticketmaster categories, adjusted to Bluegrass Guide categories
function mapCategory(ev) {
  const segment = ev.classifications?.[0]?.segment?.name?.toLowerCase() || '';
  const genre = ev.classifications?.[0]?.genre?.name?.toLowerCase() || '';

  if (segment.includes('music')) return 'music';
  if (segment.includes('sports')) return 'sports';
  if (segment.includes('arts') || segment.includes('theatre')) return 'culture';
  if (segment.includes('family')) return 'family';
  if (segment.includes('miscellaneous')) return 'festival';

  // fallback to genre for culture/festival
  if (genre.includes('festival')) return 'festival';
  if (genre.includes('art')) return 'culture';

  return 'other';
}

// Fetch events for a city
async function fetchEventsForCity(city) {
  const now = new Date();
  const endDate = new Date();
  endDate.setDate(now.getDate() + MONTH_AHEAD);

  const startDateStr = now.toISOString().split('T')[0];
  const endDateStr = endDate.toISOString().split('T')[0];

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&latlong=${city.lat},${city.lon}&radius=${RADIUS_MILES}&unit=miles&startDateTime=${startDateStr}T00:00:00Z&endDateTime=${endDateStr}T23:59:59Z&size=50`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data._embedded?.events) {
      return data._embedded.events;
    }
  } catch (err) {
    console.error('Ticketmaster API error:', err);
  }
  return [];
}

// Render events
function renderEvents(events, cityName) {
  events.forEach(ev => {
    const category = mapCategory(ev);
    if (category === 'other') return; // skip uncategorized

    const dateStr = ev.dates?.start?.localDate || '';
    const venue = ev._embedded?.venues?.[0]?.name || '';
    const location = `${venue}, ${cityName}`;

    const card = document.createElement('div');
    card.className = 'event-card';
    card.dataset.city = cityName.toLowerCase();
    card.dataset.type = category;

    const eventId = cityName + '-' + category + '-' + dateStr + '-' + ev.id;

    card.innerHTML = `
      <h3>${ev.name}</h3>
      <p>Type: ${category.charAt(0).toUpperCase() + category.slice(1)}</p>
      <p>Date: ${dateStr}</p>
      <p>Location: ${location}</p>
      <button>Add to Planner</button>
    `;

    const btn = card.querySelector('button');

    // Disable button if already saved
    const savedEvents = JSON.parse(localStorage.getItem(LOCAL_KEY_EVENTS) || '[]');
    if (savedEvents.some(e => e.id === eventId)) {
      btn.textContent = 'Saved!';
      btn.disabled = true;
    }

    btn.addEventListener('click', () => {
      // Recheck if event is already saved
      let savedEventsNow = JSON.parse(localStorage.getItem(LOCAL_KEY_EVENTS) || '[]');
      if (savedEventsNow.some(e => e.id === eventId)) {
        btn.textContent = 'Already Saved';
        btn.disabled = true;
        showToast('This event is already saved!');
        return;
      }

      const event = {
        id: eventId,
        title: ev.name,
        type: category,
        date: dateStr,
        location,
        city: cityName.toLowerCase()
      };

      savedEventsNow.push(event);
      localStorage.setItem(LOCAL_KEY_EVENTS, JSON.stringify(savedEventsNow));

      btn.textContent = 'Saved!';
      btn.disabled = true;
      showToast(`${event.title} added to planner!`);
    });

    eventContainer.appendChild(card);
  });
}


// Save to localStorage
function saveEvent(event) {
  const savedEvents = JSON.parse(localStorage.getItem(LOCAL_KEY_EVENTS) || '[]');
  if (!savedEvents.some(e => e.id === event.id)) {
    savedEvents.push(event);
    localStorage.setItem(LOCAL_KEY_EVENTS, JSON.stringify(savedEvents));
  }
}

// Toast message
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

// Initialize
async function initEvents() {
  for (const city of cities) {
    const events = await fetchEventsForCity(city);
    renderEvents(events, city.name);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initEvents();
});
