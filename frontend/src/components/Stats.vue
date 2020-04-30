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