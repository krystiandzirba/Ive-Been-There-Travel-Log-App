// Bugs:

// ---------- 1. Major bug: Geolocation and home marker bugs when the device location is out of the leaflet map bounds

// Features to add:

// ---------- 1. Functional right side menu with travel logs divided on every trip (CRUD), new menu popup with a new trip settings, name, date, customizable markers and colors
//               - make a small pen icon to edit the travel name and separate icon to edit/delete markers and highlights
//               - prevent generating the new travel id, if travel_settings_container is present
//               - store all of the markers in separated array

// ---------- 2. Interactive timeline at the bottom of the page, with highlighted date of every travel ...
// ---------- 3. Separate tab to calculate the "achievements": overall trips distance (divided on the trip type: bicycle, car, plane, boat), countries visited
// ---------- 4. Add local storage to save the trip progress and settings
// ---------- 5. Add loading animation before the page load
// ---------- 6. Add different page styles (font, animations, images, backgrounds, theme) - modern / middleage / other
// ---------- 7. Rewrite to React

// ↓ Home ↓

const layers_button = document.getElementById("layers_button");
const layers_container = document.getElementById("layers_container");
const map_tile_layer_A = document.querySelector("#map_tile_layer_A");
const map_tile_layer_B = document.querySelector("#map_tile_layer_B");
const map_tile_layer_C = document.querySelector("#map_tile_layer_C");
const map_tile_layer_D = document.querySelector("#map_tile_layer_D");

const map_tile_addon_labels = document.querySelector("#map_tile_addon_labels");
const map_tile_addon_borders = document.querySelector("#map_tile_addon_borders");
const map_tile_addon_train = document.querySelector("#map_tile_addon_train");
const map_tile_addon_cycling = document.querySelector("#map_tile_addon_cycling");

const home_button_main = document.getElementById("home_button_main");
const location_container = document.getElementById("location_container");
const home_button_geolocation = document.getElementById("home_button_geolocation");
const home_button_manual = document.getElementById("home_button_manual");
const home_button_zoom = document.getElementById("home_button_zoom");
const home_color_picker = document.getElementById("home_color_picker");
const home_opacity_slider = document.getElementById("home_opacity_slider");

const popupDiv = document.getElementById("info_popup");
const info_popup_text = document.getElementById("info_popup_text");
const close_info_popup = document.getElementById("close_info_popup");

const add_travel = document.getElementById("add_travel");
const main_logs_container = document.querySelector(".main_logs_container");

const main_travel_settings_container = document.getElementById("main_travel_settings_container");
const travel_type_car = document.getElementById("travel_type_car");
const travel_type_plane = document.getElementById("travel_type_plane");
const travel_type_boat = document.getElementById("travel_type_boat");
const check_icon = document.getElementById("check_icon");
const close_icon = document.getElementById("close_icon");
const marker_color_picker = document.getElementById("marker_color_picker");
const marker_opacity_slider = document.getElementById("marker_opacity_slider");

const main_logs_container_arrow = document.querySelector(".main_logs_container_arrow");
let main_logs_container_arrow_clicked = false;

let travel_logs_input = "";
let travel_log_name = "";

// // ↓ Home / Basic interactiveness ↓

check_icon.addEventListener("click", (event) => {
  map.off("click");
  travel_type_car_click = false;
  TravelLogSubmit(event);

  if (travel_log_name !== "") {
    main_travel_settings_container.style.display = "none";
    check_icon.style.display = "none";
    close_icon.style.display = "none";
  }
});

layers_button.addEventListener("click", () => {
  if (layers_container.style.display === "none" || layers_container.style.display === "") {
    layers_container.style.display = "block";
  } else {
    layers_container.style.display = "none";
  }
});

home_button_main.addEventListener("click", () => {
  map.off("click");
  travel_type_car_click = false;
  if (location_container.style.display === "none" || location_container.style.display === "") {
    location_container.style.display = "block";
  } else {
    location_container.style.display = "none";
  }
});

add_travel.addEventListener("click", () => {
  TravelID = "";
  TravelID = RandomTravelId();
  console.log(TravelID);

  if (main_travel_settings_container.style.display === "none" || main_travel_settings_container.style.display === "") {
    main_travel_settings_container.style.display = "block";
    check_icon.style.display = "block";
    close_icon.style.display = "block";
  }
});

