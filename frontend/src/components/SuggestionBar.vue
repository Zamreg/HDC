<template>
  <v-row dense id="statsAndSuggestions">
    <v-col cols=3>
      <Stats :controller="controller" :key="this.$store.state.changeCounter" :height="230"/>
    </v-col>
    <v-col v-if="controller==4" cols=3>
      <BoundsCard :controller="controller"/>
    </v-col>
    <v-col v-if="controller==3" cols=3>
      <ReplaceCard :controller="controller" :valuesToReplace="['Marshmallow','MARSHMALLOW']"/>
    </v-col>
    <v-col v-if="controller==3" cols=3>
      <NullCard :controller="controller"/>
    </v-col>
  </v-row>
</template>

<script>
import Stats from '@/components/Stats.vue'
import NullCard from '@/components/SuggestionCards/NullCard.vue'
import BoundsCard from '@/components/SuggestionCards/BoundsCard.vue'
import ReplaceCard from '@/components/SuggestionCards/ReplaceSimilarCard.vue'
export default {
  name:'suggestion-bar',
  props:['headers'],
  components:{
    Stats,
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