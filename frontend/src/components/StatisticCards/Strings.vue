<template>
  <v-theme-provider root>
    <CountCard  v-if="id == 'count'" :height="height" :column="controller"/>
    <StrLenCard v-if="id == 'avgLen'" :height="height" :column="controller"/>
  </v-theme-provider>
</template> 

<script>
import StrLenCard from './StringCards/StrLenCard.vue'
import CountCard from './StringCards/CountCard.vue'
export default {
  props:['controller', 'height','id'],
  components:{
    StrLenCard,
    CountCard
  }
}
</script>