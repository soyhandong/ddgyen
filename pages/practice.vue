<template>
    <v-layout
        column="column"
        justify-center="justify-center"
        align-center="align-center">
        <v-flex xs12="xs12" sm8="sm8" md6="md6">  
          <v-flex class="text-center">  
          <img 
        src="/rsmalllogo.png"
        alt="Vuetify.js"
        class="mb-5"
      >       
          </v-flex>
            <v-card>
                <v-card-title class="headline">
                    Welcome to the Vuetify + Nuxt.js template
                </v-card-title>
                <v-card-text>
                    <p>Vuetify is a progressive Material Design component framework for Vue.js. It
                        was designed to empower developers to create amazing applications.</p>
                    <p>
                        For more information on Vuetify, check out the
                        <a href="https://vuetifyjs.com" target="_blank">
                            documentation
                        </a>.
                    </p>

                    <div class="text-xs-right">
                        <em>
                            <small>&mdash; John Leider</small>
                        </em>
                    </div>
                    <hr class="my-3"></v-card-text>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn color="primary" nuxt="nuxt" to="/inspire">
                            Continue
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </template>

    <script>
        import Logo from '~/components/Logo.vue'
        import VuetifyLogo from '~/components/VuetifyLogo.vue'

        export default {
            components: {
                Logo,
                VuetifyLogo
            }
        }
    </script>