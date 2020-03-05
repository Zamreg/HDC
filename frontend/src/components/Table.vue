<template>
  <v-container fluid fill-height >
    <HotTable id="table" ref="hotTableComponent" :settings="settings"/>
  </v-container>
</template>

<script>

import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';
export default {
  props: ['settings'],
  components:{
    HotTable
  },
  methods:{
    getSelectedData: function(){
      var ht= new Handsontable(document.getElementById("table"),this.settings)
      return ht.getSelected()
    }
  }
}
</script>