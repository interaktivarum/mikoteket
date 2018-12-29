<template>
<div>

  <div id="map-container" ref="map($event)">
  </div>

  <div id="map-popup" ref="popup">
    <div id="pop-name"></div>
    <div id="pop-organizer"></div>
    <div id="pop-date"></div>
    <div id="pop-type"></div>
  </div>

</div>
</template>

<script>

import Workshops from './workshops.json'

//OpenLayers
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import Overlay from 'ol/Overlay.js';
import {Tile as TileLayer, Vector as VectorLayer, Layer as Layer} from 'ol/layer';
import Feature from 'ol/Feature.js';
import XYZ from 'ol/source/XYZ';
import Point from 'ol/geom/Point.js';
import VectorSource from 'ol/source/Vector.js';
import {Icon, Style} from 'ol/style.js';
import {fromLonLat} from 'ol/proj';

export default {
  components: {
  },
  data () {
    return {
      workshops: Workshops.workshops,
      map: ""
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
    initMap: function () {
      this.map = new Map({
        target: 'map-container',
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
            })
          })
        ],
        view: new View({
          center: fromLonLat([15.035279,59]),
          zoom: 5
        })
      });

    },
    addMarkers: function (items,icon) {

      let features = [];

      for(var i = 0; i < items.length; i++){
        let w = items[i];
        features.push(new Feature({
          geometry: new Point(fromLonLat([w.latlon[1],w.latlon[0]])),
          name: w.name,
          loc: w.location,
          date: w.date,
          url: w.url,
          type: w.type,
          organizer: w.organizer
        }));
      }

      //Set style for all items
      var iconStyle = new Style({
        image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
          anchor: [0.5, 0.5],
          src: icon
        }))
      });
      for(var i = 0; i < features.length; i++){
        features[i].setStyle(iconStyle);
      }

      var vectorSource = new VectorSource({
        features: features
      });

      var vectorLayer = new VectorLayer({
        source: vectorSource
      });

      this.map.addLayer(vectorLayer);

    },
    addPopup: function () {
      var elpopup = document.getElementById('map-popup');

      var popup = new Overlay({
        element: elpopup,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, 0]
      });
      this.map.addOverlay(popup);

      // display popup on click
      this.map.on('pointermove', function(e) {
        var feature = e.target.forEachFeatureAtPixel(e.pixel,
          function(feature) {
            return feature;
          });
        if (feature) {
          var coordinates = feature.getGeometry().getCoordinates();
          popup.setPosition(coordinates);
          /*if(feature.get("url")){
            document.getElementById("pop-name").innerHTML = "<a href='" + feature.get('url') + "' target='_blank'>" + feature.get('name'); + "</a>";
          }
          else{
            document.getElementById("pop-name").innerHTML = feature.get('name');
          }*/
          document.getElementById("pop-name").innerHTML = feature.get('name');
          //document.getElementById("pop-loc").innerHTML = feature.get('loc');
          document.getElementById("pop-date").innerHTML = feature.get('date');
          document.getElementById("pop-type").innerHTML = feature.get('type');
          document.getElementById("pop-organizer").innerHTML = feature.get('organizer');
        } else {
          popup.setPosition(undefined);
        }
      });
    }
  },
  ready: function () {

  },
  mounted: function () {
    this.initMap();
    this.addMarkers(this.workshops.filter(w => new Date(w.date) < Date.now()),"/static/graphics/dot2.png");
    this.addMarkers(this.workshops.filter(w => new Date(w.date) >= Date.now()),"/static/graphics/dot.png");
    this.addPopup();
  }
}
</script>

<style>
#map-container{
  width: 100%;
  height: 100%;
}

#map-popup {
  position: absolute;
  background-color: white;
  -webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
  filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
  padding: 15px;
  border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
  font-size: smaller;
  width: auto;
  white-space: nowrap;
}

#pop-name{
  margin-bottom: 5px;
}

#pop-organizer{
  font-weight: 400;
}

#pop-type{
  white-space: nowrap;
  color: gray;
  margin-top: 5px;
}

</style>
