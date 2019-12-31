<template>
    <div class="splashscreen-wrapper">
        <transition @leave="leaveEl" v-on:after-appear="leaveEl" appear="appear">
            <div class="logo-wrapperl">
                <span class="logo-letter">
                    <img v-img:group src="/front.png" width="100%" height="100%" alt="Vuetify.js"/>
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