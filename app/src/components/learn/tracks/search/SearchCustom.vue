<template>
  <div>

    <form @submit="performSearch($event);">
      <input type="search" v-model="query" :placeholder="placeholder" />
      <input type="submit" :value="buttonText"/>
    </form>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
		placeholder:{default: 'Ange sökord'},
		query: {},
		cx:{},
		buttonText:{ default:"Sök" }
	},
  methods: {
    performSearch: function(event){
      event.preventDefault();
    	window.open('https://cse.google.com/cse/publicurl?cx=' + this.cx + '&q=' + this.query);
    }
  },
  computed: {
    enginesArray: function () {
      return JSON.parse(this.engines)
    }
  }
}
</script>

<style scoped>

form{
	display: flex;
	width: 100%;
  margin-bottom: 5px;
}

form *:not(:last-child){
	margin-right: 10px;
}

input[type="search"]{
	/*flex: 1 0 0;*/

	border: 1px solid lightgray;

	width: 100%;
	height: 1.75em;
	font-size: 12pt;
	-webkit-appearance: textfield;
	-moz-appearance:    textfield;
	appearance:         textfield;

	padding: 5px;

	-webkit-transition: all 0.25s;
	transition: all 0.25s;
}

input[type="search"]:hover, input[type="search"]:focus{
	background: #fffae8;
	border-color: #ff6600;
	outline: none;
}

input[type="button"],input[type="submit"],button{

	-webkit-appearance: button;
	-moz-appearance:    button;
	appearance:         button;

	background: white;
	border: 1px solid lightgray;

	height: 1.75em;
	font-size: 12pt;

	cursor: pointer;

	-webkit-transition: all 0.25s;
	transition: all 0.25s;

	padding: 5px;
}

input[type="button"]:hover,input[type="submit"]:hover,button:hover, select:hover{
	background: #fffae8;
	border-color: #ff6600;
}

input.wrap{
	width: auto;
	display: inline-block;
}

label{
	cursor: pointer;
}

select{

	background: white;

	border: 1px solid lightgray;

	height: 1.75em;
	font-size: 12pt;

	-webkit-transition: all 0.25s;
	transition: all 0.25s;

	padding: 5px;
}

</style>
