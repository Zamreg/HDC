<template>
  <v-container fluid fill-height >
    <hot-table :key="$store.state.changeCounter" :data="$store.state.data" :colHeaders="$store.state.colHeaders" :columns="$store.state.columns" ref="hotTableComponentPrev" :settings="settings" v-if="!original"/>
    <hot-table :key="$store.state.changeCounter" :data="$store.state.data2" :colHeaders="$store.state.colHeaders2" :columns="$store.state.columns2" ref="hotTableComponentOriginal" :settings="settings" read-only='true'  v-else/>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { HotTable } from '@handsontable/vue';
import 'handsontable'
export default {
  props: ['settings','original','selected'],
  components:{
    HotTable
  },
  computed:{
    ...mapGetters(['getColDataType','getNumberOfCols','getColumns','getColumns2']),
  },
  methods:{
    removeCols: function(){
      if(this.$store.state.colHeaders.length != this.$refs.hotTableComponentPrev.hotInstance.countCols()){
         this.$refs.hotTableComponentPrev.hotInstance.columns.splice(this.$store.state.colHeaders.length-1)
      }
    },
    updateHiddenCols: function(){
      this.$refs.hotTableComponent.hotInstance.alter('remove_col',this.$store.state.colHeaders.length)
    },
    getSelected: function(){
      var arr = this.$refs.hotTableComponentPrev.hotInstance.getSelected()
      return arr[0][1]
    },
    getSelectedData: function(){
      return this.$refs.hotTableComponentPrev.hotInstance.getSelected()
    },
    getSelectedColHeader: function(){
      var arr = this.$refs.hotTableComponentPrev.hotInstance.getSelected()
      var sel = this.$refs.hotTableComponentPrev.hotInstance.getColHeader(arr[0][1])
      return sel
    },
    highlightRemoveRows: function(rowIndexes){
      //var ncols = this.$store.getters.getNumberOfCols
     
      /*rowIndexes.forEach(rIndex => {
        for(var col = 0; col < ncols; col++){
          this.$refs.hotTableComponentPrev.hotInstance.setCellMeta(rIndex,col,'className','HighlightRemoveRow')
        }
      })*/
      if(rowIndexes == '' ){
        this.clearHighlight()
      }
      
      this.$refs.hotTableComponentPrev.hotInstance.render()
    },
    highlightReplaceRows: function(/*info*/){
      //var data = this.$refs.hotTableComponentPrev.hotInstance.getData()
      //var ncols = data[0].length
      var c = 0

      /*for(var i = 0; i < data.length; i++){
        if( info.replace.includes(data[i][info.col]) ) {
          for(var col = 0; col < ncols; col++){
            this.$refs.hotTableComponentPrev.hotInstance.setCellMeta(i,col,'className','HighlightReplaceRow')
          }
          c++
        }
      }*/
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
    //this.$root.$on('highlightRemoveRows', data => {this.highlightRemoveRows(data)})
    //this.$root.$on('highlightReplaceRows', data => {this.highlightReplaceRows(data)})
    //this.$root.$on('clearHighlight', () => this.clearHighlight())
    this.$root.$on('updateHiddenCols', () => this.updateHiddenCols())
  }
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