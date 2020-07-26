<template>
  <v-theme-provider root>
    <CountCard  v-if="id == 'count'" :height="height" :column="controller" :series="this.series" :categories="this.orderedValues"/>
    <StrLenCard v-if="id == 'avgLen'" :height="height" :column="controller"/>
  </v-theme-provider>
</template> 

<script>
import StrLenCard from './StringCards/StrLenCard.vue'
import CountCard from './StringCards/CountCard.vue'
export default {
  props:['controller', 'height','id'],
  components:{
    StrLenCard,
    CountCard
  },
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
    },
    orderedValues: function(){
      //console.log("values:"+this.uniqueValues.map( a => a.val ))
      
      return this.uniqueValues.map( a => a.val )
    },
    series: function(){
      var series = [{
        data: null
      }]
      series.data = this.uniqueValues.map( a => a.count )
      //console.log(series)
      return series
    }
  }
}
</script>