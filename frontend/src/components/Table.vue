<template>
  <v-container fluid fill-height >
    <hot-table id="table" :data="data" :colHeaders="headers" ref="hotTableComponent" read-only='true' :settings="settings" v-if="original"/>
    <hot-table id="table" :data="data" :colHeaders="headers" ref="hotTableComponent" :settings="settings" v-else/>
  </v-container>
</template>

<script>

import { HotTable } from '@handsontable/vue';
import 'handsontable'
export default {
  props: ['headers','data','settings','original'],
  components:{
    HotTable
  },
  computed:{
   
  },
  methods:{
    getSelectedColHeader: function(){
      var arr = this.$refs.hotTableComponent.hotInstance.getSelected()
      
      var sel = this.$refs.hotTableComponent.hotInstance.getColHeader(arr[0][1])
      return sel
    }
  }
}
</script>
