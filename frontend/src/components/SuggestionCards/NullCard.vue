<template>
   <v-card id="card" flat outlined height="230" class="card-outer">
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
</template>

<script>
export default {
  name: 'null-card',
  data: function(){
    return{
      nullRadios: null,
    }
  },
  computed:{
    enableText: function(){
      if(this.nullRadios == "Replace") return false;
      else return true;
    },
  },
  methods:{
    clearNullRadios: function(){
      this.nullRadios = null;
    }
  }
}
</script>