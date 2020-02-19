<template>
    <v-responsive height="auto">
        <v-container fill-height fluid class="pb-0">
            <v-layout align-center>
                <v-flex>
                    <div :class="classe">{{ conteudo }}</div>
                    <v-divider class="my-3"></v-divider>
                </v-flex>
            </v-layout>
        </v-container>
    </v-responsive>
</template>

<script>
export default {
    name: 'Titulo',
    props: {
        conteudo: String,
        classe: String
    }
}
</script>
