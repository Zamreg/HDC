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
export default {
  props:['height','column'],
  computed:{
    columnValues: function(){
      return this.$store.state.data.map(x=> x[this.column]).sort();
    },
    minimum: function(){
      return Math.min(...this.columnValues.filter( (a)=> !isNaN(a) ) )
    },
    maximum: function(){
      return Math.max(...this.columnValues.filter( (a)=> !isNaN(a) ) )
    },
    average: function(){
      var avg = 0
      var sum = this.columnValues.filter( a=> !isNaN(a) ).reduce( (a,b)=>a+Number(b),0 ) 
      if(isNaN(sum)) console.log(sum)
      else avg = (sum/this.columnValues.length).toFixed(2)
      return avg
    },
    median: function(){
      var med = 0
      var numsLen= this.columnValues.length
      if ( (numsLen % 2) == 0 ) {
          var a = Number(this.columnValues[(numsLen / 2) - 1])
          var b = Number(this.columnValues[numsLen / 2])
          med = ( (a+b) / 2).toFixed(3);
      } else { 
          med = this.columnValues[(numsLen - 1) / 2];
      }
      return med
    }
  }
}
</script>