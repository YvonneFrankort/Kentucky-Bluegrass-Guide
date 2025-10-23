
const LOCAL_KEY = 'bluegrass_saved_images';

const imageData = {
  landscapeGrid: [
    { src: 'images/forest.jpg', alt: 'Kentucky hills', title:'Kentucky hills' },
    { src: 'images/landscape_river.jpg', alt: 'River', title:'Kentucky River' },
    { src: 'images/mammoth_cave.jpg', alt: 'Mammoth Cave', title:'Mammoth Cave' },
    { src: 'images/mountains.jpg', alt: 'Mountain view', title: 'Appalachian Mountains'},
    { src: 'images/natural_bridge.jpg', alt: 'Natural Bridge', title:'Natural Bridge' },
    { src: 'images/cumberland_falls.jpg', alt: 'Cumberland Falls', title:'Cumberland Falls' },
    { src: 'images/horse_farm.jpg', alt: 'Horse Farm', title:'Horse Farm'},
    { src: 'images/White_Rocks.jpg', alt: 'White Rocks', title:'White Rocks' }
  ],
  frankfortGrid: [
    { src: 'images/frankfort1.jpg', alt: 'Catholic church', title:'Frankfort Catholic Church' },
    { src: 'images/frankfort2.jpg', alt: 'Downtown Frankfort', title: 'Downtown Frankfort' },
    { src: 'images/frankfort3.jpg', alt: 'Graveyard', title:'Confederate Monumente' },
    { src: 'images/frankfort4.jpg', alt: 'Sun clock', title:'Sun Clock' },
    { src: 'images/frankfort5.jpg', alt: 'State Capitol', title:'State Capitol' },
    { src: 'images/frankfort6.jpg', alt: 'State Capitol', title:'Old State Capitol' },
    { src: 'images/frankfort7.jpg', alt: 'State Capitol', title:'Plaza State Capitol' },
    { src: 'images/frankfort8.jpg', alt: 'Kentucky State University', title:'Kentucky State University' }
  ],
  lexingtonGrid: [
    { src: 'images/lexington1.jpg', alt: 'Lexington skyline', title:'Lexington Skyline' },
    { src: 'images/lexington2.jpg', alt: 'Street', title:'Street View' },
    { src: 'images/lexington3.jpg', alt: 'City view', title:'Downtown Lexington' },
    { src: 'images/lexington4.jpg', alt: 'Statue', title:'Memorial Statue' },
    { src: 'images/lexington5.jpg', alt: 'Street view', title:'Downtown Street' },
    { src: 'images/lexington6.jpg', alt: 'Lexington downtown', title:'Downtown View' },
    { src: 'images/lexington7.jpg', alt: 'Historical Museum', title:'Historical Museum' },
    { src: 'images/lexington8.jpg', alt: 'Post Office', title:'Old Post Office' }
  ],
  louisvilleGrid: [
    { src: 'images/louisville1.jpg', alt: 'Louisville bridge at night', title:'Big Four Bridge At Night' },
    { src: 'images/louisville2.jpg', alt: 'Louisville skyline', title:'Louisville Skyline' },
    { src: 'images/louisville3.jpg', alt: 'River boat', title:'Ohio River and River Boat' },
    { src: 'images/louisville4.jpg', alt: 'River, bridge and city', title:'Ohio River And City' },
    { src: 'images/louisville5.jpg', alt: 'Statue', title:'Statue' },
    { src: 'images/louisville6.jpg', alt: 'Baseball', title:'Louisville Slugger Museum' },
    { src: 'images/louisville7.jpg', alt: 'Library', title:"Louisville Library" },
    { src: 'images/louisville8.jpg', alt: 'Water Tower', title:'Old Water Tower' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  for (const [containerId, images] of Object.entries(imageData)) {
    const container = document.getElementById(containerId);
    images.forEach(img => addImage(img, container));
  }
});

card.innerHTML = `
  <div class="img-container" style="background-image: url('${escapeHtml(img.src)}');"></div>
  <div class="image-overlay">${escapeHtml(img.title)}</div>
  <button class="save-btn">Save to Planner</button>
`;


function addImage(img, container) {
  const card = document.createElement('div');
  card.className = 'image-card';

  // Check if this image is already saved
  const savedImages = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
  const alreadySaved = savedImages.some(i => i.src === img.src);

  card.innerHTML = `
    <div class="img-container" style="background-image: url('${escapeHtml(img.src)}');" title="${escapeHtml(img.title)}"></div>
    <button class="save-btn">${alreadySaved ? 'Saved!' : 'Save to Planner'}</button>
  `;

  const btn = card.querySelector('.save-btn');

  if (alreadySaved) {
    btn.disabled = true;
  }

  btn.addEventListener('click', () => {
    // Recheck localStorage inside click handler
    const currentSaved = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
    if (currentSaved.some(i => i.src === img.src)) {
      btn.textContent = 'Already Saved';
      btn.disabled = true;
      showToast(`${img.title || 'Image'} is already saved`);
      return;
    }

    saveImage(img);
    btn.textContent = 'Saved!';
    btn.disabled = true;
    showToast(`${img.title || 'Image'} saved to planner`);
  });

  container.appendChild(card);
}


function saveImage(image) {
  const saved = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
  if (!saved.some(i => i.src === image.src)) {
    saved.push({ src: image.src, alt: image.alt, title: image.title });
    localStorage.setItem(LOCAL_KEY, JSON.stringify(saved));
    console.log(`images.js: saved "${image.title}"`);
  } else {
    console.log('images.js: already saved, skipping');
  }
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 2000);
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}