<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-dialog v-model="dialog" width="600px">
                <template v-slot:activator="{ on }">
                    <v-btn
                        absolute="absolute"
                        color="orange"
                        dark="dark"
                        fab="fab"
                        right="right"
                        small="small"
                        v-on="on">
                        <v-icon small="small">mdi-help</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">용어정리</span>
                    </v-card-title>
                    <v-card-text>
                        ※ 세대 생략<br>
                            의미 - 증여자가 수증자의 "부모가 아닌 직계 존속"이면 할증함. 단 수증자의 최근인인 직계존속이 사망하여 그 사망자의 친근칙인 직계존속이
                            증여하는 경우는 제외<br>
                                예시- 손자의 부모가 살아있는 상태에서 할아버지가 손자에게 증여하는 경우<br>
                                    <br>

                                        ※ 관계명칭<br>
                                            * 배우자<br>
                                                의미 - 혼인(신고)을 통해 결합된 남녀관계에서 상대방을 의미<br>
                                                    예시 – 처, 남편<br>
                                                        <br>

                                                            * 직계존손<br>
                                                                의미 - 조상으로부터 직선으로 계속하여 자기에 이르기까지의 혈족<br>
                                                                    예시 - 조,모,양부,양모,조부,조모,증조부,증조모,고조부,고조모,외조부,외조모,계부,계모,외증조부,외증조모,외고조부,외고조모<br>
                                                                        <br>

                                                                            * 기타친족<br>
                                                                                의미 - 6촌이내의 혈족 및 4촌이내의 인척<br>
                                                                                    예시 -
                                                                                    형,제,매,누이,오빠,언지,자부,사위,시부,시모,장인,장모,백부,백모,숙부,숙모,형수,제수,시숙,올케,종형,종형수,종제,종제수,형부,매부,시누이,종매,종매부,제부,조카,동서,손부,손서,증손부

                                                                                </v-card-text>
                                                                                <v-card-actions>
                                                                                    <v-spacer></v-spacer>
                                                                                    <v-btn
                                                                                        class="caption"
                                                                                        color="blue darken-1"
                                                                                        text="text"
                                                                                        @click="dialog = false">OK</v-btn>
                                                                                </v-card-actions>
                                                                            </v-card>
                                                                        </v-dialog>
                                                                        <v-list-item>
                                                                            <v-list-item-content>
                                                                                <p class="font-weight-black">대상물 구분</p>
                                                                                <v-btn-toggle
                                                                                    v-model="text1"
                                                                                    tile="tile"
                                                                                    color="blue"
                                                                                    group="group"
                                                                                    style="flex-wrap: wrap; width: 100%">
                                                                                    <v-btn
                                                                                        class="caption"
                                                                                        giver="couple"
                                                                                        value="a1"
                                                                                        height="40px"
                                                                                        style="width: 45%">배우자</v-btn>
                                                                                    <v-btn
                                                                                        class="caption"
                                                                                        giver="parent"
                                                                                        value="a2"
                                                                                        height="40px"
                                                                                        style="width: 45%">직계존속</v-btn>
                                                                                    <v-btn
                                                                                        class="caption"
                                                                                        giver="child"
                                                                                        value="a3"
                                                                                        height="40px"
                                                                                        style="width: 30%">직계비속</v-btn>
                                                                                    <v-btn
                                                                                        class="caption"
                                                                                        giver="family"
                                                                                        value="a4"
                                                                                        height="40px"
                                                                                        style="width: 30%">기타친족</v-btn>
                                                                                    <v-btn
                                                                                        class="caption"
                                                                                        giver="other"
                                                                                        value="a5"
                                                                                        height="40px"
                                                                                        style="width: 30%">타인</v-btn>
                                                                                </v-btn-toggle>
                                                                            </v-list-item-content>
                                                                        </v-list-item>
                                                                        <div v-if="text1=='a2'">
                                                                            <v-list-item>
                                                                                <v-list-item-content>
                                                                                    <p class="font-weight-black">수증자 연령 구분</p>
                                                                                    <v-btn-toggle
                                                                                        v-model="text2"
                                                                                        tile="tile"
                                                                                        color="blue"
                                                                                        group="group"
                                                                                        style="flex-wrap: wrap; width: 100%">
                                                                                        <v-btn
                                                                                            class="caption"
                                                                                            receiver_age="adult"
                                                                                            value="b1"
                                                                                            height="40px"
                                                                                            style="width: 45%">성년</v-btn>
                                                                                        <v-btn
                                                                                            class="caption"
                                                                                            receiver_age="children"
                                                                                            value="b2"
                                                                                            height="40px"
                                                                                            style="width: 45%">미성년</v-btn>
                                                                                    </v-btn-toggle>
                                                                                </v-list-item-content>
                                                                            </v-list-item>

                                                                            <v-list-item>
                                                                                <v-list-item-content>
                                                                                    <p class="font-weight-black">수증자 - 증여자 관계 구분</p>

                                                                                    <v-btn-toggle
                                                                                        v-model="text3"
                                                                                        tile="tile"
                                                                                        color="blue"
                                                                                        group="group"
                                                                                        style="flex-wrap: wrap; width: 100%">
                                                                                        <v-btn
                                                                                            class="caption"
                                                                                            receiver_relation="exclude"
                                                                                            value="c1"
                                                                                            height="40px"
                                                                                            style="width: 45%">세대 생략인 경우</v-btn>
                                                                                        <v-btn
                                                                                            class="caption"
                                                                                            receiver_relation="include"
                                                                                            value="c2"
                                                                                            height="40px"
                                                                                            style="width: 45%">세대 생략이 아닌 경우</v-btn>
                                                                                    </v-btn-toggle>
                                                                                </v-list-item-content>
                                                                            </v-list-item>
                                                                        </div>
                                                                        <v-list-item>
                                                                            <v-list-item-content>
                                                                                <p class="font-weight-black">증여금액</p>
                                                                                <v-col cols="4">
                                                                                    <v-subheader class="caption" color="blue darken-4">증여금액</v-subheader>
                                                                                </v-col>
                                                                                <v-col cols="7">
                                                                                    <v-text-field class="caption" price="price" placeholder="증여금액 입력" suffix="만원"></v-text-field>
                                                                                </v-col>

                                                                                <div class="being">
                                                                                    <v-btn max-width="80%" min-width="80%" color="#2D9527" dark="dark">계산하기</v-btn>
                                                                                </div>

                                                                            </v-list-item-content>
                                                                        </v-list-item>

                                                                    </v-flex>
                                                                </v-layout>
                                                            </template>
                                                            <script>
                                                                export default {
                                                                    name: 'jeungyeo',
                                                                    data() {
                                                                        return {
                                                                            text1: 'a1',
                                                                            text2: 'b1',
                                                                            text3: 'c1',
                                                                            dialog: false,
                                                                            giver: null,
                                                                            price: null,
                                                                            receiver_relation: null,
                                                                            receiver_age: null
                                                                        }
                                                                    }
                                                                }
                                                            </script>

                                                            <style scoped="scoped">
                                                                .being {
                                                                    display: flex;
                                                                    justify-content: center;
                                                                }
                                                            </style>