<template>
  <v-card id="card" flat outlined height="230" class="card-outer">
    <v-card-text class="subtitle-1 text--primary" align="center">
      Replace similar values?
      <v-radio-group v-model="replaceRadios">
      <v-row dense>
        <v-radio class="subtitle-1 text--primary" :value="valuesToReplace[1]" label="Marshmallow to MARSHMALLOW"></v-radio>
      </v-row>
      <v-row dense id="padding1">
        <v-radio class="subtitle-1 text--primary" :value="valuesToReplace[0]" label="MARSHMALLOW to Marshmallow"></v-radio>
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
</template>

<script>
export default {
  name:'replace-card',
  props:['controller','valuesToReplace'],
  data: function(){
    return{
      replaceRadios: null,
      replaceVal: null
    }
  },
  watch:{
    replaceRadios: function(){
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

