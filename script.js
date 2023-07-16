// ver: 0.4.15

// Bugs:

// ---------- 1. Deleting the travel log causes other travel logs highlights to be deleted (rewrite the highlights to update, based on the markers coordinates)
// ---------- 2. Closing the individual travel menu while selecting markers, brakes the travel logs

// Features to add:

// ---------- 1. Functional right side menu with travel logs divided on every trip (CRUD), new menu popup with a new trip settings, name, date, customizable markers and colors
//               - prevent generating the new travel id, if travel_settings_container is present
//               - travel logs, make it display only the travel name, name edit ( and maybe date ), on click make it extend to show all the log options (edit, markers, highlights ...)
//               - multi options polyline / leaflet motion
//               - when travel type is selected, make a jpg follow the mouse until the log is finished
//               - divide the travel logs on "main" travel destination / make the current travel logs, part of the main one /
//                        (add travel > name of the travel > main travel destination stored in the travel log container > adding multiple travels to the main one
//                        to prevent the travel types to mix and overlap in the same array)

// ---------- 2. Interactive timeline at the bottom of the page, with highlighted date of every travel ...
// ---------- 3. Separate tab to calculate the "achievements": overall trips distance (divided on the trip type: bicycle, car, plane, boat, motorcycle, walk), countries visited
// ---------- 4. Add local storage to save the trip progress and settings
// ---------- 5. Add loading animation before the page load
// ---------- 6. Add different page styles (font, animations, images, backgrounds, theme) - modern / middleage / other
// ---------- 7. Rewrite to React

// download the polyline offset, polyline snake anim / polyline decorator

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

const info_popup = document.getElementById("info_popup");
const info_popup_text = document.getElementById("info_popup_text");
const close_info_popup = document.getElementById("close_info_popup");

const add_travel = document.getElementById("add_travel");
const main_logs_container = document.querySelector(".main_logs_container");
const travel_logs_individual_main_container = document.getElementById("travel_logs_individual_main_container");

const travel_type_car = document.getElementById("travel_type_car");
const travel_type_plane = document.getElementById("travel_type_plane");
const travel_type_boat = document.getElementById("travel_type_boat");
const travel_type_walk = document.getElementById("travel_type_walk");
const travel_type_bicycle = document.getElementById("travel_type_bicycle");
const travel_type_motorcycle = document.getElementById("travel_type_motorcycle");

const check_icon_group = document.getElementById("check_icon_group");
const close_icon_group = document.getElementById("close_icon_group");

const check_icon_individual = document.getElementById("check_icon_individual");
const close_icon_individual = document.getElementById("close_icon_individual");

const marker_color_picker = document.getElementById("marker_color_picker");
const marker_opacity_slider = document.getElementById("marker_opacity_slider");

const main_logs_container_arrow = document.querySelector(".main_logs_container_arrow");
let main_logs_container_arrow_clicked = false;

let travel_logs_individual_input = "";
let travel_logs_individual_name = "";
travel_logs_individual_input = document.getElementById("travel_logs_individual_input");

let travel_logs_group_input = "";
let travel_logs_group_name = "";
travel_logs_group_input = document.getElementById("travel_logs_group_input");

// // ↓ Home / Basic interactiveness ↓

layers_button.addEventListener("click", () => {
  if (layers_container.style.display === "none" || layers_container.style.display === "") {
    layers_container.style.display = "block";
  } else {
    layers_container.style.display = "none";
  }
});

home_button_main.addEventListener("click", () => {
  map.off("click");
  travelTypeValueUpdate(false, false, false, false, false, false);

  if (location_container.style.display === "none" || location_container.style.display === "") {
    location_container.style.display = "block";
  } else {
    location_container.style.display = "none";
  }
});

