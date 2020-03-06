<template>
  <v-container fluid fill-height >
    <hot-table id="table" ref="hotTableComponent" :settings="settings"/>
    <v-btn
      color="black"
      text
      v-on:click="getSelectedColHeader()"
    >
      Get Selected Data
    </v-btn>
  </v-container>
</template>

<script>

import { HotTable } from '@handsontable/vue';
import 'handsontable'
export default {
  props: ['settings'],
  components:{
    HotTable
  },
  methods:{
    getSelectedColHeader: function(){
      var arr = this.$refs.hotTableComponent.hotInstance.getSelected()
      
      var sel = this.$refs.hotTableComponent.hotInstance.getColHeader(arr[0][1])
      console.log(sel)
      return sel
    }
  }
}
</script>
