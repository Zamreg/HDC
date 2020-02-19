<template>
  <div>
    <v-navigation-drawer 
            v-model="drawer"
            clipped
            class="grey lighten-4"
            app
        >
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
      

      <v-toolbar-title>Humanized Data Cleaning</v-toolbar-title>

      <v-spacer></v-spacer>


      <!--v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu-->
    </v-app-bar>
  </div>
</template>


<script>
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false,
        items: [
          { heading: 'Consulta' },
          /*{ text: '', path: '', icon: '' },*/
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