add_travel.addEventListener("click", () => {
  travel_logs_group_input.value = "";
  travel_logs_individual_input.value = "";
  if (
    travel_logs_group_main_container.style.display === "none" ||
    travel_logs_group_main_container.style.display === ""
  ) {
    travel_logs_group_main_container.style.display = "block";
    check_icon_group.style.display = "block";
    close_icon_group.style.display = "block";
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

let highlights = [];
let markers = [];
let markersCoordinates = [];
let polylines = [];
let travelLogs = [];
let random_id = "";

import leafletConfig from "./LeafletConfig.js";

const { L } = window;

const maxBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));
const map = L.map("map", {
  zoomControl: false,
  maxBounds: maxBounds,
  maxBoundsViscosity: 0.8,
}).setView([50, 10], 6);

let home_circle_color = "#8AFF14";
let home_circle_opacity = 0.5;
let marker_highlight_color = "#1495ED";
let marker_highlight_opacity = 0.5;

let home_marker = "";
let marker = "";

let home_button_manual_click = false;
let home_circle = null;

let travel_type_car_click = false;
let travel_type_plane_click = false;
let travel_type_boat_click = false;
let travel_type_walk_click = false;
let travel_type_bicycle_click = false;
let travel_type_motorcycle_click = false;

const { mapTileLayer_A, mapTileLayer_B, mapTileLayer_C, mapTileLayer_D } = leafletConfig.tilemaps;
const { home_icon, car_icon, plane_icon, boat_icon, walk_icon, bicycle_icon, motorcycle_icon } =
  leafletConfig.marker_icons;
const { trainsAddon, cyclingAddon, bordersAddon, labelsAddon } = leafletConfig.addons;

const mapTileLayers = L.layerGroup([mapTileLayer_B]).addTo(map);

// // ↓ Leaflet Map / Tiles Change ↓

map_tile_layer_A.addEventListener("click", () => switchTileMap(mapTileLayer_A));
map_tile_layer_B.addEventListener("click", () => switchTileMap(mapTileLayer_B));
map_tile_layer_C.addEventListener("click", () => switchTileMap(mapTileLayer_C));
map_tile_layer_D.addEventListener("click", () => switchTileMap(mapTileLayer_D));

map_tile_addon_labels.addEventListener("click", () => switchTileAddon(labelsAddon));
map_tile_addon_borders.addEventListener("click", () => switchTileAddon(bordersAddon));
map_tile_addon_train.addEventListener("click", () => switchTileAddon(trainsAddon));
map_tile_addon_cycling.addEventListener("click", () => switchTileAddon(cyclingAddon));

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

// // ↑ Leaflet Map / Tiles Change ↑
// // ↓ Leaflet Map / Marker + Polyline visibility toggle ↓

markers_toggle.addEventListener("click", () => {
  markers.forEach((marker) => {
    if (map.hasLayer(marker)) {
      marker.removeFrom(map);
    } else {
      marker.addTo(map);
    }
  });

  for (let i = 0; i < polylines.length; i++) {
    const polyline = polylines[i][0];
    if (map.hasLayer(polyline)) {
      map.removeLayer(polyline);
    } else {
      map.addLayer(polyline);
    }
  }
});

// // ↑ Leaflet Map / Marker + Polyline visibility toggle ↑
// // ↓ Leaflet Map / Custom Home + marker Highlight Color + opacity ↓

home_color_picker.addEventListener("input", function () {
  home_circle_color = home_color_picker.value;
});

home_opacity_slider.addEventListener("input", function () {
  home_circle_opacity = parseFloat(home_opacity_slider.value);
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
// // ↓ GeoJSON Initialization + country highlight ↓

let defaultCountryHighlight = 0;

fetch("content/data/countries.geojson")
  .then((response) => response.json())
  .then((data) => {
    highlights[defaultCountryHighlight] = L.geoJSON(data, {
      style: {
        fillColor: "",
        weight: 0,
        opacity: 0,
        fillOpacity: 0,
      },
      onEachFeature: function (feature, layer) {
        layer.on("click", () => {
          if (travel_type_car_click) {
            setLayerStyle(layer, marker_highlight_color, marker_highlight_opacity, "car", random_id);
            highlights.push({ type: "car", random_id, layer });
          }
          if (travel_type_plane_click) {
            setLayerStyle(layer, marker_highlight_color, marker_highlight_opacity, "plane", random_id);
            highlights.push({ type: "plane", random_id, layer });
          }
          if (travel_type_boat_click) {
            setLayerStyle(layer, marker_highlight_color, marker_highlight_opacity, "boat", random_id);
            highlights.push({ type: "boat", random_id, layer });
          }
          if (travel_type_walk_click) {
            setLayerStyle(layer, marker_highlight_color, marker_highlight_opacity, "walk", random_id);
            highlights.push({ type: "walk", random_id, layer });
          }
          if (travel_type_bicycle_click) {
            setLayerStyle(layer, marker_highlight_color, marker_highlight_opacity, "bicycle", random_id);
            highlights.push({ type: "bicycle", random_id, layer });
          }
          if (travel_type_motorcycle_click) {
            setLayerStyle(layer, marker_highlight_color, marker_highlight_opacity, "motorcycle", random_id);
            highlights.push({ type: "motorcycle", random_id, layer });
          }
        });
      },
    }).addTo(map);
  });

function setLayerStyle(layer, fillColor, fillOpacity, attribution, random_id) {
  layer.setStyle({
    fillColor: fillColor,
    fillOpacity: fillOpacity,
    color: "black",
    weight: 1,
    opacity: 1,
  });
  layer.defaultOptions.attribution = attribution;
  layer.defaultOptions.id = random_id;
}

// // ↓ GeoJSON Initialization + country highlight ↓

// // ↓ GeoJSON / Geolocation on Button Click ↓

home_button_geolocation.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, false, false, false);

  homeMarkerClear();

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      const latlng = L.latLng(latitude, longitude);

      // const containerPoint = map.latLngToContainerPoint(latlng);
      // const layerAtLatLng = map.getLayerAt(containerPoint);

      home_marker = L.marker([latitude, longitude], {
        icon: home_icon,
        id: "home_marker",
      });
      home_marker.addTo(map).bounce(1);
      markers.push(home_marker);
      home_circle = L.circle(home_marker.getLatLng(), {
        radius: 50000,
        color: home_circle_color,
        fillOpacity: home_circle_opacity,
        weight: 1,
      }).addTo(map);
    });
  }
  setTimeout(homeMarkerZoom, 100);
});

