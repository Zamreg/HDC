<template>
  <v-container fluid fill-height >
    <hot-table id="table" :key="this.$store.state.changeCounter" :data="data" :colHeaders="headers" ref="hotTableComponent" read-only='true' :settings="settings" v-if="original"/>
    <hot-table id="table" :key="this.$store.state.changeCounter" :data="data" :colHeaders="headers" ref="hotTableComponent" :settings="settings" v-else/>
  </v-container>
</template>

<script>

import { HotTable } from '@handsontable/vue';
import 'handsontable'
export default {
  props: ['headers','data','settings','original','selected'],
  components:{
    HotTable
  },
  methods:{
    getSelected: function(){
      var arr = this.$refs.hotTableComponent.hotInstance.getSelected()
      return arr[0][1]
    },
    getSelectedColHeader: function(){
      var arr = this.$refs.hotTableComponent.hotInstance.getSelected()
      var sel = this.$refs.hotTableComponent.hotInstance.getColHeader(arr[0][1])
      return sel
    }
  },
  watch:{
    selected:function(newVal){
      console.log("new:" + newVal)
      var headers = this.$store.state.colHeaderNames
      var len = this.$store.state.colHeaderNames.length
      var col1 = null, col2 = null
      for(var i = 0; i < newVal.length ; i++){
        for(var j = 0; j < len ; j++){
          if(newVal[i] == headers[j]){
            if(col1 == null) col1 =j
            else col2 = j
          }
        }
      }
      console.log("col1:" + col1 +",col2:" + col2)
      if (col2 != null) this.$refs.hotTableComponent.hotInstance.selectColumns(col1, col2)
      else this.$refs.hotTableComponent.hotInstance.selectColumns(col1)
      
      
    }
  }
}
</script>

<style>
.area{
  background-color: aqua;
}
</style>