<template>

    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>대상물의 등기 여부</v-list-item-title>
                    <v-btn-toggle
                        v-model="text1"
                        tile="tile"
                        color="green"
                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                        <v-btn
                            class="btn"
                            value="a1"
                            color="white"
                            style="min-width:50%; max-width:50%;">등기</v-btn>
                        <v-btn
                            class="btn"
                            value="a2"
                            color="white"
                            style="min-width:50%; max-width:50%;">미등기</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>
            <div v-if="text1=='a1'">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>대상물 구분</v-list-item-title>
                        <v-btn-toggle
                            v-model="text2"
                            tile="tile"
                            color="green"
                            style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                            <v-btn
                                class="btn"
                                value="b1"
                                color="white"
                                style="min-width:50%; max-width:50%;">주택</v-btn>
                            <v-btn
                                class="btn"
                                value="b2"
                                color="white"
                                style="min-width:50%; max-width:50%;">비사업용토지</v-btn>
                            <v-btn
                                class="btn"
                                value="b3"
                                color="white"
                                style="min-width:100%; max-width:100%;">기타 부동산(사업용 토지, 분양권 등)</v-btn>
                        </v-btn-toggle>
                    </v-list-item-content>
                </v-list-item>
                <div v-if="text2=='b1'">
                    <v-list-item>
                    <v-list-item-content>
                        <v-col cols="8">
                            <v-list-item-title>일시적 1가구 2주택 조건</v-list-item-title>
                        </v-col>
                        <v-col cols="4">
                            <v-row justify="center">
                                <v-dialog v-model="dialog" width="600px">
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="black" v-on="on">보기</v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">일시적 1가구 2주택 조건</span>
                                        </v-card-title>
                                        <v-card-text>기존 주택을 새 주택 구입일로부터 3년 이내 (일부 특정 경우에는 5년 이내)에 팔아야 일시적 1가구 2주택 조건을 만족합니다.
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green darken-1" text="text" @click="dialog = false">OK</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-row>
                        </v-col>
                        <v-btn-toggle
                            v-model="text3"
                            tile="tile"
                            color="green"
                            style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                            <v-btn
                                class="btn"
                                value="c1"
                                color="white"
                                style="min-width:50%; max-width:50%;">1주택자(일시적2주택자)</v-btn>
                            <v-btn
                                class="btn"
                                value="c2"
                                color="white"
                                style="min-width:50%; max-width:50%;">2주택자이상</v-btn>
                        </v-btn-toggle>
                    </v-list-item-content>
                </v-list-item>
                </div>
            </div>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>금액</v-list-item-title>

                    <v-col cols="6">
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y="offset-y"
                            min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field v-model="date" label="양도일선택" readonly="readonly" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title="no-title" scrollable="scrollable">
                                <v-btn text="text" color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn text="text" color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field placeholder="양도가액" suffix="만원"></v-text-field>
                    </v-col>

                    <v-col cols="6">
                        <v-menu
                            ref="menu2"
                            v-model="menu2"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y="offset-y"
                            min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field v-model="date" label="취득일선택" readonly="readonly" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title="no-title" scrollable="scrollable">
                                <v-btn text="text" color="primary" @click="menu2 = false">Cancel</v-btn>
                                <v-btn text="text" color="primary" @click="$refs.menu2.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field placeholder="취득가액" suffix="만원"></v-text-field>
                    </v-col>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader color="green darken-4">소요경비</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field placeholder="소요경비 입력" suffix="만원"></v-text-field>
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
        name: 'yangdo',
        date: new Date()
            .toISOString()
            .substr(0, 10),
        data() {
            return {
                text1: 'a1',
                text2: 'b1',
                text3: 'c1',
                menu: false,
                modal: false,
                menu2: false,
                dialog: false
            }
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