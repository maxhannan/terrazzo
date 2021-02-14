import { Loader } from "@googlemaps/js-api-loader"
const aboutFactory = (content) =>{
    let map = document.createElement('div');
    map.id = 'map'
    
    content.appendChild(map)
    let aboutContainer = document.createElement('div');
    aboutContainer.classList.add('aboutContainer');
    content.appendChild(aboutContainer)
    const loader = new Loader({
        apiKey: "AIzaSyAzvI9cu1Zk8OegSCLn8Yv0BTagQSWDMFQ",
        version: "weekly",
      });
      loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      }); 
}
export{
    aboutFactory

}