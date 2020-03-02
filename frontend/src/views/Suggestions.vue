<template>
  <v-container fluid fill-width>
    <Title conteudo="Suggestions" class="display-1" />
    <v-row fill-height>
      <v-col cols=4>
        <v-card outlined> <!-- Cicle card for multiple suggestions -->
          <v-card-title>Suggestion 1 </v-card-title>
          <v-card-text>Hello darkness my old friend</v-card-text> 
        </v-card>
        <SuggestionCard/>
      </v-col>
      <v-col cols=8>
        
        <v-card outlined>
          <v-card-title>Data prev </v-card-title>
          <v-card-text>Hello darkness my old friend</v-card-text> 
        </v-card>
        <DataPreview/>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import Title from '@/components/Title.vue'
import DataPreview from '@/components/DataPreview.vue'
import SuggestionCard from '@/components/SuggestionCard.vue'

export default {
  components:{
    Title,
    DataPreview,
    SuggestionCard
  }
}
</script>