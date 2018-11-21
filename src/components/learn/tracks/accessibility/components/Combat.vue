<template>
  <div id="Combat">

    <div class="battlefield">
      <div class="orcs">
        <h3>Orcer</h3>
        <label>
          Antal: <input type="number" v-model="orcs.amount" min="0" max="9" size="1" />
        </label>
        <label>
          Styrka: <input type="number" v-model="orcs.strength" min="0" max="9" size="1" />
        </label>

        <div class="imgs">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Orc.svg/974px-Orc.svg.png" v-for="n in parseInt(orcs.amount)"/>
        </div>
      </div>
      <div class="elfs">
        <h3>Alver</h3>
        <label>
          Antal: <input type="number" v-model="elfs.amount" min="0" max="9" size="1" />
        </label>
        <label>
          Styrka: <input type="number" v-model="elfs.strength" min="0" max="9" size="1" />
        </label>
        <div class="imgs">
          <img src="https://lh5.ggpht.com/-oVE6m_Eojykovy392uvDanRizBImtRbQhR8IOUTdPa72Rp0KCBafxQnxxVV8N2YpdkO39HmxqE28mqiPMFtCz4m8w=s0" v-for="n in parseInt(elfs.amount)"/>
        </div>
      </div>
    </div>

    <h3>Vem vinner?</h3>
    {{orcs.amount}} * {{orcs.strength}} - {{elfs.amount}} * {{elfs.strength}} = {{orcs.amount*orcs.strength-elfs.amount*elfs.strength}}

  </div>
</template>

<script>
export default {
  name: 'Combat',
  data () {
    return {
      orcs: {
        amount: 2,
        strength: 4
      },
      elfs: {
        amount: 3,
        strength: 3
      }
    }
  },
  props: {
	},
  computed: {
  },
  methods: {
  },

}
</script>

<style scoped>

#Combat{
  text-align: center;
}

.battlefield{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.battlefield div{
  flex: 1;
}

.orcs img{
  transform: scaleX(-1);
}

.imgs{
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

img{
  margin: 0;
  padding: 0;
  display: inline;
  width: 30%;
}

label{
  margin-right: 5px;
}

</style>
