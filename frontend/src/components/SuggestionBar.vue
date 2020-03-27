<template>
  <v-row dense id="statsAndSuggestions">
    <v-col cols=3>
      <v-carousel
        v-model="controller"
        height="230"
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item v-for="item in headers" :key="item" >
          <StatsCard :title="item" height="230"/>
        </v-carousel-item>
      </v-carousel>  
    </v-col>
    <v-col v-if="controller==4" cols=3>
      <BoundsCard :controller="controller"/>
    </v-col>
    <v-col v-if="controller==3" cols=3>
      <ReplaceCard :controller="controller"/>
    </v-col>
    <v-col v-if="controller==3" cols=3>
      <NullCard :controller="controller"/>
    </v-col>
  </v-row>
</template>

<script>
import StatsCard from '@/components/StatsCard.vue'
import NullCard from '@/components/SuggestionCards/NullCard.vue'
import BoundsCard from '@/components/SuggestionCards/BoundsCard.vue'
import ReplaceCard from '@/components/SuggestionCards/ReplaceSimilarCard.vue'
export default {
  name:'suggestion-bar',
  props:['headers'],
  components:{
    StatsCard,
    NullCard,
    ReplaceCard,
    BoundsCard
  },
  data: function(){
    return{
      nullRadios: null,
      replaceRadios: null,
      controller: 0
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
#card{
  overflow-y: auto;
}
</style>