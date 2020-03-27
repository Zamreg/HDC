<template>
  <v-card id="card" flat outlined height="230" class="card-outer">
    <v-card-text class="subtitle-1 text--primary" align="center">
      Define bounds and remove outliers?
      <v-container>
      <v-row dense align="center" justify="center">
        <v-col>
          <v-text-field single-line dense height="29" label="Minimum"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field single-line dense height="29" label="Maximum"></v-text-field>
        </v-col>
      </v-row>
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
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name:'bounds-card',
  props:['controller']
}
</script>

