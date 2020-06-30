<template>
  <v-card flat outlined :height="this.height">
    <v-card-title class="justify-center">Split By Character</v-card-title>
    <v-card-text class="text--primary body-1">
      <v-text-field  label="Character to split by:" placeholder="Example: '\'"></v-text-field>
      <v-text-field dense label="New Column Name:"></v-text-field>
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
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:['height','column'],
  computed:{
    columnValues: function(){
      return this.$store.state.data.map(x=> x[this.column])
    },
  }
}
</script>