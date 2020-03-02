<template>
  <v-container fluid fill-width>
    <v-card>
      <v-card-title>{{title}}</v-card-title>
      <v-row dense>
        <v-col v-for="i in items" :key="i" >
          <v-card outlined>
            <v-card-subtitle>TODO: Display statistics</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props:{
    title: String,
    stats: Array
  },
  data() {
    return{
      items:[1,2,3,4,5]
    }
  }
}
</script>