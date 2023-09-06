// ver: 0.7.16

// Bugs:

// Features to add:

// ---------- 4. new UI / Add loading animations before the page/content load
// ---------- 5. Add different page styles (font, animations, images, backgrounds, theme) - modern / middleage / other
// ---------- 6. Add local storage to save the trip progress and settings
//               - make the storedIds[] load the id data from the travelLogs[] on page load, instead of storing it in a local storage in the future
// ---------- 7. Add different languages
// ---------- 8. Add info boxes to help navigate the app while using it for the first time
// ---------- 9. Add D3 to visualize the statistics data

// multi options polyline / leaflet motion / polyline decorator / leaflet Storage / leaflet canvas markers /

// ↓ Variables ↓
// // ↓ Sidebar House ↓
const sidebar_house_button = document.getElementById("sidebar_house_button");
const house_icon = document.getElementById("house_icon");
const sub_house_button_container = document.getElementById("sub_house_button_container");
const sub_house_color_button = document.getElementById("sub_house_color_button");
const jscolor = document.getElementById("jscolor");
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

// // ↑ Sidebar House ↑
// // ↓ Sidebar Map Layers ↓

const sidebar_map_layers_button = document.getElementById("sidebar_map_layers_button");
const map_layers_icon = document.getElementById("map_layers_icon");
const sub_map_layers_container = document.getElementById("sub_map_layers_container");
const sub_map_tile_layer_A = document.querySelector("#sub_map_tile_layer_A");
const sub_map_tile_layer_B = document.querySelector("#sub_map_tile_layer_B");
const sub_map_tile_layer_C = document.querySelector("#sub_map_tile_layer_C");
const sub_map_tile_layer_D = document.querySelector("#sub_map_tile_layer_D");

let map_layers_container_timeout;

// // ↑ Sidebar Map Layers ↑
// // ↓ Sidebar Overlay ↓

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

// // ↑ Sidebar Overlay ↑
// // ↓ Sidebar Page Styles ↓

const page_styles_icon = document.getElementById("page_styles_icon");

// // ↑ Sidebar Page Styles ↑
// // ↓ Sidebar Timeline ↓

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

// // ↑ Sidebar Timeline ↑
// // ↓ Sidebar Statistics ↓

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

// // ↑ Sidebar Statistics ↑
// // ↓ Sidebar Language ↓

const sidebar_language_button = document.getElementById("sidebar_language_button");
const language_icon = document.getElementById("language_icon");

// // ↑ Sidebar Language ↑
// // ↓ Sidebar Settings ↓

const sidebar_settings_button = document.getElementById("sidebar_settings_button");
const settings_icon = document.getElementById("settings_icon");

// // ↑ Sidebar Settings ↑
// // ↓ Info box ↓

const info_popup = document.getElementById("info_popup");
const info_popup_text = document.getElementById("info_popup_text");
const close_info_popup = document.getElementById("close_info_popup");

// // ↑ Info box ↑
// // ↓ Travel Log Creator ↓

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

// // ↑ Travel Log Creator ↑
// // ↓ Travel log group ↓

const check_group_button = document.getElementById("check_group_button");
const close_group_button = document.getElementById("close_group_button");
const check_group_icon = document.getElementById("check_group_icon");
const close_group_icon = document.getElementById("close_group_icon");

let travel_logs_group_name = "";
let travel_logs_group_input = document.getElementById("travel_logs_group_input");

// // ↑ Travel log group ↑
// // ↓ Travel log individual ↓

const travel_type_car = document.getElementById("travel_type_car");
const travel_type_plane = document.getElementById("travel_type_plane");
const travel_type_boat = document.getElementById("travel_type_boat");
const travel_type_walk = document.getElementById("travel_type_walk");
const travel_type_bicycle = document.getElementById("travel_type_bicycle");
const travel_type_motorcycle = document.getElementById("travel_type_motorcycle");
const travel_type_train = document.getElementById("travel_type_train");
const travel_type_bus = document.getElementById("travel_type_bus");

const check_icon_individual = document.getElementById("check_icon_individual");
const close_icon_individual = document.getElementById("close_icon_individual");

const marker_color_picker = document.getElementById("marker_color_picker");
const marker_opacity_slider = document.getElementById("marker_opacity_slider");

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

