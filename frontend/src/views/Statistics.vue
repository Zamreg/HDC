<template>
  <v-container fluid fill-width>
    <v-row dense fill-width v-for="item in statsheaders" :key="item"  >
      <StatsBar  :title="item"/>
    </v-row>
    <v-container id="datafooter" fluid>
      <Table :settings="hotSettings"/>
    </v-container>
  </v-container>
</template>

<script>
import StatsBar from '@/components/StatsBar.vue'
import Handsontable from 'handsontable'
export default {
  components:{
    StatsBar
  },
  data: function() {
    return {
      statsheaders:['Name','Address','Something'],
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(1000, 10),
        colHeaders: true,
        width:'100%',
        stretchH: 'all',
        height:'  ',
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
  },

}
</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
<style>
#datafooter{
position:absolute;
bottom:0;
}
</style>