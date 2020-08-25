<template>
  <v-card flat outlined :height="height" id="statsCard">
    <v-card-title class="justify-center">Averages</v-card-title>
    <v-card-text class="text--primary body-2" align="center">
        <p class="line">Minimum = {{this.minimum}}</p>
        <p class="line">Maximum = {{this.maximum}}</p>
        <p class="line">Average = {{this.average}}</p>
        <p class="line">Median = {{this.median}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import _ from 'lodash'
export default {
  props:['height','column'],
  computed:{
    columnValues: function(){
      return this.$store.state.data.map(x=> x[this.column]).sort((a,b) => a-b);
    },
    minimum: function(){
      return Math.min(...this.columnValues.filter( (a)=> !isNaN(a) && a != null && a != '' ) )
    },
    maximum: function(){
      return Math.max(...this.columnValues.filter( (a)=> !isNaN(a) && a != null && a != '' ) )
    },
    average: function(){
      var avg = 0
      var sum = this.columnValues.filter( a=> !isNaN(a) ).reduce( (a,b)=>{
          if(b != null && b != '') return a+Number(b)
          else return a
        },0 ) 
      if(isNaN(sum)) console.log(sum)
      else avg = (sum/this.columnValues.length).toFixed(2)
      return avg
    },
    colNoNull: function(){
      return _.filter(this.columnValues, function(ele){
        if(ele != null && ele != '' && !isNaN(ele)) return true
        else return false
      }).sort((a,b) => a-b)
    },
    median: function(){
      var med = 0
      var numsLen= this.colNoNull.length
      if ( (numsLen % 2) == 0 ) {
          var a = Number(this.colNoNull[(numsLen / 2) - 1])
          var b = Number(this.colNoNull[numsLen / 2])
          med = ( (a+b) / 2).toFixed(3);
      } else { 
          med = this.colNoNull[(numsLen - 1) / 2];
      }
      return med
    }
  }
}
</script>