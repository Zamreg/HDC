<template>
  <v-card flat outlined :height="height">
    <v-card-title class="justify-center">Count</v-card-title>
    <v-card-text align="center" class="text--primary body-1" >
      In order to display statistics select a cell or column
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props:['height','column']
}
</script>