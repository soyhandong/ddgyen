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
                                                    asset_type="house"
                                                    value="a1"
                                                    height="40px"
                                                    style="width: 45%">주택</v-btn>
                                                <v-btn
                                                    class="caption"
                                                    asset_type="land"
                                                    value="a2"
                                                    height="40px"
                                                    style="width: 45%">농지</v-btn>
                                                <v-btn
                                                    class="caption"
                                                    asset_type="farm"
                                                    value="a3"
                                                    height="40px"
                                                    style="width: 90%">토지,건물,오피스텔</v-btn>
                                            </v-btn-toggle>
                                        </v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-content>
                                            <p class="font-weight-black">취득 구분</p>
                                            <v-btn-toggle
                                                v-model="text2"
                                                tile="tile"
                                                color="blue"
                                                group="group"
                                                style="flex-wrap: wrap; width: 100%">
                                                <v-btn
                                                    class="caption"
                                                    kind="meme"
                                                    value="b1"
                                                    height="40px"
                                                    style="width: 22.5%">매매</v-btn>
                                                <v-btn
                                                    class="caption"
                                                    kind="gift"
                                                    value="b2"
                                                    height="40px"
                                                    style="width: 22.5%">증여</v-btn>
                                                <v-btn
                                                    class="caption"
                                                    kind="inherit"
                                                    value="b3"
                                                    height="40px"
                                                    style="width: 22.5%">상속</v-btn>
                                                <v-btn
                                                    v-if="(text1=='a1')||(text1=='a3')"
                                                    class="caption"
                                                    kind="build"
                                                    value="b4"
                                                    height="40px"
                                                    style="width: 22.5%">신축</v-btn>
                                            </v-btn-toggle>
                                        </v-list-item-content>
                                    </v-list-item>

                                    <div v-if="(text1=='a1')&&(text2=='b1')">
                                        <v-list-item>
                                            <v-list-item-content>
                                                <p class="font-weight-black">면적</p>

                                                <v-btn-toggle
                                                    v-model="text3"
                                                    tile="tile"
                                                    color="blue"
                                                    group="group"
                                                    style="flex-wrap: wrap; width: 100%">
                                                    <v-btn class="caption" area="small" value="c1" height="40px" style="width: 90%">85m^2 이하(읍, 면지역은 100m^2)</v-btn>
                                                    <v-btn class="caption" area="large" value="c2" height="40px" style="width: 90%">85m^2 초과(읍, 면지역은 100m^2)</v-btn>
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
                                                    color="blue"
                                                    group="group"
                                                    style="flex-wrap: wrap; width: 100%">
                                                    <v-btn
                                                        class="caption"
                                                        farm_type="new"
                                                        value="d1"
                                                        height="40px"
                                                        style="width: 45%">신규</v-btn>
                                                    <v-btn
                                                        class="caption"
                                                        farm_type="farming"
                                                        value="d2"
                                                        height="40px"
                                                        style="width: 45%">2년 이상 자경</v-btn>
                                                </v-btn-toggle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </div>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <p class="font-weight-black">취득가액</p>
                                            <v-col cols="4">
                                                <v-subheader class="caption" color="blue darken-4">취득가액</v-subheader>
                                            </v-col>
                                            <v-col cols="7">
                                                <v-text-field class="caption" price="price" placeholder="취득가액 입력" suffix="만원"></v-text-field>
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
                                name: 'chwideug',
                                data() {
                                    return {
                                        text1: 'a1',
                                        text2: 'b1',
                                        text3: 'c1',
                                        text4: 'd1',
                                        dialog: false,
                                        asset_type: null,
                                        kind: null,
                                        area: null,
                                        price: null,
                                        farm_type: null
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