import "./style.css"

const main = document.getElementById('main');

main.innerHTML = `
  <div>
    <h1 class="textBlue">Hello World!</h1>
    <h2>Naver Map</h2>
  </div>
`;

window.onload = () => {
  let map = null;

  const initMap = () => {
    map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    });
  }

  initMap();
};
