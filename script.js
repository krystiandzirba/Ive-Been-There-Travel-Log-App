// ver: 1.0.6

// Bugs:

// Features to add:

// - black theme for timeline
// - portrait mode, no UI until mouse click
// - marker size slider
// - separate buttons to clear travel log / markers / highlights / timeline ...
// - true highlights drawn from every element in array, make it group in layers by its id, and add layers separately
//   (if multiple markers from the same individual log are placed in the same country, the true highlight is multiplied)
// - add a 0.5s timeout between deleting individual and group logs

// ---------- 5. Add different page styles (font, animations, images, backgrounds, theme) - modern / middleage / other
// ---------- 7. Add different languages
// ---------- 8. Add info boxes to help navigate the app while using it for the first time
// ---------- 9. Add D3 to visualize the statistics data
//               - add continent statistics (how many countries were visited in different continents, how many countries were visited)
// ---------- 10. populate the settings with options like: erase all data / report a bug / km-mil switch /

// multi options polyline / leaflet motion / polyline decorator / leaflet canvas markers /

// Variables ↓
// // Sidebar House ↓
const sidebar_house_button = document.getElementById("sidebar_house_button");
const house_icon = document.getElementById("house_icon");
const sub_house_button_container = document.getElementById("sub_house_button_container");
const sub_house_color_button = document.getElementById("sub_house_color_button");
const jscolor_home = document.getElementById("jscolor_home");
const sub_house_manual_location = document.getElementById("sub_house_manual_location");
const sub_house_geolocation = document.getElementById("sub_house_geolocation");
const sub_house_zoom = document.getElementById("sub_house_zoom");
const sub_house_delete = document.getElementById("sub_house_delete");

let home_button_manual_click = false;
let home_circle = null;

let home_marker = "";
let marker = "";

let jscolor_home_data = "";
let jscolor_home_color = "#8AFF14";
let jscolor_home_opacity = 0.5;

let house_container_timeout;

// // Sidebar House ↑
// // Sidebar Map Layers ↓

const sidebar_map_layers_button = document.getElementById("sidebar_map_layers_button");
const map_layers_icon = document.getElementById("map_layers_icon");
const sub_map_layers_container = document.getElementById("sub_map_layers_container");
const sub_map_tile_layer_A = document.querySelector("#sub_map_tile_layer_A");
const sub_map_tile_layer_B = document.querySelector("#sub_map_tile_layer_B");
const sub_map_tile_layer_C = document.querySelector("#sub_map_tile_layer_C");
const sub_map_tile_layer_D = document.querySelector("#sub_map_tile_layer_D");

let map_layers_container_timeout;

// // Sidebar Map Layers ↑
// // Sidebar Overlay ↓

const sidebar_overlay_button = document.getElementById("sidebar_overlay_button");
const overlay_icon = document.getElementById("overlay_icon");
const sub_overlay_container = document.getElementById("sub_overlay_container");
const sub_overlay_train = document.getElementById("sub_overlay_train");
const sub_overlay_bicycle = document.getElementById("sub_overlay_bicycle");
const sub_overlay_labels = document.getElementById("sub_overlay_labels");
const sub_overlay_borders = document.getElementById("sub_overlay_borders");
const sub_overlay_markers = document.getElementById("sub_overlay_markers");
const sub_overlay_polylines = document.getElementById("sub_overlay_polylines");

let overlay_train_active = false;
let overlay_bicycle_active = false;
let overlay_labels_active = false;
let overlay_borders_active = false;
let overlay_markers_active = true;
let overlay_polylines_active = true;

let markers_visibility = true;
let polyline_visibility = true;

let overlay_container_timeout;

// // Sidebar Overlay ↑
// // Sidebar Page Styles ↓

const page_styles_icon = document.getElementById("page_styles_icon");

// // Sidebar Page Styles ↑
// // Sidebar Timeline ↓

const timeline_container = document.querySelector(".timeline_container");
const timeline_info = document.querySelector(".timeline_info");
const timeline = document.querySelector("#timeline");
const timeline_container_arrow = document.querySelector(".timeline_container_arrow");
const sidebar_timeline_button = document.getElementById("sidebar_timeline_button");
const timeline_icon = document.getElementById("timeline_icon");

const timelineOptions = {
  initial_zoom: 1,
  timenav_position: "bottom",
  optimal_tick_width: 100,
  duration: 400,
  font: "bitter-raleway",
};

let timeline_visibility = false;
let timeline_enabled = true;

let timeline_start = "";
let timeline_end = "";

// // Sidebar Timeline ↑
// // Sidebar Statistics ↓

const main_statistics_container = document.querySelector(".main_statistics_container");
const sidebar_statistics_button = document.getElementById("sidebar_statistics_button");
const statistics_icon = document.getElementById("statistics_icon");

let highest_distance = 0;
let lowest_distance = 0;
let total_distance = 0;
let total_id_distance = 0;
let average_distance = 0;

let total_car_distance = 0;
let total_plane_distance = 0;
let total_boat_distance = 0;
let total_walk_distance = 0;
let total_bicycle_distance = 0;
let total_motorcycle_distance = 0;
let total_train_distance = 0;
let total_bus_distance = 0;
let highest_distance_type = "";
let lowest_distance_type = "";
let most_common_travel_type = "";

let statistics_visibility = true;

// // Sidebar Statistics ↑
// // Sidebar Language ↓

const sidebar_language_button = document.getElementById("sidebar_language_button");
const language_icon = document.getElementById("language_icon");

// // Sidebar Language ↑
// // Sidebar Settings ↓

const sidebar_settings_button = document.getElementById("sidebar_settings_button");
const settings_icon = document.getElementById("settings_icon");

// // Sidebar Settings ↑
// // Info box ↓

const info_popup = document.getElementById("info_popup");
const info_popup_text = document.getElementById("info_popup_text");
const close_info_popup = document.getElementById("close_info_popup");

// // Info box ↑
// // Travel Log Creator ↓

const add_travel = document.getElementById("add_travel");
const travel_logs_individual_main_container = document.getElementById("travel_logs_individual_main_container");

const main_logs_container = document.querySelector(".main_logs_container");
const main_logs_container_arrow = document.querySelector(".main_logs_container_arrow");

let random_id = "";

let travel_date_start = "";
let travel_date_end = "";

let stored_group_log_id = "";
let stored_individual_log_id = "";
let isTravelGroupEmpty = "";

let is_travel_creator_active = false;
let main_logs_container_arrow_clicked = false;

let allow_individual_log_creation = false;
let reference = "";

// // Travel Log Creator ↑
// // Travel log group ↓

const check_button_group = document.getElementById("check_button_group");
const close_button_group = document.getElementById("close_button_group");
const check_icon_group = document.getElementById("check_icon_group");
const close_icon_group = document.getElementById("close_icon_group");

let travel_logs_group_name = "";
let travel_logs_group_input = document.getElementById("travel_logs_group_input");

// // Travel log group ↑
// // Travel log individual ↓

const travel_type_car = document.getElementById("travel_type_car");
const travel_type_plane = document.getElementById("travel_type_plane");
const travel_type_boat = document.getElementById("travel_type_boat");
const travel_type_walk = document.getElementById("travel_type_walk");
const travel_type_bicycle = document.getElementById("travel_type_bicycle");
const travel_type_motorcycle = document.getElementById("travel_type_motorcycle");
const travel_type_train = document.getElementById("travel_type_train");
const travel_type_bus = document.getElementById("travel_type_bus");

const jscolor_highlight = document.getElementById("jscolor_highlight");

const check_button_individual = document.getElementById("check_button_individual");
const close_button_individual = document.getElementById("close_button_individual");
const check_icon_individual = document.getElementById("check_icon_individual");
const close_icon_individual = document.getElementById("close_icon_individual");

const travelTypeButtonImages = new Map();
travelTypeButtonImages.set(travel_type_car, "/content/icons/car_icon_small.png");
travelTypeButtonImages.set(travel_type_plane, "/content/icons/plane_icon_small.png");
travelTypeButtonImages.set(travel_type_boat, "/content/icons/boat_icon_small.png");
travelTypeButtonImages.set(travel_type_walk, "/content/icons/walk_icon_small.png");
travelTypeButtonImages.set(travel_type_bicycle, "/content/icons/bicycle_icon_small.png");
travelTypeButtonImages.set(travel_type_motorcycle, "/content/icons/motorcycle_icon_small.png");
travelTypeButtonImages.set(travel_type_train, "/content/icons/train_icon_small.png");
travelTypeButtonImages.set(travel_type_bus, "/content/icons/bus_icon_small.png");

const travelTypeButtons = [
  travel_type_car,
  travel_type_plane,
  travel_type_boat,
  travel_type_walk,
  travel_type_bicycle,
  travel_type_motorcycle,
  travel_type_train,
  travel_type_bus,
];

let type = "";

let travel_type_car_click = false;
let travel_type_plane_click = false;
let travel_type_boat_click = false;
let travel_type_walk_click = false;
let travel_type_bicycle_click = false;
let travel_type_motorcycle_click = false;
let travel_type_train_click = false;
let travel_type_bus_click = false;

let travel_logs_individual_name = "";
let travel_logs_individual_input = document.getElementById("travel_logs_individual_input");

let marker_highlight_color_opacity_customization = true;
let jscolor_highlight_data = "";
let jscolor_highlight_color = "#1495ED";
let jscolor_highlight_opacity = 0.5;

// // Travel log individual ↑
// // Custom cursor ↓

const custom_cursor = document.getElementById("custom_cursor");

// // Custom cursor ↑
// // Leaflet map ↓

import leafletConfig from "./LeafletConfig.js";

const { L } = window;

const maxBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));
const map = L.map("map", {
  zoomControl: false,
  maxBounds: maxBounds,
  maxBoundsViscosity: 0.8,
}).setView([50, 10], 6);

const { mapTileLayer_A, mapTileLayer_B, mapTileLayer_C, mapTileLayer_D } = leafletConfig.tilemaps;
const { home_icon, car_icon, plane_icon, boat_icon, walk_icon, bicycle_icon, motorcycle_icon, train_icon, bus_icon } =
  leafletConfig.marker_icons;
