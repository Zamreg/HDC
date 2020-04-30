<template>
  <v-card flat outlined :height="height">
    <v-card-title class="justify-center">Count</v-card-title>
    <v-container id="code" >
      <v-row dense >
        <v-col id="codeCol" class="text--primary body-2" align="left">
          <p class="line" v-for="item in this.uniqueValues" :key="item.val">{{
            item.val
            }}
          </p>
        </v-col>
        <v-col id="countCol" class="text--primary body-2" align="right">
          <p class="line" v-for="item in this.uniqueValues" :key="item.val">{{item.count}}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props:['height','column'],
  computed:{
    columnValues: function(){
      return this.$store.state.data.map(x=> x[this.column])
    },
    uniqueValues:function(){
      var uv = this.columnValues.filter( ((v, i, a) => a.indexOf(v) === i) )
      var matrix = []
      for(var i = 0; i < uv.length; i++){
        if(uv[i] == null) {
          matrix.push({val: "Null",count: this.columnValues.filter( a => a == uv[i]).length})
        }else{
          matrix.push({val: uv[i],count: this.columnValues.filter( a => a == uv[i]).length})
        }
      }
      return matrix.sort( (a,b) => (a.count > b.count) ? -1: 1).slice(0,6)
    }
  }
}
</script>

<style>
p.line {
  line-height: 0.7;
}
</style>