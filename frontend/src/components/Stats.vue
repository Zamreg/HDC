<template>
  <div>
    <v-carousel
      v-model="slide"
      :height="height"
      hide-delimiters
      show-arrows-on-hover
      v-if="getColDataType(controller) == 'number' "
      :key="controller"
    >
      <v-carousel-item v-for="n in numbersId" :key="n">
        <NumberCards  :controller="controller" :height="height" :id="n"/>   
      </v-carousel-item>
    </v-carousel>  
    <v-carousel
      v-model="slide"
      :height="height"
      hide-delimiters
      show-arrows-on-hover
      v-if="getColDataType(controller) == 'string' "
      :key="controller"
    >
      <v-carousel-item v-for="n in stringsId" :key="n">
        <StringCards :controller="controller" :height="height" :id="n"/> 
      </v-carousel-item>
    </v-carousel>  
  </div>
<!--  
    <v-card flat outlined :height="height">
      <v-card-text class="text--primary body-1" align="center">{{title}}</v-card-text>
      <v-card-text v-if="this.title=='Battery_level'" class="text--primary body-1" align="center">
          Minimum = -5 <br>
          Average = 57<br>
          Median = 55 <br>
          Maximum = 111
      </v-card-text>
      <v-container id="code" v-if="this.title=='Codename'" >
        <v-row dense >
          <v-col id="codeCol" class="text--primary body-2" align="left">
            Nougat<br>
            MARSHMALLOW<br>
            Marshmallow<br>
            Lollipop<br>
            Kitkat<br>
            Null
            
          </v-col>
          <v-col id="countCol" class="text--primary body-2" align="right">
            18<br>
            10<br>
            5<br>
            3<br>
            1<br>
            1<br>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

-->
</template>

<script>
import { mapGetters } from 'vuex'
import NumberCards from './StatisticCards/Numbers.vue'
import StringCards from './StatisticCards/Strings.vue'
export default {
  props:['height','controller'],
  components:{
    NumberCards,
    StringCards
  },
  data() {
    return{
      numbersId: ['avg'],
      stringsId: ['count'],
      slide: 0
    }
  },
  computed: {
    ...mapGetters(['getColDataType','getNumberOfCols']) //getColDataType(controller)
  }
}
</script>

<style>
#codeCol{
  padding-left: 1.5cm;
}
#countCol{
  padding-right: 1.5cm;
}
#code{
  padding: 0%
}
</style>