const { trainsAddon, cyclingAddon, bordersAddon, labelsAddon } = leafletConfig.addons;

const mapTileLayers = L.layerGroup([mapTileLayer_A]).addTo(map);
let temporaryMarkers = L.layerGroup();
let trueMarkers = L.layerGroup();

// // Leaflet map ↑

// 1 = local storage / 0 = temporary

/* 1 */ let home_lat = "";
/* 1 */ let home_lng = "";
/* 1 */ let markersData = [];
/* 1 */ let travelLogs = [];
/* 1 */ let CRUD = [];
/* 1 */ let trueHighlights = [];
/* 0 */ let highlights = [];
/* 0 */ let CRUDGroup = {};
/* 0 */ let CRUDIndividual = {};
/* 0 */ let markers = [];
/* 0 */ let polylines = [];
/* 0 */ let storedIds = [];
/* 0 */ let rawCoordinatesDistances = [];
/* 0 */ let timelineData = {
  events: [],
};

// Variables ↑

// Page interaction ↓
// // Sidebar ↓
// // // House ↓

sidebar_house_button.addEventListener("mouseenter", () => {
  changeIconColorOnHover(true, house_icon, sidebar_house_button);
  clearTimeout(house_container_timeout);
  sidebarButtonsAnimation(sub_house_button_container, true);
});

sidebar_house_button.addEventListener("mouseleave", () => {
  changeIconColorOnHover(false, house_icon, sidebar_house_button);
  house_container_timeout = setTimeout(() => {
    sidebarButtonsAnimation(sub_house_button_container, false);
  }, 200);
});

sub_house_button_container.addEventListener("mouseenter", () => {
  clearTimeout(house_container_timeout);
  sidebarButtonsAnimation(sub_house_button_container, true);
});

sub_house_button_container.addEventListener("mouseleave", () => {
  house_container_timeout = setTimeout(() => {
    sidebarButtonsAnimation(sub_house_button_container, false);
  }, 200);
});

sub_house_color_button.addEventListener("click", () => {
  jscolor_home.jscolor.show();
});

jscolor_home.addEventListener("change", () => {
  jscolor_home_data = jscolor_home.jscolor.toHEXAString();
  jscolor_home_color = jscolor_home_data.slice(0, -2);
  jscolor_home_opacity = (parseInt(jscolor_home_data.slice(-2), 16) / 255).toFixed(2);
});

sub_house_manual_location.addEventListener("click", () => {
  travelTypeValueUpdate(true, false, false, false, false, false, false, false, false);
  updateCursorImage("/content/icons/home_icon_small.png");
  removeMarkers("home_marker");
  homeMarkerClear();

  const mapClickListener = (e) => {
    toggleCustomCursorVisibility(false);

    const clickedLatLng = e.latlng;
    home_lat = clickedLatLng.lat;
    home_lng = clickedLatLng.lng;

    const offset_longitude = clickedLatLng.lng * 1.002;

    if (home_button_manual_click === true) {
      home_marker = L.marker([clickedLatLng.lat, offset_longitude], {
        icon: home_icon,
        id: "home_marker",
      });
      home_marker.addTo(map).bounce(1);
      markers.push(home_marker);
      home_circle = L.circle([clickedLatLng.lat, clickedLatLng.lng], {
        radius: 50000,
        color: jscolor_home_color,
        fillOpacity: jscolor_home_opacity,
        weight: 1,
      }).addTo(map);
    }

    home_button_manual_click = false;

    localStorageSaveHomeLocation();
    map.off("click", mapClickListener);
  };
  map.on("click", mapClickListener);
});

sub_house_geolocation.addEventListener("click", () => {
  travelTypeValueUpdate(true, false, false, false, false, false, false, false, false);
  removeMarkers("home_marker");
  homeMarkerClear();

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      const offset_longitude = longitude * 1.002;

      home_marker = L.marker([latitude, offset_longitude], {
        icon: home_icon,
        id: "home_marker",
      });

      home_lat = latitude;
      home_lng = longitude;

      home_marker.addTo(map).bounce(1);
      markers.push(home_marker);
      home_circle = L.circle([latitude, longitude], {
        radius: 50000,
        color: jscolor_home_color,
        fillOpacity: jscolor_home_opacity,
        weight: 1,
      }).addTo(map);
      localStorageSaveHomeLocation();
    });
  }

  setTimeout(homeMarkerZoom, 350);
});

sub_house_zoom.addEventListener("click", () => {
  homeMarkerZoom();
});

sub_house_delete.addEventListener("click", () => {
  removeMarkers("home_marker");
  homeMarkerClear();
  localStorageRemoveHomeLocation();
});

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
  if (home_marker && home_lat && home_lng) {
    map.setView(home_marker.getLatLng(), 7);
  } else {
    showInfoPopup("Home location not set!");
  }
}

// // // House ↑
// // // Map Layers ↓

sidebar_map_layers_button.addEventListener("mouseenter", () => {
  changeIconColorOnHover(true, map_layers_icon, sidebar_map_layers_button);
  clearTimeout(map_layers_container_timeout);
  sidebarButtonsAnimation(sub_map_layers_container, true);
});

sidebar_map_layers_button.addEventListener("mouseleave", () => {
  changeIconColorOnHover(false, map_layers_icon, sidebar_map_layers_button);
  map_layers_container_timeout = setTimeout(() => {
    sidebarButtonsAnimation(sub_map_layers_container, false);
  }, 200);
});

sub_map_layers_container.addEventListener("mouseenter", () => {
  clearTimeout(map_layers_container_timeout);
  sidebarButtonsAnimation(sub_map_layers_container, true);
});

sub_map_layers_container.addEventListener("mouseleave", () => {
  map_layers_container_timeout = setTimeout(() => {
    sidebarButtonsAnimation(sub_map_layers_container, false);
  }, 200);
});

sub_map_tile_layer_A.addEventListener("click", () => {
  switchTileMap(mapTileLayer_A);
  toggleActiveIconColor(sub_map_layer_earth_icon);
  toggleInactiveIconColor(sub_map_layer_bright_icon, sub_map_layer_dark_icon, sub_map_layer_middleage_icon);
});
sub_map_tile_layer_B.addEventListener("click", () => {
  switchTileMap(mapTileLayer_B);
  toggleActiveIconColor(sub_map_layer_bright_icon);
  toggleInactiveIconColor(sub_map_layer_earth_icon, sub_map_layer_dark_icon, sub_map_layer_middleage_icon);
});
sub_map_tile_layer_C.addEventListener("click", () => {
  switchTileMap(mapTileLayer_C);
  toggleActiveIconColor(sub_map_layer_dark_icon);
  toggleInactiveIconColor(sub_map_layer_earth_icon, sub_map_layer_bright_icon, sub_map_layer_middleage_icon);
});
sub_map_tile_layer_D.addEventListener("click", () => {
  switchTileMap(mapTileLayer_D);
  toggleActiveIconColor(sub_map_layer_middleage_icon);
  toggleInactiveIconColor(sub_map_layer_earth_icon, sub_map_layer_bright_icon, sub_map_layer_dark_icon);
});

function switchTileMap(layer) {
  mapTileLayers.clearLayers();
  mapTileLayers.addLayer(layer);
}

function toggleActiveIconColor(icon_0) {
  icon_0.classList.remove("black_icon_toggle");
  icon_0.classList.add("white_icon_toggle");
}

function toggleInactiveIconColor(icon_1, icon_2, icon_3) {
  icon_1.classList.add("black_icon_toggle");
  icon_2.classList.add("black_icon_toggle");
  icon_3.classList.add("black_icon_toggle");
  icon_1.classList.remove("white_icon_toggle");
  icon_2.classList.remove("white_icon_toggle");
  icon_3.classList.remove("white_icon_toggle");
}

// // // Map Layers ↑
// // // Overlay ↓

sidebar_overlay_button.addEventListener("mouseenter", () => {
  changeIconColorOnHover(true, overlay_icon, sidebar_overlay_button);
  clearTimeout(overlay_container_timeout);
  sidebarButtonsAnimation(sub_overlay_container, true);
});

sidebar_overlay_button.addEventListener("mouseleave", () => {
  changeIconColorOnHover(false, overlay_icon, sidebar_overlay_button);
  overlay_container_timeout = setTimeout(() => {
    sidebarButtonsAnimation(sub_overlay_container, false);
  }, 200);
});

sub_overlay_container.addEventListener("mouseenter", () => {
  clearTimeout(overlay_container_timeout);
  sidebarButtonsAnimation(sub_overlay_container, true);
});

sub_overlay_container.addEventListener("mouseleave", () => {
  overlay_container_timeout = setTimeout(() => {
    sidebarButtonsAnimation(sub_overlay_container, false);
  }, 200);
});

sub_overlay_train.addEventListener("click", () => {
  switchTileAddon(trainsAddon);
  overlay_train_active = toggleIconColor(overlay_train_active, sub_train_icon);
});
sub_overlay_bicycle.addEventListener("click", () => {
  switchTileAddon(cyclingAddon);
  overlay_bicycle_active = toggleIconColor(overlay_bicycle_active, sub_bicycle_icon);
});
sub_overlay_labels.addEventListener("click", () => {
  switchTileAddon(labelsAddon);
  overlay_labels_active = toggleIconColor(overlay_labels_active, sub_labels_icon);
});
sub_overlay_borders.addEventListener("click", () => {
  switchTileAddon(bordersAddon);
  overlay_borders_active = toggleIconColor(overlay_borders_active, sub_borders_icon);
});
sub_overlay_markers.addEventListener("click", () => {
  toggleMarkersVisibility();
  overlay_markers_active = toggleIconColor(overlay_markers_active, sub_markers_icon);
});
sub_overlay_polylines.addEventListener("click", () => {
  togglePolylineVisibility();
  overlay_polylines_active = toggleIconColor(overlay_polylines_active, sub_polylines_icon);
});