let marker_highlight_color = "#1495ED";
let marker_highlight_opacity = 0.5;
let marker_highlight_color_opacity_customization = true;

// // ↑ Travel log individual ↑
// // ↓ Custom cursor ↓

const custom_cursor = document.getElementById("custom_cursor");

// // ↑ Custom cursor ↑
// // ↓ Leaflet map ↓

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

// // ↑ Leaflet map ↑

// 1 = future local storage / 0 = temporary, local storage not needed

/* 1 */ let highlights = [];
/* 1 */ let markers = [];
/* 1 */ let markersCoordinates = [];
/* 1 */ let travelLogs = [];
/* 0 */ let polylines = [];
/* 0 */ let storedIds = [];
/* 0 */ let timelineData = {
  events: [],
};
/* 0 */ let rawCoordinatesDistances = [];

// ↑ Variables ↑

// ↓ Page interaction ↓
// // ↓ Sidebar ↓
// // // ↓ House ↓

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
  jscolor.jscolor.show();
});

jscolor.addEventListener("change", () => {
  jscolor_home_data = jscolor.jscolor.toHEXAString();
  jscolor_home_color = jscolor_home_data.slice(0, -2);
  jscolor_home_opacity = parseInt(jscolor_home_data.slice(-2), 16) / 255;
});

sub_house_manual_location.addEventListener("click", () => {
  travelTypeValueUpdate(true, false, false, false, false, false, false, false, false);
  updateCursorImage("/content/icons/home_icon_small.png");
  removeMarkers("home_marker");
  homeMarkerClear();

  const mapClickListener = (e) => {
    toggleCustomCursorVisibility(false);
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
        color: jscolor_home_color,
        fillOpacity: jscolor_home_opacity,
        weight: 1,
      }).addTo(map);
    }

    home_button_manual_click = false;

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

      home_marker = L.marker([latitude, longitude], {
        icon: home_icon,
        id: "home_marker",
      });
      home_marker.addTo(map).bounce(1);
      markers.push(home_marker);
      home_circle = L.circle(home_marker.getLatLng(), {
        radius: 50000,
        color: jscolor_home_color,
        fillOpacity: jscolor_home_opacity,
        weight: 1,
      }).addTo(map);
    });
  }
  setTimeout(homeMarkerZoom, 200);
});

sub_house_zoom.addEventListener("click", () => {
  homeMarkerZoom();
});

sub_house_delete.addEventListener("click", () => {
  removeMarkers("home_marker");
  homeMarkerClear();
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
  if (home_marker) {
    map.setView(home_marker.getLatLng(), 7);
  } else {
    showInfoPopup("Home location not set!");
  }
}

// // // ↑ House ↑
// // // ↓ Map Layers ↓

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

// // // ↑ Map Layers ↑
// // // ↓ Overlay ↓

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
  markers.forEach((marker) => {
    if (map.hasLayer(marker) && markers_visibility) {
      marker.removeFrom(map);
    } else {
      marker.addTo(map);
    }
  });
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

// // // ↑ Overlay ↑
// // // ↓ Timeline ↓

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
    timeline_container.style.transform = "translate(-50%, -67.5%)";
    timeline_container_arrow.style.transform = "translate(-50%, -630%)";
    timeline_visibility = true;
  } else {
    timeline_container.style.transform = "translate(-50%, 40%)";
    timeline_container_arrow.style.transform = "translate(-50%, 0%)";
    timeline_visibility = false;
  }
}

// // // ↑ Timeline ↑
// // // ↓ Statistics ↓

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

  for (let i = 0; i < markersCoordinates.length; i++) {
    let sub_distances = [];

    for (let j = 0; j < markersCoordinates[i].length - 1; j++) {
      let distance = calculateDistance(markersCoordinates[i][j], markersCoordinates[i][j + 1]);
      let distance_info = markersCoordinates[i][j][2];
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
  const { travel_type_count, highest_count_travel_types } = countTravelType(markersCoordinates);
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

function countTravelType(markersCoordinates) {
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

  for (const marker of markersCoordinates) {
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

// // // ↑ Statistics ↑
// // // ↓ Language ↓

sidebar_language_button.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, language_icon, sidebar_language_button)
);

sidebar_language_button.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, language_icon, sidebar_language_button)
);

