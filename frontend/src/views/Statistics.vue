<template>
  <v-container fluid fill-width>
    <Title conteudo="Statistics" class="display-1" />
    <template v-for="item in statsheaders" >
      <StatsBar :key="item" :title="item"/>
      <v-spacer :key="item"/>
    </template>
  </v-container>
</template>

<script>
import Title from '@/components/Title.vue'
import StatsBar from '@/components/StatsBar.vue'
export default {
  components:{
    Title,
    StatsBar
  },
  data(){
    return {
      statsheaders:['Name','Address','Something']
    }
  }

}
</script>