function switchTileAddon(tile_addon) {
  if (map.hasLayer(tile_addon)) {
    tile_addon.removeFrom(map);
  } else {
    tile_addon.addTo(map);
  }
}

function toggleMarkersVisibility() {
  if (markers_visibility) {
    removeTrueMarkers();
  } else {
    localStorageCreateTrueMarkers();
  }
  markers_visibility = !markers_visibility;
}

function togglePolylineVisibility() {
  for (let i = 0; i < polylines.length; i++) {
    const polyline = polylines[i][0];
    if (map.hasLayer(polyline) && polyline_visibility) {
      map.removeLayer(polyline);
    } else {
      map.addLayer(polyline);
    }
  }
  polyline_visibility = !polyline_visibility;
}

function toggleIconColor(toggle, icon) {
  if (toggle) {
    icon.classList.add("black_icon_toggle");
    icon.classList.remove("white_icon_toggle");
  } else {
    icon.classList.add("white_icon_toggle");
    icon.classList.remove("black_icon_toggle");
  }
  return !toggle;
}

// // // Overlay ↑
// // // Timeline ↓

sidebar_timeline_button.addEventListener("click", () => {
  toggleTimelineVisibility(false);
  timeline_enabled = toggleIconColor(timeline_enabled, timeline_icon);
  toggleTimeline();
});

sidebar_timeline_button.addEventListener("mouseover", () =>
  changeIconColorOnHover(true, timeline_icon, sidebar_timeline_button)
);

sidebar_timeline_button.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, timeline_icon, sidebar_timeline_button)
);

timeline_container_arrow.addEventListener("click", () => {
  if (!is_travel_creator_active) {
    if (timeline_visibility == true) {
      toggleTimelineVisibility(false);
    } else {
      toggleTimelineVisibility(true);
    }
  }
});

function toggleTimelineVisibility(toggle) {
  if (toggle && timeline_enabled) {
    timeline_container.style.top = "64%";
    timeline_container_arrow.style.top = "72%";
    timeline_visibility = true;
  } else {
    timeline_container.style.top = "88%";
    timeline_container_arrow.style.top = "96%";
    timeline_visibility = false;
  }
}

function changeTimelineDimensions(toggle) {
  if (toggle) {
    timeline_container.style.width = "70.5vw";
    timeline_container.style.marginLeft = "0vw";
  } else {
    timeline_container.style.width = "95.5vw";
    timeline_container.style.marginLeft = "12.5vw";
  }
}

// // // Timeline ↑
// // // Statistics ↓

sidebar_statistics_button.addEventListener("click", () => {
  statistics_visibility = toggleIconColor(statistics_visibility, statistics_icon);
  if (!is_travel_creator_active) {
    if (!statistics_visibility) {
      toggleStatisticsVisibility(true);
    } else {
      toggleStatisticsVisibility(false);
    }
  }
});

sidebar_statistics_button.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, statistics_icon, sidebar_statistics_button)
);

sidebar_statistics_button.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, statistics_icon, sidebar_statistics_button)
);

function calculateDistances() {
  rawCoordinatesDistances = [];

  for (let i = 0; i < markersData.length; i++) {
    let sub_distances = [];

    for (let j = 0; j < markersData[i].length - 1; j++) {
      let distance = calculateDistance(markersData[i][j], markersData[i][j + 1]);
      let distance_info = markersData[i][j][2];
      sub_distances.push({ distance, distance_info });
    }

    rawCoordinatesDistances.push(sub_distances);
  }
}

function calculateDistance(coord_1, coord_2) {
  return L.latLng(coord_1[0], coord_1[1]).distanceTo(L.latLng(coord_2[0], coord_2[1])) / 1000;
}

function distancesBreakdown(distances) {
  highest_distance = Number.NEGATIVE_INFINITY;
  lowest_distance = Number.POSITIVE_INFINITY;
  total_distance = 0;
  average_distance = 0;
  most_common_travel_type = "";

  for (let i = 0; i < distances.length; i++) {
    for (let j = 0; j < distances[i].length; j++) {
      const { distance, distance_info } = distances[i][j];

      if (distance > highest_distance) {
        highest_distance = distance;
        highest_distance_type = distance_info[1];
      }

      if (distance < lowest_distance) {
        lowest_distance = distance;
        lowest_distance_type = distance_info[1];
      }

      total_distance += distance;
      average_distance = total_distance / polylines.length;
    }
  }

  return {
    highest_distance,
    lowest_distance,
    highest_distance_type,
    lowest_distance_type,
    total_distance,
    average_distance,
    most_common_travel_type,
  };
}

function updateTravelStats() {
  const display_highest_distance = highest_distance === Number.NEGATIVE_INFINITY ? 0 : highest_distance;
  const display_lowest_distance = lowest_distance === Number.POSITIVE_INFINITY ? 0 : lowest_distance;

  const highest_distance_display =
    highest_distance === Number.NEGATIVE_INFINITY ? "" : "(" + highest_distance_type + ")";
  const lowest_distance_display = lowest_distance === Number.POSITIVE_INFINITY ? "" : "(" + lowest_distance_type + ")";

  document.getElementById("highest_distance").textContent =
    formatDistance(display_highest_distance) + " km " + highest_distance_display;

  document.getElementById("lowest_distance").textContent =
    formatDistance(display_lowest_distance) + " km " + lowest_distance_display;

  document.getElementById("total_distance").textContent = formatDistance(total_distance) + " km";
  document.getElementById("total_car_distance").textContent = formatDistance(total_car_distance) + " km";
  document.getElementById("total_plane_distance").textContent = formatDistance(total_plane_distance) + " km";
  document.getElementById("total_boat_distance").textContent = formatDistance(total_boat_distance) + " km";
  document.getElementById("total_walk_distance").textContent = formatDistance(total_walk_distance) + " km";
  document.getElementById("total_bicycle_distance").textContent = formatDistance(total_bicycle_distance) + " km";
  document.getElementById("total_motorcycle_distance").textContent = formatDistance(total_motorcycle_distance) + " km";
  document.getElementById("total_train_distance").textContent = formatDistance(total_train_distance) + " km";
  document.getElementById("total_bus_distance").textContent = formatDistance(total_bus_distance) + " km";

  document.getElementById("average_travel_distance").textContent = formatDistance(average_distance) + " km";

  let most_common_travel_type = document.getElementById("most_common_travel_type");
  const { travel_type_count, highest_count_travel_types } = countTravelType(markersData);
  if (highest_count_travel_types.length > 0) {
    const mostCommonTravelTypesText = highest_count_travel_types.join(", ");
    most_common_travel_type.textContent = mostCommonTravelTypesText;
  } else {
    most_common_travel_type.textContent = "none";
  }
}

function formatDistance(distance) {
  if (distance > 1000) {
    return distance.toFixed(0);
  } else {
    return distance.toFixed(1);
  }
}

function toggleStatisticsVisibility(toggle) {
  if (toggle) {
    main_statistics_container.style.transform = "translate(-50%, -24%)";
  } else {
    main_statistics_container.style.transform = "translate(-50%, -130%)";
  }
}

function calculateTotalDistances(distances) {
  total_car_distance = 0;
  total_plane_distance = 0;
  total_boat_distance = 0;
  total_walk_distance = 0;
  total_bicycle_distance = 0;
  total_motorcycle_distance = 0;
  total_train_distance = 0;
  total_bus_distance = 0;

  for (let i = 0; i < distances.length; i++) {
    for (let j = 0; j < distances[i].length; j++) {
      const { distance, distance_info } = distances[i][j];

      if (distance_info.includes("car")) {
        total_car_distance += distance;
      }
      if (distance_info.includes("plane")) {
        total_plane_distance += distance;
      }
      if (distance_info.includes("boat")) {
        total_boat_distance += distance;
      }
      if (distance_info.includes("walk")) {
        total_walk_distance += distance;
      }
      if (distance_info.includes("bicycle")) {
        total_bicycle_distance += distance;
      }
      if (distance_info.includes("motorcycle")) {
        total_motorcycle_distance += distance;
      }
      if (distance_info.includes("train")) {
        total_train_distance += distance;
      }
      if (distance_info.includes("bus")) {
        total_bus_distance += distance;
      }
    }
  }

  return {
    total_car_distance,
    total_plane_distance,
    total_boat_distance,
    total_walk_distance,
    total_bicycle_distance,
    total_motorcycle_distance,
    total_train_distance,
    total_bus_distance,
  };
}

function calculateTotalIdDistance(distances, id) {
  total_id_distance = 0;

  for (let i = 0; i < distances.length; i++) {
    for (let j = 0; j < distances[i].length; j++) {
      const { distance, distance_info } = distances[i][j];

      if (distance_info.includes(id)) {
        total_id_distance += distance;
      }
    }
  }

  return {
    total_id_distance,
  };
}

let travel_type_count = {
  car: 0,
  plane: 0,
  boat: 0,
  motorcycle: 0,
  bicycle: 0,
  walk: 0,
  train: 0,
  bus: 0,
};

let highest_count_travel_types = [];
let highest_count = Number.NEGATIVE_INFINITY;

function countTravelType(markersData) {
  travel_type_count = {
    car: 0,
    plane: 0,
    boat: 0,
    motorcycle: 0,
    bicycle: 0,
    walk: 0,
    train: 0,
    bus: 0,
  };
  highest_count_travel_types = [];
  highest_count = Number.NEGATIVE_INFINITY;

  for (const marker of markersData) {
    const type = marker[0][2][1];
    if (type in travel_type_count) {
      travel_type_count[type]++;
      if (travel_type_count[type] > highest_count) {
        highest_count = travel_type_count[type];
        highest_count_travel_types = [type];
      } else if (travel_type_count[type] === highest_count) {
        highest_count_travel_types.push(type);
      }
    }
  }
  return { travel_type_count, highest_count_travel_types };
}

function removeTravelCount(type) {
  travel_type_count[type] -= 1;
}

// // // Statistics ↑
// // // Language ↓

sidebar_language_button.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, language_icon, sidebar_language_button)
);

sidebar_language_button.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, language_icon, sidebar_language_button)
);

// // // Language ↑
// // // Settings ↓

