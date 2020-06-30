<template>
  <v-theme-provider root> 
    <CountCard  v-if="id == 'count'" :height="height" :column="controller"/>
    <AvgCard v-if="id == 'avg'" :height="height" :column="controller"/>
  </v-theme-provider>
</template> 

<script>
import AvgCard from './NumberCards/AvgCard.vue'
import CountCard from './NumberCards/CountCard.vue'
export default {
  props:['controller', 'height','id'],
  components:{
    AvgCard,
    CountCard
  }
}
</script>