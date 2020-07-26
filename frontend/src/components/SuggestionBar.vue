<template>
  <v-row dense id="statsAndSuggestions">
    <v-col cols=3>
      <Stats :controller="controller" :key="this.$store.state.changeCounter" :height="230"/>
    </v-col>
    <v-col cols=9>
      <hooper :settings="hooperSettings">
        <slide v-if="controller==4">
          <BoundsCard :controller="controller" :height="230"/>
        </slide>
        <slide v-if="controller==3">
          <ReplaceCard :controller="controller" :valuesToReplace="['Marshmallow','MARSHMALLOW']" :height="230"/>
        </slide>~
        <slide v-if="controller==1">
          <ReplaceCard :controller="controller" :valuesToReplace="['\'Huawei\'','\'HUAWEI\'']" :height="230"/>
        </slide>
        <slide v-if="controller==3">
          <NullCard :controller="controller" :height="230"/>
        </slide>
        <slide v-if="this.getColDataType(controller) == 'string'">
          <CaseCard :controller="controller" :height="230"/>
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
      </hooper>
    </v-col>
  </v-row>
</template>


<script>
import { mapGetters } from 'vuex'
import { Hooper, Slide} from 'hooper'
import 'hooper/dist/hooper.css'

import Stats from '@/components/Stats.vue'
import NullCard from '@/components/SuggestionCards/NullCard.vue'
import BoundsCard from '@/components/SuggestionCards/BoundsCard.vue'
import ReplaceCard from '@/components/SuggestionCards/ReplaceSimilarCard.vue'
import CaseCard from '@/components/SuggestionCards/CaseCard.vue'
import SplitCard from '@/components/SuggestionCards/SplitCard.vue'
import FilterNumericCard from '@/components/SuggestionCards/FilterNumericCard.vue'
import FilterTextCard from '@/components/SuggestionCards/FilterTextCard.vue'

export default {
  name:'suggestion-bar',
  props:['headers'],
  components:{
    Stats,
    NullCard,
    ReplaceCard,
    BoundsCard,
    CaseCard,
    SplitCard,
    FilterNumericCard,
    FilterTextCard,
    Hooper,
    Slide,
   
  },
  data: function(){
    return{
      nullRadios: null,
      replaceRadios: null,
      controller: 0,
      hooperSettings: {
        itemsToShow: 3.25
      }
    }
  },
  computed: {
    ...mapGetters(['getColDataType']) //getColDataType(controller)
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
.hooper:focus{ outline:none; }
.hooper-next:focus{ outline: none; }
.hooper-prev:focus{ outline: none; }

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
