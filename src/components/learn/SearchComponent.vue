<template>
  <div>

    <form @submit="performSearch($event);">
      <input type="search" v-model="query" :placeholder="placeholder" />
      <input type="hidden" :value="type"/>
      <input type="hidden" :value="search"/>

      <select v-model="selectedEngine">

        <option v-for="engine in enginesArray">{{engine}}</option>
        <option value="-" disabled>――――</option>
        <option value="all">Samtliga</option>
      </select>
      <input type="submit" :value="buttonText"/>
    </form>

  </div>
</template>

<script>
export default {
  name: 'DoSearch',
  data () {
    return {
      selectedEngine: ""
    }
  },
  props: {
		placeholder:{default: 'Ange sökord'},
		query: {},
		type:{},
		engines:{ default: '["Google","DuckDuckGo","Bing"]' },
		buttonText:{ default:"Sök" },
		search:{default: 'text'}
	},
  methods: {

    useEngine: function(engine){
      return this.selectedEngine == engine || (this.selectedEngine == "all" && this.hasOption(engine));
		},
    offerEngine: function(engine){
			return this.enginesArray.indexOf(engine) != -1;
		},
    hasOption: function(engine){
    	return this.enginesArray.indexOf(engine) != -1;
    },
    performSearch: function(event){

      event.preventDefault();

      //alert(this.selectedEngine);

    	var flag = "";//flag === undefined ? "" : flag;

    	if(this.useEngine('Google')){

    		if(this.search == "text"){

    			if(this.type == "image"){
    				flag = '&tbm=isch';
    			}
          if(this.type == "imagefree"){
    				flag = '&tbm=isch&tbs=sur:fmc';
    			}
    			else if(this.type == "video"){
    				flag = '&tbm=vid';
    			}
    			else if(this.type == "news"){
    				flag = '&tbm=nws';
    			}
    			else if(this.type == "books"){
    				flag = '&tbm=bks';
    			}
    			else if(this.type == "shopping"){
    				flag = '&tbm=shop';
    			}

    			window.open("https://www.google.com/search?q=" + this.query + flag);

    		}
    		else if(this.search == "image"){
    			window.open("https://www.google.se/searchbyimage?site=search&image_url=" + this.query);
    		}

    	}

    	if(this.useEngine('DuckDuckGo')){

    		if(this.search == "text"){

    			if(this.type == "image"){
    				flag = '&iax=images&ia=images';
    			}
    			else if(this.type == "video"){
    				flag = '&iax=videos&ia=videos';
    			}
    			else if(this.type == "news"){
    				flag = '&ia=news&iar=news';
    			}

    			window.open("https://www.duckduckgo.com/?q=" + this.query + flag);

        }
    	}

    	if(this.useEngine('Bing')){

    		if(this.search == "text"){

    			var route = "";

    			if(this.type == "image"){
    				route = 'images/';
    			}
    			else if(this.type == "video"){
    				route = 'videos/';
    			}
    			else if(this.type == "news"){
    				route = 'news/';
    			}

    			window.open("https://www.bing.com/" + route + "search?q=" + this.query);

    		}
    		else if(this.search == "image"){
    			window.open("https://www.bing.com/images/search?q=imgurl:" + encodeURIComponent(this.query) + "&view=detailv2&iss=sbi");
    		}
    	}

      //FLASHBACK
      if(this.useEngine('Flashback')){
        if(this.search == "text"){
          window.open("https://www.flashback.org/sok/" + this.query);
        }
      }

      //REDDIT
      if(this.useEngine('Reddit')){
        if(this.search == "text"){
          window.open("https://www.reddit.com/search?q=" + this.query);
        }
      }

      //FAMILJELIV
      if(this.useEngine('Familjeliv')){
        if(this.search == "text"){
          window.open("https://www.familjeliv.se/search?q=" + this.query);
        }
      }

    }
  },
  computed: {
    enginesArray: function () {
      return JSON.parse(this.engines)
    }
  },
  created: function(){
    this.selectedEngine = this.enginesArray[0]
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
