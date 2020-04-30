<template>
  <v-app>
    <NavBar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar,
  }
}
</script>

<style>

html, body {
  font-family: 'Roboto Narrrow', sans-serif;
}
.v-app{
  overflow-y: auto;
}
</style>