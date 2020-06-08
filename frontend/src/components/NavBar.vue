<template>
  <nav>
    <v-navigation-drawer 
      v-model="drawer"
      clipped
      class="grey lighten-4"
      app
    >
      <v-list
        shaped
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-subheader v-if="item.heading" :key="i">{{item.heading}}</v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          ></v-divider>

          <v-list-item
            v-else
            :key="i"
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer> 
    <v-app-bar
      dense
      fixed
      clipped-left
      dark
      app 
    >
      <v-app-bar-nav-icon @click="drawer = !drawer">  
      </v-app-bar-nav-icon>
      

      <v-toolbar-title>Data Cleaning for All</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
  </nav>
</template>


<script>
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false,
        items: [
          { heading: 'Data Cleaning'},
          { text: 'Home', path: '/', icon: 'mdi-home' },
          { text: 'Timeline', path: '/timeline', icon: 'mdi-chart-timeline-variant' },
          { text: 'Import File', path: '/import', icon: 'mdi-paperclip' },                    
          { divider: true }
      ]
    }
  },
  methods:{
    goBack : function(){
      this.$router.go(-1)
    },
    goTo : function (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
.nav{
  transition: top 0s;
}
</style>