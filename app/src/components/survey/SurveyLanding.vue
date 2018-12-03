<template>
<div>

  <cover-image header="Kunskap och självskattning"></cover-image>

  <div class="container">

    <div class="containerInner">

      <div class="columnLeft">

      </div>

      <div class="columnCenter">

        <div id="d3test">

        </div>
        47fa5d3a386432245881686534c68b04603eda7e
        <br />
        aaf63046ac49f54abaab4ad88814e881f427356e
        <br />
        <input type="text" v-model="idWorkshop" />
        <button @click="updateFilter()">Uppdatera</button>

        <br />

        <d3-bar :label="getColumnLabel(8)" :values="barTest"></d3-bar>

      </div>

      <div class="columnRight">
      </div>

      <slot></slot>

    </div>

  </div>

</div>
</template>

<script>

import CoverImage from '../CoverImage.vue'
import D3Bar from './D3Bar.vue'

export default {
  components: {
    CoverImage,
    D3Bar
  },
  data () {
    return {
      surveyData: {raw:{}, values:[]},
      idWorkshop: "",
      filtered: []
    }
  },
  props: {
  },
  computed: {
    barTest: function () {
      return [this.filtered.filter(r => r[8] == 1).length, this.filtered.filter(r => r[8] == 2).length, this.filtered.filter(r => r[8] == 3).length, this.filtered.filter(r => r[8] == 4).length, this.filtered.filter(r => r[8] == 5).length];
    }
  },
  methods: {
    updateFilter: function () {
      if(this.idWorkshop == ""){
        this.filtered = this.surveyData.values;
      }
      else{
        this.filtered = this.surveyData.values.filter(r => r[3] == this.idWorkshop);
      }
    },
    getColumnValues: function () {

    },
    initGoogle: function () {
      google.load("visualization", "1");
      google.setOnLoadCallback(this.initCallback);
    },
    initCallback: function () {
  		var query = new google.visualization.Query("https://docs.google.com/spreadsheet/ccc?key=1x01hBPlVUTFbLOUEPRdcwvY8x4mJzicWWvZ0e0jsAEM"); //https://docs.google.com/spreadsheets/d/1x01hBPlVUTFbLOUEPRdcwvY8x4mJzicWWvZ0e0jsAEM/edit?usp=sharing
  		query.setQuery("select *");
  		query.send(this.handleQueryResponse);
  	},
  	handleQueryResponse: function (response) {

  		var data = response.getDataTable();
      this.surveyData.raw = data;

  		var DataArray = new Array(data.getNumberOfRows());
  		for (var row = 0; row < data.getNumberOfRows(); row++) {
  			 DataArray[row] = new Array(data.getNumberOfColumns());
  			for (var col = 0, n = data.getNumberOfColumns(); col < n; col++) {
  				if(col > 0){
  					DataArray[row][col] = data.getFormattedValue(row, col);
  				}else{
  					DataArray[row][col] = data.getFormattedValue(row, col);
  				}
  			}
  		}

      this.surveyData.values = DataArray;
      this.updateFilter();

  	},
    randomize: function () {
      this.$set(this.surveyData.values,3,Math.ceil(Math.random()*10));
    },
    getColumnLabel: function (id) {
      return this.surveyData.raw.getColumnLabel(id);
    }

  },
  created: function (){
  },
  mounted: function () {
    this.initGoogle();
  }
}
</script>

<style>

.chart rect {
  fill: steelblue;
}

.chart text {
  fill: white;
  font: 10px sans-serif;
  text-anchor: end;
}

</style>
