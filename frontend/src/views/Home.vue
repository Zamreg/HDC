<template>
  <v-container fluid fill-width>
    <v-row dense>
      <v-col cols=4>
        <v-card tile outlined>
        <v-carousel
          height="420"
          hide-delimiter-background
          show-arrows-on-hover
        >
        <v-carousel-item>
          <SuggestionCard height="420" text="" title="Suggestion 1"/>
        </v-carousel-item>
        <v-carousel-item>
          <SuggestionCard height="420" title="Suggestion 2"/>
        </v-carousel-item>
        <v-carousel-item>
          <SuggestionCard height="420" text="Delete Null values" title="Suggestion 3"/>
        </v-carousel-item>
        </v-carousel>
        </v-card>
      </v-col>
      <v-col cols=8>
        <Table :settings="hotSettings"/>
      </v-col>
    </v-row>    
    <v-container id="datafooter" fluid>
      <Table :settings="hotSettings"/>
    </v-container>
  </v-container>
</template>

<script>
import SuggestionCard from '@/components/SuggestionCard.vue'
import Table from '@/components/Table.vue'
import Handsontable from 'handsontable'
export default {
  name: 'home',
  components:{
    Table,
    SuggestionCard
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