// // ↑ GeoJSON / Geolocation on Button Click ↑
// // ↓ GeoJSON / Manual Location ↓

home_button_manual.addEventListener("click", () => {
  travelTypeValueUpdate(true, false, false, false, false, false);

  homeMarkerClear();

  const mapClickListener = (e) => {
    const clickedLatLng = e.latlng;

    if (home_button_manual_click === true) {
      home_marker = L.marker(clickedLatLng, {
        icon: home_icon,
        id: "home_marker",
      });
      home_marker.addTo(map).bounce(1);
      markers.push(home_marker);
      home_circle = L.circle(home_marker.getLatLng(), {
        radius: 50000,
        color: home_circle_color,
        fillOpacity: home_circle_opacity,
        weight: 1,
      }).addTo(map);
    }

    home_button_manual_click = false;

    map.off("click", mapClickListener);
  };
  map.on("click", mapClickListener);
});

// // ↑ GeoJSON / Manual Location ↑
// // ↓ GeoJSON / Home Button Center Marker ↓

home_button_zoom.addEventListener("click", () => {
  homeMarkerZoom();
});

// // ↑ GeoJSON / Home Button Center Marker ↑

function homeMarkerClear() {
  if (home_marker) {
    home_marker.remove();
    home_marker = null;

    if (home_circle) {
      home_circle.remove();
      home_circle = null;
    }
  }
}

function homeMarkerZoom() {
  if (home_marker) {
    map.setView(home_marker.getLatLng(), 7);
  } else {
    showInfoPopup("Home location not set!");
  }
}

// ↑ GeoJSON ↑
// ↓ Travel Log ↓
// // ↓ Travel Log / Log markers ↓

let type = "";

travel_type_car.addEventListener("click", () => {
  travelTypeValueUpdate(false, true, false, false, false, false, false);

  if (travel_type_car_click == true) {
    map.off("click");
    function onMapClick(e) {
      let lat = e.latlng.lat;
      let lng = e.latlng.lng;

      marker = L.marker([lat, lng], {
        icon: car_icon,
        travelType: "car",
        id: random_id,
      });

      marker.addTo(map).bounce(1);
      markers.push(marker);

      type = "car";

      markersCoordinates[markersCoordinates.length - 1].push([lat, lng, [random_id, type]]);
      drawPolyline();
    }

    map.on("click", onMapClick);
  }
});

