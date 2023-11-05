// ver: 1.4.13

// Bugs:

// Features to add:

// - Add driver.js

// Variables ↓
// // Sidebar House ↓

const sidebar_buttons_container = document.getElementById("sidebar_buttons_container");

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
const sub_overlay_geocoder = document.getElementById("sub_overlay_geocoder");
const sub_overlay_train = document.getElementById("sub_overlay_train");
const sub_overlay_bicycle = document.getElementById("sub_overlay_bicycle");
const sub_overlay_labels = document.getElementById("sub_overlay_labels");
const sub_overlay_borders = document.getElementById("sub_overlay_borders");
const sub_overlay_markers = document.getElementById("sub_overlay_markers");
const sub_overlay_polylines = document.getElementById("sub_overlay_polylines");
const sub_overlay_highlights = document.getElementById("sub_overlay_highlights");
const sub_overlay_house = document.getElementById("sub_overlay_house");

const markers_settings_display = document.querySelector("#sub_overlay_markers p");

let overlay_geocoder_active = false;
let overlay_train_active = false;
let overlay_bicycle_active = false;
let overlay_labels_active = false;
let overlay_borders_active = false;
let overlay_markers_active = true;
let overlay_polylines_active = true;
let overlay_highlights_active = true;
let overlay_house_active = true;

let polyline_visibility = true;

let overlay_container_timeout;

let marker_settings_index;

const marker_sizes = [0, 25, 35, 50, 75];
const anchor_values = [0, 12, 20, 30, 40];
const labels = ["<s>markers</s>", "markers [S]", "markers [M]", "markers [L]", "markers [XL]"];

const polyline_status_display = document.querySelector("#sub_overlay_polylines p");

const highlight_status_display = document.querySelector("#sub_overlay_highlights p");

const house_status_display = document.querySelector("#sub_overlay_house p");

// // Sidebar Overlay ↑
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

let statistics_visibility = false;

// // Sidebar Statistics ↑
// // Sidebar Timeline ↓

const timeline_container = document.querySelector(".timeline_container");
const timeline_info = document.querySelector(".timeline_info");
const timeline = document.querySelector("#timeline");
const sidebar_timeline_button = document.getElementById("sidebar_timeline_button");
const timeline_icon = document.getElementById("timeline_icon");

const timelineOptions = {
  initial_zoom: 1,
  timenav_position: "bottom",
  optimal_tick_width: 100,
  duration: 400,
  font: "lustria-lato",
};

let timeline_visibility = false;
let timeline_enabled = true;

let timeline_start = "";
let timeline_end = "";

// // Sidebar Timeline ↑
// // Sidebar Page Styles ↓

const page_styles_icon = document.getElementById("page_styles_icon");

// // Sidebar Page Styles ↑
// // Sidebar Language ↓

const sidebar_language_button = document.getElementById("sidebar_language_button");
const language_icon = document.getElementById("language_icon");

// // Sidebar Language ↑
// // Sidebar Settings ↓

const sidebar_settings_button = document.getElementById("sidebar_settings_button");
const settings_icon = document.getElementById("settings_icon");

const sub_settings_portrait_mode = document.getElementById("sub_settings_portrait_mode");
const sub_settings_remove_data = document.getElementById("sub_settings_remove_data");
const sub_settings_report_bug = document.getElementById("sub_settings_report_bug");

const unit_display = document.querySelector("#sub_settings_distance_unit p");

const remove_data_confirmation_container = document.getElementById("remove_data_confirmation_container");
const confirm_button_delete_data = document.getElementById("confirm_button_delete_data");
const close_button_delete_data = document.getElementById("close_button_delete_data");
const confirm_icon_delete_data = document.getElementById("confirm_icon_delete_data");
const close_icon_delete_data = document.getElementById("close_icon_delete_data");

let settings_container_timeout;

let ui_hidden = false;

let distance_unit = "km";

// // Sidebar Settings ↑
// // Sidebar Github ↓

const sidebar_github_button = document.getElementById("sidebar_github_button");

// // Sidebar Github ↑

// // Info box ↓

const info_box = document.getElementById("info_box");
const info_box_text = document.getElementById("info_box_text");

let info_box_timeout_show;
let info_box_timeout_hide;

// // Info box ↑
// // Travel Log Creator ↓

const add_travel_group_button = document.getElementById("add_travel_group_button");
const add_travel_superset_button = document.getElementById("add_travel_superset_button");
const travel_logs_individual_main_container = document.getElementById("travel_logs_individual_main_container");

const travel_superset_icon = document.getElementById("travel_superset_icon");
const travel_group_icon = document.getElementById("travel_group_icon");

const main_logs_container = document.querySelector(".main_logs_container");
const main_logs_container_arrow = document.querySelector(".main_logs_container_arrow");

let random_id = "";

let travel_date_start = "";
let travel_date_end = "";

let stored_group_log_id = "";
let is_travel_group_empty = "";

let child_div_count = 0;
let is_div_empty;

let is_travel_creator_active = false;
let main_logs_container_arrow_clicked = false;

let allow_individual_log_creation = false;
let travel_type_selected = false;
let reference = "";

let current_crud_category = "none";

let polyline_type = "solid";

// // Travel Log Creator ↑
// // Travel log group ↓

const confirm_button_group = document.getElementById("confirm_button_group");
const close_button_group = document.getElementById("close_button_group");
const confirm_icon_group = document.getElementById("confirm_icon_group");
const close_icon_group = document.getElementById("close_icon_group");

let travel_logs_group_name = "";
let travel_logs_group_input = document.getElementById("travel_logs_group_input");

// // Travel log group ↑
// // Travel log individual ↓

const sidebar_covers = document.querySelectorAll(".travel_creator_cover");
const travel_creator_covers = document.querySelectorAll(".travel_type_cover");
const statistics_covers = document.querySelectorAll(".statistics_cover");
const overlay_buttons_covers = document.querySelectorAll(".overlay_buttons_cover");

const jscolor_highlight_container = document.querySelector(".jscolor_highlight_container");
const jscolor_highlight = document.getElementById("jscolor_highlight");

const travel_type_car = document.getElementById("travel_type_car");
const travel_type_plane = document.getElementById("travel_type_plane");
const travel_type_boat = document.getElementById("travel_type_boat");
const travel_type_walk = document.getElementById("travel_type_walk");
const travel_type_bicycle = document.getElementById("travel_type_bicycle");
const travel_type_motorcycle = document.getElementById("travel_type_motorcycle");
const travel_type_train = document.getElementById("travel_type_train");
const travel_type_bus = document.getElementById("travel_type_bus");

const travelTypeButtonImages = new Map();
travelTypeButtonImages.set(travel_type_car, "assets/images/car_icon_small.png");
travelTypeButtonImages.set(travel_type_plane, "assets/images/plane_icon_small.png");
travelTypeButtonImages.set(travel_type_boat, "assets/images/boat_icon_small.png");
travelTypeButtonImages.set(travel_type_walk, "assets/images/walk_icon_small.png");
travelTypeButtonImages.set(travel_type_bicycle, "assets/images/bicycle_icon_small.png");
travelTypeButtonImages.set(travel_type_motorcycle, "assets/images/motorcycle_icon_small.png");
travelTypeButtonImages.set(travel_type_train, "assets/images/train_icon_small.png");
travelTypeButtonImages.set(travel_type_bus, "assets/images/bus_icon_small.png");

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

const polyline_width_slider = document.getElementById("polyline_width_slider");

const polyline_solid_button = document.getElementById("polyline_solid_button");
const polyline_dashed_button = document.getElementById("polyline_dashed_button");

const confirm_button_individual = document.getElementById("confirm_button_individual");
const close_button_individual = document.getElementById("close_button_individual");
const confirm_icon_individual = document.getElementById("confirm_icon_individual");
const close_icon_individual = document.getElementById("close_icon_individual");

let travel_logs_individual_name = "";
let travel_logs_individual_input = document.getElementById("travel_logs_individual_input");

let highlight_color_opacity_customization = true;
let jscolor_highlight_data = "";
let jscolor_highlight_color = "#1495ED";
let jscolor_highlight_opacity = 0.5;

let allow_travel_settings_editing = true;

let type = "";
let travel_type_car_click = false;
let travel_type_plane_click = false;
let travel_type_boat_click = false;
let travel_type_walk_click = false;
let travel_type_bicycle_click = false;
let travel_type_motorcycle_click = false;
let travel_type_train_click = false;
let travel_type_bus_click = false;
let active_travel_type_icon;

let polyline_width = polyline_width_slider.value;

let polyline_color = `#DC3125`;

// // Travel log individual ↑
// // Custom cursor / App version / Page loading ↓

const custom_cursor = document.getElementById("custom_cursor");

const app_version = document.querySelector(".app_version");

const progress_info = document.getElementById("progress_info");
const title_screen_background = document.querySelector(".title_screen_background");

// // Custom cursor / App version / Page loading ↑
// // Leaflet map ↓

import leafletConfig from "./LeafletConfig.js";
import continentMapping from "./continentMapping.js";

const { L } = window;

const maxBounds = L.latLngBounds(L.latLng(-90, -300), L.latLng(90, 300));
const map = L.map("map", {
  zoomControl: false,
  maxBounds: maxBounds,
  maxBoundsViscosity: 0.8,
}).setView([50, 10], 6);

let geocoder;

const { mapTileLayer_A, mapTileLayer_B, mapTileLayer_C, mapTileLayer_D } = leafletConfig.tilemaps;
const { home_icon, car_icon, plane_icon, boat_icon, walk_icon, bicycle_icon, motorcycle_icon, train_icon, bus_icon } =
  leafletConfig.marker_icons;
const { trainsAddon, cyclingAddon, bordersAddon, labelsAddon } = leafletConfig.addons;

const mapTileLayers = L.layerGroup([mapTileLayer_A]).addTo(map);

let temporaryMarkers = L.layerGroup();
let trueMarkers = L.layerGroup();

// // Leaflet map ↑
// // D3 ↓

let total_countries = 225;
let total_continents = 6;
let total_countries_europe = 50;
let total_countries_north_america = 35;
let total_countries_south_america = 15;
let total_countries_australia = 18;
let total_countries_asia = 50;
let total_countries_africa = 57;

let countries_visited = 0;
let continents_visited = 0;
let countries_visited_europe = 0;
let countries_visited_north_america = 0;
let countries_visited_south_america = 0;
let countries_visited_australia = 0;
let countries_visited_asia = 0;
let countries_visited_africa = 0;

let locations_visited_other = 0;

//prettier-ignore
const pie_chart_type_count_pie_gradient = {Car: "#ffd667", Plane: "#efff67", Boat: "#71ff92", Walk: "#5ffffd", Bicycle: "#5fabff", Motorcycle: "#715fff", Train: "#bd5fff",Bus: "#ff5ffe"};
const pie_chart_type_count = document.getElementById("pie_chart_type_count");

const bar_chart_type_distance_bar_gradient = ["#58508d", "#bc5090", "#ff6361"];
const bar_chart_type_distance_unit_display = document.querySelector("#bar_chart_type_distance_container p");
const basic_statistics_chart_display = document.querySelector("#bar_chart_basic_statistics_container p");
const bar_chart_type_distance = document.getElementById("bar_chart_type_distance");

let type_distance_max_value;

let max_line_chart_height_value;

let current_resolution = `${window.innerWidth}x${window.innerHeight}`;
let resolution_change_interval = null;

let unitText;

let highest_travel_value = 0;
let lowest_travel_value = 0;

let lowest_distance_superset = 0;
let highest_distance_superset = 0;
let lowest_distance_subset = 0;
let highest_distance_subset = 0;

// // D3 ↑
// // Storage ↓

// 1 = local storage | 0 = temporary / builded on local storage data

/* 1 */ let pageSettings = {};
/* 1 */ let homeData = {};
/* 1 */ let markersData = [];
/* 1 */ let travelLogs = [];
/* 1 */ let CRUD = [];
/* 1 */ let trueHighlights = [];
/* 0 */ let createdHighlightLayers = [];
/* 0 */ let highlights = [];
/* 0 */ let CRUDGroup = {};
/* 0 */ let CRUDSubset = {};
/* 0 */ let CRUDSuperset = {};
/* 0 */ let markers = [];
/* 0 */ let polylines = [];
/* 0 */ let storedIds = [];
/* 0 */ let rawCoordinatesDistances = [];
/* 0 */ let timelineData = {
  events: [],
};
/* 0 */ let barChartTypeDistanceData = [];
/* 0 */ let pieChartTypeDistributionData = [];
/* 0 */ let lineChartTravelLogData = [];
/* 0 */ let lineChartTravelLogDataValue = {};
/* 0 */ let lineChartGroupData = [];
/* 0 */ let lineChartGroupDataValue = {};
/* 0 */ let basicStatisticsData = [];

// // Storage ↑
// Variables ↑

// Page interaction ↓
// // Sidebar ↓
// // // House ↓

sidebar_house_button.addEventListener("mouseenter", () => {
  if (is_travel_creator_active) {
    displayInfoBox("Cannot use this feature during travel log creation.", 2500);
  } else {
    changeIconColorOnHover(true, house_icon, sidebar_house_button);
    clearTimeout(house_container_timeout);
    sidebarButtonsAnimation(sub_house_button_container, true);
  }
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
  if (pageSettings.house_visibility === true) {
    travelTypeValueUpdate(true, false, false, false, false, false, false, false, false);
    updateCursorImage("assets/images/home_icon_small.png");
    removeMarkers("home_marker");
    homeMarkerClear();

    const mapClickListener = (e) => {
      toggleCustomCursorVisibility(false);

      const clickedLatLng = e.latlng;
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

      homeData.lat = clickedLatLng.lat;
      homeData.lng = clickedLatLng.lng;
      homeData.color = jscolor_home_color;
      homeData.opacity = jscolor_home_opacity;
      localStorageSaveHomeData();

      map.off("click", mapClickListener);
    };
    map.on("click", mapClickListener);
  } else if (pageSettings.house_visibility === false) {
    displayInfoBox("House marker is disabled.", 2500);
  }
});