sidebar_settings_button.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, settings_icon, sidebar_settings_button)
);

sidebar_settings_button.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, settings_icon, sidebar_settings_button)
);

// // // Settings ↑

function sidebarButtonsAnimation(element, toggle) {
  if (toggle) {
    element.style.transition = "transform 0.3s ease";
    element.style.transform = "translate(4.4vw, 0%)";
  } else {
    element.style.transition = "transform 0.3s ease";
    element.style.transform = "translate(-100%, 0%)";
  }
}

function changeIconColorOnHover(toggle, element, button) {
  if (toggle) {
    element.classList.add("sidebar_icon_brighter");
    button.style.transform = "scale(1.1)";
  } else {
    element.classList.remove("sidebar_icon_brighter");
    button.style.transform = "scale(1)";
  }
}

// // Sidebar ↑
// Page interaction ↑
// Travel Log Creator ↓

add_travel.addEventListener("click", () => {
  if (!statistics_visibility) {
    statistics_visibility = toggleIconColor(statistics_visibility, statistics_icon);
  }
  toggleMainLogContainerVisibility(false);
  toggleTimelineVisibility(false);
  toggleStatisticsVisibility(false);
  if (!is_travel_creator_active) {
    allow_individual_log_creation = false;
    random_id = "";
    random_id = randomIdGenerator();
    timeline_start = "";
    timeline_end = "";
    travelTypeButtonsColor();
    travel_logs_group_input.value = "";
    travel_logs_individual_input.value = "";
    if (
      travel_logs_group_main_container.style.display === "none" ||
      travel_logs_group_main_container.style.display === ""
    ) {
      toggleTravelLogsGroupMainContainerVisibility(true);
    }
    is_travel_creator_active = !is_travel_creator_active;
  }
});

main_logs_container_arrow.addEventListener("click", function () {
  if (!is_travel_creator_active) {
    main_logs_container_arrow_clicked = !main_logs_container_arrow_clicked;
    if (main_logs_container_arrow_clicked) {
      toggleMainLogContainerVisibility(false);
      changeTimelineDimensions(false);
    } else {
      toggleMainLogContainerVisibility(true);
      changeTimelineDimensions(true);
    }
  }
});

function toggleMainLogContainerVisibility(toggle) {
  if (toggle) {
    main_logs_container_arrow.style.left = "70%";
    main_logs_container.style.left = "75%";
  } else {
    main_logs_container_arrow.style.left = "95%";
    main_logs_container.style.left = "100%";
  }
}

// Travel Log Creator ↑
// Travel log group ↓

check_button_group.addEventListener("click", () => {
  travel_logs_group_name = travel_logs_group_input.value;
  if (travel_logs_group_name === "") {
    showInfoPopup("Please enter valid name");
    return;
  }
  if (travel_date_start === "" || travel_date_end === "") {
    showInfoPopup("Please select a valid date range");
    return;
  }

  if (travel_logs_group_name !== "") {
    is_travel_creator_active = false;

    timelineData = {
      events: [],
    };

    groupDataSubmit();
    removeContainerTravelLogs();

    localStorageSaveTravelLogs();
    localStorageSaveMarkerCoordinates();
    localStorageSaveCRUD();

    localStorageLoadMarkerCoordinates();
    localStorageLoadCRUD();
    drawPolyline();
    populateTimeline();
    buildCRUD();

    localStorageCreateTimelineData(travelLogs, timelineData);
    toggleTimelineVisibility(true);
    timelineInfoToggle();
    toggleMainLogContainerVisibility(true);
    toggleTimelineVisibility(true);
    toggleTravelLogsGroupMainContainerVisibility(false);
    timelineInfoToggle();
    closeInfoPopup();
  }
});

check_button_group.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, check_icon_group, check_button_group)
);

check_button_group.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, check_icon_group, check_button_group)
);

close_button_group.addEventListener("click", () => {
  is_travel_creator_active = false;
  stored_group_log_id = random_id;
  removeStoredId(stored_group_log_id);
  closeInfoPopup();
  travel_logs_group_input.value = "";
  if (
    travel_logs_group_main_container.style.display === "none" ||
    travel_logs_group_main_container.style.display === ""
  ) {
    toggleTravelLogsGroupMainContainerVisibility(true);
  } else {
    toggleMainLogContainerVisibility(true);
    toggleTravelLogsGroupMainContainerVisibility(false);
  }
});

close_button_group.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, close_icon_group, close_button_group)
);

close_button_group.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, close_icon_group, close_button_group)
);

// Travel log group ↑
// Travel Log Individual ↓

jscolor_highlight.addEventListener("change", () => {
  jscolor_highlight_data = jscolor_highlight.jscolor.toHEXAString();
  jscolor_highlight_color = jscolor_highlight_data.slice(0, -2);
  jscolor_highlight_opacity = (parseInt(jscolor_highlight_data.slice(-2), 16) / 255).toFixed(2);
});

travel_type_car.addEventListener("click", () => {
  travelTypeValueUpdate(false, true, false, false, false, false, false, false, false);
  // prettier-ignore
  travelTypeCreator(travel_type_car_click, "car", car_icon, "/content/icons/car_icon_small.png", "content/icons/car_icon.png");
});

travel_type_plane.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, true, false, false, false, false, false, false);
  // prettier-ignore
  travelTypeCreator(travel_type_plane_click, "plane", plane_icon, "/content/icons/plane_icon_small.png", "content/icons/plane_icon.png");
});

travel_type_boat.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, true, false, false, false, false, false);
  // prettier-ignore
  travelTypeCreator(travel_type_boat_click, "boat", boat_icon, "/content/icons/boat_icon_small.png", "content/icons/boat_icon.png");
});

travel_type_walk.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, false, true, false, false, false, false);
  // prettier-ignore
  travelTypeCreator(travel_type_walk_click, "walk", walk_icon, "/content/icons/walk_icon_small.png", "content/icons/walk_icon.png");
});

travel_type_bicycle.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, false, false, true, false, false, false);
  // prettier-ignore
  travelTypeCreator(travel_type_bicycle_click, "bicycle", bicycle_icon, "/content/icons/bicycle_icon_small.png", "content/icons/bicycle_icon.png");
});

travel_type_motorcycle.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, false, false, false, true, false, false);
  // prettier-ignore
  travelTypeCreator(travel_type_motorcycle_click, "motorcycle", motorcycle_icon, "/content/icons/motorcycle_icon_small.png", "content/icons/motorcycle_icon.png");
});

travel_type_train.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, false, false, false, false, true, false);
  // prettier-ignore
  travelTypeCreator(travel_type_train_click, "train", train_icon, "/content/icons/train_icon_small.png", "content/icons/train_icon.png");
});

travel_type_bus.addEventListener("click", () => {
  travelTypeValueUpdate(false, false, false, false, false, false, false, false, true);
  // prettier-ignore
  travelTypeCreator(travel_type_bus_click, "bus", bus_icon, "/content/icons/bus_icon_small.png", "content/icons/bus_icon.png");
});

check_button_individual.addEventListener("click", () => {
  if (allow_individual_log_creation) {
    travel_logs_individual_name = travel_logs_individual_input.value;
    if (travel_logs_individual_name === "") {
      showInfoPopup("Please enter travel name");
      return;
    }
    if (travel_date_start === "" || travel_date_end === "") {
      showInfoPopup("Please select a valid date range");
      return;
    }

    if (travel_logs_individual_name !== "") {
      travelTypeValueUpdate(false, false, false, false, false, false, false, false, false);
      timelineData = {
        events: [],
      };
      removeTrueHighlights();
      removeTemporaryHighlights(random_id);
      removeTemporaryMarkers();
      removeContainerTravelLogs();

      calculateDistances();
      distancesBreakdown(rawCoordinatesDistances);
      calculateTotalDistances(rawCoordinatesDistances);
      countTravelType(markersData);
      updateTravelStats();

      individualDataSubmit();

      localStorageRemoveTravelLogs();

      localStorageSaveTrueHighlights();
      localStorageSaveTravelLogs();
      localStorageSaveMarkerCoordinates();
      localStorageSaveCRUD();

      localStorageLoadMarkerCoordinates();
      localStorageLoadCRUD();

      localStorageCreateTimelineData(travelLogs, timelineData);
      populateTimeline();
      buildCRUD();
      localStorageCreateTrueMarkers();
      localStorageCreateTrueHighlights();
      drawPolyline();

      document.removeEventListener("mousemove", pngMouseTracking);
      toggleCustomCursorVisibility(false);
      map.off("click");
      toggleMainLogContainerVisibility(true);
      toggleTimelineVisibility(true);
      toggleTravelLogsIndividualMainContainerVisibility(false);
      timelineInfoToggle();
      closeInfoPopup();
      is_travel_creator_active = false;
    }
  } else {
    showInfoPopup("please, draw a path on the map first");
  }
});

check_button_individual.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, check_icon_individual, check_button_individual)
);

check_button_individual.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, check_icon_individual, check_button_individual)
);

close_button_individual.addEventListener("click", () => {
  toggleMainLogContainerVisibility(true);
  toggleTimelineVisibility(true);
  closeInfoPopup();
  document.removeEventListener("mousemove", pngMouseTracking);
  toggleCustomCursorVisibility(false);
  map.off("click");
  travelTypeValueUpdate(false, false, false, false, false, false, false, false, false);

  stored_individual_log_id = random_id;
  removeMarkers(stored_individual_log_id);
  removeTemporaryHighlights(stored_individual_log_id);
  removeMarkersCoordinates(stored_individual_log_id);
  drawPolyline();
  removeTravelLogs(stored_individual_log_id);
  removeStoredId(stored_individual_log_id);

  travel_logs_individual_input.value = "";

  if (
    travel_logs_individual_main_container.style.display === "none" ||
    travel_logs_individual_main_container.style.display === ""
  ) {
    toggleTravelLogsIndividualMainContainerVisibility(true);
  } else {
    toggleTravelLogsIndividualMainContainerVisibility(false);
  }
  is_travel_creator_active = false;
});

