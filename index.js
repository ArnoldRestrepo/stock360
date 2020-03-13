const slider = document.querySelector("#slider")
const canvas = document.querySelector("#canvas")
const url = `https://stockx-360.imgix.net/adidas-yeezy-boost-350-v2-core-black-red_TruView/Images/adidas-yeezy-boost-350-v2-core-black-red_TruView/Lv2/img${number}.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000`

slider.addEventListener("input", handleInputSlider);

function handleInputSlider() {
  console.log(this.value);
}