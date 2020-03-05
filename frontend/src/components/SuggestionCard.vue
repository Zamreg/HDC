<template>
  <v-theme-provider root>
    <v-card flat outlined :height="height">
      <v-card-text class="text--primary body-1" align="center">{{title}}</v-card-text>
      <v-card-text v-if="this.title=='Battery_level'" class="text--primary body-1" align="center">
          Minimum = -5 <br>
          Average = 57<br>
          Median = 55 <br>
          Maximum = 111
      </v-card-text>
      <v-container id="code" v-if="this.title=='Codename'" >
        <v-row dense >
          <v-col id="codeCol" class="text--primary body-2" align="left">
            Null<br>
            Kitkat<br>
            Lollipop<br>
            Marshmallow<br>
            MARSHMALLOW<br>
            Nougat
          </v-col>
          <v-col id="countCol" class="text--primary body-2" align="right">
            1<br>
            1<br>
            5<br>
            3<br>
            10<br>
            18
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-theme-provider>
</template>

<script>
export default {
  props:['height','title','text'],
  computed:{
    info: function(){
      if(this.title=="Battery_level") return "";
      else if(this.title=="Model") return "Maxi";
      else if(this.title=="OS_Version") return "Maxim";
      else if(this.title=="Codename") return "Big"; 
      return this.text + " ";

    }
  }
}
</script>

<style>
#codeCol{
  padding-left: 1.5cm;
}
#countCol{
  padding-right: 1.5cm;
}
#code{
  padding: 0%
}
</style>