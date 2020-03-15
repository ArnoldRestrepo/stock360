const slider = document.querySelector('#slider');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const images = [];

slider.addEventListener('input', handleInputSlider);

window.addEventListener('load', pageLoaded);

function pageLoaded() {
  for (let i = 1; i <= 26; i++) {
    const number = i.toString().padStart(2, '00');
    const url = `https://stockx-360.imgix.net/adidas-yeezy-boost-350-v2-core-black-red_TruView/Images/adidas-yeezy-boost-350-v2-core-black-red_TruView/Lv2/img${number}.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000`;
    const image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
      images[i] = image;
      if (i === 1) {
        loadImage(i);
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