close_icon.addEventListener("click", () => {
  travel_type_car_click = false;
  if (main_travel_settings_container.style.display === "none" || main_travel_settings_container.style.display === "") {
    main_travel_settings_container.style.display = "block";
    check_icon.style.display = "block";
    close_icon.style.display = "block";
  } else {
    main_travel_settings_container.style.display = "none";
    check_icon.style.display = "none";
    close_icon.style.display = "none";
  }
});

main_logs_container_arrow.addEventListener("click", function () {
  if (main_logs_container_arrow_clicked) {
    main_logs_container_arrow.style.left = "70%";
    main_logs_container.style.left = "75%";
  } else {
    main_logs_container_arrow.style.left = "95%";
    main_logs_container.style.left = "100%";
  }

  main_logs_container_arrow_clicked = !main_logs_container_arrow_clicked;
});

// // ↑ Home / Basic interactiveness ↑

// ↑ Home ↑

// ↓ Leaflet Map ↓

import leafletConfig from "./LeafletConfig.js";

const { L } = window;

const maxBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));
const map = L.map("map", {
  zoomControl: false,
  maxBounds: maxBounds,
  maxBoundsViscosity: 0.8,
}).setView([50, 10], 6);

let home_highlight_color = "#8AFF14";
let home_highlight_opacity = 0.5;
let marker_highlight_color = "#1495ED";
let marker_highlight_opacity = 0.5;

let active_Home_Marker = "";
let marker = "";

let home_button_manual_click = false;
let home_button_geolocation_click = false;

let travel_type_car_click = false;
let travel_type_plane_click = false;
let travel_type_boat_click = false;
let travel_type_walk_click = false;
let travel_type_bicycle_click = false;

const { mapTileLayer_A, mapTileLayer_B, mapTileLayer_C, mapTileLayer_D } = leafletConfig.tilemaps;
const { home_icon, car_icon, plane_icon } = leafletConfig.marker_icons;
const { trainsAddon, cyclingAddon, bordersAddon, labelsAddon } = leafletConfig.addons;

const mapTileLayers = L.layerGroup([mapTileLayer_B]).addTo(map);
const mapMarkers = L.layerGroup().addTo(map);

// // ↓ Leaflet Map / Tiles Change ↓

map_tile_layer_A.addEventListener("click", () => switchTileMap(mapTileLayer_A));
map_tile_layer_B.addEventListener("click", () => switchTileMap(mapTileLayer_B));
map_tile_layer_C.addEventListener("click", () => switchTileMap(mapTileLayer_C));
map_tile_layer_D.addEventListener("click", () => switchTileMap(mapTileLayer_D));

map_tile_addon_labels.addEventListener("click", () => switchTileAddon(labelsAddon));
map_tile_addon_borders.addEventListener("click", () => switchTileAddon(bordersAddon));
map_tile_addon_train.addEventListener("click", () => switchTileAddon(trainsAddon));
map_tile_addon_cycling.addEventListener("click", () => switchTileAddon(cyclingAddon));

// // ↑ Leaflet Map / Tiles Change ↑

function switchTileAddon(tile_addon) {
  if (map.hasLayer(tile_addon)) {
    tile_addon.removeFrom(map);
  } else {
    tile_addon.addTo(map);
  }
}

function switchTileMap(layer) {
  mapTileLayers.clearLayers();
  mapTileLayers.addLayer(layer);
}

// // ↓ Leaflet Map / Custom Home + marker Highlight Color + opacity ↓

home_color_picker.addEventListener("input", function () {
  home_highlight_color = home_color_picker.value;
});

home_opacity_slider.addEventListener("input", function () {
  home_highlight_opacity = parseFloat(home_opacity_slider.value);
});

marker_color_picker.addEventListener("input", function () {
  marker_highlight_color = marker_color_picker.value;
});

marker_opacity_slider.addEventListener("input", function () {
  marker_highlight_opacity = parseFloat(marker_opacity_slider.value);
});

// // ↑ Leaflet Map / Custom Home + marker Highlight Color + opacity ↑

// ↑ Leaflet Map  ↑

// ↓ GeoJSON ↓

let countriesLayers = "";
let homeCountryLayer = null;
let carCountryLayer = null;

// // ↓ GeoJSON Initialization + color ↓

