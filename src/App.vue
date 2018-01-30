<template>
  <div id="app">

    <header-component class="header"></header-component>

    <router-view class="mainContent"/>

    <mik-footer class="footer"></mik-footer>

  </div>
</template>

<script>

import HeaderComponent from '@/components/Header.vue'
import MikFooter from '@/components/MikFooter.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    MikFooter
  }
}
</script>

<style scoped>

  .header{
    margin-bottom: 30px;
  }

</style>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
@import '/assets/style/form.css';
@import '/assets/style/flex.css';

html{
    background-color: #ffffff;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 13pt;
    line-height: 1.3em;
    height: 100%;
    margin: 0px;
    padding: 0px;

}

body{
  margin: 0px;
  padding: 0px;
  height: 100%;
}

a{
	text-decoration: none;
	color: #ff6600;
	font-weight: 400;
	cursor: pointer;
  padding: 3px 3px 3px 3px;
  margin-right: -6px;
  position: relative;
  left: -3px;
}

a.nodecoration:hover{
	text-decoration: none;
}

a:hover:not(.nohover), a.active{
  background: #ff6600;
  color: white;
  border-radius: 0px;
}

a img:hover {
  background: none !important;
}

a.button, .button a{
  border: 2px solid #ff6600;
  display: inline-block;
  margin: 2px;
  background: #ff6600;
  color: white;
}

a.button:hover, .button a:hover{
  background: white;
  color: #ff6600;
}

a[disabled] {
	text-decoration: none;
	color: gray;
	pointer-events: none;
	cursor: not-allowed !important;
}

#app{
  display: flex;
  flex-direction: column;
  height: 100%;
}

#app .mainContent{
  flex: 1 0 auto;
}

#app .footer{
  margin-top: 100px;
}

.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* horizontal centering */
  width: 100%;
}

.containerInner{
  display: flex;

  max-width: 100%;
  width: 100%;
}

.columnLeft, .columnRight {
  /*flex: 0 1 20%;*/
  flex: 1 1 20%;
  padding: 0px 50px 0px 50px;
  width: 20%;
}

.columnCenter {
  /*flex: 1 0 60%;*/
  flex: 0 1 750px;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0px 20px 0px 20px;
}

.columnRight{
  text-align: right;
}

.middle{
  align-self: center;
}

h1{
	color: #000;
	font-size: 32pt;
	font-weight: 700;
	margin: 1em 0 1em 0;
}

h2{
	color: #555;
	font-size: 24pt;
	font-weight: 300;
	margin: 30px 0 0.75em 0;
}

h3{
	font-size: 14pt;
	font-weight: 500;
	margin: 30px 0 0.5em 0;
	color: #444;
	text-transform: uppercase;
}

h4{
	font-size: 12pt;
	font-weight: 400;
	margin: 1em 0 0.25em 0;
  color: #888;
  text-transform: uppercase;
}

hr{
	height: 0px;
	border: 0px;
	border-top: 1px solid rgba(100,100,100,0.25);
}

.small{
	font-size: smaller;
}

.semibold{
  font-weight: 400;
}

</style>