close_button_individual.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, close_icon_individual, close_button_individual)
);

close_button_individual.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, close_icon_individual, close_button_individual)
);

function travelTypeValueUpdate(manual, car, plane, boat, walk, bicycle, motorcycle, train, bus) {
  home_button_manual_click = manual;
  travel_type_car_click = car;
  travel_type_plane_click = plane;
  travel_type_boat_click = boat;
  travel_type_walk_click = walk;
  travel_type_bicycle_click = bicycle;
  travel_type_motorcycle_click = motorcycle;
  travel_type_train_click = train;
  travel_type_bus_click = bus;
}

function travelTypeCreator(travel_type_click, travel_type, icon_type, icon_small_path, icon_path) {
  if (is_travel_creator_active) {
    allow_individual_log_creation = false;
    marker_highlight_color_opacity_customization = false;
    createHighlightLayer(cachedGeoJSON);
    updateCursorImage(icon_small_path);
    travelTypeButtonsGrayscale();
    `this.querySelector("img").src = travelTypeButtonImages.get(this);`;

    if (travel_type_click == true) {
      map.off("click");
      function onMapClick(e) {
        allow_individual_log_creation = true;
        let lat = e.latlng.lat;
        let lng = e.latlng.lng;
        type = travel_type;

        marker = L.marker([lat, lng], {
          icon: icon_type,
          travelType: travel_type,
          id: random_id,
        });

        temporaryMarkers.addLayer(marker);
        marker.addTo(map).bounce(1);
        markers.push(marker);

        markersData[markersData.length - 1].push([lat, lng, [random_id, type, icon_path]]);
        drawPolyline();
      }

      map.on("click", onMapClick);
    }

    temporaryMarkers.addTo(map);
    is_travel_creator_active = !is_travel_creator_active;
  }
}

function travelTypeButtonsGrayscale() {
  for (const button of travelTypeButtons) {
    const img = button.querySelector("img");
    img.src = travelTypeButtonImages.get(button).replace(".png", "_grayscale.png");
  }
}

function travelTypeButtonsColor() {
  for (const button of travelTypeButtons) {
    const img = button.querySelector("img");
    img.src = travelTypeButtonImages.get(button);
  }
}

// Travel Log Individual ↑
// Polyline ↓

function drawPolyline() {
  for (let i = 0; i < polylines.length; i++) {
    map.removeLayer(polylines[i][0]);
  }
  polylines = [];

  for (let i = 0; i < markersData.length; i++) {
    const coordinates = markersData[i];
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
      } else if (coordinates[0][2][1] === "train") {
        color = "pink";
      } else if (coordinates[0][2][1] === "bus") {
        color = "orange";
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

// Polyline ↑
// ID generator ↓

function randomIdGenerator() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let random_id = "";

  do {
    random_id = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      random_id += characters[randomIndex];
    }
  } while (storedIds.includes(random_id));
  storedIds.push(random_id);
  return random_id;
}

// ID generator ↑
// Travel Log date picker ↓

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
      showDropdowns: true,
      locale: {
        format: "YYYY/MM/DD",
      },
    },
    function (start, end, label) {
      travel_date_start = start.format("YYYY/MM/DD");
      travel_date_end = end.format("YYYY/MM/DD");
    }
  );
});

// Travel Log date picker ↑
// Custom Cursor ↓

function updateCursorImage(icon) {
  const custom_cursor_image = document.getElementById("custom_cursor_image");
  custom_cursor_image.src = icon;
  document.addEventListener("mousemove", pngMouseTracking);
  toggleCustomCursorVisibility(true);
}

function pngMouseTracking(e) {
  const offsetX = custom_cursor.offsetWidth / 80;
  const offsetY = custom_cursor.offsetHeight / 80;

  const leftPos = e.clientX - offsetX;
  const topPos = e.clientY - offsetY;

  custom_cursor.style.left = `${leftPos}px`;
  custom_cursor.style.top = `${topPos}px`;
}

// Custom Cursor ↑
// GeoJSON + Country highlight ↓

let defaultCountryHighlight = 0;
let cachedGeoJSON = null;

if (!cachedGeoJSON) {
  fetch("content/data/countries.geojson")
    .then((response) => response.json())
    .then((data) => {
      cachedGeoJSON = data;
    });
}

function createHighlightLayer(data) {
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
          setLayerStyle(layer, jscolor_highlight_color, jscolor_highlight_opacity, "car", random_id);
          highlights.push({ type: "car", random_id, layer });
          let country_name = feature.properties.ADMIN;
          trueHighlights.push({
            random_id,
            country_name,
            jscolor_highlight_color,
            jscolor_highlight_opacity,
          });
        }
        if (travel_type_plane_click) {
          setLayerStyle(layer, jscolor_highlight_color, jscolor_highlight_opacity, "plane", random_id);
          highlights.push({ type: "plane", random_id, layer });
          let country_name = feature.properties.ADMIN;
          trueHighlights.push({
            random_id,
            country_name,
            jscolor_highlight_color,
            jscolor_highlight_opacity,
          });
        }
        if (travel_type_boat_click) {
          setLayerStyle(layer, jscolor_highlight_color, jscolor_highlight_opacity, "boat", random_id);
          highlights.push({ type: "boat", random_id, layer });
          let country_name = feature.properties.ADMIN;
          trueHighlights.push({
            random_id,
            country_name,
            jscolor_highlight_color,
            jscolor_highlight_opacity,
          });
        }
        if (travel_type_walk_click) {
          setLayerStyle(layer, jscolor_highlight_color, jscolor_highlight_opacity, "walk", random_id);
          highlights.push({ type: "walk", random_id, layer });
          let country_name = feature.properties.ADMIN;
          trueHighlights.push({
            random_id,
            country_name,
            jscolor_highlight_color,
            jscolor_highlight_opacity,
          });
        }
        if (travel_type_bicycle_click) {
          setLayerStyle(layer, jscolor_highlight_color, jscolor_highlight_opacity, "bicycle", random_id);
          highlights.push({ type: "bicycle", random_id, layer });
          let country_name = feature.properties.ADMIN;
          trueHighlights.push({
            random_id,
            country_name,
            jscolor_highlight_color,
            jscolor_highlight_opacity,
          });
        }
        if (travel_type_motorcycle_click) {
          setLayerStyle(layer, jscolor_highlight_color, jscolor_highlight_opacity, "motorcycle", random_id);
          highlights.push({ type: "motorcycle", random_id, layer });
          let country_name = feature.properties.ADMIN;
          trueHighlights.push({
            random_id,
            country_name,
            jscolor_highlight_color,
            jscolor_highlight_opacity,
          });
        }
        if (travel_type_train_click) {
          setLayerStyle(layer, jscolor_highlight_color, jscolor_highlight_opacity, "train", random_id);
          highlights.push({ type: "train", random_id, layer });
          let country_name = feature.properties.ADMIN;
          trueHighlights.push({
            random_id,
            country_name,
            jscolor_highlight_color,
            jscolor_highlight_opacity,
          });
        }
        if (travel_type_bus_click) {
          setLayerStyle(layer, jscolor_highlight_color, jscolor_highlight_opacity, "bus", random_id);
          highlights.push({ type: "bus", random_id, layer });
          let country_name = feature.properties.ADMIN;
          trueHighlights.push({
            random_id,
            country_name,
            jscolor_highlight_color,
            jscolor_highlight_opacity,
          });
        }
      });
    },
  }).addTo(map);
}

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

// GeoJSON + Country highlight ↑
// CRUD data submit ↓

function groupDataSubmit() {
  CRUDGroup = {};

  CRUDGroup.CRUD_group_id = random_id;

  CRUDGroup.CRUD_group_name = travel_logs_group_name;

  CRUDGroup.CRUD_group_date_start = travel_date_start;
  CRUDGroup.CRUD_group_date_end = travel_date_end;

  CRUDGroup.CRUD_individual = [];

  travelLogs.push([
    CRUDGroup.CRUD_group_name,
    CRUDGroup.CRUD_group_id,
    CRUDGroup.CRUD_group_date_start + " - " + CRUDGroup.CRUD_group_date_end,
  ]);

  CRUD.push(CRUDGroup);

  travel_logs_group_input.value = "";
}

function individualDataSubmit() {
  CRUDIndividual = {};

  CRUDIndividual.CRUD_individual_id = random_id;

  CRUDIndividual.CRUD_individual_name = travel_logs_individual_name;

  calculateTotalIdDistance(rawCoordinatesDistances, CRUDIndividual.CRUD_individual_id);

  CRUDIndividual.CRUD_individual_distance = total_id_distance;
  CRUDIndividual.CRUD_individual_distance_type = type;

  travelLogs.push([
    CRUDIndividual.CRUD_individual_name,
    CRUDIndividual.CRUD_individual_id,
    travel_date_start + " - " + travel_date_end,
  ]);

  const matching_group = CRUD.find((group) => group.CRUD_group_id === reference);

  if (matching_group) {
    matching_group.CRUD_individual.push(CRUDIndividual);
  }

  travel_logs_individual_input.value = "";
}

// CRUD data submit ↑

function removeMarkers(id) {
  for (let i = markers.length - 1; i >= 0; i--) {
    const marker = markers[i];
    if (marker.options.id === id) {
      map.removeLayer(marker);
      markers.splice(i, 1);
    }
  }
}

function removeMarkersCoordinates(id) {
  markersData = markersData.filter((array) => {
    return !array.some((item) => item[2][0] === id);
  });
}

function removeTemporaryHighlights(id) {
  const highlights_to_remove = highlights.filter((highlight) => highlight.random_id === id);

  highlights_to_remove.forEach((highlight) => {
    map.removeLayer(highlight.layer);
    const highlight_index = highlights.findIndex((h) => h.random_id === highlight.random_id);
    if (highlight_index !== -1) {
      highlights.splice(highlight_index, 1);
    }
  });
}

function removeTravelLogs(id) {
  for (let i = 0; i < travelLogs.length; i++) {
    const logArray = travelLogs[i];
    if (logArray.includes(id)) {
      travelLogs.splice(i, 1);
      break;
    }
  }
}

