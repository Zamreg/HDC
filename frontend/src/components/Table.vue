<template>
  <v-container fluid fill-height >
    <hot-table :key="this.$store.state.changeCounter" :data="data" :colHeaders="headers" ref="hotTableComponentPrev" :settings="settings" v-if="!original"/>
    <hot-table :key="this.$store.state.changeCounter" :data="data" :colHeaders="headers" ref="hotTableComponentOriginal" read-only='true' :settings="settings" v-else/>
    
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
      var arr = this.$refs.hotTableComponentPrev.hotInstance.getSelected()
      return arr[0][1]
    },
    getSelectedColHeader: function(){
      var arr = this.$refs.hotTableComponentPrev.hotInstance.getSelected()
      var sel = this.$refs.hotTableComponentPrev.hotInstance.getColHeader(arr[0][1])
      return sel
    },
    highlightRemoveRows: function(rowIndexes){
      var ncols = this.$store.getters.getNumberOfCols
     
      rowIndexes.forEach(rIndex => {
        for(var col = 0; col < ncols; col++){
          this.$refs.hotTableComponentPrev.hotInstance.setCellMeta(rIndex,col,'className','HighlightRemoveRow')
        }
      })
      if(rowIndexes == '' ){
        this.clearHighlight()
      }
      
      this.$refs.hotTableComponentPrev.hotInstance.render()
    },
    highlightReplaceRows: function(info){
      var data = this.$refs.hotTableComponentPrev.hotInstance.getData()
      var ncols = data[0].length
      var c = 0

      for(var i = 0; i < data.length; i++){
        if( info.replace.includes(data[i][info.col]) ) {
          for(var col = 0; col < ncols; col++){
            this.$refs.hotTableComponentPrev.hotInstance.setCellMeta(i,col,'className','HighlightReplaceRow')
          }
          c++
        }
      }
      if(c == 0 ){
        this.clearHighlight()
      }
      
      this.$refs.hotTableComponentPrev.hotInstance.render()
    },
    clearHighlight: function() {
      var data = this.$refs.hotTableComponentPrev.hotInstance.getData()
      var nrows = data.length
      var ncols = data[0].length
      for(var row = 0; row < nrows; row++){
        for(var col = 0; col < ncols; col++){
          this.$refs.hotTableComponentPrev.hotInstance.setCellMeta(row,col,'className','')
        }
      }
      this.$refs.hotTableComponentPrev.hotInstance.render()
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