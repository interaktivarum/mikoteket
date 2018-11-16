<template>
  <div>

    <slot></slot>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.infoFields{
	margin: 30px 0px 30px 0px;
	text-align: left;
	font-size: 1em;
  color: rgb(30,30,30);
}

.infoFields a {
  color: #ff6600;
}

.infoFields a:hover {
  color: white;
}

.infoFields > div {
	border-left: 5px solid black;
	padding: 10px;
	margin-bottom: 10px;
}

.infoFields > div >>> img{
	max-width: 50%;
	max-height: 200px;
}

.hBox{
	font-size: smaller;
	font-weight: bold;
	margin-bottom: 10px;
  text-transform: uppercase;
}

.hBox:not(:first-child){
	margin-top: 20px;
}

/* Excercise */

.infoFields > .excercise{
  border-color: #0088c2;
  background: #e8f5fd;
}

.infoFields > .excercise .hBox{
	color: #0088c2;
}

/* Summary */

.infoFields > .summary{
  border-color: #14c200;
  background: #e8fff2;
}

.infoFields > .summary .hBox{
	color: #14c200;
}

/* More */

.infoFields > .more{
  border-color: #ff6600;
	background: #fffae8;
}

.infoFields > .more .hBox{
	color: #ff6600;
}

.form{
	font-size: small;
	display: flex;
}

</style>