function removeStoredId(id) {
  const id_to_remove = storedIds.indexOf(id);
  if (id_to_remove !== -1) {
    storedIds.splice(id_to_remove, 1);
  }
}

function isGroupContentDivEmpty(id) {
  let storedContentDiv = document.getElementById(id);
  isTravelGroupEmpty = storedContentDiv.innerHTML.trim() === "";
  return isTravelGroupEmpty;
}

function toggleTravelLogsGroupMainContainerVisibility(toggle) {
  if (toggle) {
    travel_logs_group_main_container.style.display = "block";
    check_button_group.style.display = "block";
    close_button_group.style.display = "block";
  } else {
    travel_logs_group_main_container.style.display = "none";
    check_button_group.style.display = "none";
    close_button_group.style.display = "none";
  }
}

function toggleTravelLogsIndividualMainContainerVisibility(toggle) {
  if (toggle) {
    travel_logs_individual_main_container.style.display = "block";
    check_button_individual.style.display = "block";
    close_button_individual.style.display = "block";
  } else {
    travel_logs_individual_main_container.style.display = "none";
    check_button_individual.style.display = "none";
    close_button_individual.style.display = "none";
  }
}

function toggleCustomCursorVisibility(toggle) {
  custom_cursor.style.display = toggle ? "flex" : "none";
}

// TimelineJS ↓

function splitDates(timeline_start, timeline_end) {
  const [startYear, startMonth, startDay] = timeline_start.split("/").map(Number);
  const [endYear, endMonth, endDay] = timeline_end.split("/").map(Number);

  return {
    startYear,
    startMonth,
    startDay,
    endYear,
    endMonth,
    endDay,
  };
}

function removeTimelineData(timelineData, id) {
  timelineData.events = timelineData.events.filter((event) => event.unique_id !== id);
  return timelineData;
}

function toggleTimeline() {
  if (!timeline_enabled) {
    while (timeline.firstChild) {
      timeline.removeChild(timeline.firstChild);
    }
  } else {
    populateTimeline();
  }
}

function timelineInfoToggle() {
  if (timelineData.events.length === 0) {
    timeline_info.style.opacity = "1";
  } else {
    timeline_info.style.opacity = "0";
  }
}

function populateTimeline() {
  window.timeline = new TL.Timeline("timeline", timelineData, timelineOptions);
}

// TimelineJS ↑
// UI / Visuals ↓

function removeLoadingPageContent() {
  const loading_animation_container = document.querySelector(".loading_animation_container");
  loading_animation_container.style.transition = "transform 1s ease";
  loading_animation_container.style.transform = "translate(-50%, 300%)";

  const loading_page_progress_container = document.querySelector(".loading_page_progress_container");
  loading_page_progress_container.style.transition = "transform 1s ease";
  loading_page_progress_container.style.transform = "translate(-50%, 400%)";

  setTimeout(() => {
    loading_animation_container.remove();
    loading_page_progress_container.remove();
    const loading_page_container = document.getElementById("loading_page_container");
    loading_page_container.classList.add("loading_page_fade_out");

    toggleMainLogContainerVisibility(true);
  }, 800);
}

// UI / Visuals ↑
// Local Storage ↓

