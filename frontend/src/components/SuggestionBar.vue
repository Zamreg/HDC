<template>
  <v-row dense id="statsAndSuggestions">
    <v-col cols=3>
      <Stats :controller="controller" :key="this.$store.state.changeCounter" :height="230"/>
    </v-col>
    <v-col cols=9>
      <hooper :settings="hooperSettings" :key="controller">

        <!--slide v-if="controller==3">
          <ReplaceCard :controller="controller" :valuesToReplace="['Marshmallow','MARSHMALLOW']" :height="230"/>
        </slide>
        <slide v-if="controller==1">
          <ReplaceCard :controller="controller" :valuesToReplace="['\'Huawei\'','\'HUAWEI\'']" :height="230"/>
        </slide-->
        <slide v-if="this.getColDataType(controller) == 'number'">
          <BoundsCard :controller="controller" :height="230"/>
        </slide>
        <slide v-if="includesNull">
          <NullCard :controller="controller" :height="230"/>
        </slide>
        <slide v-if="this.getColDataType(controller) == 'string'">
          <FindReplace :controller="controller" :height="230"/>
        </slide>
        <slide v-if="this.getColDataType(controller) == 'string'">
          <SplitCard :controller="controller" :height="230"/>
        </slide>
        <slide v-if="this.getColDataType(controller) == 'number'">
          <FilterNumericCard :controller="controller" :height="230"/>
        </slide>
        <slide v-if="this.getColDataType(controller) == 'string'">
          <FilterTextCard :controller="controller" :height="230"/>
        </slide>
        <slide v-if="this.getColDataType(controller) == 'string'">
          <CaseCard :controller="controller" :height="230"/>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </v-col>
  </v-row>
</template>


<script>
import { mapGetters } from 'vuex'
import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper'
import 'hooper/dist/hooper.css'

import Stats from '@/components/Stats.vue'
import _ from 'lodash'
import CaseCard from '@/components/SuggestionCards/CaseCard.vue'
import SplitCard from '@/components/SuggestionCards/SplitCard.vue'
import FilterNumericCard from '@/components/SuggestionCards/FilterNumericCard.vue'
import FilterTextCard from '@/components/SuggestionCards/FilterTextCard.vue'

import NullCard from '@/components/SuggestionCards/NullCard.vue'
import FindReplace from '@/components/SuggestionCards/FindReplace.vue'
import BoundsCard from '@/components/SuggestionCards/BoundsCard.vue'
/*import ReplaceCard from '@/components/SuggestionCards/ReplaceSimilarCard.vue'
*/
export default {
  name:'suggestion-bar',
  props:['headers'],
  components:{
    Stats,
    CaseCard,
    SplitCard,
    FilterNumericCard,
    FilterTextCard,
    Hooper,
    Slide,
    HooperNavigation,
    NullCard,
    FindReplace,
    BoundsCard,
    /*ReplaceCard,
    */
  },
  data: function(){
    return{
      nullRadios: null,
      replaceRadios: null,
      controller: 0,
      hooperSettings: {
        itemsToShow: 3.25,
        mouseDrag: false,
        keysControl: false
      }
    }
  },
  computed: {
    ...mapGetters(['getColDataType','getNullControllers']), //getColDataType(controller)
    uniqueValues:function(){
      var columnValues = this.$store.state.data.map(x=> x[this.controller])
      var uv = columnValues.filter( ((v, i, a) => a.indexOf(v) === i) )    
      var matrix = []
      for(var i = 0; i < uv.length; i++){
        if( uv[i] == null || uv[i] == '' ) {
          matrix.push({val: "Null",count: columnValues.filter( a => a == '' || a == null ).length})
        }else{
          matrix.push({val: uv[i],count: columnValues.filter( a => a == uv[i]).length})
        }
      }
      return matrix.sort( (a,b) => (a.count > b.count) ? -1: 1)//.slice(0,6)
    },
    includesNull:function(){
      var res = _.findIndex(this.uniqueValues, { val: "Null" })
      if(res == -1) return false
      return true
    }
  },
  methods:{
    clearReplaceRadios: function(){
      this.replaceRadios = null;
    },
    clearNullRadios: function(){
      this.nullRadios = null;
    },
    updateModel: function(col){
      this.controller=col
    }
  }
}
</script>

<style>

.hooper{
  height: 230px;
}
.hooper-track{
  position: relative;
  right: 24px;
}
.hooper-indicator {
  background-color: gray;
}
.hooper-next, .hooper-prev {
  padding: 0.3cm;
}
.hooper:focus{ outline:none; }

.hooper-next:focus{ 
  outline: none;
}
.hooper-prev:focus{ 
  outline: none; 
}

#card{
  overflow-y: auto;
}
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
