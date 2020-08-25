<template>
<v-container fluid>
  <v-row dense>
    <v-card class="mx-auto" min-width="500px" min-height="100px" max-height="700px">
      <v-card-title>Import CSV File</v-card-title>
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-file-input v-model="files" show-size counter multiple label="File Input"></v-file-input>  
        </v-window-item>
    
        <v-window-item :value="2">
          <v-container>
            <v-card-subtitle> Headers:</v-card-subtitle>
            <v-radio-group v-model="hradios">
              <v-radio label="Automatically Define Headers" value="auto"></v-radio>
              <v-radio label="First Row Contains Headers" value="headers"></v-radio>
            </v-radio-group>
            <v-card-subtitle> Leading and Trailing Quotation Marks and Spaces:</v-card-subtitle>
            <v-radio-group v-model="qradios">
              <v-radio label="Ignore All Quotation Marks and Spaces" value="both"></v-radio>
              <v-radio label="Ignore Only &quot; and Spaces" value="quot"></v-radio>
              <v-radio label="Ignore Only &#39; and Spaces" value="apos"></v-radio>
              <v-radio label="Ignore Only Leading and Trailing Spaces" value="none"></v-radio>
            </v-radio-group>
          </v-container>
        </v-window-item>
        <v-window-item :value="3">
          
        </v-window-item>
      </v-window>

      <v-card-actions >
        <v-btn
          :disabled="step == 1"
          color="black"
          text
          @click="decStep()"
        >
          Back
        </v-btn>

        
        <v-btn
          v-if="step==2"
          :disabled="qradios ==null || hradios == null "
          color="black"
          text
          @click="preview()"
        >
          Preview
        </v-btn>
        <v-btn
            v-if="step==3"
            color="black"
            text
            @click="apply()"
          >
            Apply
          </v-btn>
        <v-btn
          v-if="step==1"
          :disabled="files==null"
          color="black"
          text
          @click="step++"
        >
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>

  <v-row v-if="files!=null">
    <v-card flat class="mx-auto" >
      <hot-table 
        :key="update" 
        :data="data" 
        :colHeaders="headers" 
        :settings="settings" 
        read-only='true'
      />
    </v-card>
  </v-row>
</v-container>
</template>

<script>
import { HotTable } from '@handsontable/vue';
import _ from 'lodash'
import 'handsontable'
export default {
  components:{
    HotTable
  },
  data: function(){
    return{
      update:0,
      qradios: null,
      hradios: null,
      files: null,
      step:1,
      originaldata: null,
      data:null,
      headers:null,
      oldheaders:null,
      settings:{
        rowHeaders: true,
        dropdownMenu: ['remove_col'] ,
        licenseKey: 'non-commercial-and-evaluation'
      }
    }
  },
  methods:{
    getFiles: function(){
      if(this.files != null){
        this.$papa.parse(this.files[0],{
          fastMode: true,
          //skipEmptyLines: true,
          complete: (result) => {
            this.data = _.cloneDeep(result.data)
            this.update++
          }
        })
       
      }
    },
      /*const reader = new FileReader()
        reader.onload = e => {
          this.originaldata = this.parseCSV2Arr(e.target.result)
          this.data = _.cloneDeep(this.originaldata)
          this.update++
        }
        reader.readAsText(this.files[0])
      }
    },
    parseCSV2Arr: function(text){
      var lines = text.split("\n")
      //var headers = lines[0].split(",")
      var data = new Array(lines.length - 1)

      for (var i = 0; i < lines.length; i++) {
        data[i] = lines[i].split(",")
        if(data[i].includes('')){
          for(var j = 0; j < data[i].length; j++){
            if(data[i][j] == '') data[i][j]=null
          }
        }
      }
      return data
    },*/
    decStep: function(){
      console.log(this.originaldata)
      console.log(this.data)
      if(this.step == 3) {
        this.qradios = null
        this.hradios = null
        this.data = _.cloneDeep(this.originaldata)
        this.headers = null
      }
      
      this.step--
    },
    preview: function(){
      this.step++
      this.defineHeaders()
      this.editData()
    },
    defineHeaders: function(){
      if (this.hradios=="auto"){
        this.headers = new Array(this.data[0].length - 1)
        for(var i=1; i< this.data[0].length; i++){
          this.headers[i-1] = "F" + i
        }
        this.update++
      }
      else if (this.hradios=="headers"){
        this.headers = this.data[0]
        this.data=this.data.splice(1)
        this.update++
      }
    },
    editData: function(){
      var i, j, len
      
      if (this.qradios == "none"){
        for( i = 0; i < this.data.length; i++){
          for( j = 0; j < this.data[i].length; j++){
            this.data[i][j] = this.data[i][j].trim()
          }
        }
      }
      else if (this.qradios == "both"){
        for( i = 0; i < this.data.length; i++){
          for( j = 0; j < this.data[i].length; j++){
            this.data[i][j] = this.data[i][j].trim()
            len = this.data[i][j].length -1
            if(this.data[i][j].endsWith("\"") && this.data[i][j].startsWith("\"") ){
              this.data[i][j] = this.data[i][j].substring(1,len)
            }
            else if(this.data[i][j].endsWith("'") && this.data[i][j].startsWith("'") ){
              this.data[i][j] = this.data[i][j].substring(1,len)
            }
          }
        }
      }
      else if (this.qradios == "quot"){
        for( i = 0; i < this.data.length; i++){
          for( j = 0; j < this.data[i].length; j++){
            this.data[i][j] = this.data[i][j].trim()
            len = this.data[i][j].length -1
            if(this.data[i][j].endsWith("\"") && this.data[i][j].startsWith("\"") ){
              this.data[i][j] = this.data[i][j].substring(1,len)
            }
          }
        }
      }
      else if (this.qradios == "apos"){
        for( i = 0; i < this.data.length; i++){
          for( j = 0; j < this.data[i].length; j++){
            this.data[i][j] = this.data[i][j].trim()
            len = this.data[i][j].length -1
            if(this.data[i][j].endsWith("'") && this.data[i][j].startsWith("'") ){
              this.data[i][j] = this.data[i][j].substring(1,len)
            }
          }
        }
      }
    },
    typeCols: function(){
      var cols = []
      _.map(this.data[0], function(ele){
        if(!isNaN(ele)) cols.push({type: 'numeric'})
        else cols.push({type: 'text'})
      })
      return cols
    },
    apply: function(){
      var cols = this.typeCols()
      this.$store.dispatch('init',{
        headers: this.headers,
        data: this.data,
        cols: cols
      })
      this.$router.push("/")
      
    },
  },
  watch:{
    files: function(){
      this.debouncedGetFiles()
    }
  },
  created: function(){
    var _ = require('lodash')
    this.debouncedGetFiles = _.debounce(this.getFiles, 500)
  }
}
</script>
