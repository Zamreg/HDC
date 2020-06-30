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
        selectionRanges: 'multiple',
        columnSorting: true,
        rowHeaders: true,
        width:'100%',
        stretchH: 'all',
        height: '255',
        filters: true,
        dropdownMenu:{
          items:{
            "filter_by_condition":{},
            "filter_operators":{},
            "filter_by_condition2":{},
            "filter_by_value":{},
            "filter_action_bar":{}
          }
        },
        overflow: 'hidden',
        licenseKey: 'non-commercial-and-evaluation',
        //exportFile: true
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
      this.$refs.dataTablePrev.clearHighlight()
      this.$refs.suggestionBar.updateModel(col)
    }
  }
}

</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
<style>

.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>