sub_house_geolocation.addEventListener("click", () => {
  if (pageSettings.house_visibility === true) {
    if ("geolocation" in navigator) {
      travelTypeValueUpdate(true, false, false, false, false, false, false, false, false);
      removeMarkers("home_marker");
      homeMarkerClear();
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        const offset_longitude = longitude * 1.002;

        home_marker = L.marker([latitude, offset_longitude], {
          icon: home_icon,
          id: "home_marker",
        });

        home_marker.addTo(map).bounce(1);
        markers.push(home_marker);
        home_circle = L.circle([latitude, longitude], {
          radius: 50000,
          color: jscolor_home_color,
          fillOpacity: jscolor_home_opacity,
          weight: 1,
        }).addTo(map);

        homeData.lat = latitude;
        homeData.lng = longitude;
        homeData.color = jscolor_home_color;
        homeData.opacity = jscolor_home_opacity;
        localStorageSaveHomeData();

        if (home_marker) {
          setTimeout(homeMarkerZoom, 350);
        }
      });
    }

    navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
      if (permissionStatus.state !== "granted") {
        displayInfoBox("Allow geolocation to use this feature", 2000);
      }
    });
  } else if (pageSettings.house_visibility === false) {
    displayInfoBox("House marker is disabled.", 2500);
  }
});

sub_house_zoom.addEventListener("click", () => {
  homeMarkerZoom();
});

sub_house_delete.addEventListener("click", () => {
  removeMarkers("home_marker");
  homeMarkerClear();

  localStorageRemoveHomeData();
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
  if (home_marker && homeData.lat && homeData.lng) {
    map.setView(home_marker.getLatLng(), 7);
  } else {
    displayInfoBox("Home location is not set!", 2000);
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
  pageSettings.current_map_layer = "earth";
  localStorageSavePageSettings();

  switchTileMap(mapTileLayer_A);
  toggleActiveIconColor(sub_map_layer_earth_icon);
  toggleInactiveIconColor(sub_map_layer_bright_icon, sub_map_layer_dark_icon, sub_map_layer_middleage_icon);
  disableMapAddons();
});
sub_map_tile_layer_B.addEventListener("click", () => {
  pageSettings.current_map_layer = "light";
  localStorageSavePageSettings();

  switchTileMap(mapTileLayer_B);
  toggleActiveIconColor(sub_map_layer_bright_icon);
  toggleInactiveIconColor(sub_map_layer_earth_icon, sub_map_layer_dark_icon, sub_map_layer_middleage_icon);
  disableMapAddons();
});
sub_map_tile_layer_C.addEventListener("click", () => {
  pageSettings.current_map_layer = "dark";
  localStorageSavePageSettings();

  switchTileMap(mapTileLayer_C);
  toggleActiveIconColor(sub_map_layer_dark_icon);
  toggleInactiveIconColor(sub_map_layer_earth_icon, sub_map_layer_bright_icon, sub_map_layer_middleage_icon);
  disableMapAddons();
});
sub_map_tile_layer_D.addEventListener("click", () => {
  pageSettings.current_map_layer = "middleage";
  localStorageSavePageSettings();

  switchTileMap(mapTileLayer_D);
  toggleActiveIconColor(sub_map_layer_middleage_icon);
  toggleInactiveIconColor(sub_map_layer_earth_icon, sub_map_layer_bright_icon, sub_map_layer_dark_icon);
  disableMapAddons();
});

function switchTileMap(layer) {
  if (!mapTileLayers.hasLayer(layer)) {
    mapTileLayers.clearLayers();
    mapTileLayers.addLayer(layer);
  }
}

function toggleActiveIconColor(icon) {
  icon.classList.remove("black_icon_toggle");
  icon.classList.add("white_icon_toggle");
}

function toggleInactiveIconColor(icon_1, icon_2, icon_3) {
  icon_1.classList.add("black_icon_toggle");
  icon_2.classList.add("black_icon_toggle");
  icon_3.classList.add("black_icon_toggle");
  icon_1.classList.remove("white_icon_toggle");
  icon_2.classList.remove("white_icon_toggle");
  icon_3.classList.remove("white_icon_toggle");
}

function disableMapAddons() {
  if (overlay_train_active) {
    switchTileAddon(trainsAddon);
    overlay_train_active = toggleIconColor(overlay_train_active, sub_train_icon);
  }

  if (overlay_bicycle_active) {
    switchTileAddon(cyclingAddon);
    overlay_bicycle_active = toggleIconColor(overlay_bicycle_active, sub_bicycle_icon);
  }

  if (overlay_labels_active) {
    switchTileAddon(labelsAddon);
    overlay_labels_active = toggleIconColor(overlay_labels_active, sub_labels_icon);
  }
  if (overlay_borders_active) {
    switchTileAddon(bordersAddon);
    overlay_borders_active = toggleIconColor(overlay_borders_active, sub_borders_icon);
  }
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

sub_overlay_geocoder.addEventListener("click", () => {
  toggleMapGeocoder();
  overlay_geocoder_active = toggleIconColor(overlay_geocoder_active, sub_geocoder_icon);
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
  if (pageSettings.current_map_layer !== "middleage") {
    switchTileAddon(labelsAddon);
    overlay_labels_active = toggleIconColor(overlay_labels_active, sub_labels_icon);
  } else {
    displayInfoBox("Feature disabled on this map layer.", 2000);
  }
});
sub_overlay_borders.addEventListener("click", () => {
  if (pageSettings.current_map_layer !== "middleage" && pageSettings.current_map_layer !== "dark") {
    switchTileAddon(bordersAddon);
    overlay_borders_active = toggleIconColor(overlay_borders_active, sub_borders_icon);
  } else {
    displayInfoBox("Feature disabled on this map layer.", 2000);
  }
});

sub_overlay_markers.addEventListener("click", () => {
  const current_size = marker_sizes[marker_settings_index];
  const current_anchor = anchor_values[marker_settings_index];

  const label = labels[marker_settings_index];
  markers_settings_display.innerHTML = `${label}`;

  if (marker_settings_index === 0 || marker_settings_index === 1) {
    overlay_markers_active = toggleIconColor(overlay_markers_active, sub_markers_icon);
  }

  pageSettings.markers_size = current_size;
  pageSettings.markers_anchor = current_anchor;
  marker_settings_index = (marker_settings_index + 1) % marker_sizes.length;
  pageSettings.markers_index = marker_settings_index;

  removeTrueMarkers();
  localStorageCreateTrueMarkers(current_size, current_anchor);
  localStorageSavePageSettings();
});

sub_overlay_polylines.addEventListener("click", () => {
  togglePolylineVisibility();
  overlay_polylines_active = toggleIconColor(overlay_polylines_active, sub_polylines_icon);
  if (pageSettings.polyline_visibility) {
    polyline_status_display.innerHTML = `<s>polylines</s>`;
  } else if (pageSettings.polyline_visibility !== true) {
    polyline_status_display.innerHTML = `polylines`;
  }
  pageSettings.polyline_visibility = !pageSettings.polyline_visibility;

  localStorageSavePageSettings();
});

sub_overlay_highlights.addEventListener("click", () => {
  overlay_highlights_active = toggleIconColor(overlay_highlights_active, sub_highlights_icon);

  if (overlay_highlights_active) localStorageCreateTrueHighlights();
  else removeTrueHighlights();

  if (pageSettings.highlight_visibility) {
    highlight_status_display.innerHTML = `<s>highlights</s>`;
  } else if (pageSettings.highlight_visibility !== true) {
    highlight_status_display.innerHTML = `highlights`;
  }

  if (pageSettings.polyline_visibility) {
    drawPolyline(); // (redraw the polyline on top of the highlights)
  }

  pageSettings.highlight_visibility = !pageSettings.highlight_visibility;
  localStorageSavePageSettings();
});

sub_overlay_house.addEventListener("click", () => {
  overlay_house_active = toggleIconColor(overlay_house_active, sub_house_icon);

  if (overlay_house_active) {
    localStorageCreateHomeMarkerAndCircle();
  } else if (!overlay_house_active) {
    removeMarkers("home_marker");
    homeMarkerClear();
  }

  if (pageSettings.house_visibility) {
    house_status_display.innerHTML = `<s>house</s>`;
  } else if (pageSettings.house_visibility !== true) {
    house_status_display.innerHTML = `house`;
  }

  pageSettings.house_visibility = !pageSettings.house_visibility;
  localStorageSavePageSettings();
});

function toggleMapGeocoder() {
  if (!overlay_geocoder_active) {
    geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        var bbox = e.geocode.bbox;
        var poly = L.polygon([bbox.getSouthEast(), bbox.getNorthEast(), bbox.getNorthWest(), bbox.getSouthWest()]);

        map.fitBounds(poly.getBounds());
      })
      .addTo(map);
  } else if (overlay_geocoder_active) {
    map.removeControl(geocoder);
  }
}

function switchTileAddon(tile_addon) {
  if (map.hasLayer(tile_addon)) {
    tile_addon.removeFrom(map);
  } else {
    tile_addon.addTo(map);
  }
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
// // // Page Styles ↓

sidebar_page_styles_button.addEventListener("click", () => {
  displayInfoBox("Feature not yet available.", 1500);
});

// // // Page Styles ↑
// // // Timeline ↓

sidebar_timeline_button.addEventListener("click", () => {
  timeline_enabled = toggleIconColor(timeline_enabled, timeline_icon);
  if (!is_travel_creator_active) {
    if (timeline_visibility == true) {
      toggleTimelineVisibility(false);
      setTimeout(function () {
        toggleTimeline();
      }, 500);
    } else {
      toggleTimelineVisibility(true);
      setTimeout(function () {
        toggleTimeline();
      }, 200);
    }
  }
});

sidebar_timeline_button.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, timeline_icon, sidebar_timeline_button)
);

sidebar_timeline_button.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, timeline_icon, sidebar_timeline_button)
);

