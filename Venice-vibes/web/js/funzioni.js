//coordinate centro mappa LodiIIS "A.Volta"
var lat=45.4408474;
var long=12.3155151;
//Dichiarazione di altre variabili globali
var mymap, tile, marker;
//preparazione della mappa e disegno
mymap = L.map('mapid').setView([lat, long], 15);
         L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 19, minZoom: 2.5,
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
         }).addTo(mymap);
function Satellitare(){
    mymap = L.map('mapid').setView([lat, long], 16);
    tile='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    L.tileLayer(tile, {
		maxZoom: 19,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/satellite-v9'
	}).addTo(mymap);
}