function buildCRUD() {
  for (let i = 0; i < CRUD.length; i++) {
    let stored_group_id_reference = CRUD[i].CRUD_group_id;
    let stored_group_name_reference = CRUD[i].CRUD_group_name;
    let stored_group_date_start_reference = CRUD[i].CRUD_group_date_start;
    let stored_group_date_end_reference = CRUD[i].CRUD_group_date_end;

    // main group div

    const $travel_logs_group_div_main = document.createElement("div");
    $travel_logs_group_div_main.classList.add("travel_logs_group_div_main");

    const $travel_logs_group_div_settings = document.createElement("div");
    $travel_logs_group_div_settings.classList.add("travel_logs_group_div_settings");

    const $travel_logs_group_content = document.createElement("div");
    $travel_logs_group_content.classList.add("travel_logs_group_div_content");
    $travel_logs_group_content.id = stored_group_id_reference;

    // main group div
    // group id

    const $group_log_id = document.createElement("span");
    $group_log_id.textContent = stored_group_id_reference;

    // group id
    // group name div

    const $travel_logs_group_name_container = document.createElement("div");
    $travel_logs_group_name_container.classList.add("travel_logs_group_name_container");
    $travel_logs_group_div_settings.appendChild($travel_logs_group_name_container);

    // group name div
    // group name

    const $travel_logs_group_name = document.createElement("span");
    $travel_logs_group_name.textContent = stored_group_name_reference;
    $travel_logs_group_name.classList.add("travel_logs_group_name");
    $travel_logs_group_name_container.appendChild($travel_logs_group_name);

    // group name
    // group date

    const $travel_logs_group_date = document.createElement("span");
    $travel_logs_group_date.classList.add("travel_logs_group_date");
    $travel_logs_group_date.textContent = stored_group_date_start_reference + " - " + stored_group_date_end_reference;
    $travel_logs_group_name_container.appendChild($travel_logs_group_date);

    // group date
    // group name edit

    const $travel_logs_group_name_edit = document.createElement("button");
    $travel_logs_group_name_edit.innerHTML = '<i class="fas fa-pen fa-xl" style="color: #c9c9c9;"></i>';
    $travel_logs_group_name_edit.classList.add("travel_logs_CRUD_buttons");
    $travel_logs_group_name_edit.addEventListener("click", () => {
      $travel_logs_group_name.contentEditable = true;
      $travel_logs_group_name.focus();
      $travel_logs_group_name.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          saveGroupName();
        }
      });

      document.addEventListener("click", handleOutsideClick);

      function saveGroupName() {
        const $travel_logs_group_name_new = $travel_logs_group_name.textContent;

        if ($travel_logs_group_name_new === "") {
          showInfoPopup("Please enter a valid name");
        } else {
          $travel_logs_group_name.textContent = $travel_logs_group_name_new;
          const logId = $group_log_id.textContent;
          const logIndex = travelLogs.findIndex((log) => log[1] === logId);
          if (logIndex !== -1) {
            travelLogs[logIndex][0] = $travel_logs_group_name_new;
            CRUD[i].CRUD_group_name = $travel_logs_group_name_new;
          }
          for (let i = 0; i < timelineData.events.length; i++) {
            if (timelineData.events[i].unique_id === stored_group_id_reference) {
              timelineData.events[i].text.headline = $travel_logs_group_name_new;
              break;
            }
          }
        }

        if (timeline_enabled === true) {
          populateTimeline();
        }

        localStorageSaveTravelLogs();
        localStorageSaveCRUD();

        $travel_logs_group_name.contentEditable = false;
        document.removeEventListener("click", handleOutsideClick);
      }

      function handleOutsideClick(event) {
        if (!$travel_logs_group_div_main.contains(event.target)) {
          saveGroupName();
        }
      }
    });
    $travel_logs_group_div_settings.appendChild($travel_logs_group_name_edit);

    // group name edit
    // group (individual) travel button
    CRUDGroup.CRUD_individual = [];

    const $travel_logs_group_add_travel_button = document.createElement("button");
    $travel_logs_group_add_travel_button.innerHTML = '<i class="fa-solid fa-plus fa-xl" style="color: #c9c9c9;"></i>';
    $travel_logs_group_add_travel_button.classList.add("travel_logs_CRUD_buttons");
    $travel_logs_group_add_travel_button.addEventListener("click", () => {
      reference = stored_group_id_reference;
      marker_highlight_color_opacity_customization = true;
      is_travel_creator_active = true;
      markers_visibility = false;
      polyline_visibility = false;
      toggleMarkersVisibility();
      togglePolylineVisibility();
      travelTypeButtonsColor();
      toggleMainLogContainerVisibility(false);
      toggleTimelineVisibility(false);
      toggleStatisticsVisibility(false);
      if (!statistics_visibility) {
        statistics_visibility = toggleIconColor(statistics_visibility, statistics_icon);
      }

      stored_group_log_id = $group_log_id.textContent;
      markersData = markersData.filter((coordinatesArray) => coordinatesArray.length > 0);
      markersData.push([]);
      random_id = "";
      random_id = randomIdGenerator();

      if (
        travel_logs_individual_main_container.style.display === "none" ||
        travel_logs_individual_main_container.style.display === ""
      ) {
        toggleTravelLogsIndividualMainContainerVisibility(true);
      }
    });
    $travel_logs_group_div_settings.appendChild($travel_logs_group_add_travel_button);

    // group (individual) travel button
    // group delete

    const $travel_logs_delete = document.createElement("button");
    $travel_logs_delete.innerHTML = '<i class="fa-regular fa-trash-can fa-xl" style="color: #c9c9c9;"></i>';
    $travel_logs_delete.classList.add("travel_logs_CRUD_buttons");
    $travel_logs_delete.addEventListener("click", () => {
      isGroupContentDivEmpty(stored_group_id_reference);
      if (isTravelGroupEmpty == true) {
        removeTravelLogs(stored_group_id_reference);
        removeStoredId(stored_group_id_reference);
        removeTimelineData(timelineData, stored_group_id_reference);
        timelineInfoToggle();
        if (timeline_enabled === true) {
          populateTimeline();
        }
        const index = travelLogs.indexOf(stored_group_name_reference);
        if (index !== -1) {
          travelLogs.splice(index, 1);
        }
        $travel_logs_group_div_main.remove();
      } else if (isTravelGroupEmpty == false) {
        showInfoPopup("Travel group is not empty, please remove remaining travel logs");
      }

      const id_to_remove = CRUD.findIndex((item) => item.CRUD_group_id === stored_group_id_reference);
      if (id_to_remove !== -1) {
        CRUD.splice(id_to_remove, 1);
      }

      if (timelineData.events.length === 0) {
        toggleTimelineVisibility(false);
      }

      localStorageSaveTravelLogs();
      localStorageSaveMarkerCoordinates();
      localStorageSaveCRUD();
    });
    $travel_logs_group_div_settings.appendChild($travel_logs_delete);

    // group delete
    // group list collapse

    let list_collapsed = false;
    const $list_collapse_button = document.createElement("button");
    $list_collapse_button.innerHTML = '<i class="fa-solid fa-list fa-xl" style="color: #c9c9c9;"></i>';
    $list_collapse_button.classList.add("travel_logs_CRUD_buttons");
    $travel_logs_group_div_settings.appendChild($list_collapse_button);

    $list_collapse_button.addEventListener("click", () => {
      if (list_collapsed) {
        $travel_logs_group_content.style.height = "auto";
        $travel_logs_group_div_main.style.height = "auto";
      } else {
        $travel_logs_group_content.style.height = 0;
        $travel_logs_group_div_main.style.height = "8.6vh";
      }
      list_collapsed = !list_collapsed;
    });

    // group list collapse
    // group display

    const $logs_list = document.getElementById("logs_list");
    $logs_list.appendChild($travel_logs_group_div_main);
    $travel_logs_group_div_main.appendChild($travel_logs_group_div_settings);
    $travel_logs_group_div_main.appendChild($travel_logs_group_content);

    // group display

    // individual loop
    for (let j = 0; j < CRUD[i].CRUD_individual.length; j++) {
      let stored_individual_id_reference = CRUD[i].CRUD_individual[j].CRUD_individual_id;
      let stored_individual_name_reference = CRUD[i].CRUD_individual[j].CRUD_individual_name;
      let stored_individual_distance_reference = CRUD[i].CRUD_individual[j].CRUD_individual_distance;
      let stored_individual_distance_type_reference = CRUD[i].CRUD_individual[j].CRUD_individual_distance_type;

      // main individual div

      const $travel_logs_individual_div_main = document.createElement("div");
      $travel_logs_individual_div_main.className = "travel_logs_individual_div_main";

      // main individual div
      // individual id

      const $individual_log_id = document.createElement("span");
      $individual_log_id.textContent = stored_individual_id_reference;

      // individual id
      // individual name container

      const $travel_logs_individual_name_container = document.createElement("div");
      $travel_logs_individual_name_container.classList.add("travel_logs_individual_name_container");
      $travel_logs_individual_div_main.appendChild($travel_logs_individual_name_container);

      // individual name container
      // individual name

      const $travel_logs_individual_name = document.createElement("span");
      $travel_logs_individual_name.textContent = stored_individual_name_reference;
      $travel_logs_individual_name.classList.add("travel_logs_individual_name");
      $travel_logs_individual_name_container.appendChild($travel_logs_individual_name);

      // individual name
      // individual distance

      const $travel_logs_individual_travel_type_and_distance_container = document.createElement("div");
      $travel_logs_individual_travel_type_and_distance_container.classList.add(
        "travel_logs_individual_travel_type_and_distance_container"
      );
      $travel_logs_individual_div_main.appendChild($travel_logs_individual_travel_type_and_distance_container);

      const $travel_logs_individual_distance = document.createElement("span");
      $travel_logs_individual_distance.classList.add("travel_logs_individual_distance");
      $travel_logs_individual_distance.textContent = formatDistance(stored_individual_distance_reference) + " km";

      const $travel_logs_distance_type = document.createElement("span");
      $travel_logs_distance_type.classList.add("travel_logs_distance_type");
      $travel_logs_distance_type.textContent = stored_individual_distance_type_reference;

      $travel_logs_individual_travel_type_and_distance_container.appendChild($travel_logs_distance_type);
      $travel_logs_individual_travel_type_and_distance_container.appendChild($travel_logs_individual_distance);

      // individual distance
      // individual name edit

      const $travel_logs_individual_name_edit = document.createElement("button");
      $travel_logs_individual_name_edit.innerHTML = '<i class="fas fa-pen fa-lg" style="color: #c9c9c9;"></i>';
      $travel_logs_individual_name_edit.classList.add("travel_logs_CRUD_buttons");

      $travel_logs_individual_name_edit.addEventListener("click", () => {
        $travel_logs_individual_name.contentEditable = true;
        $travel_logs_individual_name.focus();
        $travel_logs_individual_name.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            saveIndividualName();
          }
        });

        document.addEventListener("click", handleOutsideClick);

        function saveIndividualName() {
          const $travel_logs_individual_name_new = $travel_logs_individual_name.textContent;

          if ($travel_logs_individual_name_new === "") {
            showInfoPopup("Please enter a valid name");
          } else {
            $travel_logs_individual_name.textContent = $travel_logs_individual_name_new;
            const logId = $individual_log_id.textContent;
            const logIndex = travelLogs.findIndex((log) => log[1] === logId);
            if (logIndex !== -1) {
              travelLogs[logIndex][0] = $travel_logs_individual_name_new;
              CRUD[i].CRUD_individual[j].CRUD_individual_name = $travel_logs_individual_name_new;
            }
            for (let i = 0; i < timelineData.events.length; i++) {
              if (timelineData.events[i].unique_id === stored_individual_id_reference) {
                timelineData.events[i].text.headline = $travel_logs_individual_name_new;
                break;
              }
            }
          }
          if (timeline_enabled === true) {
            populateTimeline();
          }

          localStorageSaveTravelLogs();
          localStorageSaveCRUD();

          $travel_logs_individual_name.contentEditable = false;
          document.removeEventListener("click", handleOutsideClick);
        }

        function handleOutsideClick(event) {
          if (!$travel_logs_individual_div_main.contains(event.target)) {
            saveIndividualName();
          }
        }
      });
      $travel_logs_individual_div_main.appendChild($travel_logs_individual_name_edit);

      // individual name edit
      // individual delete

      const $travel_logs_delete = document.createElement("button");
      $travel_logs_delete.innerHTML = '<i class="fa-regular fa-trash-can fa-xl" style="color: #c9c9c9;"></i>';
      $travel_logs_delete.classList.add("travel_logs_CRUD_buttons");
      $travel_logs_delete.addEventListener("click", () => {
        markers_visibility = false;
        polyline_visibility = false;
        removeTrueHighlights();
        toggleMarkersVisibility();
        togglePolylineVisibility();
        trueHighlightsArrayRemoveHighlight(stored_individual_id_reference);
        removeMarkers(stored_individual_id_reference);
        removeTemporaryHighlights(stored_individual_id_reference);
        removeMarkersCoordinates(stored_individual_id_reference);
        removeTravelLogs(stored_individual_id_reference);
        removeStoredId(stored_individual_id_reference);
        removeTimelineData(timelineData, stored_individual_id_reference);
        timelineInfoToggle();
        calculateDistances();
        distancesBreakdown(rawCoordinatesDistances);
        calculateTotalDistances(rawCoordinatesDistances);
        removeTravelCount(stored_individual_distance_type_reference);
        countTravelType(markersData);
        updateTravelStats();
        localStorageCreateTrueHighlights();
        drawPolyline();
        localStorageSaveTrueHighlights();
        if (timeline_enabled === true) {
          populateTimeline();
        }
        const index = travelLogs.indexOf(stored_individual_name_reference);
        if (index !== -1) {
          travelLogs.splice(index, 1);
        }
        $travel_logs_individual_div_main.remove();

        const id_to_remove = CRUD.findIndex(
          (item) =>
            item.CRUD_individual &&
            item.CRUD_individual.some((individual) => individual.CRUD_individual_id === stored_individual_id_reference)
        );

        if (id_to_remove !== -1) {
          CRUD[id_to_remove].CRUD_individual.splice(j, 1);
        }

        removeTrueMarkers();
        localStorageSaveTravelLogs();
        localStorageSaveCRUD();
        localStorageSaveMarkerCoordinates();
        localStorageCreateTrueMarkers();

        if (timelineData.events.length === 0) {
          toggleTimelineVisibility(false);
        }
      });

      $travel_logs_individual_div_main.appendChild($travel_logs_delete);

      // individual delete
      // display

      $travel_logs_group_content.appendChild($travel_logs_individual_div_main);
    }
  }
}

function localStorageSaveTravelLogs() {
  localStorage.setItem("travel_logs_array", JSON.stringify(travelLogs));
}

function localStorageLoadTravelLogs() {
  if (localStorage.getItem("travel_logs_array")) {
    travelLogs = JSON.parse(localStorage.getItem("travel_logs_array"));
  } else {
    travelLogs = [];
  }
}

function localStorageRemoveTravelLogs() {
  localStorage.removeItem("travel_logs_array");
}

function localStorageSaveMarkerCoordinates() {
  localStorage.setItem("markersData", JSON.stringify(markersData));
}

function localStorageLoadMarkerCoordinates() {
  if (localStorage.getItem("markersData")) {
    markersData = JSON.parse(localStorage.getItem("markersData"));
  } else {
    markersData = [];
  }
}

function localStorageSaveCRUD() {
  localStorage.setItem("CRUD", JSON.stringify(CRUD));
}

function localStorageLoadCRUD() {
  if (localStorage.getItem("CRUD")) {
    CRUD = JSON.parse(localStorage.getItem("CRUD"));
  } else {
    CRUD = [];
  }
}

function localStorageCreateStoredIds() {
  for (let i = 0; i < travelLogs.length; i++) {
    storedIds.push(travelLogs[i][1]);
  }
}

function localStorageCreateTimelineData(travelLogs, timelineData) {
  for (const log of travelLogs) {
    const [headline, unique_id, date_range] = log;
    const [start_date_str, end_date_str] = date_range.split(" - ");

    const start_date = new Date(start_date_str);
    const end_date = new Date(end_date_str);

    const event = {
      start_date: {
        year: start_date.getFullYear(),
        month: start_date.getMonth() + 1,
        day: start_date.getDate(),
        date_obj: start_date,
        format: "full",
        format_short: "full_short",
      },
      end_date: {
        year: end_date.getFullYear(),
        month: end_date.getMonth() + 1,
        day: end_date.getDate(),
        date_obj: end_date,
        format: "full",
        format_short: "full_short",
      },
      text: {
        headline: headline,
        text: "",
      },
      unique_id: unique_id,
    };

    timelineData.events.push(event);
  }
}