// // // ↑ Language ↑
// // // ↓ Settings ↓

sidebar_settings_button.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, settings_icon, sidebar_settings_button)
);

sidebar_settings_button.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, settings_icon, sidebar_settings_button)
);

// // // ↑ Settings ↑

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

// // ↑ Sidebar ↑
// ↑ Page interaction ↑
// ↓ Travel Log Creator ↓
add_travel.addEventListener("click", () => {
  if (!statistics_visibility) {
    statistics_visibility = toggleIconColor(statistics_visibility, statistics_icon);
  }
  toggleMainLogContainerVisibility(false);
  toggleTimelineVisibility(false);
  toggleStatisticsVisibility(false);
  if (!is_travel_creator_active) {
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
    } else {
      toggleMainLogContainerVisibility(true);
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

marker_color_picker.addEventListener("input", function () {
  if (marker_highlight_color_opacity_customization) {
    marker_highlight_color = marker_color_picker.value;
  } else showInfoPopup("cannot customize highlight color while placing travel markers");
});

marker_opacity_slider.addEventListener("input", function () {
  if (marker_highlight_color_opacity_customization) {
    marker_highlight_opacity = parseFloat(marker_opacity_slider.value);
  } else showInfoPopup("cannot customize highlight opacity while placing travel markers");
});

// ↑ Travel Log Creator ↑
// ↓ Travel log group ↓

check_group_button.addEventListener("click", (event) => {
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
    travelLogGroupSubmit(event);
    toggleMainLogContainerVisibility(true);
    toggleTimelineVisibility(true);
    toggleTravelLogsGroupMainContainerVisibility(false);
    timelineInfoToggle();
    closeInfoPopup();
  }
});

check_group_button.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, check_group_icon, check_group_button)
);

check_group_button.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, check_group_icon, check_group_button)
);

close_group_button.addEventListener("click", () => {
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

close_group_button.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, close_group_icon, close_group_button)
);

close_group_button.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, close_group_icon, close_group_button)
);

// ↑ Travel log group ↑
// ↓ Travel Log Individual ↓

travel_type_car.addEventListener("click", () => {
  if (is_travel_creator_active) {
    marker_highlight_color_opacity_customization = false;
    createHighlightLayer(cachedGeoJSON);
    updateCursorImage("/content/icons/car_icon_small.png");
    travelTypeButtonsGrayscale();
    travel_type_car.querySelector("img").src = travelTypeButtonImages.get(travel_type_car);

    travelTypeValueUpdate(false, true, false, false, false, false, false, false, false);

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
    is_travel_creator_active = !is_travel_creator_active;
  }
});

travel_type_plane.addEventListener("click", () => {
  if (is_travel_creator_active) {
    marker_highlight_color_opacity_customization = false;
    createHighlightLayer(cachedGeoJSON);
    updateCursorImage("/content/icons/plane_icon_small.png");
    travelTypeButtonsGrayscale();
    travel_type_plane.querySelector("img").src = travelTypeButtonImages.get(travel_type_plane);

    travelTypeValueUpdate(false, false, true, false, false, false, false, false, false);

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
    is_travel_creator_active = !is_travel_creator_active;
  }
});

travel_type_boat.addEventListener("click", () => {
  if (is_travel_creator_active) {
    marker_highlight_color_opacity_customization = false;
    createHighlightLayer(cachedGeoJSON);
    updateCursorImage("/content/icons/boat_icon_small.png");
    travelTypeButtonsGrayscale();
    travel_type_boat.querySelector("img").src = travelTypeButtonImages.get(travel_type_boat);

    travelTypeValueUpdate(false, false, false, true, false, false, false, false, false);

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
    is_travel_creator_active = !is_travel_creator_active;
  }
});

travel_type_walk.addEventListener("click", () => {
  if (is_travel_creator_active) {
    marker_highlight_color_opacity_customization = false;
    createHighlightLayer(cachedGeoJSON);
    updateCursorImage("/content/icons/walk_icon_small.png");
    travelTypeButtonsGrayscale();
    travel_type_walk.querySelector("img").src = travelTypeButtonImages.get(travel_type_walk);

    travelTypeValueUpdate(false, false, false, false, true, false, false, false, false);

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
    is_travel_creator_active = !is_travel_creator_active;
  }
});

