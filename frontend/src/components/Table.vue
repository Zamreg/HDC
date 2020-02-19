<template>
  <v-container fluid>
    <HotTable :settings="settings"/>
  </v-container>
</template>

<script>

import { HotTable } from '@handsontable/vue';
export default {
  props: ['settings'],
  components:{
    HotTable
  }
}
</script>