fetch("content/data/countries.geojson")
  .then((response) => response.json())
  .then((data) => {
    countriesLayers = L.geoJSON(data, {
      style() {
        return {
          fillColor: "",
          weight: 0,
          opacity: 0,
          fillOpacity: 0,
          // color: "#ffffff",
        };
      },
      onEachFeature(feature, layer) {
        layer.on("click", () => {
          if (home_button_manual_click === true) {
            layer.setStyle({
              fillColor: home_highlight_color,
              fillOpacity: home_highlight_opacity,
              color: "red",
              weight: 0.5,
            });

            homeCountryLayer = layer;
            homeCountryLayer.defaultOptions.attribution = "home";
            console.log(homeCountryLayer);
          }
          if (travel_type_car_click == true) {
            layer.setStyle({
              fillColor: marker_highlight_color,
              fillOpacity: marker_highlight_opacity,
              color: "red",
              weight: 0.5,
            });

            carCountryLayer = layer;
            carCountryLayer.defaultOptions.attribution = "car";
            console.log(carCountryLayer);
          }
        });
      },
    }).addTo(map);
  });

// // ↑ GeoJSON Initialization + color ↑

// // ↓ GeoJSON / Geolocation on Button Click ↓

home_button_geolocation.addEventListener("click", () => {
  home_button_manual_click = false;
  travel_type_car_click = false;
  home_button_geolocation_click = true;

  HomeMarkerClear();
  HomeHighlightClear();

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      const latlng = L.latLng(latitude, longitude);
      const containerPoint = map.latLngToContainerPoint(latlng);
      const layerAtLatLng = map.getLayerAt(containerPoint);
      layerAtLatLng.setStyle({
        fillOpacity: home_highlight_opacity,
        fillColor: home_highlight_color,
        color: "green",
        weight: 0.5,
      });

      active_Home_Marker = L.marker([latitude, longitude], {
        icon: home_icon,
        id: "home_marker",
      });
      active_Home_Marker.addTo(mapMarkers).bounce(1);

      homeCountryLayer = layerAtLatLng;
      homeCountryLayer.defaultOptions.attribution = "home";
      console.log(homeCountryLayer);
    });
  }
});

// // ↑ GeoJSON / Geolocation on Button Click ↑

// // ↓ GeoJSON / Manual Location ↓

home_button_manual.addEventListener("click", () => {
  home_button_manual_click = true;
  travel_type_car_click = false;

  HomeMarkerClear();
  HomeHighlightClear();

  const mapClickListener = (e) => {
    const clickedLatLng = e.latlng;

    if (home_button_manual_click === true) {
      active_Home_Marker = L.marker(clickedLatLng, {
        icon: home_icon,
        id: "home_marker",
      });
      active_Home_Marker.addTo(mapMarkers).bounce(1);
    }

    home_button_manual_click = false;

    map.off("click", mapClickListener);
  };
  map.on("click", mapClickListener);
});

// // ↑ GeoJSON / Manual Location ↑

// // ↓ GeoJSON / Home Button Center Marker ↓

home_button_zoom.addEventListener("click", () => {
  if (active_Home_Marker) {
    map.setView(active_Home_Marker.getLatLng(), 7);
  } else {
    showInfoPopup("Home location not set!");
  }
});

// // ↑ GeoJSON / Home Button Center Marker ↑

