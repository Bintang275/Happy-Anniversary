const heartsContainer = document.getElementById('hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

function toggleMusic() {
  const bgm = document.getElementById('bgm');
  bgm.paused ? bgm.play() : bgm.pause();
}

function toggleGallery() {
  const gal = document.getElementById('gallery');
  gal.style.display = gal.style.display === 'flex' ? 'none' : 'flex';
}

const revealText = () => {
  const paragraphs = document.querySelectorAll('.content p');
  const trigger = window.innerHeight * 0.9;
  paragraphs.forEach(p => {
    if (p.getBoundingClientRect().top < trigger) {
      p.classList.add('show');
    }
  });
};
window.addEventListener('scroll', revealText);
window.addEventListener('load', revealText);

const images = [
  "https://drive.google.com/thumbnail?id=1UkQtLYnQNn7agvvRf6PA8eNPV5S4OPqJ&sz=w1000",
  "https://drive.google.com/thumbnail?id=1UhfdJ-4Dx8TGBAi6upRlNNsdag-7_jda&sz=w1000",
  "https://drive.google.com/thumbnail?id=1UgnU2d4Z3ktd0il7QiyD4w7wtZFLifOx&sz=w1000",
  "https://drive.google.com/thumbnail?id=1UZuXslPF3dztyeMf_vb6UR_4QWzZkI9V&sz=w1000",
  "https://drive.google.com/thumbnail?id=1Vbi1I6KGLMWByjzciNoToHODqrtPJXJ-&sz=w1000",
  "https://drive.google.com/thumbnail?id=1VWMsASgc6GfcNj3tMUIEnT5Pb9HTafsn&sz=w1000",
  "https://drive.google.com/thumbnail?id=1W7q-cgBBCQWrzQuYhX2QznZgwiIj2X6f&sz=w1000"
];

let current = 0;
const slideImg = document.getElementById("slide-img");

function changeSlide(direction) {
  slideImg.classList.add("fade-out");

  setTimeout(() => {
    current += direction;
    if (current < 0) current = images.length - 1;
    if (current >= images.length) current = 0;
    slideImg.src = images[current];
    slideImg.classList.remove("fade-out");
  }, 300);
}

window.addEventListener('click', () => {
    const bgm =
document.getElementById('bgm');
    if (bgm.paused) {
        bgm.play();
    }
}, { once: true });
