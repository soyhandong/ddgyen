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
                            style="min-width:50%; max-width:50%;">주택</v-btn>
                        <v-btn
                            class="btn"
                            value="a2"
                            color="white"
                            style="min-width:50%; max-width:50%;">농지</v-btn>
                        <v-btn
                            class="btn"
                            value="a3"
                            color="white"
                            style="min-width:100%; max-width:100%;">토지,건물,오피스텔</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>취득 구분</v-list-item-title>
                    <v-btn-toggle
                        v-model="text2"
                        tile="tile"
                        color="green"
                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                        <v-btn
                            class="btn"
                            value="b1"
                            color="white"
                            style="min-width:25%; max-width:25%;">매매</v-btn>
                        <v-btn
                            class="btn"
                            value="b2"
                            color="white"
                            style="min-width:25%; max-width:25%;">증여</v-btn>
                        <v-btn
                            class="btn"
                            value="b3"
                            color="white"
                            style="min-width:25%; max-width:25%;">상속</v-btn>
                        <v-btn
                            v-if="(text1=='a1')||(text1=='a3')"
                            class="btn"
                            value="b4"
                            color="white"
                            style="min-width:25%; max-width:25%;">신축</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <div v-if="(text1=='a1')&&(text2=='b1')">
                <v-list-item>
                    <v-list-item-content>
                        <v-btn-toggle
                            v-model="text3"
                            tile="tile"
                            color="green"
                            style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                            <v-btn
                                class="btn"
                                value="c1"
                                color="white"
                                style="min-width:100%; max-width:100%;">85m^2 이하(읍, 면지역은 100m^2)</v-btn>
                            <v-btn
                                class="btn"
                                value="c2"
                                color="white"
                                style="min-width:100%; max-width:100%;">85m^2 초과(읍, 면지역은 100m^2)</v-btn>
                        </v-btn-toggle>
                    </v-list-item-content>
                </v-list-item>
            </div>
            
            <div v-if="(text1=='a2')&&(text2=='b1')">
                <v-list-item>
                    <v-list-item-content>
                        <v-btn-toggle
                            v-model="text4"
                            tile="tile"
                            color="green"
                            style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                            <v-btn
                                class="btn"
                                value="d1"
                                color="white"
                                style="min-width:50%; max-width:50%;">신규</v-btn>
                            <v-btn
                                class="btn"
                                value="d2"
                                color="white"
                                style="min-width:50%; max-width:50%;">2년 이상 자경</v-btn>
                        </v-btn-toggle>
                    </v-list-item-content>
                </v-list-item>
            </div>

            <v-list-item>
                <v-list-item-content>
                    <v-col cols="7">
                        <v-list-item-title>취득가액</v-list-item-title>
                    </v-col>
                    <v-col cols="5">
                        <v-row justify="center">
                            <v-dialog v-model="dialog" width="600px">
                                <template v-slot:activator="{ on }">
                                    <v-btn color="primary" v-on="on">보기</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">취득가액 산정방법</span>
                                    </v-card-title>
                                    <v-card-text>・ 매매, 분양, 경매 등 개인간의 유상거래일 때는 신고가액 (실제 거래가격을 의미하며, 신고를 하지 않거나 신고 금액이
                                        시가표준액에 미달 또는 신고 가액 표시가 없는 경우 시가표준액으로 계산함)
                                        <br>
                                            <br>・ 상속, 증여 등 무상거래일 때는 시가표준액
                                                <br>
                                                    <br>・ 국가, 법인 등에 의해 취득가격이 증명되는 거래일 때는 취득가격
                                                        <br>
                                                            <br>※ 시가 표준액이란, 주택은 '개별 주택 공시가격', 주택 이외 건물은 '지자체장이 결정한 가액', 토지는 '개별공시지가'를 의미합니다
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-btn color="green darken-1" text="text" @click="dialog = false">OK</v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>
                                                </v-row>
                                            </v-col>
                                            <v-row>
                                                <v-col cols="4">
                                                    <v-subheader color="green darken-4">취득가액</v-subheader>
                                                </v-col>
                                                <v-col cols="7">
                                                    <v-text-field placeholder="취득가액 입력" suffix="만원"></v-text-field>
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
                                    return {text1: 'a1', text2: 'b1', text3: 'c1', text4: 'd1'}
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