travel_type_plane.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, true, false, false, false, false);

  if (travel_type_plane_click == true) {
    map.off("click");
    function onMapClick(e) {
      let lat = e.latlng.lat;
      let lng = e.latlng.lng;

      marker = L.marker([lat, lng], {
        icon: plane_icon,
        travelType: "plane",
        id: random_id,
      });

      marker.addTo(map).bounce(1);
      markers.push(marker);

      type = "plane";
      markersCoordinates[markersCoordinates.length - 1].push([lat, lng, [random_id, type]]);
      drawPolyline();
    }

    map.on("click", onMapClick);
  }
});

travel_type_boat.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, true, false, false, false);

  if (travel_type_boat_click == true) {
    map.off("click");
    function onMapClick(e) {
      let lat = e.latlng.lat;
      let lng = e.latlng.lng;

      marker = L.marker([lat, lng], {
        icon: boat_icon,
        travelType: "boat",
        id: random_id,
      });

      marker.addTo(map).bounce(1);
      markers.push(marker);

      type = "boat";
      markersCoordinates[markersCoordinates.length - 1].push([lat, lng, [random_id, type]]);
      drawPolyline();
    }

    map.on("click", onMapClick);
  }
});

travel_type_walk.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, false, true, false, false);

  if (travel_type_walk_click == true) {
    map.off("click");
    function onMapClick(e) {
      let lat = e.latlng.lat;
      let lng = e.latlng.lng;

      marker = L.marker([lat, lng], {
        icon: walk_icon,
        travelType: "walk",
        id: random_id,
      });

      marker.addTo(map).bounce(1);
      markers.push(marker);

      type = "walk";
      markersCoordinates[markersCoordinates.length - 1].push([lat, lng, [random_id, type]]);
      drawPolyline();
    }

    map.on("click", onMapClick);
  }
});

travel_type_bicycle.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, false, false, true, false);

  if (travel_type_bicycle_click == true) {
    map.off("click");
    function onMapClick(e) {
      let lat = e.latlng.lat;
      let lng = e.latlng.lng;

      marker = L.marker([lat, lng], {
        icon: bicycle_icon,
        travelType: "bicycle",
        id: random_id,
      });

      marker.addTo(map).bounce(1);
      markers.push(marker);

      type = "bicycle";
      markersCoordinates[markersCoordinates.length - 1].push([lat, lng, [random_id, type]]);
      drawPolyline();
    }

    map.on("click", onMapClick);
  }
});

travel_type_motorcycle.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, false, false, false, true);

  if (travel_type_motorcycle_click == true) {
    map.off("click");
    function onMapClick(e) {
      let lat = e.latlng.lat;
      let lng = e.latlng.lng;

      marker = L.marker([lat, lng], {
        icon: motorcycle_icon,
        travelType: "motorcycle",
        id: random_id,
      });

      marker.addTo(map).bounce(1);
      markers.push(marker);

      type = "motorcycle";
      markersCoordinates[markersCoordinates.length - 1].push([lat, lng, [random_id, type]]);
      drawPolyline();
    }

    map.on("click", onMapClick);
  }
});

function travelTypeValueUpdate(manual, car, plane, boat, walk, bicycle, motorcycle) {
  home_button_manual_click = manual;
  travel_type_car_click = car;
  travel_type_plane_click = plane;
  travel_type_boat_click = boat;
  travel_type_walk_click = walk;
  travel_type_bicycle_click = bicycle;
  travel_type_motorcycle_click = motorcycle;
}

// // ↑ Travel Log / Log markers ↑
// // ↓ Travel Log / CRUD setup ↓

let travel_date_start = "";
let travel_date_end = "";
let stored_log_id = "";
let stored_group_id = "";

check_icon_group.addEventListener("click", (event) => {
  random_id = "";
  random_id = random_id_generator();
  console.log(random_id);

  travelLogGroupSubmit(event);

  if (travel_logs_group_name !== "") {
    travel_logs_group_main_container.style.display = "none";
    check_icon_group.style.display = "none";
    close_icon_group.style.display = "none";
  }
});

close_icon_group.addEventListener("click", () => {
  travel_logs_group_input.value = "";
  if (
    travel_logs_group_main_container.style.display === "none" ||
    travel_logs_group_main_container.style.display === ""
  ) {
    travel_logs_group_main_container.style.display = "block";
    check_icon_group.style.display = "block";
    close_icon_group.style.display = "block";
  } else {
    travel_logs_group_main_container.style.display = "none";
    check_icon_group.style.display = "none";
    close_icon_group.style.display = "none";
  }
});

