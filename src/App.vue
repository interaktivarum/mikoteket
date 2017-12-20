<template>
  <div id="app">

    <header-component class="header"></header-component>

    <router-view/>

  </div>
</template>

<script>

import HeaderComponent from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent
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

html{
    background-color: #ffffff;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 13pt;
    line-height: 1.3em;
}

body{
	padding: 0px 0px 50px 0px;
	margin: 0px;
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

a:hover, a.active{
  background: #ff6600;
  color: white;

  border-radius: 0px;
}

a[disabled] {
	text-decoration: none;
	color: gray;
	pointer-events: none;
	cursor: not-allowed !important;
}

.container{
  display: flex;
  justify-content: center; /* horizontal centering */
  width: 100%;
}

.containerInner{
  display: flex;
  max-width: 100%;
  width: 100%;
}

.columnLeft, .columnRight {
  flex: 0 1 20%;
  padding: 0px 50px 0px 50px;
  width: 20%;
}

.columnLeft.smallPadding{
  padding: 0px 80px 0px 20px;
}

.columnRight.smallPadding{
  padding: 0px 20px 0px 80px;
}

.columnCenter {
  flex: 1 0 60%;
  text-align: justify;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
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
	margin: 0px 0 0.75em 0;
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
	font-weight: 500;
	margin: 1em 0 0.25em 0;
}

hr{
	height: 0px;
	border: 0px;
	border-top: 1px solid rgba(100,100,100,0.25);
}

.small{
	font-size: smaller;
}

</style>
