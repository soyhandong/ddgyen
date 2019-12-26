<template>
    <v-layout>
        <v-flex>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>대상물의 등기 여부</v-list-item-title>
                    <v-btn-toggle v-model="text" tile="tile">
                        <v-btn class="btn" color="white">
                            등기
                        </v-btn>
                        <v-btn class="btn" color="white">
                            미등기
                        </v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-itme>
                <v-list-item-content>

                    <v-list-item-title>대상물 구분</v-list-item-title>
                    <v-btn-toggle v-model="text" tile="tile">
                        <v-btn class="btn" color="white">
                            주택
                        </v-btn>
                        <v-btn class="btn" color="white">
                            비사업용토지
                        </v-btn>
                        <v-btn class="btn" color="white">
                            기타 부동산(사업용 토지, 분양권 등)
                        </v-btn>
                    </v-btn-toggle>

                </v-list-item-content>
            </v-list-itme>

            <v-list-itme>
                <v-list-item-content>
                    <v-btn-toggle v-model="text" tile="tile">
                        <v-btn class="btn" color="white">
                            1주택자(일시적 2주택자)
                        </v-btn>
                        <v-btn class="btn" color="white">
                            2주택자이상
                        </v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-itme>

        </v-flex>
    </v-layout>
</template>

<style scoped="scoped">
    .btn {
        border: rgb(220, 226, 233);
    }
    .tgrid {
        display: grid;
    }
    .display {
        grid-column: 1/2;
        background-color: white;
        color: black;
    }
</style>