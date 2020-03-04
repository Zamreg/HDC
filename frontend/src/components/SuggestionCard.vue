<template>
  <v-card tile outlined :height="height">
    <v-card-title>{{title}}</v-card-title>
    <v-container fluid fill-width>
      <v-row dense>
        <v-col>
          <v-card flat color='grey darken-3' height='50'>
          </v-card>
        </v-col>
        <v-col>
          <v-card flat color='grey darken-3' height='50'>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props:['height','title','text'],
}
</script>