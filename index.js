import leafletConfig from './leafletConfig.js';

const { L } = window;

// ↓ Leaflet Map ↓

const home_icon = L.icon({
  iconUrl: 'content/icons/home_icon.png',
  iconSize: [48, 48],
  iconAnchor: [24, 24],
});

const map = L.map('map', { zoomControl: false }).setView([50, 10], 6);

let active_Home_Marker = '';

// // ↓ Leaflet Map / Tiles Change ↓

const {
  mapTileLayer_A, mapTileLayer_B, mapTileLayer_C, mapTileLayer_D,
} = leafletConfig.tilemaps;

// Array containing all tile map layers
const mapTileLayers = L
  .layerGroup([mapTileLayer_B])
  .addTo(map);

// Clear layerGroup from tilemaps and load given one
function switchTileMap(layer) {
  mapTileLayers.clearLayers();
  mapTileLayers.addLayer(layer);
}

const map_tile_layer_A = document.querySelector('#map_tile_layer_A');
map_tile_layer_A.addEventListener('click', () => switchTileMap(mapTileLayer_A));

const map_tile_layer_B = document.querySelector('#map_tile_layer_B');
map_tile_layer_B.addEventListener('click', () => switchTileMap(mapTileLayer_B));

const map_tile_layer_C = document.querySelector('#map_tile_layer_C');
map_tile_layer_C.addEventListener('click', () => switchTileMap(mapTileLayer_C));

const map_tile_layer_D = document.querySelector('#map_tile_layer_D');
map_tile_layer_D.addEventListener('click', () => switchTileMap(mapTileLayer_D));

// Turn on/off addons for tilemaps
function switchTileAddon(tile_addon) {
  if (map.hasLayer(tile_addon)) {
    tile_addon.removeFrom(map);
  } else {
    tile_addon.addTo(map);
  }
}

const {
  trainAddon, cyclingAddon, bordersAddon, labelsAddon,
} = leafletConfig.addons;

const map_tile_addon_train = document.querySelector('#map_tile_addon_train');
map_tile_addon_train.addEventListener('click', () => switchTileAddon(trainAddon));

const map_tile_addon_cycling = document.querySelector('#map_tile_addon_cycling');
map_tile_addon_cycling.addEventListener('click', () => switchTileAddon(cyclingAddon));

const map_tile_addon_borders = document.querySelector('#map_tile_addon_borders');
map_tile_addon_borders.addEventListener('click', () => switchTileAddon(bordersAddon));

const map_tile_addon_labels = document.querySelector('#map_tile_addon_labels');
map_tile_addon_labels.addEventListener('click', () => switchTileAddon(labelsAddon));

// // ↑ Leaflet Map / Tiles Change ↑

// ↑ Leaflet Map  ↑

// ↓ Home ↓

let home_button_manual_click = false;
let home_button_geolocation_click = false;

const home_button_zoom = document.getElementById('home_button_zoom');
const home_button_geolocation = document.getElementById('home_button_geolocation');
const home_button_manual = document.getElementById('home_button_manual');

// ↑ Home ↑

// ↓ GeoJSON ↓

let countriesLayers = '';

// // ↓ GeoJSON Initialization + color ↓

fetch('content/data/countries.geojson')
  .then((response) => response.json())
  .then((data) => {
    countriesLayers = L.geoJSON(data, {
      style() {
        return {
          fillColor: 'red',
          weight: 0,
          opacity: 0,
          fillOpacity: 0,
          color: '#ffffff',
        };
      },
      onEachFeature(feature, layer) {
        layer.on('click', () => {
          if (home_button_manual_click === true) {
            layer.setStyle({
              fillColor: 'yellow', fillOpacity: 0.5, color: 'red', weight: 0.5,
            });
          }
        });
      },
    }).addTo(map);
  });

// // ↑ GeoJSON Initialization + color ↑

// // ↓ GeoJSON / Geolocation on Button Click ↓

function HomeHighlightClear() {
  if (home_button_manual_click === true || home_button_geolocation_click === true) {
    countriesLayers.eachLayer((layer) => {
      layer.setStyle({ fillOpacity: 0, color: 'transparent', weight: 0 });
    });
  }
}

function HomeMarkerClear() {
  if (active_Home_Marker) {
    active_Home_Marker.remove();
    active_Home_Marker = null;
  }
}

// Layer group containing all map markers
const mapMarkers = L
  .layerGroup()
  .addTo(map);

home_button_geolocation.addEventListener('click', () => {
  home_button_manual_click = false;
  home_button_geolocation_click = true;

  HomeMarkerClear();
  HomeHighlightClear();

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      const latlng = L.latLng(latitude, longitude);
      const containerPoint = map.latLngToContainerPoint(latlng);
      const layerAtLatLng = map.getLayerAt(containerPoint);
      layerAtLatLng.setStyle({
        fillOpacity: 0.5, fillColor: 'lightblue', color: 'green', weight: 0.5,
      });

      active_Home_Marker = L.marker([latitude, longitude], { icon: home_icon, id: 'home_marker' }).addTo(mapMarkers);
    });
  }
});

// // ↑ GeoJSON / Geolocation on Button Click ↑

// // ↓ GeoJSON / Manual Location ↓

home_button_manual.addEventListener('click', () => {
  home_button_manual_click = true;

  HomeMarkerClear();

  HomeHighlightClear();

  const mapClickListener = (e) => {
    const clickedLatLng = e.latlng;

    if (home_button_manual_click === true) {
      active_Home_Marker = L.marker(clickedLatLng, { icon: home_icon, id: 'home_marker' }).addTo(mapMarkers);
    }

    home_button_manual_click = false;

    map.off('click', mapClickListener);
  };

  map.on('click', mapClickListener);
});

// // ↑ GeoJSON / Manual Location ↑

// // ↓ GeoJSON / Home Button Center Marker ↓

home_button_zoom.addEventListener('click', () => {
  if (active_Home_Marker) {
    map.setView(active_Home_Marker.getLatLng(), 7);
  } else {
    alert('Home location is not set');
  }
});

// // ↑ GeoJSON / Home Button Center Marker ↑

// ↑ GeoJSON ↑

//   window.addEventListener("load", function () {
//       const cover = document.getElementById("cover");
//       cover.style.display = "none";
//   });
