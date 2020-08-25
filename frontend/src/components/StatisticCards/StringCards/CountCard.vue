<template>
  <v-card flat outlined :height="height" id="statsCard">
    <!--apexchart type="bar" :height="this.height" :options="chartOptions" :series="this.series2"></apexchart-->
    <v-card-title class="justify-center">Count</v-card-title>
    <v-container id="code" >
      <v-row dense v-for="item in this.uniqueValues" :key="item.val" >
        <v-col id="codeCol" class="text--primary body-2" align="left">
          <div>
            <p class="line" v-if="item.val != ''">{{ item.val }}</p>
            <p class="line" v-else>Null</p>
          </div>
        </v-col>
        <v-col id="countCol" class="text--primary body-2" align="right">
          <p class="line">{{item.count}}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script>
//import VueApexCharts from 'vue-apexcharts'


export default {
  props:['height','column','series','categories'],
  components: {
  //  apexchart: VueApexCharts,
  },
  data(){
    return {
       
      series2: [{
        data: [400, 430, 448, 470]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 230
        },
        title: {
          text: 'Count',
          align: 'center',
          floating: true
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        xaxis: {
          categories: this.categories
        }
      }
    }
  },
  computed:{
    columnValues: function(){
      return this.$store.state.data.map(x=> x[this.column])
    },
    uniqueValues:function(){
      var uv = this.columnValues.filter( ((v, i, a) => a.indexOf(v) === i) )    
      var matrix = []
      for(var i = 0; i < uv.length; i++){
        if( uv[i] == null || uv[i] == '' ) {
          matrix.push({val: "Null",count: this.columnValues.filter( a => a == '' || a == null ).length})
        }else{
          matrix.push({val: uv[i],count: this.columnValues.filter( a => a == uv[i]).length})
        }
      }
      return matrix.sort( (a,b) => (a.count > b.count) ? -1: 1)//.slice(0,6)
    },
    orderedValues: function(){
      return this.uniqueValues.map( a => a.val )
    }
  },
  
}
</script>

<style>
p.line {
  line-height: 0.7;
  font-size: 90%;
}
</style>