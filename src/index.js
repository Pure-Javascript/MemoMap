import "./style.css"
const axios = require('axios')

const main = document.getElementById('main');

main.innerHTML = `
  <div>
    <h1 class="textBlue">Hello World!</h1>
    <h2>Naver Map!</h2>
  </div>
`;

window.onload = () => {
  let map = null;

 function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  map = new naver.maps.Map('map', {
   center: new naver.maps.LatLng(latitude, longitude),
   zoom: 16
  });

  var marker = new naver.maps.Marker({
   position: new naver.maps.LatLng(latitude, longitude),
   map: map
  });
 }

 function error() {
  alert("지도를 지원하지 않는 브라우저입니다");
 }

  const initMap = () => {
   navigator.geolocation.getCurrentPosition(success, error);
  }

  initMap();
};


document.getElementById("search").addEventListener("click", function(e){
 console.log("버튼 클릭 ")
 const searchValue = document.getElementById("search-input").value;
 console.log("searchValu :", searchValue)

 axios.get("http://localhost:8080/address?query="+searchValue, {
  timeout: 4000,
  crossdomain: true
 }).then(data =>{
  console.log("data :", data);
 });
})
