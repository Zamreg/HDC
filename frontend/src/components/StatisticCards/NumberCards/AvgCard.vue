<template>
  <v-card flat outlined :height="height">
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
      return Math.min(...this.columnValues)
    },
    maximum: function(){
      return Math.max(...this.columnValues)
    },
    average: function(){
      return (this.columnValues.reduce((a,b) => a + b, 0) / this.columnValues.length).toFixed(2)
    },
    median: function(){
      var med = 0
      var numsLen= this.columnValues.length
      if (numsLen % 2 === 0 ) {
          med = (this.columnValues[numsLen / 2 - 1] + this.columnValues[numsLen / 2]) / 2;
      } else { 
          med = this.columnValues[(numsLen - 1) / 2];
      }
      return med
    }
  }
}
</script>