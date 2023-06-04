const { L } = window;

// ↓ Leaflet Map ↓

const home_icon = L.icon({
  iconUrl: 'content/icons/home_icon.png',
  iconSize: [48, 48],
  iconAnchor: [24, 24],
});

const map = L.map('map', { zoomControl: false }).setView([50, 10], 6);

active_Home_Marker = '';

// // ↓ Leaflet Map / Tiles Change ↓

const mapTileLayer_A = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
  attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20,
});

const mapTileLayer_B = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { // prettier-ignore
  maxZoom: 15,
  attribution:
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
}); // prettier-ignore

const mapTileLayer_C = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
  attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20,
});

const mapTileLayer_D = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution:
        'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16,
  },
);

const AddonLabels = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}', {
  attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png',
});

const AddonBorders = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}', {
  attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png',
});

const AddonTrain = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
});

const AddonCycling = L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
});

mapTileLayer_B.addTo(map);
//     train.addTo(map);

map_tile_layer_A.addEventListener('click', () => {
  MapTileSwitch(mapTileLayer_B, mapTileLayer_C, mapTileLayer_D, mapTileLayer_A);
});

map_tile_layer_B.addEventListener('click', () => {
  MapTileSwitch(mapTileLayer_A, mapTileLayer_C, mapTileLayer_D, mapTileLayer_B);
});

map_tile_layer_C.addEventListener('click', () => {
  MapTileSwitch(mapTileLayer_A, mapTileLayer_B, mapTileLayer_D, mapTileLayer_C);
});

map_tile_layer_D.addEventListener('click', () => {
  MapTileSwitch(mapTileLayer_A, mapTileLayer_B, mapTileLayer_C, mapTileLayer_D);
});

map_tile_addon_train.addEventListener('click', () => {
  MapTileAddon(AddonTrain);
});

map_tile_addon_cycling.addEventListener('click', () => {
  MapTileAddon(AddonCycling);
});

map_tile_addon_borders.addEventListener('click', () => {
  MapTileAddon(AddonBorders);
});

map_tile_addon_labels.addEventListener('click', () => {
  MapTileAddon(AddonLabels);
});

function MapTileSwitch(RemoveLayer_1, RemoveLayer_2, RemoveLayer_3, AddLayer) {
  map.removeLayer(RemoveLayer_1);
  map.removeLayer(RemoveLayer_2);
  map.removeLayer(RemoveLayer_3);
  AddLayer.addTo(map);
}

function MapTileAddon(tile_addon) {
  if (map.hasLayer(tile_addon)) {
    tile_addon.removeFrom(map);
  } else {
    tile_addon.addTo(map);
  }
}

// // ↑ Leaflet Map / Tiles Change ↑

// ↑ Leaflet Map  ↑

// ↓ Home ↓

let home_button_manual_click = false;
let home_button_geolocation_click = false;

const home_button_main = document.getElementById('home_button_main');
const home_button_zoom = document.getElementById('home_button_zoom');
const home_button_geolocation = document.getElementById('home_button_geolocation');
const home_button_manual = document.getElementById('home_button_manual');

// ↑ Home ↑

// ↓ GeoJSON ↓

let home_marker_latitude;
let home_marker_longitude;

let countriesLayers = '';

// // ↓ GeoJSON Initialization + color ↓

fetch('content/data/countries.geojson')
  .then((response) => response.json())
  .then((data) => {
    countriesLayers = L.geoJSON(data, {
      style(feature) {
        return {
          fillColor: 'red',
          weight: 0,
          opacity: 0,
          fillOpacity: 0,
          color: '#ffffff',
        };
      },
      onEachFeature(feature, layer) {
        layer.on('click', (event) => {
          if (home_button_manual_click == true) {
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

home_button_geolocation.addEventListener('click', () => {
  home_button_manual_click = false;
  home_button_geolocation_click = true;

  HomeMarkerClear();
  HomeHighlightClear();

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      //         console.log(" Current location:", latitude, longitude);

      home_marker_latitude = latitude;
      home_marker_longitude = longitude;

      const latlng = L.latLng(latitude, longitude);
      const containerPoint = map.latLngToContainerPoint(latlng);
      const layerAtLatLng = map.getLayerAt(containerPoint);
      layerAtLatLng.setStyle({
        fillOpacity: 0.5, fillColor: 'lightblue', color: 'green', weight: 0.5,
      });

      active_Home_Marker = L.marker([latitude, longitude], { icon: home_icon, id: 'home_marker' }).addTo(map);
    });
  }
});

// // ↑ GeoJSON / Geolocation on Button Click ↑

// // ↓ GeoJSON / Manual Location ↓

home_button_manual.addEventListener('click', () => {
  home_button_manual_click = true;

  HomeMarkerClear();

  HomeHighlightClear();

  const mapClickListener = function (e) {
    const clickedLatLng = e.latlng;

    if (home_button_manual_click == true) {
      active_Home_Marker = L.marker(clickedLatLng, { icon: home_icon, id: 'home_marker' }).addTo(map);
    }

    home_marker_latitude = clickedLatLng.lat;
    home_marker_longitude = clickedLatLng.lng;

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

function HomeHighlightClear() {
  if (home_button_manual_click == true || home_button_geolocation_click == true) {
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

// ↑ GeoJSON ↑

//   window.addEventListener("load", function () {
//       const cover = document.getElementById("cover");
//       cover.style.display = "none";
//   });
