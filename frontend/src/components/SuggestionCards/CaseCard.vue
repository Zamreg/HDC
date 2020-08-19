<template>
  <v-card id="card" flat outlined :height="this.height" class="card-outer">
    <v-card-text class="subtitle-1 text--primary" align="center">
      Normalize String Case
      <v-radio-group v-model="radios">
      <v-row dense class="paddedRow" >
        <v-radio class="subtitle-1 text--primary" value="upper" label="All Uppercase"></v-radio>
      </v-row>
      <v-row dense  >
        <v-radio class="subtitle-1 text--primary" value="lower" label="All Lowercase"></v-radio>
      </v-row>
      <v-row dense class="paddedRow">
        <v-radio  class="subtitle-1 text--primary" value="ul" label="First uppercase then lowercase"></v-radio>
      </v-row>
      </v-radio-group>
    </v-card-text>
    <v-card-actions class="card-actions">
      <v-btn
        color="black"
        text
        v-on:click="apply()"
      >
        Apply
      </v-btn>
      <v-btn
        color="black"
        text
        v-on:click="clearRadios()"
        v-if="radios!=null"
      >
        Clear Selection
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "case-card",
  props:['controller','height'],
  data: function(){
    return{
      radios: null,
    }
  },
  /*watch:{
    radios: function(){
      this.$root.$emit('clearHighlight');
      if(this.radios == "upper"){
        send.replace = this.valuesToReplace
        send.col = this.controller

        this.$root.$emit('highlightReplaceRows', send);
      } else if (this.radios == "lower"){
        send.replace = [this.valuesToReplace[0]]
        send.col = this.controller

        this.$root.$emit('highlightReplaceRows', send);
      } else if (this.radios == "ul"){
        send.replace = [this.valuesToReplace[1]]
        send.col = this.controller
        this.$root.$emit('highlightReplaceRows', send);
      }a
    }
  }*/
  methods:{
    clearRadios: function(){
      this.radios = null;
    },
    apply: function(){
      console.log("radios: " + this.radios + ",val: " + this.radios)
        this.$store.dispatch('changeCase',{
          col: this.controller,
          case: this.radios
        })
    } 
  }
}
</script>

<style>
.v-radio{
  padding-left: 0.7cm;
}
</style>