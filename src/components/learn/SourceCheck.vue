<template>
  <div>

    <table>
      <tr>
        <td class="middle">
          {{query}}
        </td>
        <td class="left">
          <div v-for="(opt,index) in optsArr">
            <label >
              <input type="radio" :value=index v-model="state" />{{opt}}
            </label>
          </div>
        </td>
        <td :class="classesArr[state]">
          {{message}}
        </td>
      </tr>
    </table>

  </div>
</template>

<script>

export default {
  data () {
    return {
      state: -1
    }
  },
  props: {
    query: {},
    opts: {},
    msgs: {},
    classes: {},
    check: {default: true}
  },
  methods: {
  },
  computed: {
    message: function(){
      if(this.state != -1){
        return this.msgsArr[this.state];
      }
      return ""
    },
    checkOk: function(){
      return this.state == this.check;
    },
    optsArr: function () {
      return JSON.parse(this.opts)
    },
    msgsArr: function () {
      return JSON.parse(this.msgs)
    },
    classesArr: function () {
      return JSON.parse(this.classes)
    },
    class: function () {
      return 0;
    }
  }
}
</script>

<style scoped>

table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

table, th, td {
    border: 1px solid black;
}

table{
  border-width: 2px;
}

td:first-child {
  font-weight: 400;
}


td{
  padding: 10px;
  text-align: left;
}

.yes{
    background: #d0ffd0;
}

.mix{
  background: #ffffd0;
}

.no{
  background: #ffd0d0;
}

.left{
  text-align: left;
}

.middle{
  text-align: center;
}

</style>
