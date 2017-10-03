require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/TileLayer",  // Require the TileLayer module
    "dojo/domReady!"
], function (Map, MapView, TileLayer) {
    var transportationLyr = new TileLayer({
        // url: "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer",
        url: "http://mycity.houstontx.gov/COHGIS/rest/services/PD/Flood_Hazard_wm/MapServer",
        id: "streets"
    });

    // Code to create the map and view will go here
    var map = new Map({
        basemap: "streets",
        layers: [transportationLyr]  // layers can be added as an array to the map's constructor
    });

    var view = new MapView({
        container: "viewDiv",  // Reference to the DOM node that will contain the view
        map: map               // References the map object created in step 3
    });
});