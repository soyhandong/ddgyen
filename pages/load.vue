<template>
    <div class="splashscreen-wrapper" width="100%" height="100%">
        <transition @leave="leaveEl" v-on:after-appear="leaveEl" appear="appear">
            <div class="logo-wrapperl">
                <span class="logo-letter">
                    <img src="/whitelogo.png" width="150px" height="150px" alt="Vuetify.js"/>
                </span>
                </div>
            </transition>
        </div>
    </template>

    <script>
        export default {
            name: 'SplashScreen',
            data() {
                return {show: true}
            },
            methods: {
                leaveEl(el) {
                    this
                        .$router
                        .push('/')
                }
            }

        }
    </script>

    <style>
        .gcolor {
            background: #2D9527;
        }
    </style>