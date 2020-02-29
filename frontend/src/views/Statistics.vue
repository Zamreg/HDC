<template>
  <v-container fluid>
    <Title conteudo="Statistics" class="display-1" />
    <!--template v-for="item in statsheaders"-->
      <StatsBar :key="item" title="Statsheaders"/>
    <!--/template-->
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
  props: ['statsheaders'],

}
</script>