travel_type_bicycle.addEventListener("click", () => {
  if (is_travel_creator_active) {
    marker_highlight_color_opacity_customization = false;
    createHighlightLayer(cachedGeoJSON);
    updateCursorImage("/content/icons/bicycle_icon_small.png");
    travelTypeButtonsGrayscale();
    travel_type_bicycle.querySelector("img").src = travelTypeButtonImages.get(travel_type_bicycle);

    travelTypeValueUpdate(false, false, false, false, false, true, false, false, false);

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
    is_travel_creator_active = !is_travel_creator_active;
  }
});

travel_type_motorcycle.addEventListener("click", () => {
  if (is_travel_creator_active) {
    marker_highlight_color_opacity_customization = false;
    createHighlightLayer(cachedGeoJSON);
    updateCursorImage("/content/icons/motorcycle_icon_small.png");
    travelTypeButtonsGrayscale();
    travel_type_motorcycle.querySelector("img").src = travelTypeButtonImages.get(travel_type_motorcycle);

    travelTypeValueUpdate(false, false, false, false, false, false, true, false, false);

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
    is_travel_creator_active = !is_travel_creator_active;
  }
});

travel_type_train.addEventListener("click", () => {
  if (is_travel_creator_active) {
    marker_highlight_color_opacity_customization = false;
    createHighlightLayer(cachedGeoJSON);
    updateCursorImage("/content/icons/train_icon_small.png");
    travelTypeButtonsGrayscale();
    travel_type_train.querySelector("img").src = travelTypeButtonImages.get(travel_type_train);

    travelTypeValueUpdate(false, false, false, false, false, false, false, true, false);

    if (travel_type_train_click == true) {
      map.off("click");
      function onMapClick(e) {
        let lat = e.latlng.lat;
        let lng = e.latlng.lng;

        marker = L.marker([lat, lng], {
          icon: train_icon,
          travelType: "train",
          id: random_id,
        });

        marker.addTo(map).bounce(1);
        markers.push(marker);

        type = "train";

        markersCoordinates[markersCoordinates.length - 1].push([lat, lng, [random_id, type]]);
        drawPolyline();
      }

      map.on("click", onMapClick);
    }
    is_travel_creator_active = !is_travel_creator_active;
  }
});

travel_type_bus.addEventListener("click", () => {
  if (is_travel_creator_active) {
    marker_highlight_color_opacity_customization = false;
    createHighlightLayer(cachedGeoJSON);
    updateCursorImage("/content/icons/bus_icon_small.png");
    travelTypeButtonsGrayscale();
    travel_type_bus.querySelector("img").src = travelTypeButtonImages.get(travel_type_bus);

    travelTypeValueUpdate(false, false, false, false, false, false, false, false, true);

    if (travel_type_bus_click == true) {
      map.off("click");
      function onMapClick(e) {
        let lat = e.latlng.lat;
        let lng = e.latlng.lng;

        marker = L.marker([lat, lng], {
          icon: bus_icon,
          travelType: "bus",
          id: random_id,
        });

        marker.addTo(map).bounce(1);
        markers.push(marker);

        type = "bus";

        markersCoordinates[markersCoordinates.length - 1].push([lat, lng, [random_id, type]]);
        drawPolyline();
      }

      map.on("click", onMapClick);
    }
    is_travel_creator_active = !is_travel_creator_active;
  }
});

check_icon_individual.addEventListener("click", (event) => {
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
    calculateDistances();
    distancesBreakdown(rawCoordinatesDistances);
    calculateTotalDistances(rawCoordinatesDistances);
    updateTravelStats();
    travelLogIndividualSubmit(event);
    document.removeEventListener("mousemove", pngMouseTracking);
    toggleCustomCursorVisibility(false);
    map.off("click");

    toggleMainLogContainerVisibility(true);
    toggleTimelineVisibility(true);
    toggleTravelLogsIndividualMainContainerVisibility(false);
    timelineInfoToggle();
    closeInfoPopup();
    countTravelType(markersCoordinates);
    is_travel_creator_active = false;
  }
});

