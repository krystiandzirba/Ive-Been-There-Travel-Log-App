const { L } = window;

export default {
  tilemaps: {
    mapTileLayer_A: L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        edgeBufferTiles: 1,
        minZoom: 2,
        maxZoom: 12,
        attribution:
          "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      }
    ),
    mapTileLayer_B: L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
      edgeBufferTiles: 1,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      minZoom: 2,
      maxZoom: 12,
    }),
    mapTileLayer_C: L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
      edgeBufferTiles: 1,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      minZoom: 2,
      maxZoom: 12,
    }),
    mapTileLayer_D: L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
      {
        edgeBufferTiles: 1,
        attribution:
          "Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC",
        minZoom: 2,
        maxZoom: 12,
      }
    ),
  },

  marker_icons: {
    home_icon: L.icon({
      iconUrl: "assets/images/home_icon.png",
      iconSize: [35, 35],
      iconAnchor: [20, 20],
    }),
    car_icon: L.icon({
      iconUrl: "assets/images/car_icon.png",
      iconSize: [35, 35],
      iconAnchor: [20, 20],
    }),
    plane_icon: L.icon({
      iconUrl: "assets/images/plane_icon.png",
      iconSize: [35, 35],
      iconAnchor: [20, 20],
    }),
    boat_icon: L.icon({
      iconUrl: "assets/images/boat_icon.png",
      iconSize: [35, 35],
      iconAnchor: [20, 20],
    }),
    walk_icon: L.icon({
      iconUrl: "assets/images/walk_icon.png",
      iconSize: [35, 35],
      iconAnchor: [20, 20],
    }),
    bicycle_icon: L.icon({
      iconUrl: "assets/images/bicycle_icon.png",
      iconSize: [35, 35],
      iconAnchor: [20, 20],
    }),
    motorcycle_icon: L.icon({
      iconUrl: "assets/images/motorcycle_icon.png",
      iconSize: [35, 35],
      iconAnchor: [20, 20],
    }),
    train_icon: L.icon({
      iconUrl: "assets/images/train_icon.png",
      iconSize: [35, 35],
      iconAnchor: [20, 20],
    }),
    bus_icon: L.icon({
      iconUrl: "assets/images/bus_icon.png",
      iconSize: [35, 35],
      iconAnchor: [20, 20],
    }),
  },

  addons: {
    labelsAddon: L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}", {
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: "abcd",
      minZoom: 3,
      maxZoom: 20,
      ext: "png",
    }),
    bordersAddon: L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}", {
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: "abcd",
      minZoom: 3,
      maxZoom: 20,
      ext: "png",
    }),
    trainsAddon: L.tileLayer("https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png", {
      minZoom: 3,
      maxZoom: 19,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }),
    cyclingAddon: L.tileLayer("https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png", {
      minZoom: 3,
      maxZoom: 18,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }),
  },
};
