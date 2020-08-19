<template>
  <div>
    <hooper v-if="getColDataType(controller) == 'number' "  :key="controller" :settings="hooperSettings">
      <slide v-for="n in numbersId" :key="n" class="statslide">
        <NumberCards  :controller="controller" :height="height" :id="n"/>   
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    <hooper v-if="getColDataType(controller) == 'string' "  :key="controller" :settings="hooperSettings">
      <slide v-for="n in stringsId" :key="n" class="statslide">
        <StringCards :controller="controller" :height="height" :id="n"/> 
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    <!--v-carousel
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
    </v-carousel-->  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Hooper, Slide,Pagination as HooperPagination,Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

import NumberCards from './StatisticCards/Numbers.vue'
import StringCards from './StatisticCards/Strings.vue'
export default {
  props:['height','controller'],
  components:{
    NumberCards,
    StringCards,
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return{
      numbersId: ['avg','count'],
      stringsId: ['count'],
      slide: 0,
      hooperSettings: {
        itemsToShow: 1,
        mouseDrag: false,
        keysControl: false
      }
    }
  },
  computed: {
    ...mapGetters(['getColDataType','getNumberOfCols']) //getColDataType(controller)
  }
}
</script>

<style>
#statsCard{
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>