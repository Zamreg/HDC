<template>
  <v-card flat outlined :height="height">
    <v-card-title class="justify-center">String Length</v-card-title>
    <v-card-text v-if="this.title=='Battery_level'" class="text--primary body-1" align="center">
        TODO
    </v-card-text>
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