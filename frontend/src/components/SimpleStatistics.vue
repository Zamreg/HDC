<template>
  <v-row no-gutters>
    <v-col v-for="n in 10" :key="n">
      <v-card outlined>
        <v-card-title>{{n}}</v-card-title>
        <v-card-text>TODO: Display Statistics</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

