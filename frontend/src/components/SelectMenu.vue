<template>
    <v-dialog v-model="dialog" persistent scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn text color="grey darken-3" dark v-on="on">Select Columns</v-btn>
      </template>
      <v-card>
        <v-card-title>Select Columns</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <div v-for="n in this.headers.length" :key="n">
          <v-checkbox 
            color="grey darken-3" 
            dense
            :label="headers[n-1]" 
            :value="headers[n-1]"
            :disabled="belongs(headers[n-1])"
            v-model="colSelection"

          > </v-checkbox>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          
          <v-btn color="grey darken-3" text @click="clearAll()">Clear All</v-btn>
          <v-btn color="grey darken-3" text @click="apply()">Apply & Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data: function(){
    return{
      dialog:false,
      colSelection:[]
    }
  },
  computed:{
    headers: function(){
      return this.$store.state.colHeaderNames
    },
    limit_reached: function(){
      if(this.colSelection.length >= 2) return true
      else return false
    }
  },
  methods:{
    belongs: function(header){
      if(this.colSelection.includes(header) || !this.limit_reached) return false
      else return true
    },
    apply: function(){
      for (var i = 0; i < this.colSelection.length; i++){
        this.$emit('changeSelected',this.colSelection[i],i)
      }
      this.dialog=false
    },
    clearAll: function(){
      this.colSelection = []
    }
  }
}
</script>