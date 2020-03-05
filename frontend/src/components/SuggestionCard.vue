<template>
  <v-card height="100">
    <v-card-title>{{title}}</v-card-title>
    <v-card-text>{{text}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props:['height','title','text'],
}
</script>

<style>
</style>