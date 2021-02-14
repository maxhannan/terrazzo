import { Loader } from "@googlemaps/js-api-loader"
const aboutFactory = (content) =>{
    let map = document.createElement('div');
    map.id = 'map'
    
    content.appendChild(map)
    let aboutContainer = document.createElement('div');
    aboutContainer.classList.add('aboutContainer');
    aboutContainer.innerHTML = `
    <h2 id = 'aboutHead' >restaurant</h2>
        <p id = 'para'>
        ***Terrazzo's committment to hospitality begins long before you sit down at our table. 
        We reopen Terrazzo in the same way that has guided us since opening our doors 17 years ago: 
        with keen attention to detail, warmth and hospitality, and with the goal of making happy 
        memories for our guests.
        <br><br>
        Terrazzo is now taking reservations for February and beyond, beginning on Valentine's Day. 
        <br><br>
        We will be offering a special menu from <b>Chef de Cuisine Corey Chow</b>, and a wine accompaniment 
        designed by <b>Beverage Director, Michel Couvreux</b>.
        <br><br>
        Join us for our Chef's Tasting menus Tuesday to Saturday.<br><br>
        Seatings begin at 5:00pm and 7:30pm.</p>
    `
    content.appendChild(aboutContainer)
    
    
    
    
    //MAPS API
    const loader = new Loader({
        apiKey: "AIzaSyAzvI9cu1Zk8OegSCLn8Yv0BTagQSWDMFQ",
        version: "weekly",
      });
      loader.load().then(() => {
        const myLatLng = { lat: 44.986520, lng: -93.258910};
        map = new google.maps.Map(document.getElementById("map"), {
          center: myLatLng,
          zoom: 12,
          disableDefaultUI: true,
          styles : [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ],
          
        });
        const svgMarker = {
            path:
            "M50,5C32.6,5,18.5,19.1,18.5,36.5c0,6.8,2.2,14.6,5.9,19.8L50,95l25.6-38.7c3.7-5.2,5.9-12.9,5.9-19.8  C81.5,19.1,67.4,5,50,5z M50,48.5c-6.6,0-12-5.4-12-12c0-6.6,5.4-12,12-12s12,5.4,12,12C62,43.1,56.6,48.5,50,48.5z",
            fillColor: "slateblue",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: .4,
            anchor: new google.maps.Point(15, 30),
          };
        new google.maps.Marker({
            position: myLatLng,
            map,
            icon: svgMarker,
            title: "Hello World!",
          });
      }); 
}
export{
    aboutFactory

}