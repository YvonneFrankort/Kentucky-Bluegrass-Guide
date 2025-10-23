const API_KEY = CONFIG.WEATHER_KEY;
const cities = [
  { name: 'Frankfort', id: 'frankfort' },
  { name: 'Lexington', id: 'lexington' },
  { name: 'Louisville', id: 'louisville' }
];

let currentUnit = 'metric';

//get cities//
document.addEventListener('DOMContentLoaded', () => {
  cities.forEach(city => fetchWeather(city.name, city.id));

//switch between Fahrenheit and Celsius//
const unitSelect = document.getElementById('unitSelect');
  unitSelect?.addEventListener('change', e => {
    currentUnit = e.target.value;
    cities.forEach(city => fetchWeather(city.name, city.id));
  });
});


//get the weather//
function fetchWeather(cityName, cardId) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},US&units=${currentUnit}&appid=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => updateWeatherCard(data, cardId))
    .catch(err => console.error('Weather API error:', err));
}

function updateWeatherCard(data, cardId) {
  const card = document.getElementById(cardId);
  if (!card || data.cod !== 200) return;

  const tempEl = card.querySelector('.temp');
  const descEl = card.querySelector('.desc');

  if (tempEl) tempEl.textContent = `Temperature: ${data.main.temp.toFixed(1)} °${currentUnit === 'metric' ? 'C' : 'F'}`;
  if (descEl) descEl.textContent = `Weather: ${data.weather[0].description}`;

  // Weather icon
  let iconEl = card.querySelector('.icon');
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  if (!iconEl) {
    iconEl = document.createElement('img');
    iconEl.className = 'icon';
    iconEl.alt = data.weather[0].description;
    card.insertBefore(iconEl, tempEl);
  }
  iconEl.src = iconUrl;

  // City suggestion//
  const suggestionEl = card.querySelector('.suggestion');
  if (suggestionEl) {
    const desc = data.weather[0].description.toLowerCase();
    if (desc.includes('rain')) {
      suggestionEl.textContent = 'Perfect for a museum day!';
    } else if (desc.includes('clear')) {
      suggestionEl.textContent = 'Great day for exploring outdoors!';
    } else if (desc.includes('cloud')) {
      suggestionEl.textContent = 'Good weather for a hike.';
    } else {
      suggestionEl.textContent = 'Check the forecast before heading out!';
    }
  }
}