check_icon_individual.addEventListener("click", (event) => {
  map.off("click");

  travelTypeValueUpdate(false, false, false, false, false, false);

  travelLogIndividualSubmit(event);

  if (travel_logs_individual_name !== "") {
    travel_logs_individual_main_container.style.display = "none";
    check_icon_individual.style.display = "none";
    close_icon_individual.style.display = "none";
  }
});

close_icon_individual.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, false, false, false);

  travel_logs_individual_input.value = "";

  if (
    travel_logs_individual_main_container.style.display === "none" ||
    travel_logs_individual_main_container.style.display === ""
  ) {
    travel_logs_individual_main_container.style.display = "block";
    check_icon_individual.style.display = "block";
    close_icon_individual.style.display = "block";
  } else {
    travel_logs_individual_main_container.style.display = "none";
    check_icon_individual.style.display = "none";
    close_icon_individual.style.display = "none";
  }
});

function travelLogIndividualSubmit(event) {
  event.preventDefault();

  travel_logs_individual_name = travel_logs_individual_input.value;

  if (travel_logs_individual_name === "") {
    showInfoPopup("Please enter valid name");
    return;
  }

  if (travel_date_start === "" || travel_date_end === "") {
    showInfoPopup("Please select a valid date range");
    return;
  }

  // div

  const $travel_logs_individual_div_main = document.createElement("div");
  $travel_logs_individual_div_main.className = "travel_logs_individual_div_main";

  // div
  // travel name

  const $travel_logs_individual_name = document.createElement("span");
  $travel_logs_individual_name.textContent = travel_logs_individual_name;
  $travel_logs_individual_name.classList.add("travel_logs_individual_name");
  $travel_logs_individual_div_main.appendChild($travel_logs_individual_name);

  // travel name

  //      const log_date = document.createElement('span');                          // travel log, make the travel date visible / not needed now
  //      log_date.textContent = travel_date_start + ' - ' + travel_date_end;
  //      travel_logs_individual_div_main.appendChild(log_date);

  // travel name edit

  const $travel_logs_individual_name_edit = document.createElement("button");
  $travel_logs_individual_name_edit.textContent = "\u270E";
  $travel_logs_individual_name_edit.classList.add("travel_logs_individual_name_edit");
  $travel_logs_individual_name_edit.addEventListener("click", () => {
    const $travel_logs_individual_name_new = prompt("Enter new text:");

    if ($travel_logs_individual_name_new == null || $travel_logs_individual_name_new == "") {
      showInfoPopup("Please enter a valid name");
    } else {
      $travel_logs_individual_name.textContent = $travel_logs_individual_name_new;
      const logId = $log_id.textContent;
      const logIndex = travelLogs.findIndex((log) => log[1] === logId);
      if (logIndex !== -1) {
        travelLogs[logIndex][0] = $travel_logs_individual_name_new;
      }
    }
  });
  $travel_logs_individual_div_main.appendChild($travel_logs_individual_name_edit);

  // travel name edit
  // travel id

  const $log_id = document.createElement("span");
  $log_id.textContent = random_id;
  $travel_logs_individual_div_main.appendChild($log_id);
  console.log("log id", $log_id);

  // travel id
  // delete log

  const $travel_logs_delete = document.createElement("button");
  $travel_logs_delete.textContent = "Delete";
  $travel_logs_delete.addEventListener("click", () => {
    stored_log_id = $log_id.textContent;
    removeMarkers();
    removeHighlight();
    removeMarkersCoordinates();
    drawPolyline();
    removeTravelLogs();

    const index = travelLogs.indexOf(travel_logs_individual_name);
    if (index !== -1) {
      travelLogs.splice(index, 1);
    }
    $travel_logs_individual_div_main.remove();
  });
  $travel_logs_individual_div_main.appendChild($travel_logs_delete);

  // delete log
  // test button

  const $travel_logs_individual_test_button = document.createElement("button");
  $travel_logs_individual_test_button.textContent = "logs test";
  $travel_logs_individual_test_button.addEventListener("click", () => {
    stored_log_id = $log_id.textContent;
    console.log(stored_log_id);
  });
  $travel_logs_individual_div_main.appendChild($travel_logs_individual_test_button);

  // test button
  // display the log

  // const $logs_list = document.getElementById("logs_list");
  // $logs_list.appendChild($travel_logs_individual_div_main);

  const $content_div = document.getElementById(stored_group_id);
  $content_div.appendChild($travel_logs_individual_div_main);

  // display the log

  travelLogs.push([travel_logs_individual_name, random_id, travel_date_start + " - " + travel_date_end]);

  travel_logs_individual_input.value = "";
  random_id = "";

  console.log("Logs Array:", travelLogs);
}

