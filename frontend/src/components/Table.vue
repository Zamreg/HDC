<template>
  <v-container fluid fill-height >
    <hot-table :key="$store.state.changeCounter" :data="$store.state.data" :colHeaders="$store.state.colHeaders" :columns="columns" ref="hotTableComponentPrev" :settings="settings" v-if="!original"/>
    <hot-table :key="$store.state.changeCounter" :data="$store.state.data2" :colHeaders="$store.state.colHeaders" :columns="columns" ref="hotTableComponentOriginal" :settings="settings" read-only='true'  v-else/>
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
    ...mapGetters(['getColDataType','getNumberOfCols']),
    columns: function(){
      var cols = []
      var ncols = this.getNumberOfCols
      for(var i=0; i<ncols; i++) {
        var col = new Object()
        if(this.getColDataType(i) == "number") {
          col.type = "numeric"
        } else {
          col.type = "text"
        }
        cols.push(col)
      }
      return cols
    }
  },
  methods:{
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
      //console.log(data)
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