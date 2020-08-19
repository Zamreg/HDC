<template>
   <v-card id="card" flat outlined :height="this.height" class="card-outer">
        <v-card-text class="subtitle-1 text--primary" align="center">
          Find Value and Replace it?
          <v-container fluid fill-width >
            <v-text-field single-line dense height="29" flat label="Value to Replace" v-model="valToReplace"></v-text-field>
          </v-container>
          <v-container fluid fill-width >
            <v-text-field single-line dense height="29" flat label="Replace Value"  v-model="replaceVal"></v-text-field>
          </v-container>
        </v-card-text>
        
        <v-card-actions class="card-actions">
          <v-btn
            color="black"
            :disabled="valToReplace == null || valToReplace == ''"
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
  name: 'null-card',
  props:['controller','height'], //controller = col index
  data: function(){
    return{
      valToReplace: null,
      replaceVal: null
    }
  },
  methods:{
    apply: function(){
      console.log(this.replaceVal)
      this.$store.dispatch('findReplace',{
        col: this.controller,
        val: this.valToReplace,
        rep: this.replaceVal
      })
    }
  },
}
</script>