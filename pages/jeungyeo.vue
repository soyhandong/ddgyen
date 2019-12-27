<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>대상물 구분</v-list-item-title>
                    <v-btn-toggle
                        v-model="text1"
                        tile="tile"
                        color="green"
                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                        <v-btn
                            class="btn"
                            value="a1"
                            color="white"
                            style="min-width:50%; max-width:50%;">배우자</v-btn>
                        <v-btn
                            class="btn"
                            value="a2"
                            color="white"
                            style="min-width:50%; max-width:50%;">직계존속</v-btn>
                        <v-btn
                            class="btn"
                            value="a3"
                            color="white"
                            style="min-width:33%; max-width:33%;">직계비속</v-btn>
                        <v-btn
                            class="btn"
                            value="a4"
                            color="white"
                            style="min-width:33%; max-width:33%;">기타친족</v-btn>
                        <v-btn
                            class="btn"
                            value="a5"
                            color="white"
                            style="min-width:34%; max-width:34%;">타인</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>
            <v-col cols="11">
                <v-row justify="end">
                    <v-dialog v-model="dialog" width="600px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="black" dark="dark" v-on="on">용어정리</v-btn>
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
                                                                                            <v-btn color="green darken-1" text="text" @click="dialog = false">OK</v-btn>
                                                                                        </v-card-actions>
                                                                                    </v-card>
                                                                                </v-dialog>
                                                                            </v-row>
                                                                        </v-col>
                                                                        <div v-if="text1=='a2'">
                                                                            <v-list-item>
                                                                                <v-list-item-content>
                                                                                    <v-list-item-title>수증자 연령 구분</v-list-item-title>
                                                                                    <v-btn-toggle
                                                                                        v-model="text2"
                                                                                        tile="tile"
                                                                                        color="green"
                                                                                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                                                                                        <v-btn
                                                                                            class="btn"
                                                                                            value="b1"
                                                                                            color="white"
                                                                                            style="min-width:50%; max-width:50%;">성년</v-btn>
                                                                                        <v-btn
                                                                                            class="btn"
                                                                                            value="b2"
                                                                                            color="white"
                                                                                            style="min-width:50%; max-width:50%;">미성년</v-btn>
                                                                                    </v-btn-toggle>
                                                                                </v-list-item-content>
                                                                            </v-list-item>
                                                                            <v-list-item>
                                                                                <v-list-item-content>
                                                                                    <v-list-item-title>수증자 - 증여자 관계 구분</v-list-item-title>
                                                                                    <v-btn-toggle
                                                                                        v-model="text3"
                                                                                        tile="tile"
                                                                                        color="green"
                                                                                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                                                                                        <v-btn
                                                                                            class="btn"
                                                                                            value="c1"
                                                                                            color="white"
                                                                                            style="min-width:50%; max-width:50%;">세대 생략인 경우</v-btn>
                                                                                        <v-btn
                                                                                            class="btn"
                                                                                            value="c2"
                                                                                            color="white"
                                                                                            style="min-width:50%; max-width:50%;">세대 생략이 아닌 경우</v-btn>
                                                                                    </v-btn-toggle>
                                                                                </v-list-item-content>
                                                                            </v-list-item>
                                                                        </div>

                                                                        <v-list-item>
                                                                            <v-list-item-content>
                                                                                <v-row>
                                                                                    <v-col cols="4">
                                                                                        <v-subheader color="green darken-4">증여금액</v-subheader>
                                                                                    </v-col>
                                                                                    <v-col cols="7">
                                                                                        <v-text-field placeholder="증여금액 입력" suffix="만원"></v-text-field>
                                                                                    </v-col>
                                                                                </v-row>
                                                                            </v-list-item-content>
                                                                        </v-list-item>

                                                                        <div class="being">
                                                                            <v-btn max-width="80%" min-width="80%" color="#2D9527" dark="dark">계산하기</v-btn>
                                                                        </div>

                                                                    </v-flex>
                                                                </v-layout>

                                                            </template>
                                                            <script>
                                                                export default {
                                                                    name: 'chwideug',
                                                                    data() {
                                                                        return {text1: 'a1', text2: 'b1', text3: 'c1'}
                                                                    }
                                                                }
                                                            </script>

                                                            <style scoped="scoped">
                                                                .btn {
                                                                    border: rgb(220, 226, 233);
                                                                }
                                                                .being {
                                                                    display: flex;
                                                                    justify-content: center;
                                                                }
                                                            </style>