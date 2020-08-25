<template>
  <v-card flat outlined :height="this.height">
    <v-card-text class="subtitle-1 text--primary" align="center">
      Split on First Instance
      <v-container fluid fill-width >
        <v-text-field dense label="Character to split by:" placeholder="Example: '\'" v-model="splitChar"></v-text-field>
      </v-container>
      <v-row>
        <v-col><v-text-field dense label="First Column Name:" v-model="column1" ></v-text-field></v-col>
        <v-col><v-text-field dense label="Second Column Name:" v-model="column2" ></v-text-field></v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="card-actions">
      <v-btn
        color="black"
        text
        v-on:click="apply()"
      >
        Apply
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:['height','controller'],
  data: function(){
    return{
      column1: null,
      column2: null,
      splitChar: null
    }
  },
  computed:{
    columnValues: function(){
      return this.$store.state.data.map(x=> x[this.controller])
    },
  },
  methods:{
    clearRadios: function(){
      this.radios = null;
    },
    apply: function(){
      console.log("Column Header 1: " + this.column1 + ", Column Header 2: " + this.column2 + ", character: " + this.splitChar + ", column:" + this.controller)
        this.$store.dispatch('splitByChar',{
          col: this.controller,
          column1: this.column1,
          column2: this.column2,
          char: this.splitChar
        })
    } 
  }
}
</script>