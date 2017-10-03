require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/layers/TileLayer",  // Require the TileLayer module
    "dojo/domReady!"
], function (Map, MapView, FeatureLayer, TileLayer) {
    var Flood_Hazard_wm = new TileLayer({
        url: "http://mycity.houstontx.gov/COHGIS/rest/services/PD/Flood_Hazard_wm/MapServer",
        id: "streets"
    });

    // gage points
    var gage_points = new FeatureLayer({
        url: "https://services7.arcgis.com/QrVrxBSfgo0QKOXM/ArcGIS/rest/services/gage_point/FeatureServer/0",
        id: "gage_points"
    });

    // Code to create the map and view will go here
    var map = new Map({
        basemap: "streets",
        layers: [gage_points]  // layers can be added as an array to the map's constructor
    });

    var view = new MapView({
        container: "viewDiv",  // Reference to the DOM node that will contain the view
        map: map,              // References the map object created in step 3
        center: [-95.383056, 29.762778],
        zoom: 10
    });
});