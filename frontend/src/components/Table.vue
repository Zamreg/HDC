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
    },
    highlightRemoveRows: function(rowIndexes){
      var ncols = this.$store.getters.getNumberOfCols
     
      rowIndexes.forEach(rIndex => {
        for(var col = 0; col < ncols; col++){
          this.$refs.hotTableComponent.hotInstance.setCellMeta(rIndex,col,'className','HighlightRemoveRow')
        }
      })
      if(rowIndexes == '' ){
        this.clearHighlight()
      }
      
      this.$refs.hotTableComponent.hotInstance.render()
    },
    highlightReplaceRows: function(rowIndexes){
      var ncols = this.$store.getters.getNumberOfCols
      
      rowIndexes.forEach(rIndex => {
        for(var col = 0; col < ncols; col++){
          this.$refs.hotTableComponent.hotInstance.setCellMeta(rIndex,col,'className','HighlightReplaceRow')
        }
      })
      if(rowIndexes == '' ){
        this.clearHighlight()
      }
      
      this.$refs.hotTableComponent.hotInstance.render()
    },
    clearHighlight: function() {
      var nrows = this.$store.getters.getNumberOfRows
      var ncols = this.$store.getters.getNumberOfCols
      for(var row = 0; row < nrows; row++){
        for(var col = 0; col < ncols; col++){
          this.$refs.hotTableComponent.hotInstance.setCellMeta(row,col,'className','')
        }
      }
      this.$refs.hotTableComponent.hotInstance.render()
    }
  },
  mounted() {
    this.$root.$on('highlightRemoveRows', data => {this.highlightRemoveRows(data)})
    this.$root.$on('highlightReplaceRows', data => {this.highlightReplaceRows(data)})
    this.$root.$on('clearHighlight', () => this.clearHighlight())
  }
  /*watch:{
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
  }*/
}
</script>

<style >
.handsontable .HighlightRemoveRow{
  background: red;
}
.handsontable .HighlightReplaceRow{
  background: yellow;
}
</style>