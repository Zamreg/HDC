<template>
  <v-container fluid fill-width>
    <suggestion-bar :headers="this.headers" ref="suggestionBar"/>
    <v-row id="dataPrev">
      <Table ref="dataTablePrev" :headers="this.headers" :data='this.rawData' :settings="hotSettingsPrev" :selected="selectedColumns"/>
    </v-row>
    <v-row align="center" justify="center" id="syncBox">
      <Dropdown @changeSelected="changeSelectedColumns"/>
      <v-col cols=2>
        <v-checkbox color="grey darken-3" id="checkbox" label="Synchronized Scrolling" v-model="syncScroll"/>
      </v-col>
    </v-row>
    <v-row id="originalData">
      <Table ref="dataTable" :headers="this.headers" :data='this.rawData' :settings="hotSettings1" original="true"/>
    </v-row>
  </v-container>
</template>

<script>
import Table from '@/components/Table.vue'
import SuggestionBar from '@/components/SuggestionBar.vue'
import Dropdown from '@/components/SelectMenu.vue'

export default {
  name: 'home',
  components:{
    Table,
    Dropdown,
    SuggestionBar
    //StatsCard
  },
  data: function() {
    return {
      selectedColumns:[],

      rawData: this.$store.state.data,
      headers: this.$store.state.colHeaders,

      syncScroll: false,
      selected: null,
    
      hotSettings1: {
        columnSorting: true,
        rowHeaders: true,
        width:'100%',
        stretchH: 'all',
        height: '255',
        overflow: 'hidden',
        licenseKey: 'non-commercial-and-evaluation'
      },
      hotSettingsPrev: {
        afterSelectionEnd: () => {
          this.updateModel()
        },
        /*cells: function (row, col) {
          var cellProperties = {};
          var data = this.instance.getData();
          if (row === 0 || data[row] && data[row][col] === 'readOnly') {
            cellProperties.readOnly = true;
          }
          return cellProperties;
        },*/
        selectionRanges: 'multiple',
        columnSorting: true,
        rowHeaders: true,
        width:'100%',
        stretchH: 'all',
        height: '255',
        filters: true,
        dropdownMenu:{
          items:{
            /*"select_col":{
              name: function(){
                return "<input type='checkbox' id='select'/> Select Columnn"
              }
            },*/
            "filter_by_condition":{},
            "filter_operators":{},
            "filter_by_condition2":{},
            "filter_by_value":{},
            "filter_action_bar":{}
          }
        },
        overflow: 'hidden',
        licenseKey: 'non-commercial-and-evaluation'
      }
    }
  },
  methods:{
    changeSelectedColumns: function(arg,n){
      if(n==0){
        this.selectedColumns = []
      }
      this.selectedColumns.push(arg)
    },
    getSelectedData: function(){
      this.selected = this.$refs.dataTablePrev.getSelectedColHeader()
      this.updateModel()
    },
    updateModel: function(){
      var col = this.$refs.dataTablePrev.getSelected()
      this.$refs.suggestionBar.updateModel(col)
    }
  }
}

</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
<style>
#statsAndSuggestions{
  height: 20%;
}
#dataPrev{
  height: 40%;
}
#originalData{
  height:40%;
}
#padding1{
  padding-top:10px;
}
#padding2{
  padding: 0;
  padding-left:32px;
  padding-right: 100px;
}
#syncBox{
  padding: 0%;
  padding-left: 50px;
}
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>