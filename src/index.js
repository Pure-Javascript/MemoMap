import "./style.css"
const axios = require('axios')

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


document.getElementById("search").addEventListener("click", function(e){
 console.log("버튼 클릭 ")
 const searchValue = document.getElementById("search-input").value;
 console.log("searchValu :", searchValue)

 axios.get("https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query="+searchValue, {
  timeout: 4000,
  headers: {
   'X-NCP-APIGW-API-KEY-ID': '생략',
   'X-NCP-APIGW-API-KEY':'생략'
  },
  crossdomain: true
 }).then(data =>{
  console.log("data :", data);
 });
})
