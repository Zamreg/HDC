<template>
  <v-container fluid fill-width>    
    <Title conteudo="Data" class="display-1"/>
    <SimpleStatistics/>
    <v-row dense>
      <Table :settings="hotSettings"/>
    </v-row>
  </v-container>
</template>

<script>
import Title from '@/components/Title.vue'
import SimpleStatistics from '@/components/SimpleStatistics.vue'
import Table from '@/components/Table.vue'
import Handsontable from 'handsontable';
export default {
  name: 'home',
  components:{
    Table,
    SimpleStatistics,
    Title
  },
  data: function() {
    return {
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(1000, 10),
        colHeaders: true,
        width:'100%',
        stretchH: 'all',
        height:'380',
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
