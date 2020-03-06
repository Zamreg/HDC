<template>
  <v-container fluid fill-width>
    <v-row dense id="statsAndSuggestions">
      <v-col cols=3>
        <v-carousel
          height="230"
          hide-delimiters
          show-arrows-on-hover
        >
          <v-carousel-item v-for="item in hotSettings1.colHeaders" :key="item" >
            <SuggestionCard :title="item" height="230"/>
          </v-carousel-item>
        </v-carousel>  
      </v-col>
      <v-col>
        <v-card flat outlined height="230" class="card-outer">
          <v-card-text class="subtitle-1 text--primary" align="center">
            Define bounds and remove outliers?
            <v-row dense align="center" justify="center" style="height: 120px;">
              <v-col>
                <v-text-field single-line dense height="29" label="Minimum"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field single-line dense height="29" label="Maximum"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="card-actions">
            <v-btn
              color="black"
              text
            >
              Apply
            </v-btn>
            <v-btn
              color="black"
              text
            >
              Preview
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat outlined height="230" class="card-outer">
          <v-card-text class="subtitle-1 text--primary" align="center">
            Replace similar values?
            <v-radio-group v-model="replaceRadios">
            <v-row dense>
              <v-radio class="subtitle-1 text--primary" value="MARSHMALLOW" label="Marshmallow to MARSHMALLOW"></v-radio>
            </v-row>
            <v-row dense id="padding1">
              <v-radio class="subtitle-1 text--primary" value="Marshmallow" label="MARSHMALLOW to Marshmallow"></v-radio>
            </v-row>
            <v-row dense>
              <v-radio  class="subtitle-1 text--primary" value="Both" label="Both to:"></v-radio>
              <v-spacer/>
              <v-text-field single-line dense height="29" label="Value" class="subtitle-1 text--primary" :disabled="this.replaceRadios!='Both'">  </v-text-field>      
              <v-spacer/>
            </v-row>
            </v-radio-group>
          </v-card-text>
          <v-card-actions class="card-actions">
            <v-btn
              color="black"
              text
            >
              Apply
            </v-btn>
            <v-btn
              color="black"
              text
            >
              Preview
            </v-btn>
            <v-btn
              color="black"
              text
              v-on:click="clearReplaceRadios()"
              v-if="replaceRadios!=null"
            >
              Clear Selection
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat outlined height="230" class="card-outer">
          <v-card-text class="subtitle-1 text--primary" align="center">
            Replace or remove null values?
            <v-radio-group v-model="nullRadios">
            <v-row dense>
              <v-col>
                <v-radio value="Replace" label="Replace"></v-radio>
              </v-col>
              <v-col>
                <v-radio value="Remove" label="Remove"></v-radio>
              </v-col>
            </v-row>
            </v-radio-group>
            <v-container fluid fill-width id="padding2">
            <v-text-field single-line dense height="29" flat label="Replace" :disabled="enableText"></v-text-field>
            </v-container>
          </v-card-text>
          
          <v-card-actions class="card-actions">
            <v-btn
              color="black"
              text
            >
              Apply
            </v-btn>
            <v-btn
              color="black"
              text
            >
              Preview
            </v-btn>
            <v-btn
              color="black"
              text
              v-on:click="clearNullRadios()"
              v-if="nullRadios!=null"
            >
              Clear Selection
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row id="dataPrev">
      <Table ref="dataTablePrev" :settings="hotSettings1"/>
    </v-row>
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
            @click="this.getSelectedData()"
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
      <Table ref="dataTable" :settings="hotSettings1"/>
    </v-row>
  </v-container>
</template>

