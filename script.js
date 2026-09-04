const loading = document.getElementById('loading');

window.addEventListener('load', () => {
  setTimeout(() => loading.classList.add('done'), 2100);
});

const desserts = [...document.querySelectorAll('.dessert')];
const card = document.getElementById('detailCard');
const nameEl = document.getElementById('detailName');
const descEl = document.getElementById('detailDesc');
const priceEl = document.getElementById('detailPrice');
const storyEl = document.getElementById('detailStory');

function selectDessert(el) {
  desserts.forEach(d => d.classList.remove('active'));
  el.classList.add('active');
  nameEl.textContent = el.dataset.name;
  descEl.textContent = el.dataset.desc;
  priceEl.textContent = el.dataset.price;
  storyEl.textContent = el.dataset.story;
  card.classList.add('show');
}

desserts.forEach(el => {
  el.addEventListener('mouseenter', () => {
    // Hover gives a quick focus without forcing detail text.
  });
  el.addEventListener('click', () => selectDessert(el));
});

document.querySelector('.collection').addEventListener('click', e => {
  if (!e.target.closest('.dessert') && !e.target.closest('.detail-card')) {
    desserts.forEach(d => d.classList.remove('active'));
    card.classList.remove('show');
  }
});

// Cinematic scroll: camera-like movement without playing a video.
function clamp(v, min, max){ return Math.max(min, Math.min(max, v)); }

function updateScroll(){
  const y = window.scrollY;
  const vh = window.innerHeight;

  // Hero "camera descent"
  const heroProgress = clamp(y / (vh * 0.9), 0, 1);
  const estate = document.querySelector('.estate-main');
  const heroCopy = document.querySelector('.hero-copy');
  if(estate){
    estate.style.transform =
      `translateX(-50%) translateY(${heroProgress * 120}px) scale(${1 + heroProgress * .25})`;
  }
  if(heroCopy){
    heroCopy.style.transform = `translateY(${-heroProgress * 70}px)`;
    heroCopy.style.opacity = String(1 - heroProgress * .9);
  }

  // Dessert table orbit illusion: tilt from side-ish to top view
  const collection = document.querySelector('.collection');
  const table = document.querySelector('.table-top');
  if(collection && table){
    const r = collection.getBoundingClientRect();
    const p = clamp((vh - r.top) / (vh + r.height * .55), 0, 1);
    const x = 48 + p * 14;
    const z = -8 + p * 4;
    const s = .92 + p * .08;
    table.style.transform =
      `translate(-50%,-45%) rotateX(${x}deg) rotateZ(${z}deg) scale(${s})`;
  }
}

updateScroll();
window.addEventListener('scroll', updateScroll, {passive:true});
window.addEventListener('resize', updateScroll);
