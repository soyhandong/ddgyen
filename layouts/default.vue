<template>
    <v-app background-color="white">
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed="fixed"
            app="app">
            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router="router"
                    exact="exact">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"/>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            :clipped-left="clipped"
            fixed="fixed"
            app="app"
            color="white"
            flat="flat"
            >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>ddgye</v-toolbar-title>
            <v-spacer/>
        </v-app-bar>

        <v-content>
            <v-container>
                <nuxt/>
            </v-container>
        </v-content>

    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                clipped: false,
                drawer: false,
                fixed: false,
                items: [
                    {
                        icon: 'mdi-apps',
                        title: 'Welcome',
                        to: '/'
                    }, {
                        icon: 'mdi-chart-bubble',
                        title: '양도소득세',
                        to: '/yangdo'
                    }, {
                        icon: 'mdi-chart-bubble',
                        title: '등기비용(취득세, 채권)',
                        to: '/chwideug'
                    }, {
                        icon: 'mdi-chart-bubble',
                        title: '투자수익률',
                        to: '/tuja'
                    }, {
                        icon: 'mdi-chart-bubble',
                        title: '증여세',
                        to: '/jeungyeo'
                    }, {
                        icon: 'mdi-chart-bubble',
                        title: '중개보수료',
                        to: '/joonggae'
                    }, {
                        icon: 'mdi-chart-bubble',
                        title: '도로명주소',
                        to: '/doro'
                    }, {
                        icon: 'mdi-chart-bubble',
                        title: '평수 환산',
                        to: '/pyeongsu'
                    }, {
                        icon: 'mdi-chart-bubble',
                        title: '이자 계산기',
                        to: '/iza'
                    }
                ],
                miniVariant: false,
                right: true,
                title: 'DDhouseCal'
            }
        }
    }
</script>

<style>
    .being {
        display: flex;
        justify-content: center;
    }
</style>