function HomeHighlightClear() {
  if (home_button_manual_click === true || home_button_geolocation_click === true) {
    countriesLayers.eachLayer((layer) => {
      if (layer.defaultOptions.attribution === "home") {
        layer.setStyle({ fillOpacity: 0, color: "transparent", weight: 0 });
      }
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

// ↓ Travel Log ↓

let TravelID = "";

// // ↓ Travel Log / Log markers ↓

travel_type_car.addEventListener("click", () => {
  travel_type_car_click = true;
  home_button_manual_click = false;

  if (travel_type_car_click == true) {
    function onMapClick(e) {
      var lat = e.latlng.lat;
      var lng = e.latlng.lng;

      marker = L.marker([lat, lng], {
        icon: car_icon,
        id: "car_marker",
      })
        .addTo(map)
        .bounce(1);
    }

    map.on("click", onMapClick);
  }
});

// // ↑ Travel Log / Log markers ↑

// // ↓ Travel Log / CRUD setup ↓

let travel_date_start = "";
let travel_date_end = "";

let TravelLogsArray = [];

function TravelLogSubmit(event) {
  event.preventDefault();

  travel_logs_input = document.getElementById("travel_logs_input");
  travel_log_name = travel_logs_input.value;

  if (travel_log_name === "") {
    showInfoPopup("Please enter valid name");
    return;
  }

  if (travel_date_start === "" || travel_date_end === "") {
    showInfoPopup("Please select a valid date range");
    return;
  }

  const new_log_div = document.createElement("div");
  new_log_div.className = "log";

  const log_name = document.createElement("span");
  log_name.textContent = travel_log_name;
  new_log_div.appendChild(log_name);

  //      const log_date = document.createElement('span');                          // travel log, make the travel date visible / not needed now
  //      log_date.textContent = travel_date_start + ' - ' + travel_date_end;
  //      new_log_div.appendChild(log_date);

  const travel_logs_edit = document.createElement("button");
  travel_logs_edit.textContent = "\u270E";
  travel_logs_edit.addEventListener("click", () => {
    const newText = prompt("Enter new text:");

    if (newText == null || newText == "") {
      showInfoPopup("Please enter a valid name");
    } else {
      log_name.textContent = newText;
    }
  });
  new_log_div.appendChild(travel_logs_edit);

  const travel_logs_delete = document.createElement("button");
  travel_logs_delete.textContent = "Delete";
  travel_logs_delete.addEventListener("click", () => {
    const index = TravelLogsArray.indexOf(travel_log_name);
    if (index !== -1) {
      TravelLogsArray.splice(index, 1);
    }
    new_log_div.remove();
  });
  new_log_div.appendChild(travel_logs_delete);

  const logs_list = document.getElementById("logs_list");
  logs_list.appendChild(new_log_div);

  TravelLogsArray.push({ name: travel_log_name, ID: TravelID, date: travel_date_start + " - " + travel_date_end });

  travel_logs_input.value = "";
  console.log(TravelID);
  TravelID = "travel ID is empty";
  console.log(TravelID);

  console.log("Items Array:", TravelLogsArray);
}

// // ↑ Travel Log / CRUD setup ↑

// // ↓ Travel Log / Date picker ↓

$(function () {
  const startDate = moment().startOf("day").format("YYYY/MM/DD");
  const endDate = moment().startOf("day").add(1, "day").format("YYYY/MM/DD");

  travel_date_start = startDate;
  travel_date_end = endDate;

  $('input[name="daterange"]').daterangepicker(
    {
      opens: "left",
      startDate,
      endDate,
      locale: {
        format: "YYYY/MM/DD",
      },
    },
    function (start, end, label) {
      travel_date_start = start.format("YYYY/MM/DD");
      travel_date_end = end.format("YYYY/MM/DD");

      console.log("Start Date: " + travel_date_start);
      console.log("End Date: " + travel_date_end);
    }
  );
});

// // ↑ Travel Log / Date picker ↑

// // ↓ Travel Log / Travel ID generator ↓

function RandomTravelId() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    TravelID += characters[randomIndex];
  }

  return TravelID;
}

// // ↑ Travel Log / Travel ID generator ↑

// ↑ Travel Log ↑

// ↓ Other ↓

// ↓ Other / Info popup ↓

function showInfoPopup(text) {
  info_popup_text.textContent = text;
  popupDiv.style.display = "block";
}

function closeInfoPopup() {
  popupDiv.style.display = "none";
}
close_info_popup.addEventListener("click", closeInfoPopup);

// ↑ Other / Info popup ↑

// ↓ Other / Toggle visibility ↓

//      function toggleContainerVisibility(container_id) { // requires rewriting
//        for (let i = 0; i < container_id.length; i++) {
//          let container_visibility = document.getElementById(container_id[i]);
//          if (
//            container_visibility.style.display === "" ||
//            container_visibility.style.display === "none"
//          ) {
//            container_visibility.style.display = "block";
//          } else {
//            container_visibility.style.display = "none";
//          }
//        }
//     }

// ↑ Other / Toggle visibility ↑

// ↑ Other ↑

// // ---------- TEST ---------- ↓

// // ---------- Check if page is loaded  ---------- ↓

//   window.addEventListener("load", function () {
//       const cover = document.getElementById("cover");
//       cover.style.display = "none";
//   });

// // ---------- Clear highlight with specific attribution  ---------- ↓

//   function CleanHome() {
//     if (homeCountryLayer.defaultOptions.attribution === "home") {
//       countriesLayers.eachLayer((layer) => {
//         homeCountryLayer.setStyle({ fillOpacity: 0, color: "transparent", weight: 0 });
//        });
//      }
//    }

//      setTimeout(CleanHome, 5000);
