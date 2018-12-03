<template>
  <div>

    <div>
      <button @click="getLocation()">Hämta mina koordinater</button>
      {{message}}
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Klicka på knappen för att hämta koordinater.'
    }
  },
  methods: {
    getLocation: function(){
			if (navigator.geolocation) {
				this.message = "Hämtar koordinater";
		        navigator.geolocation.getCurrentPosition(this.setLocation);
		    }
		    else{
			    this.message = "Din enhet stödjer inte denna funktion.";
		    }	
		},
		setLocation: function(position) {
		    this.message = "[" + position.coords.latitude + ", " + position.coords.longitude + "]";
		}
  }
}
</script>

<style scoped>
</style>