function travelLogGroupSubmit(event) {
  event.preventDefault();

  travel_logs_group_name = travel_logs_group_input.value;

  if (travel_logs_group_name === "") {
    showInfoPopup("Please enter valid name");
    return;
  }

  if (travel_date_start === "" || travel_date_end === "") {
    showInfoPopup("Please select a valid date range");
    return;
  }

  // div

  stored_group_id = random_id;

  const $travel_logs_group_div_main = document.createElement("div");
  $travel_logs_group_div_main.className = "travel_logs_group_div_main";

  const $travel_logs_group_div_settings = document.createElement("div");
  $travel_logs_group_div_settings.className = "travel_logs_group_div_settings";

  const $travel_logs_group_content = document.createElement("div");
  $travel_logs_group_content.className = "travel_logs_group_div_content";
  $travel_logs_group_content.id = stored_group_id;

  // div
  // travel name

  const $travel_logs_group_name = document.createElement("span");
  $travel_logs_group_name.textContent = travel_logs_group_name;
  $travel_logs_group_name.classList.add("travel_logs_group_name");
  $travel_logs_group_div_settings.appendChild($travel_logs_group_name);

  // travel name
  // travel name edit

  const $travel_logs_group_name_edit = document.createElement("button");
  $travel_logs_group_name_edit.textContent = "\u270E";
  $travel_logs_group_name_edit.classList.add("travel_logs_group_name_edit");
  $travel_logs_group_name_edit.addEventListener("click", () => {
    const $travel_logs_group_name_new = prompt("Enter new text:");

    if ($travel_logs_group_name_new == null || $travel_logs_group_name_new == "") {
      showInfoPopup("Please enter a valid name");
    } else {
      $travel_logs_group_name.textContent = $travel_logs_group_name_new;
      const logId = $log_id.textContent;
      const logIndex = travelLogs.findIndex((log) => log[1] === logId);
      if (logIndex !== -1) {
        travelLogs[logIndex][0] = $travel_logs_group_name_new;
      }
    }
  });
  $travel_logs_group_div_settings.appendChild($travel_logs_group_name_edit);

  // travel name edit
  // travel id

  const $log_id = document.createElement("span");
  $log_id.textContent = random_id;
  $travel_logs_group_div_settings.appendChild($log_id);
  console.log("log id", $log_id);

  // travel id
  // delete log

  const $travel_logs_delete = document.createElement("button");
  $travel_logs_delete.textContent = "Delete";
  $travel_logs_delete.addEventListener("click", () => {
    const index = travelLogs.indexOf(travel_logs_group_name);
    if (index !== -1) {
      travelLogs.splice(index, 1);
    }
    $travel_logs_group_div_main.remove();
  });
  $travel_logs_group_div_settings.appendChild($travel_logs_delete);

  // delete log
  // add individual travel button

  const $travel_logs_group_add_travel_button = document.createElement("button");
  $travel_logs_group_add_travel_button.textContent = "add individual travel";
  $travel_logs_group_add_travel_button.addEventListener("click", () => {
    stored_group_id = $log_id.textContent;
    console.log(stored_group_id);
    markersCoordinates.push([]);
    random_id = "";
    random_id = random_id_generator();

    if (
      travel_logs_individual_main_container.style.display === "none" ||
      travel_logs_individual_main_container.style.display === ""
    ) {
      travel_logs_individual_main_container.style.display = "block";
      check_icon_individual.style.display = "block";
      close_icon_individual.style.display = "block";
    }
    console.log(stored_group_id);
  });
  $travel_logs_group_div_settings.appendChild($travel_logs_group_add_travel_button);

  // add individual travel button
  // test button

  const $travel_logs_group_test_button = document.createElement("button");
  $travel_logs_group_test_button.textContent = "test";
  $travel_logs_group_test_button.addEventListener("click", () => {
    stored_group_id = $log_id.textContent;
    console.log(stored_group_id);
    console.log($travel_logs_group_content.id);
  });

  $travel_logs_group_div_settings.appendChild($travel_logs_group_test_button);

  // test button
  // display the log

  const $logs_list = document.getElementById("logs_list");
  $logs_list.appendChild($travel_logs_group_div_main);
  $travel_logs_group_div_main.appendChild($travel_logs_group_div_settings);
  $travel_logs_group_div_main.appendChild($travel_logs_group_content);

  // display the log

  travelLogs.push([travel_logs_group_name, random_id, travel_date_start + " - " + travel_date_end]);

  travel_logs_group_input.value = "";
  random_id = "";

  console.log("Logs Array:", travelLogs);
}

