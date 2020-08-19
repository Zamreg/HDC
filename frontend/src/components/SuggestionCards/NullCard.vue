<template>
   <v-card id="card" flat outlined :height="this.height" class="card-outer">
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
          <v-container fluid fill-width >
          <v-text-field single-line dense height="29" flat label="Replace" :disabled="enableText" v-model="replaceVal"></v-text-field>
          </v-container>
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
            v-on:click="clearNullRadios()"
            v-if="nullRadios!=null"
          >
            Clear Selection
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'null-card',
  props:['controller','height'], //controller = col index
  data: function(){
    return{
      nullRadios: null,
      replaceVal: null
    }
  },
  computed:{
    ...mapGetters(['getNulls']),
    enableText: function(){
      if(this.nullRadios == "Replace") return false;
      else return true;
    },
    nullRows: function(){
      return this.getNulls(this.controller)
    }
  },
  /*watch:{
    nullRadios: function(){
      console.log(this.nullRadios)
      var rowIndex = this.getNulls(this.controller)
      this.$root.$emit('clearHighlight');
      if(this.nullRadios == "Remove"){
        this.$root.$emit('highlightRemoveRows', rowIndex);
      } else if (this.nullRadios == "Replace"){
        this.$root.$emit('highlightReplaceRows', rowIndex);
      }
    },
  },*/
  methods:{
    clearNullRadios: function(){
      this.nullRadios = null
      this.replaceVal = null
    },
    apply: function(){
      if(this.nullRadios=="Replace"){
        this.$store.dispatch('replaceNull',{
          col: this.controller,
          rows: this.nullRows,
          val: this.replaceVal
        })
      } else if(this.nullRadios=="Remove"){
        this.$store.dispatch('removeNull',{
          col: this.controller,
          rows: this.nullRows
        })
      }
    }
  },
}
</script>