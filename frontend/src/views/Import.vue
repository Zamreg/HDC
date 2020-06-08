<template>
<v-container fluid>
  <v-card class="mx-auto" max-width="500px">
    <v-card-title>Import CSV File</v-card-title>
    <v-file-input v-model="files" show-size counter multiple label="File Input"></v-file-input>  
  </v-card>
</v-container>
</template>

<script>
export default {
  data: function(){
    return{
      files: null
    }
  },
  methods:{
    getFiles: function(){
      const reader = new FileReader()
      reader.onload = e => this.parseCSV2Arr(e.target.result)
      reader.readAsText(this.files[0])
    },
    parseCSV2Arr: function(text){
      var lines = text.split("\n")
      var headers = lines[0].split(",")
      var data = new Array(lines.length - 1)

      for (var i = 1; i < lines.length; i++) {
        data[i - 1] = lines[i].split(",")
      }
      console.log(headers)
      console.log(data);
    }  
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