// // ↑ Travel Log / CRUD setup ↑

function removeMarkers() {
  for (let i = markers.length - 1; i >= 0; i--) {
    const marker = markers[i];
    if (marker.options.id === stored_log_id) {
      map.removeLayer(marker);
      markers.splice(i, 1);
    }
  }
}

function removeMarkersCoordinates() {
  markersCoordinates = markersCoordinates.filter((array) => {
    return !array.some((item) => item[2][0] === stored_log_id);
  });
}

function removeHighlight() {
  try {
    for (let i = 0; i < highlights.length; i++) {
      if (highlights[i].random_id === stored_log_id) {
        highlights[i].random_id = "removed";
      }
    }

    highlights.forEach((highlightLayer) => {
      highlightLayer.eachLayer((layer) => {
        if (layer.defaultOptions.id === stored_log_id) {
          layer.setStyle({ fillOpacity: 0, color: "transparent", weight: 0 });
          layer.defaultOptions.id = "removed";
        }
      });
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

function removeTravelLogs() {
  for (let i = 0; i < travelLogs.length; i++) {
    const logArray = travelLogs[i];
    if (logArray.includes(stored_log_id)) {
      travelLogs.splice(i, 1);
      break;
    }
  }
}

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

function random_id_generator() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    random_id += characters[randomIndex];
  }

  return random_id;
}

// // ↑ Travel Log / Travel ID generator ↑

// ↑ Travel Log ↑

// ↓ Leaflet Polyline ↓

function drawPolyline() {
  for (let i = 0; i < polylines.length; i++) {
    map.removeLayer(polylines[i][0]);
  }
  polylines = [];

  for (let i = 0; i < markersCoordinates.length; i++) {
    const coordinates = markersCoordinates[i];
    if (coordinates && coordinates.length > 1) {
      let color = "";

      if (coordinates[0][2][1] === "car") {
        color = "red";
      } else if (coordinates[0][2][1] === "plane") {
        color = "white";
      } else if (coordinates[0][2][1] === "boat") {
        color = "blue";
      } else if (coordinates[0][2][1] === "walk") {
        color = "brown";
      } else if (coordinates[0][2][1] === "bicycle") {
        color = "green";
      } else if (coordinates[0][2][1] === "motorcycle") {
        color = "yellow";
      }

      const polyline = L.polyline(coordinates, {
        color: color,
        opacity: 1,
        weight: 5,
        dashArray: "10, 20",
      }).addTo(map);

      polylines.push([polyline, random_id]);
    }
  }
}

// ↑ Leaflet Polyline ↑

// ↓ Other ↓

// ↓ Other / Info popup ↓

function showInfoPopup(text) {
  info_popup_text.textContent = text;
  info_popup.style.display = "block";
}

function closeInfoPopup() {
  info_popup.style.display = "none";
}
close_info_popup.addEventListener("click", closeInfoPopup);

// ↑ Other / Info popup ↑

// ↑ Other ↑

// // ---------- TEST ---------- ↓

// // ---------- Check if page is loaded  ---------- ↓

//   window.addEventListener("load", function () {
//       const cover = document.getElementById("cover");
//       cover.style.display = "none";
//   });

test_button.addEventListener("click", () => {
  console.log("highlight array", highlights);
  console.log("markers array", markers);
  console.log("marker coordinates", markersCoordinates);
  console.log("polylines", polylines);
  console.log("Logs Array:", travelLogs);
});

test_button_2.addEventListener("click", () => {});
