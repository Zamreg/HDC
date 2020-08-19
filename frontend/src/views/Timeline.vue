<!--template>
  <v-container fluid fill-width>
    
    <v-row id="dataPrev">
      <Table ref="dataTable" :headers="this.headers" :data='this.rawData' :settings="hotSettings1" original="true"/>
    </v-row>
    <suggestion-bar :headers="this.headers"/>
    <v-row align="center" justify="center" id="syncBox">
      <v-col cols=2>
        <v-checkbox id="checkbox" label="Synchronized Scrolling" v-model="syncScroll"/>
      </v-col>
      <v-col>
     
      </v-col>
    </v-row>
    <v-row id="originalData">
      <Table ref="dataTablePrev" :headers="this.headers" :data='this.rawData' :settings="hotSettings1"/>
    </v-row>
    <suggestion-bar :headers="this.headers"/>
    <v-row align="center" justify="center" id="syncBox">
      <v-col cols=2>
        <v-checkbox id="checkbox" label="Synchronized Scrolling" v-model="syncScroll"/>
      </v-col>
      <v-col>
     
      </v-col>
    </v-row>
    <v-row id="originalData">
      <Table ref="dataTablePrev" :headers="this.headers" :data='this.rawData' :settings="hotSettings1"/>
    </v-row>
    <suggestion-bar :headers="this.headers"/>
    <v-row align="center" justify="center" id="syncBox">
      <v-col cols=2>
        <v-checkbox id="checkbox" label="Synchronized Scrolling" v-model="syncScroll"/>
      </v-col>
      <v-col>
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="black"
            text
            v-on="on"
            @click="getSelectedData()"
          >
            Get Selected Data
          </v-btn>
        </template>

        <v-card>
          <v-card-title
            primary-title
          >
            Selected Data
          </v-card-title>

          <v-card-text>
          {{this.selected}}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-col>
    </v-row>
    <v-row id="originalData">
      <Table ref="dataTablePrev" :headers="this.headers" :data='this.rawData' :settings="hotSettings1"/>
    </v-row>
  </v-container>
</template>

<script>
import Table from '@/components/Table.vue'
import SuggestionBar from '@/components/SuggestionBar.vue'

export default {
  name: 'timeline',
  components:{
    Table,
    SuggestionBar
  },
  data: function() {
    return {
      dialog:false,
      syncScroll: false,
      selected: null,
      hotSettings1: {
        rowHeaders: true,
        width:'100%',
        stretchH: 'all',
        height: '255',
        outsideClickDeselects: false,
        contextMenu: 'true',
        dropdownMenu: [
          'Rename',
          '---------',
          'Remove',
          '---------',
          'Filter'
        ],
        overflow: 'hidden',
        licenseKey: 'non-commercial-and-evaluation'
      }
    }
  },
  computed:{
    rawData: function(){
      return this.$store.state.data;
    },
    headers: function(){
      return this.$store.state.colHeaders;
    }
  },
  methods:{
    getSelectedData: function(){
      this.selected = this.$refs.dataTablePrev.getSelectedColHeader()
      console.log(this.selected)
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
</style-->