<script>
import SuggestionCard from '@/components/SuggestionCard.vue'
import Table from '@/components/Table.vue'
export default {
  name: 'home',
  components:{
    Table,
    SuggestionCard
  },
  data: function() {
    return {
      dialog:false,
      syncScroll: false,
      nullRadios: null,
      replaceRadios: null,
      selected: null,
      hotSettings1: {
        data:[
          ["'VS500PP'","'lge'","'6.0.1'",'Marshmallow',88,'us','America/Chicago'],
          ["'AO5510'","'YU'","'5.1.1'",'Lollipop',59,'pt','Europe/Lisbon'],
          ["'ASUS_Z017D'","'asus'","'7.0'",'Nougat',-5,'us','America/Los_Angeles'],
          ["'ASUS_X014D'","'asus'","'5.1.1'",'Lollipop',41,'pt','Atlantic/Madeira'],
          ["'Nexus 5'","'google'","'6.0.1'",'MARSHMALLOW',90,'us','America/Los_Angeles'],
          ["'LG-D331'","'lge'","'4.4.2'",'KitKat',9,'us','America/New_York'],
          ["'Nexus 5'","'google'","'6.0.1'",'Marshmallow',67,'pt','Atlantic/Madeira'],
          ["'bq Aquaris 5 HD'","'bq'","'4.2.1'",null,35,'us','America/New_York'],
          ["'HUAWEI SCL-L21'","'Huawei'","'5.1.1'",'Lollipop',111,'gb','Europe/Belgrade'],
          ["'HUAWEI P7-L10'","'Huawei'","'5.1.1'",'Lollipop',57,'us','America/New_York'],
          ["'ONE A2003'","'OnePlus'","'6.0.1'",'MARSHMALLOW',65,'pt','Europe/Lisbon'],
          ["'SM-G903F'","'samsung'","'6.0.1'",'Marshmallow',36,'us','America/Chicago'],
          ["'ALE-L21'","'Huawei'","'6.0'",'Marshmallow',82,'us','America/New_York'],
          ["'ALE-L21'","'Huawei'","'6.0'",'MARSHMALLOW',55,'gb','Europe/Belgrade'],
          ["'Aquaris M5'","'bq'","'6.0.1'",'Marshmallow',55,'us','America/New_York'],
          ["'SM-G920F'","'samsung'","'7.0'",'Nougat',82,'pt','Atlantic/Madeira'],
          ["'SM-G950F'","'samsung'","'7.0'",'Nougat',57,'pt','Europe/Lisbon'],
          ["'ALE-L21'","'Huawei'","'6.0'",'Marshmallow',53,'pt','Europe/Lisbon'],
          ["'U FEEL LITE'","'WIKO'","'6.0'",'Marshmallow',76,'pt','Europe/Lisbon'],
          ["'HUAWEI NXT-L29'","'HUAWEI'","'7.0'",'Nougat',39,'us','America/Chicago'],
          ["'CHM-U01'","'Honor'","'6.0'",'Marshmallow',21,'gb','Europe/Belgrade'],
          ["'D5503'","'Sony'","'5.1.1'",'Lollipop',49,'us','America/Los_Angeles'],
          ["'SM-G930F'","'samsung'","'7.0'",'Nougat',95,'gb','Europe/Belgrade'],
          ["'EDI-AL10'","'HUAWEI'","'7.0'",'Nougat',17,'pt','Europe/Lisbon'],
          ["'KIW-L21'","'HONOR'","'6.0.1'",'Marshmallow',75,'pt','Europe/Lisbon'],
          ["'HUAWEI VNS-L31'","'HUAWEI'","'7.0'",'Nougat',42,'us','America/New_York'],
          ["'ASUS_Z017D'","'asus'","'7.0'",'Nougat',45,'us','America/Chicago'],
          ["'SM-G955F'","'samsung'","'7.0'",'Nougat',77,'pt','Atlantic/Madeira'],
          ["'Mi-4c'","'Xiaomi'","'7.0'",'Nougat',54,'us','America/New_York'],
          ["'HTC 10'","'htc'","'7.0'",'Nougat',54,'pt','Europe/Lisbon'],
          ["'Archos 55 diamond Selfie'","'archos'","'6.0.1'",'Marshmallow',49,'us','America/Los_Angeles'],
          ["'SM-G920F'","'samsung'","'7.0'",'Nougat',52,'pt','Europe/Lisbon'],
          ["'PRA-LX1'","'HUAWEI'","'7.0'",'Nougat',66,'us','America/Chicago'],
          ["'SM-G930F'","'samsung'","'7.0'",'Nougat',69,'us','America/New_York'],
          ["'SM-J730F'","'samsung'","'7.0'",'Nougat',96,'pt','Europe/Lisbon'],
          ["'F5321'","'Sony'","'7.1.1'",'Nougat',45,'pt','Europe/Lisbon'],
          ["'SM-A320FL'","'samsung'","'7.0'",'Nougat',36,'pt','Europe/Lisbon'],
          ["'SM-G935F'","'samsung'","'7.0'",'Nougat',85,'pt','Europe/Lisbon']
        ],
        rowHeaders: true,
        colHeaders: ['Model','Brand','OS_Version','Codename','Battery_level','Country_code','Time_zone'],
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
    enableText: function(){
      if(this.nullRadios == "Replace") return false;
      else return true;
    },
    
    
  },
  methods:{
    getSelectedData: function(){
      this.selected = this.$refs.dataTablePrev.getSelectedData()
      console.log(this.selected)
    },
    clearReplaceRadios: function(){
      this.replaceRadios = null;
    },
    clearNullRadios: function(){
      this.nullRadios = null;
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