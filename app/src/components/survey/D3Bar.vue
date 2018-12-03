<template>
<div>

  <h3>{{label}}</h3>
  <svg class="chart" width="420" height="120"></svg>
  {{valuesArr}} {{options}}

</div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      chart: null,
      svg: null,
      barHeight: 20
    }
  },
  props: {
    label: "",
    labels: "",
    values: "",
    min: {default: 1},
    max: {default: 5},
    filter: ""
  },
  computed: {
    valuesArr: function () {
      return Array.from(new Array(this.max),(val,index)=>index+1);
    }
  },
  methods: {
    init: function () {
      var width = 420,
          barHeight = 20,
          height = 100;

      this.chart = d3.select(".chart")
          .attr("width", width)
          .attr("height", height);

    },
    x: function () {

    },
    update: function (data) {

      //console.log(data);

      //Set local variables, accessible to d3
      var xStart = 20;
      var x = d3.scaleLinear()
          .domain([0, d3.max(data)])
          .range([0, 420 - xStart]);

      var bh = this.barHeight;

      //Join data
      var dataPoint = this.chart
        .selectAll(".gDataPoint")
        .data(data);

      //Updated
      dataPoint.select("rect").transition()
					.attr("width", function(d){ return x(d); })

      dataPoint.select("text").transition()
        .attr("x", function(d) { return x(d) - 3; })
        .text(function(d) { return d; });

      //Entered
      var entered = dataPoint.enter().append("g")
        .attr("transform", function(d, i) { return "translate(" + xStart + "," + i * bh + ")"; })
        .attr("class", "gDataPoint");

      entered.append("rect")
          .attr("width", function (d){ return x(d); })
          .attr("height", bh - 1)
          .attr("class", "bar");

      entered.append("text")
        .attr("x", function(d) { return  + x(d) - 3; })
        .attr("y", bh / 2)
        .attr("dy", ".35em")
        .attr("class", "bartext")
        .text(function(d) { return d; });

      entered.append("g")
        .append("text")
        .attr("x", function(d) { return -10; })
        .attr("y", bh / 2)
        .attr("dy", ".35em")
        .text(function(d,i) { return i + 1; });

      dataPoint.exit().remove();

  	}

  },
  created: function (){
  },
  mounted: function () {
    this.init();
    this.update(this.values);
  },
  watch: {
    values: function () {
      if(this.chart && this.values){
        this.update(this.values);
      }
    }
  }
}
</script>

<style>

svg{
  display: block;
}

.chart rect {
  fill: steelblue;
}

.chart text {
  fill: black;
  font: 12px sans-serif;
}

.chart text.bartext {
  fill: white;
  text-anchor: end;
}

</style>
