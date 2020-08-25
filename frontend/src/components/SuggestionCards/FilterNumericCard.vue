<template>
  <v-card flat outlined :height="height">
    <v-card-title class="subtitle-1 text--primary justify-center">
      <span>Find and Remove Matches</span>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-overflow-btn
            dense
            :menu-props="{top:true, maxHeight: 270}"
            :items="filter_options"
            label="Options"
            hint="Select Condition"
            persistent-hint
            v-model="model"
          ></v-overflow-btn>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text  class="subtitle-1 text--primary justify-center" v-if="oneVal.includes(model)">
          <v-row> 
            <v-col md="auto"> <v-subheader class="subtitle-1 text--primary">{{model}}:</v-subheader>  </v-col> 
            <v-col> <v-text-field dense solo flat label="Value" v-model="value"></v-text-field>  </v-col>
          </v-row>
        </v-card-text>
        <v-card-text  class="subtitle-1 text--primary justify-center" v-if="twoVal.includes(model)">
          <v-row dense > 
            <span style="margin-left:17px">{{model}}:</span>
          </v-row>
          <v-row dense> 
            <v-col> <v-text-field dense solo flat label="Minimum" v-model="min"></v-text-field>  </v-col> 
            <v-col> <v-text-field dense solo flat label="Maximum" v-model="max"></v-text-field>  </v-col>
          </v-row>
        </v-card-text>
      </v-window-item>

  
    </v-window>

    <v-card-actions  class="card-actions">
      <v-btn
        :disabled="step === 1"
        color="black"
        text
        @click="decStep()"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-if="skipModels.includes(model) || step == 2"
        color="black"
        text
        @click="apply()"
      >
        Apply
      </v-btn>
      <v-btn
        v-else
        :disabled="model == null"
        color="black"
        text
        @click="incStep()"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['height','controller'],
    data: function (){
      return{
        step: 1,
        model: null,
        value: null,
        min: null,
        max: null,
        filter_options: [
          "Is empty",
          "Is not empty",
          "Is equal to",
          "Is not equal to",
          "Greater than",
          "Greater than or equal to",
          "Less than",
          "Less than or equal to",
          "Is between",
          "Is not between"
        ],
        skipModels: ["Is empty","Is not empty"],
        oneVal: ["Is equal to","Is not equal to","Greater than","Greater than or equal to","Less than","Less than or equal to"],
        twoVal: ["Is between","Is not between"],
      }
    },
    methods:{
      apply: function(){
        console.log("apply1")
        if(this.skipModels.includes(this.model) ){
          console.log("apply2")
          this.$store.dispatch('nullFilter',{
            col: this.controller,
            job: this.model,
          })
        } else if (this.oneVal.includes(this.model) ){
          console.log("apply3")
          this.$store.dispatch('singleFilter',{
            col: this.controller,
            job: this.model,
            val: this.value
          })
        } else if (this.twoVal.includes(this.model) ){
          console.log("apply4")
          this.$store.dispatch('doubleFilter',{
            col: this.controller,
            job: this.model,
            min: this.min,
            max: this.max
          })
        } else {
          console.log("apply5")
        }
      },
      incStep: function(){
        if( this.skipModels.includes(this.model) ){
          this.step = this.step + 2
        } else this.step++
      },
      decStep: function(){
        this.min = null
        this.max = null
        this.value = null
        if( this.skipModels.includes(this.model) ){
          this.step = this.step - 2
        } else this.step--
      }
    }
  }
</script>