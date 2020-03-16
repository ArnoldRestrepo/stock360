const canvas = document.querySelector('#canvas');
const slider = document.querySelector('#slider');
const ctx = canvas.getContext('2d');
const images = [];

slider.addEventListener('input', handleInputSlider);
window.addEventListener('load', pageLoad);

function pageLoad() {
  for (let index = 1; index <= 36; index++) {
    const number = index.toString().padStart(2, '00');
    const url = `./img/${number}.jpg`;
    const image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
      images[index] = image;
      if (index === 1) {
        loadImage(index);
      }
    });
  }
}

function loadImage(index) {
  ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}

function handleInputSlider() {
  loadImage(this.value);
}