function localStorageCreateTrueMarkers() {
  for (const coordinatesArray of markersData) {
    for (const coordinate of coordinatesArray) {
      const [lat, lng, [id, travelType, iconUrl]] = coordinate;

      const icon = L.icon({
        iconUrl: iconUrl,
        iconSize: [42, 42],
        iconAnchor: [24, 24],
      });

      const marker = L.marker([lat, lng], {
        icon: icon,
        travelType: travelType,
        id: id,
      });

      trueMarkers.addLayer(marker);
    }
  }

  trueMarkers.addTo(map);
}

function removeTemporaryMarkers() {
  temporaryMarkers.clearLayers();
  map.removeLayer(temporaryMarkers);
  temporaryMarkers = L.layerGroup();
}

function removeTrueMarkers() {
  trueMarkers.clearLayers();
  map.removeLayer(trueMarkers);
  trueMarkers = L.layerGroup();
}

function localStorageSaveTrueHighlights() {
  localStorage.setItem("trueHighlights", JSON.stringify(trueHighlights));
}

function localStorageLoadTrueHighlights() {
  if (localStorage.getItem("trueHighlights")) {
    trueHighlights = JSON.parse(localStorage.getItem("trueHighlights"));
  } else {
    trueHighlights = [];
  }
}

function localStorageCreateTrueHighlights() {
  trueHighlights.forEach((highlight) => {
    const { country_name, jscolor_highlight_color, jscolor_highlight_opacity } = highlight;

    const feature = cachedGeoJSON.features.find((f) => f.properties.ADMIN === country_name);

    if (feature) {
      const layer = L.geoJSON(feature, {
        style: {
          fillColor: jscolor_highlight_color,
          fillOpacity: jscolor_highlight_opacity,
          color: "black",
          weight: 1,
          opacity: 1,
        },
        onEachFeature: function (feature, layer) {},
      }).addTo(map);
    }
  });
}

function removeTrueHighlights() {
  map.eachLayer((layer) => {
    if (layer instanceof L.GeoJSON) {
      map.removeLayer(layer);
    }
  });
}

function trueHighlightsArrayRemoveHighlight(stored_individual_id_reference) {
  trueHighlights = trueHighlights.filter((highlight) => {
    return highlight.random_id !== stored_individual_id_reference;
  });
}

function removeContainerTravelLogs() {
  document.getElementById("logs_list").innerHTML = "";
}

function localStorageSaveHomeLocation() {
  localStorage.setItem("homelat", JSON.stringify(home_lat));
  localStorage.setItem("homelng", JSON.stringify(home_lng));
}

function localStorageLoadHomeLocation() {
  if (localStorage.getItem("homelat")) {
    home_lat = JSON.parse(localStorage.getItem("homelat"));
  }
  if (localStorage.getItem("homelng")) {
    home_lng = JSON.parse(localStorage.getItem("homelng"));
  }
}

function localStorageRemoveHomeLocation() {
  localStorage.removeItem("homelat");
  localStorage.removeItem("homelng");
}

function localStorageCreateHomeMarkerAndCircle(latitude, longitude) {
  removeMarkers("home_marker");
  homeMarkerClear();

  const offset_longitude = longitude * 1.002;

  if (!home_lat == 0) {
    home_marker = L.marker([latitude, offset_longitude], {
      icon: home_icon,
      id: "home_marker",
    });

    home_lat = latitude;
    home_lng = longitude;

    home_marker.addTo(map).bounce(1);

    home_circle = L.circle([latitude, longitude], {
      radius: 50000,
      color: jscolor_home_color,
      fillOpacity: jscolor_home_opacity,
      weight: 1,
    }).addTo(map);
  }
}

// Local Storage ↑
// Loading progress info ↓

const progress_info = document.getElementById("progress_info");

showAppTitle();

function showAppTitle() {
  const title_screen_background = document.querySelector(".title_screen_background");

  title_screen_background.style.left = "20%";
  title_screen_background.style.transform = "translateX(-50%)";
  title_screen_background.style.top = "30%";
  title_screen_background.style.transform = "translateY(-50%)";
}

function hideAppTitle() {
  const title_screen_background = document.querySelector(".title_screen_background");

  title_screen_background.style.left = "90%";
  title_screen_background.style.transform = "translateX(-50%)";
  title_screen_background.style.top = "30%";
  title_screen_background.style.transform = "translateY(-50%)";
}

function trackLoadingProgress(resources, progressInfoDisplay, onLoadingComplete) {
  const totalResources = resources.length;
  let loadedResources = 0;
  let currentResourceIndex = 0;

  function loadNextResource() {
    if (currentResourceIndex < totalResources) {
      const resource = resources[currentResourceIndex];
      const resourceUrl = resource.url;
      const label = resource.label;

      fetch(resourceUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${resourceUrl}`);
          }
          return response;
        })
        .then(() => {
          loadedResources++;
          const progress = (loadedResources / totalResources) * 100;
          progressInfoDisplay(label, progress);

          currentResourceIndex++;
          loadNextResource();
        })
        .catch((error) => {
          console.error(error);
          loadedResources++;
          currentResourceIndex++;
          loadNextResource();
        });
    } else {
      onLoadingComplete();
    }
  }

  loadNextResource();
}

const resourcesToLoad = [
  { url: "styles.css", label: "Main CSS" },
  { url: "content/data/LeafletMap/leaflet.css", label: "Leaflet CSS" },
  { url: "content/data/DateRangePicker/daterangepicker.css", label: "DateRangePicker CSS" },
  { url: "content/data/FontAwesome/css/all.min.css", label: "FontAwesome CSS" },
  { url: "script.js", label: "Main JS" },
  { url: "content/data/LeafletMap/leaflet.js", label: "Leaflet JS" },
  { url: "content/data/JScolor/jscolor.js", label: "JScolor JS" },
  { url: "content/data/Jquery/jquery.js", label: "Jquery JS" },
  { url: "content/data/Moment/moment.min.js", label: "Moment JS" },
  { url: "content/data/DateRangePicker/daterangepicker.js", label: "DateRangePicker JS" },
  { url: "content/data/LeafletEdgeBuffer/leaflet.edgebuffer.js", label: "Leaflet EdgeBuffer JS" },
  { url: "content/data/LeafletGridLayerFadeOut/Leaflet.GridLayer.FadeOut.js", label: "Leaflet Grid Layer Fade-out JS" },
  { url: "content/data/SmoothMarkerBouncing/bundle.js", label: "SmoothMarkerBouncing JS" },

  // { url: "https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js", label: "TimelineJS JS" },
  // { url: "https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css", label: "TimelineJS CSS" },
];

function progressInfoDisplay(label, progress) {
  progress_info.textContent = ` ${label} (Progress: ${progress.toFixed(2)}%)`;
}

function onLoadingComplete() {
  localStorageLoadTrueHighlights();
  localStorageLoadTravelLogs();
  localStorageLoadMarkerCoordinates();
  localStorageLoadCRUD();
  localStorageLoadHomeLocation();

  localStorageCreateStoredIds();
  localStorageCreateTimelineData(travelLogs, timelineData);
  localStorageCreateTrueHighlights();
  drawPolyline();
  timelineInfoToggle();
  populateTimeline();
  buildCRUD();
  localStorageCreateTrueMarkers();
  localStorageCreateHomeMarkerAndCircle(home_lat, home_lng);

  calculateDistances();
  distancesBreakdown(rawCoordinatesDistances);
  calculateTotalDistances(rawCoordinatesDistances);
  updateTravelStats();

  hideAppTitle();
  progress_info.textContent = "All resources loaded!";

  setTimeout(() => {
    if (timelineData.events.length > 0) {
      toggleTimelineVisibility(true);
    }
  }, 1500);

  setTimeout(() => {
    plane_icon_animation.classList.add("loading_page_fade_out_fast");
    globe_icon_animation.classList.add("loading_page_fade_out_fast");
    removeLoadingPageContent();
  }, 500);
}
trackLoadingProgress(resourcesToLoad, progressInfoDisplay, onLoadingComplete);

// Loading progress info ↑
// Other ↓
// // Other / Info popup ↓

function showInfoPopup(text) {
  info_popup_text.textContent = text;
  info_popup.style.display = "block";
}

function closeInfoPopup() {
  info_popup.style.display = "none";
}
close_info_popup.addEventListener("click", closeInfoPopup);

// // Other / Info popup ↑
// Other ↑

// // ---------- TEST ---------- ↓

test_button.addEventListener("click", () => {
  console.log("-1- " + "markersData", markersData);
  console.log("-1- " + "travelLogs", travelLogs);
  console.log("-1- " + "CRUD", CRUD);
  console.log("-1- " + "trueHighlights", trueHighlights);
  console.log("-0- " + "highlights", highlights);
  console.log("-0- " + "markers", markers);
  console.log("-0- " + "polylines", polylines);
  console.log("-0- " + "storedIds", storedIds);
  console.log("-0- " + "rawCoordinatesDistances", rawCoordinatesDistances);
  console.log("-0- " + "timelineData", timelineData);

  console.log("Highest Distance:", highest_distance.toFixed(2), "km");
  console.log("Lowest Distance:", lowest_distance.toFixed(2), "km");
  console.log("Total Distance:", total_distance.toFixed(2), "km");

  // console.log("Total Car Distance:", total_car_distance.toFixed(2), "km");
  // console.log("Total Plane Distance:", total_plane_distance.toFixed(2), "km");
  // console.log("Total Boat Distance:", total_boat_distance.toFixed(2), "km");
  // console.log("Total Walk Distance:", total_walk_distance.toFixed(2), "km");
  // console.log("Total Bicycle Distance:", total_bicycle_distance.toFixed(2), "km");
  // console.log("Total Motorcycle Distance:", total_motorcycle_distance.toFixed(2), "km");
  // console.log("Total Train Distance:", total_train_distance.toFixed(2), "km");
  // console.log("Total Bus Distance:", total_bus_distance.toFixed(2), "km");
});

test_button_2.addEventListener("click", () => {});

test_button_3.addEventListener("click", () => {});

test_button_4.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
