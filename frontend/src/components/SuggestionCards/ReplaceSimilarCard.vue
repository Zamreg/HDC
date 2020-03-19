<template>
  <v-card id="card" flat outlined height="230" class="card-outer">
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
</template>

<script>
export default {
  name:'replace-card',
  props:[],
  data: function(){
    return{
      replaceRadios: null
    }
  },
  methods:{
    clearReplaceRadios: function(){
      this.replaceRadios = null;
    },
  }
}
</script>

