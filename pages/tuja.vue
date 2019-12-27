<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-col cols="11">
                <v-row justify="end">
                    <v-dialog v-model="dialog" width="600px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="black" dark="dark" v-on="on">투자 수익률이란?</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">투자 수익률이란?</span>
                            </v-card-title>
                            <v-card-text>
                                부동산 투자 시, 투입 자본에 대해 매년 순이익이 얼마정도인지를 나타내는 비율입니다.
                                <br>즉, {(수익 - 비용) / 투입자본금액} x 100
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn class="caption" color="green darken-1" text="text" @click="dialog = false">OK</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                </v-col>
                <v-row>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">매수가격</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field class="caption" placeholder="부동산을 매수할 금액" suffix="만원"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">투입자본</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field class="caption" placeholder="투입할 자본금액" suffix="만원"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">보증금</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field class="caption" placeholder="임대 보증금" suffix="만원"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">월세</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field class="caption" placeholder="월 임대료" suffix="만원"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">대출 금리</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field class="caption" placeholder="이자율" suffix="(연 %)"></v-text-field>
                    </v-col>
                </v-row>

                <div class="being">
                    <v-btn max-width="80%" min-width="80%" color="#2D9527" dark="dark">계산하기</v-btn>
                </div>

            </v-flex>
        </v-layout>

    </template>
    <script>
        export default {name: 'yangdo'}
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