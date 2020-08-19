<template>
  <v-card id="card" flat outlined :height="this.height" class="card-outer">
    <v-card-text class="subtitle-1 text--primary" align="center">
      Replace similar values?
      <v-radio-group v-model="replaceRadios">
      <v-row dense>
        <v-radio class="subtitle-1 text--primary" :value="valuesToReplace[1]" :label="label1"></v-radio>
      </v-row>
      <v-row dense >
        <v-radio class="subtitle-1 text--primary" :value="valuesToReplace[0]" :label="label2"></v-radio>
      </v-row>
      <v-row dense>
        <v-radio  class="subtitle-1 text--primary" value="Both" label="Both to:"></v-radio>
        <v-spacer/>
        <v-text-field single-line dense height="29" label="Value" class="subtitle-1 text--primary" :disabled="this.replaceRadios!='Both'" v-model="replaceVal">  </v-text-field>      
        <v-spacer/>
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
        v-on:click="clearReplaceRadios()"
        v-if="replaceRadios!=null"
      >
        Clear Selection
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name:'replace-card',
  props:['controller','valuesToReplace','height'],
  data: function(){
    return{
      replaceRadios: null,
      replaceVal: null,
      label1: this.valuesToReplace[0] + " to " + this.valuesToReplace[1],
      label2: this.valuesToReplace[1] + " to " + this.valuesToReplace[0],
    }
  },
  watch:{
    /*replaceRadios: function(){
      var rowIndex
      this.$root.$emit('clearHighlight');
      if(this.replaceRadios == "Both"){
        rowIndex = this.$store.getters.getReplaceRows(this.controller,this.valuesToReplace)
        this.$root.$emit('highlightReplaceRows', rowIndex);
      } else if (this.replaceRadios == this.valuesToReplace[1]){
        rowIndex = this.$store.getters.getReplaceRows(this.controller,[this.valuesToReplace[0]])
        this.$root.$emit('highlightReplaceRows', rowIndex);
      } else if (this.replaceRadios == this.valuesToReplace[0]){
        rowIndex = this.$store.getters.getReplaceRows(this.controller,[this.valuesToReplace[1]])
        this.$root.$emit('highlightReplaceRows', rowIndex);
      }
    },*/
    replaceRadios: function(){
      var send = {replace: null, col: null}
      //this.$root.$emit('clearHighlight');
      if(this.replaceRadios == "Both"){
        send.replace = this.valuesToReplace
        send.col = this.controller
        //this.$root.$emit('highlightReplaceRows', send);
      } else if (this.replaceRadios == this.valuesToReplace[1]){
        send.replace = [this.valuesToReplace[0]]
        send.col = this.controller
        //this.$root.$emit('highlightReplaceRows', send);
      } else if (this.replaceRadios == this.valuesToReplace[0]){
        send.replace = [this.valuesToReplace[1]]
        send.col = this.controller
        //this.$root.$emit('highlightReplaceRows', send);
      }
    }
  },
  methods:{
    replace: function(){
      console.log("hello")
    },
    clearReplaceRadios: function(){
      this.replaceRadios = null;
    },
    apply: function(){
      console.log("radios: " + this.replaceRadios + ",val: " + this.replaceVal + ",old: " + this.valuesToReplace)
      if(this.replaceRadios == 'Both'){
        this.$store.dispatch('replaceSimilarValues',{
          col: this.controller,
          new: this.replaceVal,
          toReplace: this.valuesToReplace
        })
      } else if(this.replaceRadios != null){
        this.$store.dispatch('replaceSimilarValues',{
          col: this.controller,
          new: this.replaceRadios,
          toReplace: this.valuesToReplace
        })
      }
    }
  },
}
</script>

