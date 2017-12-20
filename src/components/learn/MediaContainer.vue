<template>
  <div>

    <slot></slot>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mediaContainer{
	/*font-family: "Times new roman";*/
	display: flex;
	align-items: center;
	justify-content: center;

	color: #333;
	font-size: smaller;
	margin: 30px 0px 30px 0px;
}

.mediaContainer div{
	max-width: 560px;
}

.mediaContainer img{
	max-width: 100%;
	max-height: 480px;
}

.mediaContainer .caption{
	margin: 5px 0px 5px 0px;
	line-height: 1.2em;
}

</style>