close_icon_individual.addEventListener("click", () => {
  toggleMainLogContainerVisibility(true);
  toggleTimelineVisibility(true);
  closeInfoPopup();
  document.removeEventListener("mousemove", pngMouseTracking);
  toggleCustomCursorVisibility(false);
  map.off("click");
  travelTypeValueUpdate(false, false, false, false, false, false, false, false, false);

  stored_individual_log_id = random_id;
  removeMarkers(stored_individual_log_id);
  removeHighlights(stored_individual_log_id);
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

// ↑ Travel Log Individual ↑
// ↓ Polyline ↓

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

// ↑ Polyline ↑
// ↓ ID generator ↓

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

// ↑ ID generator ↑
// ↓ Travel Log date picker ↓

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

// ↑ Travel Log date picker ↑
// ↓ Custom Cursor ↓

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

// ↑ Custom Cursor ↑
// ↓ GeoJSON + Country highlight ↓

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
        if (travel_type_train_click) {
          setLayerStyle(layer, marker_highlight_color, marker_highlight_opacity, "train", random_id);
          highlights.push({ type: "train", random_id, layer });
        }
        if (travel_type_bus_click) {
          setLayerStyle(layer, marker_highlight_color, marker_highlight_opacity, "bus", random_id);
          highlights.push({ type: "bus", random_id, layer });
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

// ↑ GeoJSON + Country highlight ↑
// ↓ CRUD individual ↓

function travelLogIndividualSubmit(event) {
  event.preventDefault();
  let stored_individual_id = random_id;

  // main individual div

  const $travel_logs_individual_div_main = document.createElement("div");
  $travel_logs_individual_div_main.className = "travel_logs_individual_div_main";

  // main individual div
  // individual id

  const $individual_log_id = document.createElement("span");
  $individual_log_id.textContent = random_id;

  // individual id
  // individual name container

  const $travel_logs_individual_name_container = document.createElement("div");
  $travel_logs_individual_name_container.classList.add("travel_logs_individual_name_container");
  $travel_logs_individual_div_main.appendChild($travel_logs_individual_name_container);

  // individual name container
  // individual name

  const $travel_logs_individual_name = document.createElement("span");
  $travel_logs_individual_name.textContent = travel_logs_individual_name;
  $travel_logs_individual_name.classList.add("travel_logs_individual_name");
  $travel_logs_individual_name_container.appendChild($travel_logs_individual_name);

  // individual name
  // individual distance

  let distance_type = type;

  const $travel_logs_individual_travel_type_and_distance_container = document.createElement("div");
  $travel_logs_individual_travel_type_and_distance_container.classList.add(
    "travel_logs_individual_travel_type_and_distance_container"
  );
  $travel_logs_individual_div_main.appendChild($travel_logs_individual_travel_type_and_distance_container);

  calculateTotalIdDistance(rawCoordinatesDistances, stored_individual_id);
  const $travel_logs_individual_distance = document.createElement("span");
  $travel_logs_individual_distance.classList.add("travel_logs_individual_distance");
  $travel_logs_individual_distance.textContent = formatDistance(total_id_distance) + " km";

  const $travel_logs_distance_type = document.createElement("span");
  $travel_logs_distance_type.classList.add("travel_logs_distance_type");
  $travel_logs_distance_type.textContent = distance_type;

  $travel_logs_individual_travel_type_and_distance_container.appendChild($travel_logs_distance_type);
  $travel_logs_individual_travel_type_and_distance_container.appendChild($travel_logs_individual_distance);

  // individual distance
  // individual name edit

  const $travel_logs_individual_name_edit = document.createElement("button");
  $travel_logs_individual_name_edit.innerHTML = '<i class="fas fa-pen fa-lg" style="color: #c9c9c9;"></i>';
  $travel_logs_individual_name_edit.classList.add("travel_logs_CRUD_buttons");
  $travel_logs_individual_name_edit.addEventListener("click", () => {
    const $travel_logs_individual_name_new = prompt("Enter new text:");

    if ($travel_logs_individual_name_new == null || $travel_logs_individual_name_new == "") {
      showInfoPopup("Please enter a valid name");
    } else {
      $travel_logs_individual_name.textContent = $travel_logs_individual_name_new;
      const logId = $individual_log_id.textContent;
      const logIndex = travelLogs.findIndex((log) => log[1] === logId);
      if (logIndex !== -1) {
        travelLogs[logIndex][0] = $travel_logs_individual_name_new;
      }
    }
    for (let i = 0; i < timelineData.events.length; i++) {
      if (timelineData.events[i].unique_id === stored_individual_id) {
        timelineData.events[i].text.headline = $travel_logs_individual_name_new;
        break;
      }
    }
    if (timeline_enabled === true) {
      window.timeline = new TL.Timeline("timeline", timelineData, timelineOptions);
    }
  });
  $travel_logs_individual_div_main.appendChild($travel_logs_individual_name_edit);

  // individual name edit
  // individual delete

  const $travel_logs_delete = document.createElement("button");
  $travel_logs_delete.innerHTML = '<i class="fa-regular fa-trash-can fa-xl" style="color: #c9c9c9;"></i>';
  $travel_logs_delete.classList.add("travel_logs_CRUD_buttons");
  $travel_logs_delete.addEventListener("click", () => {
    stored_individual_log_id = $individual_log_id.textContent;
    markers_visibility = false;
    polyline_visibility = false;
    toggleMarkersVisibility();
    togglePolylineVisibility();
    removeMarkers(stored_individual_log_id);
    removeHighlights(stored_individual_log_id);
    removeMarkersCoordinates(stored_individual_log_id);
    drawPolyline();
    removeTravelLogs(stored_individual_log_id);
    removeStoredId(stored_individual_log_id);
    removeTimelineData(timelineData, stored_individual_log_id);
    timelineInfoToggle();
    calculateDistances();
    distancesBreakdown(rawCoordinatesDistances);
    calculateTotalDistances(rawCoordinatesDistances);
    removeTravelCount(distance_type);
    countTravelType(markersCoordinates);
    updateTravelStats();
    if (timeline_enabled === true) {
      window.timeline = new TL.Timeline("timeline", timelineData, timelineOptions);
    }
    const index = travelLogs.indexOf(travel_logs_individual_name);
    if (index !== -1) {
      travelLogs.splice(index, 1);
    }
    $travel_logs_individual_div_main.remove();
  });
  $travel_logs_individual_div_main.appendChild($travel_logs_delete);

  // individual delete
  // individual display

  const $content_div = document.getElementById(stored_group_log_id);
  $content_div.appendChild($travel_logs_individual_div_main);

  // individual display

  travelLogs.push([travel_logs_individual_name, stored_individual_id, travel_date_start + " - " + travel_date_end]);

  splitDates(timeline_start, timeline_end);
  createTimelineData(travel_logs_individual_name);
  if (timeline_enabled === true) {
    window.timeline = new TL.Timeline("timeline", timelineData, timelineOptions);
  }
  travel_logs_individual_input.value = "";
  random_id = "";
}

// ↑ CRUD individual ↑
// ↓ CRUD group ↓

function travelLogGroupSubmit(event) {
  event.preventDefault();
  stored_group_log_id = random_id;

  // main group div

  const $travel_logs_group_div_main = document.createElement("div");
  $travel_logs_group_div_main.classList.add("travel_logs_group_div_main");

  const $travel_logs_group_div_settings = document.createElement("div");
  $travel_logs_group_div_settings.classList.add("travel_logs_group_div_settings");

  const $travel_logs_group_content = document.createElement("div");
  $travel_logs_group_content.classList.add("travel_logs_group_div_content");
  $travel_logs_group_content.id = stored_group_log_id;

  // main group div
  // group id

  const $group_log_id = document.createElement("span");
  $group_log_id.textContent = stored_group_log_id;

  // group id
  // group name div

  const $travel_logs_group_name_container = document.createElement("div");
  $travel_logs_group_name_container.classList.add("travel_logs_group_name_container");
  $travel_logs_group_div_settings.appendChild($travel_logs_group_name_container);

  // group name div
  // group name

  const $travel_logs_group_name = document.createElement("span");
  $travel_logs_group_name.textContent = travel_logs_group_name;
  $travel_logs_group_name.classList.add("travel_logs_group_name");
  $travel_logs_group_name_container.appendChild($travel_logs_group_name);

  // group name
  // group date

  const $travel_logs_group_date = document.createElement("span");
  $travel_logs_group_date.classList.add("travel_logs_group_date");
  $travel_logs_group_date.textContent = travel_date_start + " - " + travel_date_end;
  $travel_logs_group_name_container.appendChild($travel_logs_group_date);

  // group date
  // group name edit

  const $travel_logs_group_name_edit = document.createElement("button");
  $travel_logs_group_name_edit.innerHTML = '<i class="fas fa-pen fa-xl" style="color: #c9c9c9;"></i>';
  $travel_logs_group_name_edit.classList.add("travel_logs_CRUD_buttons");
  $travel_logs_group_name_edit.addEventListener("click", () => {
    const $travel_logs_group_name_new = prompt("Enter new text:");

    if ($travel_logs_group_name_new == null || $travel_logs_group_name_new == "") {
      showInfoPopup("Please enter a valid name");
    } else {
      $travel_logs_group_name.textContent = $travel_logs_group_name_new;
      const logId = $group_log_id.textContent;
      const logIndex = travelLogs.findIndex((log) => log[1] === logId);
      if (logIndex !== -1) {
        travelLogs[logIndex][0] = $travel_logs_group_name_new;
      }
    }
    for (let i = 0; i < timelineData.events.length; i++) {
      if (timelineData.events[i].unique_id === stored_group_log_id) {
        timelineData.events[i].text.headline = $travel_logs_group_name_new;
        break;
      }
    }
    if (timeline_enabled === true) {
      window.timeline = new TL.Timeline("timeline", timelineData, timelineOptions);
    }
  });
  $travel_logs_group_div_settings.appendChild($travel_logs_group_name_edit);

  // group name edit
  // group (individual) travel button

  const $travel_logs_group_add_travel_button = document.createElement("button");
  $travel_logs_group_add_travel_button.innerHTML = '<i class="fa-solid fa-plus fa-xl" style="color: #c9c9c9;"></i>';
  $travel_logs_group_add_travel_button.classList.add("travel_logs_CRUD_buttons");
  $travel_logs_group_add_travel_button.addEventListener("click", () => {
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
    markersCoordinates = markersCoordinates.filter((coordinatesArray) => coordinatesArray.length > 0);
    markersCoordinates.push([]);
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
    stored_group_log_id = $group_log_id.textContent;
    isGroupContentDivEmpty();
    if (isTravelGroupEmpty == true) {
      removeTravelLogs(stored_group_log_id);
      removeStoredId(stored_group_log_id);
      removeTimelineData(timelineData, stored_group_log_id);
      timelineInfoToggle();
      if (timeline_enabled === true) {
        window.timeline = new TL.Timeline("timeline", timelineData, timelineOptions);
      }
      const index = travelLogs.indexOf(travel_logs_group_name);
      if (index !== -1) {
        travelLogs.splice(index, 1);
      }
      $travel_logs_group_div_main.remove();
    } else if (isTravelGroupEmpty == false) {
      showInfoPopup("Travel group is not empty, please remove remaining travel logs");
    }
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

  travelLogs.push([travel_logs_group_name, random_id, travel_date_start + " - " + travel_date_end]);

  splitDates(timeline_start, timeline_end);
  createTimelineData(travel_logs_group_name);
  if (timeline_enabled === true) {
    window.timeline = new TL.Timeline("timeline", timelineData, timelineOptions);
  }
  travel_logs_group_input.value = "";
  random_id = "";
}
// ↑ CRUD group ↑

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
  markersCoordinates = markersCoordinates.filter((array) => {
    return !array.some((item) => item[2][0] === id);
  });
}

function removeHighlights(id) {
  const highlightsToRemove = highlights.filter((highlight) => highlight.random_id === id);

  highlightsToRemove.forEach((highlight) => {
    map.removeLayer(highlight.layer);
    const highlightIndex = highlights.findIndex((h) => h.random_id === highlight.random_id);
    if (highlightIndex !== -1) {
      highlights.splice(highlightIndex, 1);
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
  const idToRemove = storedIds.indexOf(id);
  if (idToRemove !== -1) {
    storedIds.splice(idToRemove, 1);
  }
}

function isGroupContentDivEmpty() {
  let storedContentDiv = document.getElementById(stored_group_log_id);
  isTravelGroupEmpty = storedContentDiv.innerHTML.trim() === "";
  return isTravelGroupEmpty;
}

function toggleTravelLogsGroupMainContainerVisibility(toggle) {
  if (toggle) {
    travel_logs_group_main_container.style.display = "block";
    check_group_button.style.display = "block";
    close_group_button.style.display = "block";
  } else {
    travel_logs_group_main_container.style.display = "none";
    check_group_button.style.display = "none";
    close_group_button.style.display = "none";
  }
}

function toggleTravelLogsIndividualMainContainerVisibility(toggle) {
  if (toggle) {
    travel_logs_individual_main_container.style.display = "block";
    check_icon_individual.style.display = "block";
    close_icon_individual.style.display = "block";
  } else {
    travel_logs_individual_main_container.style.display = "none";
    check_icon_individual.style.display = "none";
    close_icon_individual.style.display = "none";
  }
}

function toggleCustomCursorVisibility(toggle) {
  custom_cursor.style.display = toggle ? "flex" : "none";
}

// ↓ TimelineJS ↓

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

function createTimelineData(headline) {
  timeline_start = travel_date_start;
  timeline_end = travel_date_end;

  const { startYear, startMonth, startDay, endYear, endMonth, endDay } = splitDates(timeline_start, timeline_end);

  let timeline_date_start = {
    year: startYear,
    month: startMonth,
    day: startDay,
  };

  let timeline_date_end = {
    year: endYear,
    month: endMonth,
    day: endDay,
  };

  const newEvent = {
    unique_id: random_id,
    start_date: timeline_date_start,
    end_date: timeline_date_end,
    text: {
      headline: headline,
    },
  };

  timelineData.events.push(newEvent);
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
    window.timeline = new TL.Timeline("timeline", timelineData, timelineOptions);
  }
}

function timelineInfoToggle() {
  if (timelineData.events.length === 0) {
    timeline_info.style.opacity = "1";
  } else {
    timeline_info.style.opacity = "0";
  }
}

// ↑ TimelineJS ↑
// ↓ UI / Visuals ↓

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

// ↑ UI / Visuals ↑
// ↓ Loading progress info ↓

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
  hideAppTitle();
  progress_info.textContent = "All resources loaded!";

  setTimeout(() => {
    plane_icon_animation.classList.add("loading_page_fade_out_fast");
    globe_icon_animation.classList.add("loading_page_fade_out_fast");
    removeLoadingPageContent();
  }, 500);
}
trackLoadingProgress(resourcesToLoad, progressInfoDisplay, onLoadingComplete);

// ↑ Loading progress info ↑
// ↓ Other ↓
// // ↓ Other / Info popup ↓

function showInfoPopup(text) {
  info_popup_text.textContent = text;
  info_popup.style.display = "block";
}

function closeInfoPopup() {
  info_popup.style.display = "none";
}
close_info_popup.addEventListener("click", closeInfoPopup);

// // ↑ Other / Info popup ↑
// ↑ Other ↑

// // ---------- TEST ---------- ↓

test_button.addEventListener("click", () => {
  console.log("highlight array", highlights);
  console.log("markers array", markers);
  console.log("marker coordinates", markersCoordinates);
  console.log("polylines", polylines);
  console.log("Logs Array:", travelLogs);
  console.log("stored ids", storedIds);
  console.log("timeline", timelineData);

  console.log("raw coordinates distances", rawCoordinatesDistances);

  console.log("Highest Distance:", highest_distance.toFixed(2), "km");
  console.log("Lowest Distance:", lowest_distance.toFixed(2), "km");
  console.log("Total Distance:", total_distance.toFixed(2), "km");

  console.log("Total Car Distance:", total_car_distance.toFixed(2), "km");
  console.log("Total Plane Distance:", total_plane_distance.toFixed(2), "km");
  console.log("Total Boat Distance:", total_boat_distance.toFixed(2), "km");
  console.log("Total Walk Distance:", total_walk_distance.toFixed(2), "km");
  console.log("Total Bicycle Distance:", total_bicycle_distance.toFixed(2), "km");
  console.log("Total Motorcycle Distance:", total_motorcycle_distance.toFixed(2), "km");
  console.log("Total Train Distance:", total_train_distance.toFixed(2), "km");
  console.log("Total Bus Distance:", total_bus_distance.toFixed(2), "km");
});

test_button_2.addEventListener("click", () => {});

test_button_3.addEventListener("click", () => {});