function toggleTimelineVisibility(toggle) {
  if (toggle && timeline_enabled) {
    timeline_container.style.top = "63.2%";
    timeline_visibility = true;
  } else {
    timeline_container.style.top = "89%";
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
  if (is_travel_creator_active) {
    displayInfoBox("Cannot use this feature during travel log creation.", 2500);
  } else {
    statistics_visibility = toggleIconColor(statistics_visibility, statistics_icon);
    if (statistics_visibility) {
      startResolutionCheck();

      toggleStatisticsVisibility(true);
      toggleMainLogContainerVisibility(false);
      toggleTimelineVisibility(false);
      toggleStatisticsCover(true);

      removeChartsData();

      if (polylines.length > 0) {
        barChartTypeDistanceCreate();
        pieChartTypeDistributionCreate();
        lineChartDataRetrieve();
        lineChartDistanceCreate();
        findLowestAndHighestSupersetDistance(CRUD);
        findLowestAndHighestSubsetDistance(CRUD);
        basicStatisticsChartLowestAndHighestCRUDValue();
        updateTravelStats();
        basicStatisticsChartCreate();
      }

      countUniqueCountries(trueHighlights);
      getContinentsForHighlights(trueHighlights);
      updateStatisticsProgressBars();
    } else {
      stopResolutionCheck();

      toggleStatisticsVisibility(false);
      toggleMainLogContainerVisibility(true);
      toggleTimelineVisibility(true);
      toggleStatisticsCover(false);
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

// prettier-ignore
function updateTravelStats() {
  barChartTypeDistanceData = [];
  basicStatisticsData = [];

  const display_highest_distance = highest_distance === Number.NEGATIVE_INFINITY ? 0 : highest_distance;
  const display_lowest_distance = lowest_distance === Number.POSITIVE_INFINITY ? 0 : lowest_distance;

  const highest_distance_display =
    highest_distance === Number.NEGATIVE_INFINITY ? "" : "(" + highest_distance_type + ")";
  const lowest_distance_display = lowest_distance === Number.POSITIVE_INFINITY ? "" : "(" + lowest_distance_type + ")";

  type_distance_max_value = (
    Math.max(
      total_car_distance,
      total_plane_distance,
      total_boat_distance,
      total_walk_distance,
      total_bicycle_distance,
      total_motorcycle_distance,
      total_train_distance,
      total_bus_distance
    ) * 1.1
  ).toFixed(1);

  if (pageSettings.distance_unit == "km") {

    barChartTypeDistanceData = [
      { label: "Car", value: formatDistance(total_car_distance) },
      { label: "Plane", value: formatDistance(total_plane_distance) },
      { label: "Boat", value: formatDistance(total_boat_distance) },
      { label: "Walk", value: formatDistance(total_walk_distance) },
      { label: "Bicyc.", value: formatDistance(total_bicycle_distance) },
      { label: "Motorc.", value: formatDistance(total_motorcycle_distance)},
      { label: "Train", value: formatDistance(total_train_distance) },
      { label: "Bus", value: formatDistance(total_bus_distance) },
    ];

if (polylines.length <= 1) {
  average_distance = 0;
  highest_travel_value = 0;
  lowest_travel_value = 0;
}

    basicStatisticsData = [
      {label: "total", type: "(travel)", value: formatDistance(total_distance)},
      {label: "high.", type: "(travel)", value: formatDistance(highest_travel_value)},
      {label: "avg.", type: "(travel)", value: formatDistance(average_distance)},
      {label: "low.", type: "(travel)", value: formatDistance(lowest_travel_value)},
      {label: "max.", type: "(A → B)", value: formatDistance(highest_distance)},
      {label: "min.", type: "(A → B)", value: formatDistance(lowest_distance)},
    ]

  } else if (pageSettings.distance_unit == "mil") {

    barChartTypeDistanceData = [
      { label: "Car", value: formatDistance(total_car_distance * 0.6213712) },
      { label: "Plane", value: formatDistance(total_plane_distance * 0.6213712) },
      { label: "Boat", value: formatDistance(total_boat_distance * 0.6213712) },
      { label: "Walk", value: formatDistance(total_walk_distance * 0.6213712) },
      { label: "Bicyc.", value: formatDistance(total_bicycle_distance * 0.6213712) },
      { label: "Motorc.", value: formatDistance(total_motorcycle_distance * 0.6213712)},
      { label: "Train", value: formatDistance(total_train_distance * 0.6213712) },
      { label: "Bus", value: formatDistance(total_bus_distance * 0.6213712) },
    ];

    basicStatisticsData = [
      {label: "total", type: "(travel)", value: formatDistance(total_distance* 0.6213712)},
      {label: "high.", type: "(travel)", value: formatDistance(highest_travel_value* 0.6213712)},
      {label: "avg.", type: "(travel)", value: formatDistance(average_distance* 0.6213712)},
      {label: "low.", type: "(travel)", value: formatDistance(lowest_travel_value* 0.6213712)},
      {label: "max.", type: "(A → B)", value: formatDistance(highest_distance* 0.6213712)},
      {label: "min.", type: "(A → B)", value: formatDistance(lowest_distance* 0.6213712)},
    ]

    type_distance_max_value = type_distance_max_value * 0.6213712;

  }

 // let most_common_travel_type = document.getElementById("most_common_travel_type");
  const { travel_type_count, highest_count_travel_types } = countTravelType(markersData);
  if (highest_count_travel_types.length > 0) {
   const mostCommonTravelTypesText = highest_count_travel_types.join(", ");
   // most_common_travel_type.textContent = mostCommonTravelTypesText;
  } else {
   // most_common_travel_type.textContent = "none";
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
    main_statistics_container.style.transform = "translate(-50%, -17.5vh)";
  } else {
    main_statistics_container.style.transform = "translate(-50%, -130vh)";
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

  try {
    for (const marker of markersData) {
      const test = marker[0][2];
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

    pieChartTypeDistributionData = [
      { label: "Car", value: travel_type_count.car },
      { label: "Plane", value: travel_type_count.plane },
      { label: "Boat", value: travel_type_count.boat },
      { label: "Walk", value: travel_type_count.walk },
      { label: "Bicycle", value: travel_type_count.bicycle },
      { label: "Motorcycle", value: travel_type_count.motorcycle },
      { label: "Train", value: travel_type_count.train },
      { label: "Bus", value: travel_type_count.bus },
    ];

    return { travel_type_count, highest_count_travel_types };
  } catch (error) {
    console.log(error);
    console.log("%c markersData error", "color: red; font-weight: bold;");

    markersData = [];
  }
}

function removeTravelCount(type) {
  travel_type_count[type] -= 1;
}

// // // Statistics ↑
// // // Language ↓

sidebar_language_button.addEventListener("click", () => {
  displayInfoBox("Feature not yet available.", 1500);
});

sidebar_language_button.addEventListener("mouseenter", () => {
  // changeIconColorOnHover(true, language_icon, sidebar_language_button)
});

sidebar_language_button.addEventListener("mouseleave", () => {
  // changeIconColorOnHover(false, language_icon, sidebar_language_button)
});

// // // Language ↑
// // // Settings ↓

sidebar_settings_button.addEventListener("mouseenter", () => {
  if (is_travel_creator_active) {
    displayInfoBox("Cannot use this feature during travel log creation.", 2500);
  } else {
    changeIconColorOnHover(true, settings_icon, sidebar_settings_button);
    clearTimeout(settings_container_timeout);
    sidebarButtonsAnimation(sub_settings_container, true);
  }
});

sidebar_settings_button.addEventListener("mouseleave", () => {
  changeIconColorOnHover(false, settings_icon, sidebar_settings_button);
  settings_container_timeout = setTimeout(() => {
    sidebarButtonsAnimation(sub_settings_container, false);
  }, 200);
});

sub_settings_container.addEventListener("mouseenter", () => {
  clearTimeout(settings_container_timeout);
  sidebarButtonsAnimation(sub_settings_container, true);
});

sub_settings_container.addEventListener("mouseleave", () => {
  settings_container_timeout = setTimeout(() => {
    sidebarButtonsAnimation(sub_settings_container, false);
  }, 200);
});

sub_settings_remove_data.addEventListener("click", () => {
  toggleRemoveDataContainerVisibility(true);
  main_statistics_container.classList.add("hidden");
});

confirm_button_delete_data.addEventListener("click", () => {
  toggleRemoveDataContainerVisibility(false);
  localStorage.clear();
  location.reload();
});

confirm_button_delete_data.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, confirm_icon_delete_data, confirm_button_delete_data)
);

confirm_button_delete_data.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, confirm_icon_delete_data, confirm_button_delete_data)
);

close_button_delete_data.addEventListener("click", () => {
  toggleRemoveDataContainerVisibility(false);
  toggleMainLogContainerVisibility(true);
  main_statistics_container.classList.remove("hidden");
});

close_button_delete_data.addEventListener("mouseenter", () =>
  changeIconColorOnHover(true, close_icon_delete_data, close_button_delete_data)
);

close_button_delete_data.addEventListener("mouseleave", () =>
  changeIconColorOnHover(false, close_icon_delete_data, close_button_delete_data)
);

sub_settings_report_bug.addEventListener("click", () => {
  displayInfoBox("Feature not yet available.", 1500);
});

function toggleRemoveDataContainerVisibility(toggle) {
  if (toggle) {
    remove_data_confirmation_container.style.display = "block";
    confirm_button_delete_data.style.display = "block";
    close_button_delete_data.style.display = "block";
  } else {
    remove_data_confirmation_container.style.display = "none";
    confirm_button_delete_data.style.display = "none";
    close_button_delete_data.style.display = "none";
  }
}

sub_settings_portrait_mode.addEventListener("click", (event) => {
  displayInfoBox("Use LMB (left mouse button) to leave the portrait view.", 2500);
  event.stopPropagation();

  sidebar_buttons_container.classList.add("hidden");
  main_logs_container.classList.add("hidden");
  main_logs_container_arrow.classList.add("hidden");

  timeline_container.classList.add("hidden");
  app_version.classList.add("hidden");
  sub_settings_container.classList.add("hidden");

  main_statistics_container.classList.add("hidden");

  ui_hidden = true;
});

document.addEventListener("click", () => {
  if (ui_hidden) {
    sidebar_buttons_container.classList.remove("hidden");
    main_logs_container.classList.remove("hidden");
    main_logs_container_arrow.classList.remove("hidden");

    timeline_container.classList.remove("hidden");
    app_version.classList.remove("hidden");
    sub_settings_container.classList.remove("hidden");

    main_statistics_container.classList.remove("hidden");
  }

  ui_hidden = false;
});

sub_settings_distance_unit.addEventListener("click", () => {
  if (pageSettings.distance_unit == "km") {
    distance_unit = "mil";
    pageSettings.distance_unit = "mil";
    unit_display.innerHTML = "units [mil]";
    bar_chart_type_distance_unit_display.innerHTML = "distance by travel type [mil]";
    basic_statistics_chart_display.innerHTML = "basic statistics [mil]";
  } else if (pageSettings.distance_unit == "mil") {
    distance_unit = "km";
    pageSettings.distance_unit = "km";
    unit_display.innerHTML = "units [km]";
    bar_chart_type_distance_unit_display.innerHTML = "distance by travel type [km]";
    basic_statistics_chart_display.innerHTML = "basic statistics [km]";
  }

  localStorageSavePageSettings();
  removeContainerTravelLogs();
  buildCRUD();
  findLowestAndHighestSupersetDistance(CRUD);
  findLowestAndHighestSubsetDistance(CRUD);
  basicStatisticsChartLowestAndHighestCRUDValue();
  updateTravelStats();
});

// // // Settings ↑
// // // Github ↓

sidebar_github_button.addEventListener("click", () => {
  const url = "https://github.com/krystiandzirba/Ive_been_there_travel_log_app";

  window.open(url, "_blank");
});

// // // Github ↑

function sidebarButtonsAnimation(element, toggle) {
  if (toggle) {
    element.style.transition = "transform 0.3s ease";
    element.style.transform = "translate(4.4vw, 0%)";
  } else {
    element.style.transition = "transform 0.3s ease";
    element.style.transform = "translate(-100%, 0%)";
  }
}

function changeIconColorOnHover(toggle, element, icon) {
  if (toggle) {
    element.classList.add("sidebar_icon_brighter");
    icon.style.transform = "scale(1.15)";
  } else {
    element.classList.remove("sidebar_icon_brighter");
    icon.style.transform = "scale(1)";
  }
}

// // Sidebar ↑
// Page interaction ↑
// Travel Log Creator ↓

add_travel_superset_button.addEventListener("click", () => {
  current_crud_category = "superset";
  highlight_color_opacity_customization = true;
  is_travel_creator_active = true;
  polyline_visibility = false;
  togglePolylineVisibility();
  travelTypeButtonsColor();
  toggleMainLogContainerVisibility(false);
  toggleTimelineVisibility(false);
  toggleStatisticsVisibility(false);
  toggleRemoveDataContainerVisibility(false);
  toggleSidebarCover(true);
  toggleOverlayButtonsCover(true);
  if (statistics_visibility) {
    statistics_visibility = toggleIconColor(statistics_visibility, statistics_icon);
  }

  if (pageSettings.polyline_visibility === false) {
    overlay_polylines_active = toggleIconColor(overlay_polylines_active, sub_polylines_icon);
    polyline_status_display.innerHTML = `polylines`;
    pageSettings.polyline_visibility = true;
    localStorageSavePageSettings();
  }

  if (pageSettings.highlight_visibility === false) {
    overlay_highlights_active = toggleIconColor(overlay_highlights_active, sub_highlights_icon);
    highlight_status_display.innerHTML = `highlights`;
    pageSettings.highlight_visibility = true;
    localStorageSavePageSettings();
    localStorageCreateTrueHighlights();
    if (pageSettings.polyline_visibility) {
      drawPolyline(); // (redraw the polyline on top of the highlights)
    }
  }

  markersData = markersData.filter((coordinatesArray) => coordinatesArray.length > 0);
  markersData.push([]);
  random_id = "";
  random_id = randomIdGenerator();
  toggleTravelCreator(true, travel_logs_individual_main_container);
});

add_travel_superset_button.addEventListener("mouseenter", () => {
  travelCreatorAnimation(true, add_travel_superset_button, add_travel_group_button, false);
  changeIconColorOnHover(true, travel_superset_icon, travel_superset_icon);
});

add_travel_superset_button.addEventListener("mouseleave", () => {
  travelCreatorAnimation(false, add_travel_superset_button, add_travel_group_button, false);
  changeIconColorOnHover(false, travel_superset_icon, travel_superset_icon);
});

add_travel_group_button.addEventListener("click", () => {
  if (statistics_visibility) {
    statistics_visibility = toggleIconColor(statistics_visibility, statistics_icon);
  }
  toggleMainLogContainerVisibility(false);
  toggleTimelineVisibility(false);
  toggleStatisticsVisibility(false);
  toggleRemoveDataContainerVisibility(false);
  if (!is_travel_creator_active) {
    current_crud_category = "group";
    allow_individual_log_creation = false;
    random_id = "";
    random_id = randomIdGenerator();
    timeline_start = "";
    timeline_end = "";
    travelTypeButtonsColor();
    travel_logs_group_input.value = "";
    travel_logs_individual_input.value = "";
    is_travel_creator_active = !is_travel_creator_active;
    toggleTravelCreator(true, travel_logs_group_main_container);
  }
});

add_travel_group_button.addEventListener("mouseenter", () => {
  travelCreatorAnimation(true, add_travel_group_button, add_travel_superset_button, true);
  changeIconColorOnHover(true, travel_group_icon, travel_group_icon);
});

add_travel_group_button.addEventListener("mouseleave", () => {
  travelCreatorAnimation(false, add_travel_group_button, add_travel_superset_button, true);
  changeIconColorOnHover(false, travel_group_icon, travel_group_icon);
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

function toggleTravelCreator(toggle, element) {
  if (toggle) {
    element.style.left = "87.5vw";
  } else if (!toggle) {
    element.style.left = "120vw";
  }
}

function travelCreatorAnimation(toggle, main_button, secondary_button, is_right_button) {
  if (toggle) {
    main_button.style.color = "#f0f0f0";
    main_button.style.backgroundColor = "#26303d";
    if (is_right_button) {
      main_button.style.width = "63%";
      secondary_button.style.width = "33%";

      main_button.style.left = "33%";
    } else if (!is_right_button) {
      main_button.style.width = "63%";
      secondary_button.style.width = "33%";

      secondary_button.style.left = "63%";
    }
  } else if (!toggle) {
    main_button.style.color = "#d7d7d7";

    main_button.style.backgroundColor = "#2f3c4c";
    if (is_right_button) {
      main_button.style.width = "48%";
      secondary_button.style.width = "48%";

      secondary_button.style.left = "48%";
    } else if (!is_right_button) {
      main_button.style.width = "48%";
      secondary_button.style.width = "48%";

      secondary_button.style.left = "48%";
    }
  }
}

// Travel Log Creator ↑
// Travel log group ↓

confirm_button_group.addEventListener("click", () => {
  travel_logs_group_name = travel_logs_group_input.value;
  if (travel_logs_group_name === "") {
    displayInfoBox("Please enter a valid group name.", 2000);
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
    timelineInfoToggle();
    current_crud_category = "none";
    toggleTravelCreator(false, travel_logs_group_main_container);
  }
});

confirm_button_group.addEventListener("mouseenter", () => {
  travelCreatorAnimation(true, confirm_button_group, close_button_group, false);
  changeIconColorOnHover(true, confirm_icon_group, confirm_icon_group);
});

confirm_button_group.addEventListener("mouseleave", () => {
  travelCreatorAnimation(false, confirm_button_group, close_button_group, false);
  changeIconColorOnHover(false, confirm_icon_group, confirm_icon_group);
});

close_button_group.addEventListener("click", () => {
  current_crud_category = "none";
  is_travel_creator_active = false;
  stored_group_log_id = random_id;
  removeStoredId(stored_group_log_id);
  travel_logs_group_input.value = "";

  toggleTimelineVisibility(true);
  toggleMainLogContainerVisibility(true);
  toggleTravelCreator(false, travel_logs_group_main_container);
});

close_button_group.addEventListener("mouseenter", () => {
  travelCreatorAnimation(true, close_button_group, confirm_button_group, true);
  changeIconColorOnHover(true, close_icon_group, close_icon_group);
});

close_button_group.addEventListener("mouseleave", () => {
  travelCreatorAnimation(false, close_button_group, confirm_button_group, true);
  changeIconColorOnHover(false, close_icon_group, close_icon_group);
});

// Travel log group ↑
// Travel Log Individual ↓

sidebar_covers.forEach((element) => {
  element.addEventListener("click", () => {
    displayInfoBox("This sidebar feature is unavailable during travel log creation.", 3000);
  });
});

travel_creator_covers.forEach((element) => {
  element.addEventListener("click", () => {
    displayInfoBox("You cannot customize the travel log once you've added markers to the map.", 3000);
  });
});

statistics_covers.forEach((element) => {
  element.addEventListener("click", () => {
    displayInfoBox("You cannot customize the travel log once you've added markers to the map.", 3000);
  });
});

overlay_buttons_covers.forEach((element) => {
  element.addEventListener("click", () => {
    displayInfoBox("This overlay feature is unavailable during travel log creation.", 3000);
  });
});

jscolor_highlight_container.addEventListener("click", () => {
  if (highlight_color_opacity_customization == false) {
    displayInfoBox("Cannot change highlight settings after the marker was placed on the map.", 2500);
  }
});

jscolor_highlight.addEventListener("change", () => {
  if (highlight_color_opacity_customization == true) {
    jscolor_highlight_data = jscolor_highlight.jscolor.toHEXAString();
    jscolor_highlight_color = jscolor_highlight_data.slice(0, -2);
    jscolor_highlight_opacity = (parseInt(jscolor_highlight_data.slice(-2), 16) / 255).toFixed(2);
  }
});

travel_type_car.addEventListener("click", () => {
  if (allow_travel_settings_editing) {
    travelTypeValueUpdate(false, true, false, false, false, false, false, false, false);
    // prettier-ignore
    travelTypeCreator(travel_type_car_click, "car", car_icon, "assets/images/car_icon_small.png", "assets/images/car_icon.png");
    active_travel_type_icon = "assets/images/car_icon_small.png";
  } else {
    displayInfoBox("Cannot change travel type after the marker was placed on the map.", 2500);
  }
});

travel_type_plane.addEventListener("click", () => {
  if (allow_travel_settings_editing) {
    travelTypeValueUpdate(false, false, true, false, false, false, false, false, false);
    // prettier-ignore
    travelTypeCreator(travel_type_plane_click, "plane", plane_icon, "assets/images/plane_icon_small.png", "assets/images/plane_icon.png");
    active_travel_type_icon = "assets/images/plane_icon_small.png";
  } else {
    displayInfoBox("Cannot change travel type after the marker was placed on the map.", 2500);
  }
});

travel_type_boat.addEventListener("click", () => {
  if (allow_travel_settings_editing) {
    travelTypeValueUpdate(false, false, false, true, false, false, false, false, false);
    // prettier-ignore
    travelTypeCreator(travel_type_boat_click, "boat", boat_icon, "assets/images/boat_icon_small.png", "assets/images/boat_icon.png");
    active_travel_type_icon = "assets/images/boat_icon_small.png";
  } else {
    displayInfoBox("Cannot change travel type after the marker was placed on the map.", 2500);
  }
});

travel_type_walk.addEventListener("click", () => {
  if (allow_travel_settings_editing) {
    travelTypeValueUpdate(false, false, false, false, true, false, false, false, false);
    // prettier-ignore
    travelTypeCreator(travel_type_walk_click, "walk", walk_icon, "assets/images/walk_icon_small.png", "assets/images/walk_icon.png");
    active_travel_type_icon = "assets/images/walk_icon_small.png";
  } else {
    displayInfoBox("Cannot change travel type after the marker was placed on the map.", 2500);
  }
});

travel_type_bicycle.addEventListener("click", () => {
  if (allow_travel_settings_editing) {
    travelTypeValueUpdate(false, false, false, false, false, true, false, false, false);
    // prettier-ignore
    travelTypeCreator(travel_type_bicycle_click, "bicycle", bicycle_icon, "assets/images/bicycle_icon_small.png", "assets/images/bicycle_icon.png");
    active_travel_type_icon = "assets/images/bicycle_icon_small.png";
  } else {
    displayInfoBox("Cannot change travel type after the marker was placed on the map.", 2500);
  }
});

travel_type_motorcycle.addEventListener("click", () => {
  if (allow_travel_settings_editing) {
    travelTypeValueUpdate(false, false, false, false, false, false, true, false, false);
    // prettier-ignore
    travelTypeCreator(travel_type_motorcycle_click, "motorcycle", motorcycle_icon, "assets/images/motorcycle_icon_small.png", "assets/images/motorcycle_icon.png");
    active_travel_type_icon = "assets/images/motorcycle_icon_small.png";
  } else {
    displayInfoBox("Cannot change travel type after the marker was placed on the map.", 2500);
  }
});

travel_type_train.addEventListener("click", () => {
  if (allow_travel_settings_editing) {
    travelTypeValueUpdate(false, false, false, false, false, false, false, true, false);
    // prettier-ignore
    travelTypeCreator(travel_type_train_click, "train", train_icon, "assets/images/train_icon_small.png", "assets/images/train_icon.png");
    active_travel_type_icon = "assets/images/train_icon_small.png";
  } else {
    displayInfoBox("Cannot change travel type after the marker was placed on the map.", 2500);
  }
});

travel_type_bus.addEventListener("click", () => {
  if (allow_travel_settings_editing) {
    travelTypeValueUpdate(false, false, false, false, false, false, false, false, true);
    // prettier-ignore
    travelTypeCreator(travel_type_bus_click, "bus", bus_icon, "assets/images/bus_icon_small.png", "assets/images/bus_icon.png");
    active_travel_type_icon = "assets/images/bus_icon_small.png";
  } else {
    displayInfoBox("Cannot change travel type after the marker was placed on the map.", 2500);
  }
});

polyline_width_slider.oninput = function () {
  if (allow_travel_settings_editing) {
    polyline_width = this.value;
  } else {
    displayInfoBox("Cannot change the polyline width after the marker was placed on the map.", 2000);
  }
};

polyline_solid_button.addEventListener("click", () => {
  if (allow_travel_settings_editing) {
    polyline_type = "solid";

    polyline_solid_button.style.backgroundColor = "#26303d";
    polyline_solid_button.style.border = "0px rgb(34, 34, 34) solid";
    polyline_solid_button.style.transform = "scale(1.15)";

    polyline_dashed_button.style.backgroundColor = "#2f3c4c";
    polyline_dashed_button.style.border = "2px rgb(32, 34, 44) dashed";
    polyline_dashed_button.style.transform = "scale(0.85)";
  } else {
    displayInfoBox("Cannot change the polyline type after the marker was placed on the map.", 2000);
  }
});

polyline_solid_button.addEventListener("mouseenter", () => {
  if (polyline_type == "20, 20") {
    polyline_solid_button.style.transform = "scale(1.15)";
  }
});

polyline_solid_button.addEventListener("mouseleave", () => {
  if (polyline_type == "20, 20") {
    polyline_solid_button.style.transform = "scale(0.85)";
  }
});

polyline_dashed_button.addEventListener("click", () => {
  if (allow_travel_settings_editing) {
    polyline_type = "20, 20";

    polyline_dashed_button.style.backgroundColor = "#26303d";
    polyline_dashed_button.style.border = "0px rgb(34, 34, 34) solid";
    polyline_dashed_button.style.transform = "scale(1.15)";

    polyline_solid_button.style.backgroundColor = "#2f3c4c";
    polyline_solid_button.style.border = "2px rgb(32, 34, 44) dashed";
    polyline_solid_button.style.transform = "scale(0.85)";
  } else {
    displayInfoBox("Cannot change the polyline type after the marker was placed on the map.", 2000);
  }
});

polyline_dashed_button.addEventListener("mouseenter", () => {
  if (polyline_type == "solid") {
    polyline_dashed_button.style.transform = "scale(1.15)";
  }
});

polyline_dashed_button.addEventListener("mouseleave", () => {
  if (polyline_type == "solid") {
    polyline_dashed_button.style.transform = "scale(0.85)";
  }
});

jscolor_polyline.addEventListener("change", () => {
  if (allow_travel_settings_editing) {
    polyline_color = jscolor_polyline.jscolor.toHEXAString();
  } else {
    displayInfoBox("Cannot change the polyline color after the marker was placed on the map.", 2000);
  }
});

confirm_button_individual.addEventListener("click", () => {
  travel_logs_individual_name = travel_logs_individual_input.value;
  if (travel_logs_individual_name === "") {
    displayInfoBox("Please enter a travel name.", 2000);
    return;
  }

  if (!allow_individual_log_creation) {
    displayInfoBox("Please select a travel type.", 2000);
  }

  if (travel_type_selected) {
    displayInfoBox("Please draw a path on the map.", 2000);
  }

  if (allow_individual_log_creation) {
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
    findLowestAndHighestSupersetDistance(CRUD);
    findLowestAndHighestSubsetDistance(CRUD);
    basicStatisticsChartLowestAndHighestCRUDValue();
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
    localStorageCreateTrueMarkers(pageSettings.markers_size, pageSettings.markers_anchor);

    toggleSidebarCover(false);
    toggleOverlayButtonsCover(false);

    if (pageSettings.highlight_visibility === true) {
      localStorageCreateTrueHighlights();
    }

    if (pageSettings.house_visibility === true) {
      if (home_marker) {
        removeMarkers("home_marker");
        homeMarkerClear();
        localStorageCreateHomeMarkerAndCircle();
      }
    }

    drawPolyline();

    document.removeEventListener("mousemove", pngMouseTracking);
    toggleCustomCursorVisibility(false);
    map.off("click");
    toggleMainLogContainerVisibility(true);
    toggleTimelineVisibility(true);
    toggleTravelCreator(false, travel_logs_individual_main_container);
    timelineInfoToggle();
    toggleTravelCreatorCover(false);
    is_travel_creator_active = false;
    current_crud_category = "none";
    active_travel_type_icon = "";
    allow_travel_settings_editing = true;
  }
});

confirm_button_individual.addEventListener("mouseenter", () => {
  travelCreatorAnimation(true, confirm_button_individual, close_button_individual, false);
  changeIconColorOnHover(true, confirm_icon_individual, confirm_icon_individual);
});

confirm_button_individual.addEventListener("mouseleave", () => {
  travelCreatorAnimation(false, confirm_button_individual, close_button_individual, false);
  changeIconColorOnHover(false, confirm_icon_individual, confirm_icon_individual);
});

close_button_individual.addEventListener("click", () => {
  current_crud_category = "none";
  toggleMainLogContainerVisibility(true);
  toggleTimelineVisibility(true);
  document.removeEventListener("mousemove", pngMouseTracking);
  toggleCustomCursorVisibility(false);
  map.off("click");

  travelTypeValueUpdate(false, false, false, false, false, false, false, false, false);
  removeMarkers(random_id);
  removeTemporaryHighlights(random_id);
  removeMarkersCoordinates(random_id);
  removeTravelLogs(random_id);
  removeStoredId(random_id);
  trueHighlightsArrayRemoveHighlight(random_id);
  drawPolyline();
  toggleTravelCreator(false, travel_logs_individual_main_container);
  toggleTravelCreatorCover(false);
  toggleSidebarCover(false);
  toggleOverlayButtonsCover(false);
  is_travel_creator_active = false;
  allow_travel_settings_editing = true;
  active_travel_type_icon = "";
  travel_logs_individual_input.value = "";
});

close_button_individual.addEventListener("mouseenter", () => {
  travelCreatorAnimation(true, close_button_individual, confirm_button_individual, true);
  changeIconColorOnHover(true, close_icon_individual, close_icon_individual);
});

close_button_individual.addEventListener("mouseleave", () => {
  travelCreatorAnimation(false, close_button_individual, confirm_button_individual, true);
  changeIconColorOnHover(false, close_icon_individual, close_icon_individual);
});

function toggleSidebarCover(toggle) {
  sidebar_covers.forEach((element) => {
    if (toggle) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

function toggleTravelCreatorCover(toggle) {
  travel_creator_covers.forEach((element) => {
    if (toggle) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

function toggleStatisticsCover(toggle) {
  statistics_covers.forEach((element) => {
    if (toggle) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

function toggleOverlayButtonsCover(toggle) {
  overlay_buttons_covers.forEach((element) => {
    if (toggle) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

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
    createHighlightLayer(cachedGeoJSON);
    updateCursorImage(icon_small_path);
    travel_type_selected = true;

    if (travel_type_click == true) {
      map.off("click");
      function onMapClick(e) {
        toggleTravelCreatorCover(true);
        travel_type_selected = false;
        allow_travel_settings_editing = false;
        travelTypeButtonsGrayscale(active_travel_type_icon);
        allow_individual_log_creation = true;
        highlight_color_opacity_customization = false;
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

        markersData[markersData.length - 1].push([
          lat,
          lng,
          [random_id, type, icon_path, polyline_type, polyline_width, polyline_color],
        ]);
        drawPolyline();
      }

      map.on("click", onMapClick);
    }

    temporaryMarkers.addTo(map);
  }
}

function travelTypeButtonsGrayscale(name) {
  for (const button of travelTypeButtons) {
    const img = button.querySelector("img");
    const imageName = travelTypeButtonImages.get(button);
    if (imageName !== name) {
      img.src = imageName.replace(".png", "_grayscale.png");
    }
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
      const polyline = L.polyline(coordinates, {
        dashArray: coordinates[0][2][3],
        weight: coordinates[0][2][4],
        color: coordinates[0][2][5],
        opacity: 1,
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
  fetch("./countriesBorders.geojson")
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

  CRUDGroup.CRUD_category = "group";
  CRUDGroup.CRUD_group_id = random_id;
  CRUDGroup.CRUD_group_name = travel_logs_group_name;
  CRUDGroup.CRUD_group_date_start = travel_date_start;
  CRUDGroup.CRUD_group_date_end = travel_date_end;

  CRUDGroup.CRUD_subset = [];

  travelLogs.push([
    CRUDGroup.CRUD_group_name,
    CRUDGroup.CRUD_group_id,
    CRUDGroup.CRUD_group_date_start + " - " + CRUDGroup.CRUD_group_date_end,
    CRUDGroup.CRUD_category,
  ]);

  CRUD.push(CRUDGroup);

  travel_logs_group_input.value = "";
}

function individualDataSubmit() {
  if (current_crud_category == "subset") {
    CRUDSubset = {};

    CRUDSubset.CRUD_category = "subset";
    CRUDSubset.CRUD_subset_id = random_id;
    CRUDSubset.CRUD_subset_name = travel_logs_individual_name;

    calculateTotalIdDistance(rawCoordinatesDistances, CRUDSubset.CRUD_subset_id);

    CRUDSubset.CRUD_subset_distance = total_id_distance;
    CRUDSubset.CRUD_subset_distance_type = type;
    CRUDSubset.CRUD_subset_date_start = travel_date_start;
    CRUDSubset.CRUD_subset_date_end = travel_date_end;

    travelLogs.push([
      CRUDSubset.CRUD_subset_name,
      CRUDSubset.CRUD_subset_id,
      travel_date_start + " - " + travel_date_end,
    ]);

    const matching_group = CRUD.find((group) => group.CRUD_group_id === reference);

    if (matching_group) {
      matching_group.CRUD_subset.push(CRUDSubset);
    }
  }

  if (current_crud_category == "superset") {
    CRUDSuperset = {};

    CRUDSuperset.CRUD_category = "superset";
    CRUDSuperset.CRUD_superset_id = random_id;
    CRUDSuperset.CRUD_superset_name = travel_logs_individual_name;

    calculateTotalIdDistance(rawCoordinatesDistances, CRUDSuperset.CRUD_superset_id);

    CRUDSuperset.CRUD_superset_distance = total_id_distance;
    CRUDSuperset.CRUD_superset_distance_type = type;
    CRUDSuperset.CRUD_superset_date_start = travel_date_start;
    CRUDSuperset.CRUD_superset_date_end = travel_date_end;

    travelLogs.push([
      CRUDSuperset.CRUD_superset_name,
      CRUDSuperset.CRUD_superset_id,
      travel_date_start + " - " + travel_date_end,
    ]);

    CRUD.push(CRUDSuperset);
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
  is_travel_group_empty = storedContentDiv.innerHTML.trim() === "";
  return is_travel_group_empty;
}

function countDivContent(id) {
  child_div_count = 0;
  let storedContentDiv = document.getElementById(id);
  if (storedContentDiv) {
    is_div_empty = storedContentDiv.innerHTML.trim() === "";
    if (!is_div_empty) {
      let childDivs = storedContentDiv.querySelectorAll("div");
      child_div_count = childDivs.length / 3;
    }
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
    let stored_group_category = CRUD[i].CRUD_category;
    let stored_group_id_reference = CRUD[i].CRUD_group_id;
    let stored_group_name_reference = CRUD[i].CRUD_group_name;
    let stored_group_date_start_reference = CRUD[i].CRUD_group_date_start;
    let stored_group_date_end_reference = CRUD[i].CRUD_group_date_end;

    if (stored_group_category === "group") {
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
            displayInfoBox("Please enter a valid group name.", 2000);
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
      CRUDGroup.CRUD_subset = [];

      const $travel_logs_group_add_travel_button = document.createElement("button");
      $travel_logs_group_add_travel_button.innerHTML = '<i class="fa-solid fa-plus fa-xl" style="color: #c9c9c9;"></i>';
      $travel_logs_group_add_travel_button.classList.add("travel_logs_CRUD_buttons");
      $travel_logs_group_add_travel_button.addEventListener("click", () => {
        current_crud_category = "subset";
        reference = stored_group_id_reference;
        highlight_color_opacity_customization = true;
        is_travel_creator_active = true;
        polyline_visibility = false;
        togglePolylineVisibility();
        travelTypeButtonsColor();
        toggleMainLogContainerVisibility(false);
        toggleTimelineVisibility(false);
        toggleStatisticsVisibility(false);
        toggleSidebarCover(true);
        toggleOverlayButtonsCover(true);
        if (statistics_visibility) {
          statistics_visibility = toggleIconColor(statistics_visibility, statistics_icon);
        }

        stored_group_log_id = $group_log_id.textContent;
        markersData = markersData.filter((coordinatesArray) => coordinatesArray.length > 0);
        markersData.push([]);
        random_id = "";
        random_id = randomIdGenerator();
        toggleTravelCreator(true, travel_logs_individual_main_container);
      });
      $travel_logs_group_div_settings.appendChild($travel_logs_group_add_travel_button);

      // group (individual) travel button
      // group delete

      const $travel_logs_delete = document.createElement("button");
      $travel_logs_delete.innerHTML = '<i class="fa-regular fa-trash-can fa-xl" style="color: #c9c9c9;"></i>';
      $travel_logs_delete.classList.add("travel_logs_CRUD_buttons");
      $travel_logs_delete.addEventListener("click", () => {
        isGroupContentDivEmpty(stored_group_id_reference);
        if (is_travel_group_empty == true) {
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

          const id_to_remove = CRUD.findIndex((item) => item.CRUD_group_id === stored_group_id_reference);
          if (id_to_remove !== -1) {
            CRUD.splice(id_to_remove, 1);
          }
        } else if (is_travel_group_empty == false) {
          displayInfoBox("Travel group is not empty. Please remove remaining travel logs first.", 2500);
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
      // group list counter

      const $group_list_counter = document.createElement("button");
      $group_list_counter.id = "group_list_counter";
      $group_list_counter.classList.add("group_list_counter");
      $travel_logs_group_div_settings.appendChild($group_list_counter);

      // group list counter
      // group list collapse

      let list_collapsed = false;
      const $list_collapse_button = document.createElement("button");
      $list_collapse_button.innerHTML = '<i class="fa-solid fa-list fa-xl" style="color: #d7d7d726;"></i>';
      $list_collapse_button.classList.add("travel_logs_CRUD_buttons");
      $travel_logs_group_div_settings.appendChild($list_collapse_button);

      $list_collapse_button.addEventListener("click", () => {
        countDivContent(stored_group_id_reference);
        if (list_collapsed) {
          $travel_logs_group_content.style.height = "auto";
          $travel_logs_group_div_main.style.height = "auto";

          $group_list_counter.style.display = "none";
          $list_collapse_button.innerHTML = '<i class="fa-solid fa-list fa-xl" style="color: #d7d7d726;"></i>';
        } else {
          if (child_div_count >= 1) {
            $group_list_counter.style.display = "block";
            $group_list_counter.textContent = child_div_count;
            $list_collapse_button.innerHTML = '<i class="fa-solid fa-list fa-xl" style="color: #c9c9c9;"></i>';
            $travel_logs_group_content.style.height = 0;
            $travel_logs_group_div_main.style.height = "8.6vh";
          }
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

      // subset loop
      for (let j = 0; j < CRUD[i].CRUD_subset.length; j++) {
        let stored_subset_id_reference = CRUD[i].CRUD_subset[j].CRUD_subset_id;
        let stored_subset_name_reference = CRUD[i].CRUD_subset[j].CRUD_subset_name;
        let stored_subset_distance_reference = CRUD[i].CRUD_subset[j].CRUD_subset_distance;
        let stored_subset_distance_type_reference = CRUD[i].CRUD_subset[j].CRUD_subset_distance_type;

        // main subset div

        const $travel_logs_individual_div_main = document.createElement("div");
        $travel_logs_individual_div_main.className = "travel_logs_individual_div_main travel_logs_subset_div_main";

        // main subset div
        // individual id

        const $individual_log_id = document.createElement("span");
        $individual_log_id.textContent = stored_subset_id_reference;

        // subset id
        // subset name container

        const $travel_logs_individual_name_container = document.createElement("div");
        $travel_logs_individual_name_container.classList.add("travel_logs_individual_name_container");
        $travel_logs_individual_div_main.appendChild($travel_logs_individual_name_container);

        // subset name container
        // subset name

        const $travel_logs_individual_name = document.createElement("span");
        $travel_logs_individual_name.textContent = stored_subset_name_reference;
        $travel_logs_individual_name.classList.add("travel_logs_individual_name");
        $travel_logs_individual_name_container.appendChild($travel_logs_individual_name);

        // subset name
        // subset distance

        const $travel_logs_individual_travel_type_and_distance_container = document.createElement("div");
        $travel_logs_individual_travel_type_and_distance_container.classList.add(
          "travel_logs_individual_travel_type_and_distance_container"
        );
        $travel_logs_individual_div_main.appendChild($travel_logs_individual_travel_type_and_distance_container);

        const $travel_logs_individual_distance = document.createElement("span");
        $travel_logs_individual_distance.classList.add("travel_logs_individual_distance");

        if (pageSettings.distance_unit == "km") {
          $travel_logs_individual_distance.textContent = formatDistance(stored_subset_distance_reference) + " km";
        } else if (pageSettings.distance_unit == "mil") {
          $travel_logs_individual_distance.textContent =
            formatDistance(stored_subset_distance_reference * 0.6213712) + " mil";
        }

        const $travel_logs_distance_type = document.createElement("span");
        $travel_logs_distance_type.classList.add("travel_logs_distance_type");
        $travel_logs_distance_type.textContent = stored_subset_distance_type_reference;

        $travel_logs_individual_travel_type_and_distance_container.appendChild($travel_logs_distance_type);
        $travel_logs_individual_travel_type_and_distance_container.appendChild($travel_logs_individual_distance);

        // subset distance
        // subset name edit

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
              displayInfoBox("Please enter a valid name.", 2000);
            } else {
              $travel_logs_individual_name.textContent = $travel_logs_individual_name_new;
              const logId = $individual_log_id.textContent;
              const logIndex = travelLogs.findIndex((log) => log[1] === logId);
              if (logIndex !== -1) {
                travelLogs[logIndex][0] = $travel_logs_individual_name_new;
                CRUD[i].CRUD_subset[j].CRUD_subset_name = $travel_logs_individual_name_new;
              }
              for (let i = 0; i < timelineData.events.length; i++) {
                if (timelineData.events[i].unique_id === stored_subset_id_reference) {
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

        // subset name edit
        // subset delete

        const $travel_logs_delete = document.createElement("button");
        $travel_logs_delete.innerHTML = '<i class="fa-regular fa-trash-can fa-xl" style="color: #c9c9c9;"></i>';
        $travel_logs_delete.classList.add("travel_logs_CRUD_buttons");
        $travel_logs_delete.addEventListener("click", () => {
          polyline_visibility = false;
          removeTrueHighlights();
          togglePolylineVisibility();
          trueHighlightsArrayRemoveHighlight(stored_subset_id_reference);
          removeMarkers(stored_subset_id_reference);
          removeTemporaryHighlights(stored_subset_id_reference);
          removeMarkersCoordinates(stored_subset_id_reference);
          removeTravelLogs(stored_subset_id_reference);
          removeStoredId(stored_subset_id_reference);
          removeTimelineData(timelineData, stored_subset_id_reference);
          timelineInfoToggle();
          calculateDistances();
          distancesBreakdown(rawCoordinatesDistances);
          calculateTotalDistances(rawCoordinatesDistances);
          removeTravelCount(stored_subset_distance_type_reference);
          countTravelType(markersData);
          findLowestAndHighestSupersetDistance(CRUD);
          findLowestAndHighestSubsetDistance(CRUD);
          basicStatisticsChartLowestAndHighestCRUDValue();
          updateTravelStats();
          localStorageCreateTrueHighlights();
          drawPolyline();
          localStorageSaveTrueHighlights();
          if (timeline_enabled === true) {
            populateTimeline();
          }
          const index = travelLogs.indexOf(stored_subset_name_reference);
          if (index !== -1) {
            travelLogs.splice(index, 1);
          }
          $travel_logs_individual_div_main.remove();

          const id_to_remove = CRUD.findIndex(
            (item) =>
              item.CRUD_subset &&
              item.CRUD_subset.some((individual) => individual.CRUD_subset_id === stored_subset_id_reference)
          );

          if (id_to_remove !== -1) {
            CRUD[id_to_remove].CRUD_subset.splice(j, 1);
          }

          removeTrueMarkers();
          localStorageSaveTravelLogs();
          localStorageSaveCRUD();
          localStorageSaveMarkerCoordinates();
          localStorageCreateTrueMarkers(pageSettings.markers_size, pageSettings.markers_anchor);

          if (timelineData.events.length === 0) {
            toggleTimelineVisibility(false);
          }
        });

        $travel_logs_individual_div_main.appendChild($travel_logs_delete);

        // subset delete
        // display

        $travel_logs_group_content.appendChild($travel_logs_individual_div_main);
      }
    }

    if (stored_group_category === "superset") {
      let stored_superset_direct_id_reference = CRUD[i].CRUD_superset_id;
      let stored_superset_direct_name_reference = CRUD[i].CRUD_superset_name;
      let stored_superset_direct_distance_reference = CRUD[i].CRUD_superset_distance;
      let stored_superset_direct_distance_type_reference = CRUD[i].CRUD_superset_distance_type;

      // main superset div

      const $travel_logs_individual_div_main = document.createElement("div");
      $travel_logs_individual_div_main.className = "travel_logs_individual_div_main travel_logs_superset_div_main";

      // main superset div
      // superset id

      const $individual_log_id = document.createElement("span");
      $individual_log_id.textContent = stored_superset_direct_id_reference;

      // superset id
      // superset name container

      const $travel_logs_individual_name_container = document.createElement("div");
      $travel_logs_individual_name_container.classList.add("travel_logs_individual_name_container");
      $travel_logs_individual_div_main.appendChild($travel_logs_individual_name_container);

      // superset name container
      // superset name

      const $travel_logs_individual_name = document.createElement("span");
      $travel_logs_individual_name.textContent = stored_superset_direct_name_reference;
      $travel_logs_individual_name.classList.add("travel_logs_individual_name");
      $travel_logs_individual_name_container.appendChild($travel_logs_individual_name);

      // superset name
      // superset distance

      const $travel_logs_individual_travel_type_and_distance_container = document.createElement("div");
      $travel_logs_individual_travel_type_and_distance_container.classList.add(
        "travel_logs_individual_travel_type_and_distance_container"
      );
      $travel_logs_individual_div_main.appendChild($travel_logs_individual_travel_type_and_distance_container);

      const $travel_logs_individual_distance = document.createElement("span");
      $travel_logs_individual_distance.classList.add("travel_logs_individual_distance");

      if (pageSettings.distance_unit == "km") {
        $travel_logs_individual_distance.textContent =
          formatDistance(stored_superset_direct_distance_reference) + " km";
      } else if (pageSettings.distance_unit == "mil") {
        $travel_logs_individual_distance.textContent =
          formatDistance(stored_superset_direct_distance_reference * 0.6213712) + " mil";
      }

      const $travel_logs_distance_type = document.createElement("span");
      $travel_logs_distance_type.classList.add("travel_logs_distance_type");
      $travel_logs_distance_type.textContent = stored_superset_direct_distance_type_reference;

      $travel_logs_individual_travel_type_and_distance_container.appendChild($travel_logs_distance_type);
      $travel_logs_individual_travel_type_and_distance_container.appendChild($travel_logs_individual_distance);

      // superset distance
      // superset name edit

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
            displayInfoBox("Please enter a valid name.", 2000);
          } else {
            $travel_logs_individual_name.textContent = $travel_logs_individual_name_new;
            const logId = $individual_log_id.textContent;
            const logIndex = travelLogs.findIndex((log) => log[1] === logId);
            if (logIndex !== -1) {
              travelLogs[logIndex][0] = $travel_logs_individual_name_new;
              CRUD[i].CRUD_superset_name = $travel_logs_individual_name_new;
            }
            for (let i = 0; i < timelineData.events.length; i++) {
              if (timelineData.events[i].unique_id === stored_superset_direct_id_reference) {
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

      // superset name edit
      // superset delete

      const $travel_logs_delete = document.createElement("button");
      $travel_logs_delete.innerHTML = '<i class="fa-regular fa-trash-can fa-xl" style="color: #c9c9c9;"></i>';
      $travel_logs_delete.classList.add("travel_logs_CRUD_buttons");
      $travel_logs_delete.addEventListener("click", () => {
        polyline_visibility = false;
        removeTrueHighlights();
        togglePolylineVisibility();
        trueHighlightsArrayRemoveHighlight(stored_superset_direct_id_reference);
        removeMarkers(stored_superset_direct_id_reference);
        removeTemporaryHighlights(stored_superset_direct_id_reference);
        removeMarkersCoordinates(stored_superset_direct_id_reference);
        removeTravelLogs(stored_superset_direct_id_reference);
        removeStoredId(stored_superset_direct_id_reference);
        removeTimelineData(timelineData, stored_superset_direct_id_reference);
        timelineInfoToggle();
        calculateDistances();
        distancesBreakdown(rawCoordinatesDistances);
        calculateTotalDistances(rawCoordinatesDistances);
        removeTravelCount(stored_superset_direct_distance_type_reference);
        countTravelType(markersData);
        findLowestAndHighestSupersetDistance(CRUD);
        findLowestAndHighestSubsetDistance(CRUD);
        basicStatisticsChartLowestAndHighestCRUDValue();
        updateTravelStats();
        localStorageCreateTrueHighlights();
        drawPolyline();
        localStorageSaveTrueHighlights();
        if (timeline_enabled === true) {
          populateTimeline();
        }
        const index = travelLogs.indexOf(stored_superset_direct_name_reference);
        if (index !== -1) {
          travelLogs.splice(index, 1);
        }
        $travel_logs_individual_div_main.remove();

        const id_to_remove = CRUD.findIndex(
          (element) => element.CRUD_superset_id === stored_superset_direct_id_reference
        );

        if (id_to_remove !== -1) {
          CRUD.splice(id_to_remove, 1);
        }

        removeTrueMarkers();
        localStorageSaveTravelLogs();
        localStorageSaveCRUD();
        localStorageSaveMarkerCoordinates();
        localStorageCreateTrueMarkers(pageSettings.markers_size, pageSettings.markers_anchor);

        if (pageSettings.polyline_visibility === false) {
          overlay_polylines_active = toggleIconColor(overlay_polylines_active, sub_polylines_icon);
          polyline_status_display.innerHTML = `polylines`;
          pageSettings.polyline_visibility = true;
          localStorageSavePageSettings();
        }

        if (pageSettings.highlight_visibility === false) {
          overlay_highlights_active = toggleIconColor(overlay_highlights_active, sub_highlights_icon);
          highlight_status_display.innerHTML = `highlights`;
          pageSettings.highlight_visibility = true;
          localStorageSavePageSettings();
        }

        if (timelineData.events.length === 0) {
          toggleTimelineVisibility(false);
        }
      });

      $travel_logs_individual_div_main.appendChild($travel_logs_delete);

      // superset delete
      // display

      const $logs_list = document.getElementById("logs_list");
      $logs_list.appendChild($travel_logs_individual_div_main);
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

function localStorageCreateTrueMarkers(size, anchor) {
  for (const coordinatesArray of markersData) {
    for (const coordinate of coordinatesArray) {
      const [lat, lng, [id, travelType, iconUrl]] = coordinate;

      const icon = L.icon({
        iconUrl: iconUrl,
        iconSize: [size, size],
        iconAnchor: [anchor, anchor],
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
  if (cachedGeoJSON && cachedGeoJSON.features) {
    createdHighlightLayers = [];
    trueHighlights.forEach((highlight) => {
      const { country_name, jscolor_highlight_color, jscolor_highlight_opacity, random_id } = highlight;

      const layer_exist = createdHighlightLayers.some(
        (layer) => layer.country_name === country_name && layer.random_id === random_id
      );

      if (!layer_exist) {
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

          createdHighlightLayers.push({ country_name, random_id });
        }
      }
    });
  } else {
    setTimeout(function () {
      localStorageCreateTrueHighlights();
    }, 200);
  }
}

function removeTrueHighlights() {
  map.eachLayer((layer) => {
    if (layer instanceof L.GeoJSON) {
      map.removeLayer(layer);
    }
  });
}

function trueHighlightsArrayRemoveHighlight(stored_subset_id_reference) {
  trueHighlights = trueHighlights.filter((highlight) => {
    return highlight.random_id !== stored_subset_id_reference;
  });
}

function removeContainerTravelLogs() {
  document.getElementById("logs_list").innerHTML = "";
}

function localStorageSaveHomeData() {
  localStorage.setItem("homeData", JSON.stringify(homeData));
}

function localStorageLoadHomeData() {
  if (localStorage.getItem("homeData")) {
    homeData = JSON.parse(localStorage.getItem("homeData"));
  } else {
    homeData = {};
  }
}

function localStorageRemoveHomeData() {
  localStorage.removeItem("homeData");
}

function localStorageCreateHomeMarkerAndCircle() {
  let latitude = homeData.lat;
  let longitude = homeData.lng;
  let jscolor_home_opacity = homeData.opacity;
  let jscolor_home_color = homeData.color;

  const offset_longitude = longitude * 1.002;

  if (!latitude == 0) {
    home_marker = L.marker([latitude, offset_longitude], {
      icon: home_icon,
      id: "home_marker",
    });

    home_marker.addTo(map).bounce(1);

    home_circle = L.circle([latitude, longitude], {
      radius: 50000,
      color: jscolor_home_color,
      fillOpacity: jscolor_home_opacity,
      weight: 1,
    }).addTo(map);
  }
}

function localStorageSavePageSettings() {
  localStorage.setItem("pageSettings", JSON.stringify(pageSettings));
}

function localStorageLoadPageSettings() {
  if (localStorage.getItem("pageSettings")) {
    pageSettings = JSON.parse(localStorage.getItem("pageSettings"));

    marker_settings_index = pageSettings.markers_index;
  } else {
    pageSettings.markers_size = 35;
    pageSettings.markers_anchor = 20;
    pageSettings.markers_index = 3;
    marker_settings_index = pageSettings.markers_index;
    pageSettings.distance_unit = "km";
    pageSettings.polyline_visibility = true;
    pageSettings.highlight_visibility = true;
    pageSettings.house_visibility = true;
  }

  if (marker_settings_index === 1) {
    overlay_markers_active = toggleIconColor(overlay_markers_active, sub_markers_icon);
  }

  if (pageSettings.markers_size === 0) {
    markers_settings_display.innerHTML = `<s>markers</s>`;
  } else if (pageSettings.markers_size === 20) {
    markers_settings_display.innerHTML = `markers [S]`;
  } else if (pageSettings.markers_size === 30) {
    markers_settings_display.innerHTML = `markers [M]`;
  } else if (pageSettings.markers_size === 50) {
    markers_settings_display.innerHTML = `markers [L]`;
  } else if (pageSettings.markers_size === 75) {
    markers_settings_display.innerHTML = `markers [XL]`;
  }

  if (pageSettings.distance_unit == "km") {
    unit_display.innerHTML = "units [km]";
    bar_chart_type_distance_unit_display.innerHTML = "distance by travel type [km]";
    basic_statistics_chart_display.innerHTML = "basic statistics [km]";
  } else if (pageSettings.distance_unit == "mil") {
    unit_display.innerHTML = "units [mil]";
    bar_chart_type_distance_unit_display.innerHTML = "distance by travel type [mil]";
    basic_statistics_chart_display.innerHTML = "basic statistics [mil]";
  }

  if (pageSettings.highlight_visibility === false) {
    highlight_status_display.innerHTML = `<s>highlights</s>`;
    overlay_highlights_active = toggleIconColor(overlay_highlights_active, sub_highlights_icon);
  }

  if (pageSettings.house_visibility === false) {
    house_status_display.innerHTML = `<s>house</s>`;
    overlay_house_active = toggleIconColor(overlay_house_active, sub_house_icon);
  }
}

function localStorageRemovePageSettings() {
  localStorage.removeItem("pageSettings");
}

function localStorageSetMapLayer() {
  if (typeof pageSettings.current_map_layer === "undefined" || pageSettings.current_map_layer === "earth") {
    switchTileMap(mapTileLayer_A);
    toggleActiveIconColor(sub_map_layer_earth_icon);
    toggleInactiveIconColor(sub_map_layer_bright_icon, sub_map_layer_dark_icon, sub_map_layer_middleage_icon);
  } else if (pageSettings.current_map_layer === "light") {
    switchTileMap(mapTileLayer_B);
    toggleActiveIconColor(sub_map_layer_bright_icon);
    toggleInactiveIconColor(sub_map_layer_earth_icon, sub_map_layer_dark_icon, sub_map_layer_middleage_icon);
  } else if (pageSettings.current_map_layer === "dark") {
    switchTileMap(mapTileLayer_C);
    toggleActiveIconColor(sub_map_layer_dark_icon);
    toggleInactiveIconColor(sub_map_layer_earth_icon, sub_map_layer_bright_icon, sub_map_layer_middleage_icon);
  } else if (pageSettings.current_map_layer === "middleage") {
    switchTileMap(mapTileLayer_D);
    toggleActiveIconColor(sub_map_layer_middleage_icon);
    toggleInactiveIconColor(sub_map_layer_earth_icon, sub_map_layer_bright_icon, sub_map_layer_dark_icon);
  }
}

// Local Storage ↑
// D3 ↓

function countUniqueCountries(data) {
  const unique_countries = new Set();

  for (const highlight of data) {
    unique_countries.add(highlight.country_name);
  }
  countries_visited = unique_countries.size;
}

function getContinentsForHighlights(data) {
  const continents = {};

  data.forEach((highlight) => {
    const countryName = highlight.country_name;
    const continent = continentMapping[countryName];

    if (continent) {
      continents[continent] = continents[continent] || new Set();
      continents[continent].add(countryName);
    }
  });

  for (const continent in continents) {
    continents[continent] = Array.from(continents[continent]);
  }
  continents_visited = Object.keys(continents).length;

  //return continents;
  countries_visited_europe = continents.Europe && continents.Europe.length > 0 ? continents.Europe.length : 0;
  // prettier-ignore
  countries_visited_north_america = continents.NorthAmerica && continents.NorthAmerica.length > 0 ? continents.NorthAmerica.length : 0;
  // prettier-ignore
  countries_visited_south_america = continents.SouthAmerica && continents.SouthAmerica.length > 0 ? continents.SouthAmerica.length : 0;
  // prettier-ignore
  countries_visited_australia = continents.Australia && continents.Australia.length > 0 ? continents.Australia.length : 0;
  // prettier-ignore
  countries_visited_asia = continents.Asia && continents.Asia.length > 0 ? continents.Asia.length : 0;
  // prettier-ignore
  countries_visited_africa = continents.Africa && continents.Africa.length > 0 ? continents.Africa.length : 0;
}

function lineChartDataRetrieve() {
  if (CRUD.length > 0) {
    max_line_chart_height_value = total_distance;

    lineChartTravelLogData = [];
    lineChartTravelLogDataValue = {};

    lineChartGroupData = [];
    lineChartGroupDataValue = {};

    if (pageSettings.distance_unit === "mil") {
      max_line_chart_height_value *= 0.6213712;
    }

    for (let i = 0; i < CRUD.length; i++) {
      if (CRUD[i].CRUD_category === "superset") {
        let distanceValue = CRUD[i].CRUD_superset_distance;

        if (pageSettings.distance_unit === "km") {
        } else if (pageSettings.distance_unit === "mil") {
          distanceValue *= 0.6213712;
        }

        lineChartTravelLogDataValue = {
          date_start: CRUD[i].CRUD_superset_date_start,
          date_end: CRUD[i].CRUD_superset_date_end,
          name: CRUD[i].CRUD_superset_name,
          value: distanceValue,
        };
        lineChartTravelLogData.push(lineChartTravelLogDataValue);
      } else if (CRUD[i].CRUD_category === "group") {
        lineChartGroupDataValue = {
          group_date_start: CRUD[i].CRUD_group_date_start,
          group_date_end: CRUD[i].CRUD_group_date_end,
          group_name: CRUD[i].CRUD_group_name,
        };

        lineChartGroupData.push(lineChartGroupDataValue);

        for (let j = 0; j < CRUD[i].CRUD_subset.length; j++) {
          let distanceValue = CRUD[i].CRUD_subset[j].CRUD_subset_distance;

          if (pageSettings.distance_unit === "km") {
          } else if (pageSettings.distance_unit === "mil") {
            distanceValue *= 0.6213712;
          }

          lineChartTravelLogDataValue = {
            date_start: CRUD[i].CRUD_subset[j].CRUD_subset_date_start,
            date_end: CRUD[i].CRUD_subset[j].CRUD_subset_date_end,
            name: CRUD[i].CRUD_subset[j].CRUD_subset_name,
            value: distanceValue,
          };

          lineChartTravelLogData.push(lineChartTravelLogDataValue);
        }
      }
    }

    lineChartTravelLogData.sort((a, b) => {
      const dateA = new Date(a.date_start);
      const dateB = new Date(b.date_start);

      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
  }
}

function updateStatisticsProgressBars() {
  // countries visited

  const countries_visited_label = document.getElementById("countries_visited_label");
  // prettier-ignore
  countries_visited_label.textContent = "Countries & lands visited " + countries_visited + "/" + total_countries;
  // prettier-ignore
  const countries_visited_bar_value = (countries_visited / total_countries) * 100;

  const countries_visited_bar = new ldBar("#countries_visited_bar");
  countries_visited_bar.set(countries_visited_bar_value);

  // countries visited
  // continents visited

  const continents_visited_label = document.getElementById("continents_visited_label");
  // prettier-ignore
  continents_visited_label.textContent = "Continents visited " + continents_visited + "/" + total_continents;
  // prettier-ignore
  const continents_visited_bar_value = (continents_visited / total_continents) * 100;

  const continents_visited_bar = new ldBar("#continents_visited_bar");
  continents_visited_bar.set(continents_visited_bar_value);

  // continents visited
  // europe countries visited

  const countries_visited_europe_label = document.getElementById("countries_visited_europe_label");
  // prettier-ignore
  countries_visited_europe_label.textContent = "Europe " + countries_visited_europe + "/" + total_countries_europe;
  // prettier-ignore
  const countries_visited_europe_bar_value = (countries_visited_europe / total_countries_europe) * 100;

  const countries_visited_europe_bar = new ldBar("#countries_visited_europe_bar");
  countries_visited_europe_bar.set(countries_visited_europe_bar_value);

  // europe countries visited
  // north america countries visited

  const countries_visited_north_america_label = document.getElementById("countries_visited_north_america_label");
  // prettier-ignore
  countries_visited_north_america_label.textContent = "North America " + countries_visited_north_america + "/" + total_countries_north_america;
  // prettier-ignore
  const countries_visited_north_america_bar_value = (countries_visited_north_america / total_countries_north_america) * 100;

  const countries_visited_north_america_bar = new ldBar("#countries_visited_north_america_bar");
  countries_visited_north_america_bar.set(countries_visited_north_america_bar_value);

  // north america countries visited
  // south america countries visited

  const countries_visited_south_america_label = document.getElementById("countries_visited_south_america_label");
  // prettier-ignore
  countries_visited_south_america_label.textContent = "South America " + countries_visited_south_america + "/" + total_countries_south_america;
  // prettier-ignore
  const countries_visited_south_america_bar_value = (countries_visited_south_america / total_countries_south_america) * 100;

  const countries_visited_south_america_bar = new ldBar("#countries_visited_south_america_bar");
  countries_visited_south_america_bar.set(countries_visited_south_america_bar_value);

  // south america countries visited
  // australia america countries visited

  const countries_visited_australia_label = document.getElementById("countries_visited_australia_label");
  // prettier-ignore
  countries_visited_australia_label.textContent = "Australia " + countries_visited_australia + "/" + total_countries_australia;
  // prettier-ignore
  const countries_visited_australia_bar_value = (countries_visited_australia / total_countries_australia) * 100;

  const countries_visited_australia_bar = new ldBar("#countries_visited_australia_bar");
  countries_visited_australia_bar.set(countries_visited_australia_bar_value);

  // australia america countries visited
  // asia america countries visited

  const countries_visited_asia_label = document.getElementById("countries_visited_asia_label");
  // prettier-ignore
  countries_visited_asia_label.textContent = "Asia " + countries_visited_asia + "/" + total_countries_asia;
  // prettier-ignore
  const countries_visited_asia_bar_value = (countries_visited_asia / total_countries_asia) * 100;

  const countries_visited_asia_bar = new ldBar("#countries_visited_asia_bar");
  countries_visited_asia_bar.set(countries_visited_asia_bar_value);

  // asia america countries visited
  // africa america countries visited

  const countries_visited_africa_label = document.getElementById("countries_visited_africa_label");
  // prettier-ignore
  countries_visited_africa_label.textContent = "Africa " + countries_visited_africa + "/" + total_countries_africa;
  // prettier-ignore
  const countries_visited_africa_bar_value = (countries_visited_africa / total_countries_africa) * 100;

  const countries_visited_africa_bar = new ldBar("#countries_visited_africa_bar");
  countries_visited_africa_bar.set(countries_visited_africa_bar_value);

  // africa america countries visited
}

function findLowestAndHighestSupersetDistance(array) {
  lowest_distance_superset = 0;
  highest_distance_superset = 0;
  const supersetObjects = array.filter((item) => item.CRUD_category === "superset");

  if (supersetObjects.length === 0) {
    return {
      lowest_distance_superset: 0,
      highest_distance_superset: 0,
    };
  }

  lowest_distance_superset = Number.POSITIVE_INFINITY;
  highest_distance_superset = Number.NEGATIVE_INFINITY;

  for (const superset of supersetObjects) {
    const distance = superset.CRUD_superset_distance;
    if (typeof distance === "number") {
      if (distance < lowest_distance_superset) {
        lowest_distance_superset = distance;
      }
      if (distance > highest_distance_superset) {
        highest_distance_superset = distance;
      }
    }
  }
}

function findLowestAndHighestSubsetDistance(array) {
  lowest_distance_subset = 0;
  highest_distance_subset = 0;
  const subsetObjects = array
    .filter((item) => item.CRUD_category === "group")
    .map((item) => item.CRUD_subset)
    .flat();

  if (subsetObjects.length === 0) {
    return {
      lowest_distance_subset: 0,
      highest_distance_subset: 0,
    };
  }

  lowest_distance_subset = Number.POSITIVE_INFINITY;
  highest_distance_subset = Number.NEGATIVE_INFINITY;

  for (const subset of subsetObjects) {
    const distance = subset.CRUD_subset_distance;
    if (typeof distance === "number") {
      if (distance < lowest_distance_subset) {
        lowest_distance_subset = distance;
      }
      if (distance > highest_distance_subset) {
        highest_distance_subset = distance;
      }
    }
  }
}

function basicStatisticsChartLowestAndHighestCRUDValue() {
  if (polylines.length > 1) {
    const extruded_crud_values = [
      lowest_distance_subset,
      highest_distance_subset,
      lowest_distance_superset,
      highest_distance_superset,
    ].filter((value) => value !== 0);

    if (extruded_crud_values.length > 0) {
      lowest_travel_value = parseFloat(Math.min(...extruded_crud_values));
      highest_travel_value = parseFloat(Math.max(...extruded_crud_values));
    } else {
      lowest_travel_value = 0;
      highest_travel_value = 0;
    }
  }
}

function barChartTypeDistanceCreate() {
  const svgHeight = bar_chart_type_distance.clientHeight * 1.2;
  const svgWidth = bar_chart_type_distance.clientWidth;
  const margin = { top: 20, right: 20, bottom: 70, left: 60 };

  const chartWidth = svgWidth - margin.left - margin.right;
  const chartHeight = svgHeight - margin.top - margin.bottom;

  // prettier-ignore
  const svg = d3.select("#bar_chart_type_distance")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

  //prettier-ignore
  const gradient = svg
    .append("defs")
    .append("linearGradient")
    .attr("id", "typeDistanceGradient")
    .attr("x1", "0%")
    .attr("x2", "50%")
    .attr("y1", "0%")
    .attr("y2", "100%");

  bar_chart_type_distance_bar_gradient.forEach((color, index) => {
    gradient
      .append("stop")
      .attr("offset", (index * 100) / (bar_chart_type_distance_bar_gradient.length - 1) + "%")
      .attr("stop-color", color);
  });

  // prettier-ignore
  const chart = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  barChartTypeDistanceData.sort((a, b) => b.value - a.value);

  // prettier-ignore
  const xScale = d3
    .scaleBand()
    .domain(barChartTypeDistanceData.map((d) => d.label))
    .range([0, chartWidth])
    .padding(0.1);

  // (Y scaled to the highest value)
  //prettier-ignore
  const yScale = d3
    .scaleLinear()
    .domain([0, type_distance_max_value])
    .range([chartHeight, 0]);

  // (chart bars)
  //prettier-ignore
  chart
    .selectAll("rect")
    .data(barChartTypeDistanceData)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d.label))
    .attr("y", (d) => chartHeight)
    .attr("width", xScale.bandwidth())
    .attr("height", 0)
    .attr("fill", "url(#typeDistanceGradient")
    .transition()
    .duration(1200)
    .attr("y", (d) => yScale(d.value))
    .attr("height", (d) => chartHeight - yScale(d.value));

  // (bars distance text display)
  //prettier-ignore
  chart
    .selectAll("text")
    .data(barChartTypeDistanceData)
    .enter()
    .append("text")
    .text((d) => d.value)
    .attr("x", (d) => xScale(d.label) + xScale.bandwidth() / 2)
    .attr("y", (d) => chartHeight - 5)
    .attr("text-anchor", "middle")
    .style("font-size", "15px")
    .style("fill", "white")
    .transition()
    .duration(1200)
    .attr("y", (d) => yScale(d.value) - 5);

  // (labels display)
  //prettier-ignore
  chart
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .style("font-size", "12px")
    .style("font-family", "Inter, sans-serif")
    .style("font-weight", "thin")
    .attr("transform", "rotate(-45) translate(-16, 8)");

  // (Y axis numbers)
  //prettier-ignore
  chart
    .append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale))
    .selectAll("text")
    .style("font-size", "12px")
    .style("font-family", "Inter, sans-serif")
    .style("font-weight", "thin");
}

function pieChartTypeDistributionCreate() {
  const svgHeight = pie_chart_type_count.clientHeight * 0.9;
  const svgWidth = pie_chart_type_count.clientWidth * 0.9;

  const radius = Math.min(svgWidth, svgHeight) / 2;
  const innerRadius = radius / 3;

  // prettier-ignore
  const svg = d3
    .select("#pie_chart_type_count")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // (group element)
  // prettier-ignore
  const g = svg
    .append("g")
    .attr("transform", "translate(" + svgWidth / 2 + "," + svgHeight / 2 + ")");

  //(pie layout)
  // prettier-ignore
  const pie = d3
    .pie()
    .padAngle(.03)
    .value(function (d) {
    return d.value;
  });

  // (generate pie chart data)
  // prettier-ignore
  const arc = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(innerRadius)
    .cornerRadius(5);

  // (pass the data without the 0 value)
  const filteredData = pieChartTypeDistributionData.filter(function (d) {
    return d.value > 0;
  });

  // prettier-ignore
  const arcs = g
    .selectAll("arc")
    .data(pie(filteredData))
    .enter()
    .append("g");

  //  (draw the pie chart)
  // prettier-ignore (draw the pie chart)
  arcs
    .append("path")
    .attr("d", arc)
    .attr("fill", function (d) {
      return pie_chart_type_count_pie_gradient[d.data.label];
    })
    .transition()
    .duration(1200)
    .attrTween("d", function (d) {
      const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
      return function (t) {
        return arc(interpolate(t));
      };
    });

  // prettier-ignore (add labels)
  arcs
    .append("text")
    .attr("transform", function (d) {
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.data.value;
    })
    .style("opacity", 0)
    .transition()
    .duration(1000)
    .style("opacity", 1)
    .style("font-family", "Inter, sans-serif")
    .style("font-weight", "thin")
    .style("font-size", "20px");
}

function basicStatisticsChartCreate() {
  unitText = pageSettings.distance_unit === "mil" ? "mil" : "km";

  const svgHeight = bar_chart_basic_statistics.clientHeight * 1.075;
  const svgWidth = bar_chart_basic_statistics.clientWidth;
  const margin = { top: 5, right: 20, bottom: 145, left: 60 };

  const chartWidth = svgWidth - margin.left - margin.right;
  const chartHeight = svgHeight - margin.top - margin.bottom;

  const svg = d3
    .select("#bar_chart_basic_statistics")
    .append("svg")
    .attr("width", chartWidth + margin.left + margin.right)
    .attr("height", chartHeight + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // (defining X scale)
  const xScale = d3
    .scaleBand()
    .domain(basicStatisticsData.map((d) => d.label))
    .range([0, chartWidth])
    .padding(0.1);

  // (defining Y scale)
  // prettier-ignore
  const yScale = d3
    .scaleLinear()
    .domain([0, max_line_chart_height_value * 1.050])
    .nice()
    .range([chartHeight, 0]);

  // prettier-ignore
  const gradient = svg
    .append("defs")
    .append("linearGradient")
    .attr("id", "basicGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%");

  // prettier-ignore
  gradient
    .append("stop")
    .attr("offset", "0%")
    .style("stop-color", "#ff7a93");

  // prettier-ignore
  gradient
    .append("stop")
    .attr("offset", "100%")
    .style("stop-color", "#ffbc75");

  // (Creating the bars)
  svg
    .selectAll(".bar")
    .data(basicStatisticsData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d) => xScale(d.label))
    .attr("y", chartHeight)
    .attr("width", xScale.bandwidth())
    .attr("height", 0)
    .attr("fill", "url(#basicGradient)")
    .attr("opacity", 1)
    .transition()
    .duration(1000)
    .attr("y", (d) => yScale(d.value))
    .attr("height", (d) => chartHeight - yScale(d.value));

  // (displaying bar values)
  svg
    .selectAll(".bar-label")
    .data(basicStatisticsData)
    .enter()
    .append("text")
    .attr("class", "bar-label")
    .attr("x", (d) => xScale(d.label) + xScale.bandwidth() / 2)
    .attr("y", chartHeight)
    .style("fill", "white")
    .style("font-size", "12px")
    .style("font-family", "Inter, sans-serif")
    .style("font-weight", "thin")
    .attr("text-anchor", "middle")
    .text((d) => `${d.value} ${unitText}`)
    .transition()
    .duration(1000)
    .attr("y", (d) => yScale(d.value) - 5);

  // ("distance X axis label under every bar")
  // prettier-ignore
  svg
    .selectAll(".bar-distance-label")
    .data(basicStatisticsData)
    .enter()
    .append("text")
    .attr("class", "bar-distance-label")
    .attr("x", (d) => xScale(d.label) + xScale.bandwidth() / 2)
    .attr("y", chartHeight + 35)
    .style("text-anchor", "middle")
    .style("fill", "white")
    .style("font-size", "15px")
    .style("font-family", "Inter, sans-serif")
    .style("font-weight", "thin")
    .text("dist.");

  // (Adding X axis)
  // prettier-ignore
  svg
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0,${chartHeight})`)
  .call(
    d3
      .axisBottom(xScale)
      .tickFormat((d) => {
        return d;
      })
  )
  .selectAll("text")
  .style("fill", "white")
  .style("font-size", "15px")
  .style("font-family", "Inter, sans-serif");

  // (type display under every bar)
  // prettier-ignore
  svg
  .selectAll(".bar-type-label")
  .data(basicStatisticsData)
  .enter()
  .append("text")
  .attr("class", "bar-type-label")
  .attr("x", (d) => xScale(d.label) + xScale.bandwidth() / 2)
  .attr("y", chartHeight + 50)
  .style("text-anchor", "middle")
  .style("fill", "white")
  .style("font-size", "12px")
  .style("font-family", "Inter, sans-serif")
  .style("font-weight", "thin")
  .text((d) => d.type);

  // (Adding Y axis scale labels)
  // prettier-ignore
  svg
  .append("g")
  .attr("class", "y-axis")
  .call(d3.axisLeft(yScale)
  .ticks(5))
  .selectAll("text")
  .style("fill", "white")
  .style("font-size", "12px")
  .style("font-family", "Inter, sans-serif");
}

function lineChartDistanceCreate() {
  // (min and max dates from both datasets)
  const minDateTravelLog =
    lineChartTravelLogData.length > 0 ? d3.min(lineChartTravelLogData, (d) => new Date(d.date_start)) : null;
  const maxDateTravelLog =
    lineChartTravelLogData.length > 0 ? d3.max(lineChartTravelLogData, (d) => new Date(d.date_end)) : null;

  const minDateGroup =
    lineChartGroupData.length > 0 ? d3.min(lineChartGroupData, (d) => new Date(d.group_date_start)) : null;
  const maxDateGroup =
    lineChartGroupData.length > 0 ? d3.max(lineChartGroupData, (d) => new Date(d.group_date_end)) : null;

  const minDate = new Date(Math.min(minDateTravelLog || Infinity, minDateGroup || Infinity));
  const maxDate = new Date(Math.max(maxDateTravelLog || -Infinity, maxDateGroup || -Infinity));

  // (set the chart date range)
  const startDate = new Date(minDate);
  startDate.setDate(startDate.getDate() - 3);
  const endDate = new Date(maxDate);
  endDate.setDate(endDate.getDate() + 3);

  let cumulative_sum = 0;
  const cumulative_data = lineChartTravelLogData.map((data) => {
    cumulative_sum += data.value;

    return {
      date_start: new Date(data.date_start),
      cumulative_value: cumulative_sum,
    };
  });

  const chart_container = document.getElementById("line_chart_distance");
  const containerWidth = chart_container.clientWidth;
  const containerHeight = chart_container.clientHeight;

  const margin = { top: 40, right: 20, bottom: 30, left: 150 };
  const width = containerWidth * 0.975 - margin.left - margin.right;
  const height = containerHeight * 0.995 - margin.top - margin.bottom;

  const svg = d3
    .select("#line_chart_distance")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // (define X scale)
  // prettier-ignore
  const xScale = d3
    .scaleTime()
    .domain([startDate, endDate])
    .range([0, width]);

  // (define Y scale)
  // prettier-ignore
  const yScale = d3
    .scaleLinear()
    .domain([0, max_line_chart_height_value * 1.15])
    .range([height, 0]);

  // (create X scale)
  // prettier-ignore
  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale))
    .style("font-size", "12px")
    .style("font-family", "Inter, sans-serif")
    .style("font-weight", "thin");

  // (create Y scale)
  // prettier-ignore
  svg.append("g")
    .call(d3.axisLeft(yScale))
    .style("font-size", "12px")
    .style("font-family", "Inter, sans-serif")
    .style("font-weight", "thin");

  // (starting and ending date for chart)
  lineChartTravelLogData.forEach((data) => {
    const dateStart = new Date(data.date_start);
    const dateEnd = new Date(data.date_end);

    const rectWidth = xScale(dateEnd) - xScale(dateStart);

    unitText = pageSettings.distance_unit === "mil" ? "mil" : "km";

    // (create data bars)
    // prettier-ignore
    svg
      .append("rect")
      .attr("x", xScale(dateStart))
      .attr("y", height)
      .attr("width", rectWidth)
      .attr("height", 0)
      .attr("fill", "#5cd1ff")
      .style("opacity", 1)
      .transition()
      .duration(1000)
      .attr("y", yScale(data.value))
      .attr("height", height - yScale(data.value));
  });

  // (X scale label)
  // prettier-ignore
  svg
    .append("text")
    .attr("transform", `translate(${width / 2},${height / -25})`)
    .style("text-anchor", "middle")
    .text(`Distance over time [${unitText}]`)
    .style("fill", "white")
    .style("font-size", "2vh")
    .style("font-family", "Inter, sans-serif")
    .style("font-weight", "thin");

  // prettier-ignore
  const gradient = svg
    .append("linearGradient")
    .attr("id", "line-gradient")
    .attr("x1", "0%")
    .attr("x2", "100%")
    .attr("y1", "0%")
    .attr("y2", "0%");

  // prettier-ignore
  gradient
    .append("stop")
    .attr("offset", "0%")
    .style("stop-color", "rgba(0, 255, 135, 0.1)");

  // prettier-ignore
  gradient
    .append("stop")
    .attr("offset", "100%")
    .style("stop-color", "#f4f269");

  // (line generator for cumulative data)
  // prettier-ignore
  const lineGenerator = d3
    .line()
    .x((d) => xScale(d.date_start))
    .y((d) => yScale(d.cumulative_value))
    .curve(d3.curveBasis);

  // (create a cumulative data line)
  cumulative_data.unshift({
    date_start: startDate,
    cumulative_value: 0,
  });

  // prettier-ignore
  svg
    .append("path")
    .datum(cumulative_data)
    .attr("class", "line")
    .attr("d", lineGenerator)
    .style("fill", "none")
    .style("stroke", "url(#line-gradient)")
    .attr("stroke-width", 4)
    .style("stroke-dasharray", width)
    .style("stroke-dashoffset", width)
    .transition()
    .duration(1000)
    .style("stroke-dashoffset", 0)

  const lastDataPoint = cumulative_data[cumulative_data.length - 1];

  svg
    .append("text")
    .attr("x", xScale(lastDataPoint.date_start))
    .attr("y", yScale(lastDataPoint.cumulative_value) - 10)
    .text(`${max_line_chart_height_value.toFixed(0)} ${unitText}`)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .style("font-size", "12px")
    .style("font-family", "Inter, sans-serif")
    .style("font-weight", "thin");

  // (name and value bar display)
  lineChartTravelLogData.forEach((data) => {
    const dateStart = new Date(data.date_start);
    const dateEnd = new Date(data.date_end);

    const rectWidth = xScale(dateEnd) - xScale(dateStart);

    const labelX = xScale(dateStart) + rectWidth / 2;
    const labelYName = yScale(data.value) - 20;
    const labelYValue = labelYName + 16;

    svg
      .append("text")
      .attr("x", labelX)
      .attr("y", labelYName)
      .text(data.name)
      .style("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "17px")
      .style("font-family", "Inter, sans-serif")
      .style("font-weight", "thin")
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .style("opacity", 1);

    svg
      .append("text")
      .attr("x", labelX)
      .attr("y", labelYValue)
      .text(data.value.toFixed(0) + ` ${unitText}`)
      .style("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "12px")
      .style("font-family", "Inter, sans-serif")
      .style("font-weight", "thin")
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .style("opacity", 1);
  });

  // (tick values from the Y scale)
  const yTicks = yScale.ticks();

  // (horizontal grid lines)
  yTicks.forEach((value) => {
    const yPosition = yScale(value);

    svg
      .append("line")
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", yPosition)
      .attr("y2", yPosition)
      .style("stroke", "gray")
      .style("stroke-dasharray", "5 5")
      .style("opacity", 0.5);
  });

  lineChartGroupData.forEach((data) => {
    const groupStart = new Date(data.group_date_start);
    const groupEnd = new Date(data.group_date_end);

    const rectWidth = xScale(groupEnd) - xScale(groupStart);

    const barGradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "distanceOverTimeGradient")
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    // prettier-ignore
    barGradient
      .append("stop")
      .attr("offset", "0%")
      .style("stop-color", "#5cffd6");

    //prettier-ignore
    barGradient
      .append("stop")
      .attr("offset", "100%")
      .style("stop-opacity", 0);

    svg
      .append("rect")
      .attr("x", xScale(groupStart))
      .attr("y", 2.5)
      .attr("width", rectWidth)
      .attr("height", 0)
      .attr("fill", "url(#distanceOverTimeGradient)")
      .attr("stroke", "url(#distanceOverTimeGradient)")
      .attr("stroke-width", 2)
      .style("opacity", 0.15)
      .transition()
      .duration(1000)
      .attr("y", 2.5)
      .attr("height", height);

    svg
      .append("text")
      .attr("x", xScale(groupStart) + rectWidth / 2)
      .attr("y", height / 15 - 7.5)
      .text(data.group_name)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .style("opacity", 1);
  });
}

function removeChartsData() {
  d3.select("#bar_chart_type_distance svg").remove();
  d3.select("#pie_chart_type_count svg").remove();
  d3.select("#line_chart_distance svg").remove();
  d3.select("#bar_chart_basic_statistics svg").remove();
}

function checkResolutionChange() {
  const newResolution = `${window.innerWidth}x${window.innerHeight}`;
  if (newResolution !== current_resolution) {
    current_resolution = newResolution;
    removeChartsData();
    if (travelLogs.length > 0) {
      barChartTypeDistanceCreate();
      pieChartTypeDistributionCreate();
      lineChartDataRetrieve();
      lineChartDistanceCreate();
      basicStatisticsChartCreate();
    }
  }
}

function startResolutionCheck() {
  if (resolution_change_interval === null) {
    resolution_change_interval = setInterval(checkResolutionChange, 250);
  }
}

function stopResolutionCheck() {
  if (resolution_change_interval !== null) {
    clearInterval(resolution_change_interval);
    resolution_change_interval = null;
  }
}

// D3 ↑
// Loading progress info ↓

showAppTitle();

function showAppTitle() {
  title_screen_background.style.left = "20%";
  title_screen_background.style.transform = "translateX(-50%)";
  title_screen_background.style.top = "30%";
  title_screen_background.style.transform = "translateY(-50%)";
}

function hideAppTitle() {
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
  { url: "assets/data/LeafletMap/leaflet.css", label: "Leaflet CSS" },
  { url: "assets/data/DateRangePicker/daterangepicker.css", label: "DateRangePicker CSS" },
  { url: "assets/data/FontAwesome/css/all.min.css", label: "FontAwesome CSS" },
  { url: "assets/data/LoadingBar/loading-bar.css", label: "LoadingBar CSS" },
  { url: "assets/data/TimelineJS3/timeline.theme.dark.css", label: "TimelineJS3 CSS" },
  { url: "assets/data/LeafletControlGeocoder/Control.Geocoder.css", label: "Leaflet Control Geocoder CSS" },

  { url: "script.js", label: "Main JS" },
  { url: "assets/data/LeafletMap/leaflet.js", label: "Leaflet JS" },
  { url: "assets/data/JScolor/jscolor.js", label: "JScolor JS" },
  { url: "assets/data/Jquery/jquery.js", label: "Jquery JS" },
  { url: "assets/data/Moment/moment.min.js", label: "Moment JS" },
  { url: "assets/data/DateRangePicker/daterangepicker.js", label: "DateRangePicker JS" },
  { url: "assets/data/LeafletEdgeBuffer/leaflet.edgebuffer.js", label: "Leaflet EdgeBuffer JS" },
  { url: "assets/data/LeafletGridLayerFadeOut/Leaflet.GridLayer.FadeOut.js", label: "Leaflet Grid Layer Fade-out JS" },
  { url: "assets/data/SmoothMarkerBouncing/bundle.js", label: "SmoothMarkerBouncing JS" },
  { url: "assets/data/LoadingBar/loading-bar.js", label: "LoadingBar JS" },
  { url: "assets/data/TimelineJS3/timeline.js", label: "TimelineJS3 JS" },
];

function progressInfoDisplay(label, progress) {
  progress_info.textContent = ` ${label} (Progress: ${progress.toFixed(2)}%)`;
}

function onLoadingComplete() {
  localStorageLoadPageSettings();
  localStorageLoadTrueHighlights();
  localStorageLoadTravelLogs();
  localStorageLoadMarkerCoordinates();
  localStorageLoadCRUD();

  localStorageLoadHomeData();

  localStorageCreateStoredIds();
  localStorageCreateTimelineData(travelLogs, timelineData);

  if (pageSettings.highlight_visibility === true) {
    localStorageCreateTrueHighlights();
  }

  drawPolyline();
  if (pageSettings.polyline_visibility === false) {
    togglePolylineVisibility();
    overlay_polylines_active = toggleIconColor(overlay_polylines_active, sub_polylines_icon);
    polyline_status_display.innerHTML = `<s>polylines</s>`;
  }

  timelineInfoToggle();
  populateTimeline();
  buildCRUD();

  localStorageCreateTrueMarkers(pageSettings.markers_size, pageSettings.markers_anchor);

  if (pageSettings.house_visibility === true) {
    localStorageCreateHomeMarkerAndCircle();
  }

  localStorageSetMapLayer();
  calculateDistances();
  distancesBreakdown(rawCoordinatesDistances);
  calculateTotalDistances(rawCoordinatesDistances);

  if (polylines.length > 0) {
    findLowestAndHighestSupersetDistance(CRUD);
    findLowestAndHighestSubsetDistance(CRUD);
    basicStatisticsChartLowestAndHighestCRUDValue();
    updateTravelStats();
  }

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
// Info popup ↓

function displayInfoBox(text, time) {
  clearTimeout(info_box_timeout_show);
  clearTimeout(info_box_timeout_hide);

  info_box_text.textContent = text;
  info_box.style.display = "flex";
  info_box.style.opacity = 1;

  info_box_timeout_show = setTimeout(function () {
    info_box.style.opacity = 0;

    info_box_timeout_hide = setTimeout(function () {
      info_box.style.display = "none";
    }, 300);
  }, time);
}

// Info popup ↑

// // ---------- TEST ---------- ↓

test_button.addEventListener("click", () => {
  console.log("%c-1- pageSettings", "color: lightgreen;", pageSettings);
  console.log("%c-1- homeData", "color: lightgreen;", homeData);
  console.log("%c-1- markersData", "color: lightgreen;", markersData);
  console.log("%c-1- travelLogs", "color: lightgreen;", travelLogs);
  console.log("%c-1- CRUD", "color: lightgreen;", CRUD);
  console.log("%c-1- trueHighlights", "color: lightgreen;", trueHighlights);
  console.log("%c-0- highlights", "color: #ffc973;", highlights);
  console.log("%c-0- markers", "color: #ffc973;", markers);
  console.log("%c-0- polylines", "color: #ffc973;", polylines);
  console.log("%c-0- storedIds", "color: #ffc973;", storedIds);
  console.log("%c-0- rawCoordinatesDistances", "color: #ffc973;", rawCoordinatesDistances);
  console.log("%c-0- timelineData", "color: #ffc973;", timelineData);
  console.log("%c-0- barChartTypeDistanceData", "color: #ffc973;", barChartTypeDistanceData);
  console.log("%c-0- pieChartTypeDistributionData", "color: #ffc973;", pieChartTypeDistributionData);
  console.log("%c-0- lineChartTravelLogData", "color: #ffc973;", lineChartTravelLogData);
  console.log("%c-0- lineChartGroupData", "color: #ffc973;", lineChartGroupData);
  console.log("%c-0- basicStatisticsData", "color: #ffc973;", basicStatisticsData);

  countUniqueCountries(trueHighlights);
  getContinentsForHighlights(trueHighlights);

  console.log("continents_visited:", continents_visited);
  console.log("countries_visited:", countries_visited);
  console.log("countries visited europe:", countries_visited_europe);
  console.log("countries visited north america:", countries_visited_north_america);
  console.log("countries visited south america:", countries_visited_south_america);
  console.log("countries visited australia:", countries_visited_australia);
  console.log("countries visited asia:", countries_visited_asia);
  console.log("countries visited africa:", countries_visited_africa);
});

test_button_2.addEventListener("click", () => {});
