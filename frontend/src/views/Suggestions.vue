<template>
  <v-container fluid fill-width>
    <v-row dense>
      <v-col cols=4>
        <SuggestionCard/>
      </v-col>
      <v-col cols=8>  
        <v-card tile outlined>
          <Table :settings="hotSettings"/>
        </v-card>
        <DataPreview/>
      </v-col>
    </v-row>
    <v-container id="datafooter" fluid>
      <Table :settings="hotSettings"/>
    </v-container>
  </v-container>  
</template>
  
<script>
//import DataPreview from '@/components/DataPreview.vue'
import SuggestionCard from '@/components/SuggestionCard.vue'
import Table from '@/components/Table.vue'
import Handsontable from 'handsontable'
export default {
  components:{
//    DataPreview,
    SuggestionCard,
    Table
  },
  data: function() {
    return {
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(1000, 10),
        colHeaders: true,
        width:'100%',
        stretchH: 'all',
        height:'400',
        contextMenu: 'true',
        dropdownMenu: [
          'remove_col',
          '---------',
          'make_read_only',
          '---------',
          'alignment'
        ],
        overflow: 'hidden',
        licenseKey: 'non-commercial-and-evaluation'
      }
    }
  }
}
</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>