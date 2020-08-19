<template>
  <v-card id="card" flat outlined :height="this.height" class="card-outer">
    <v-card-text class="subtitle-1 text--primary" align="center">
      Define bounds and remove outliers?
      <v-container>
      <v-row dense align="center" justify="center">
        <v-col>
          <v-text-field single-line dense height="29" label="Minimum" v-model="min"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field single-line dense height="29" label="Maximum" v-model="max"></v-text-field>
        </v-col>
      </v-row>
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
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'bounds-card',
  props:['controller','height'],
  data() {
    return{
      max: '',
      min: ''
    }
  },
  computed: {
    ...mapGetters(['getBelowMin','getAboveMax']) 
  },
  watch:{
    min: function(){
      this.debouncedBelowMin()
    },
    max: function(){
      this.debouncedAboveMax()
    }
  },
  methods:{
    apply: function(){
      this.$store.dispatch('removeOutliers',{
        col: this.controller,
        min: this.min,
        max: this.max
      })
    },
    belowMin: function(){
        //highlight rows & cell 
        console.log(this.min)
        //var rowIndex = this.getBelowMin(this.min,this.controller)
        //this.$root.$emit('highlightRemoveRows', rowIndex);
    },
    aboveMax: function(){
      //highlight rows & cell
      //var rowIndex = this.getBelowMin(this.min,this.controller)     
      //this.$root.$emit('highlightRemoveRows', rowIndex); 
     
    }
  },
  created: function(){
    var _ = require('lodash')
    this.debouncedBelowMin = _.debounce(this.belowMin, 500)
    this.debouncedAboveMax = _.debounce(this.aboveMax, 500)
  }
}
</script>

