<template>
  <v-container>
    <Table :settings="hotSettings"/>
  </v-container>
</template>

<script>
import Table from '@/components/Table.vue'
import Handsontable from 'handsontable';
export default {
  name: 'home',
  components:{
    Table
  },
  data: function() {
    return {
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(6, 10),
        colHeaders: true,
        licenseKey: 'non-commercial-and-evaluation'
      }
    }
  },
}
</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
