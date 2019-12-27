<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>대상물 구분</v-list-item-title>
                    <v-btn-toggle
                        v-model="text1"
                        color="green"
                        tile="tile"
                        group="group"
                        style="min-width:100%; max-width:100%;">

                        <v-btn value="a1" style="min-width:33%; max-width:33%;">원리금균등</v-btn>
                        <v-btn value="a2" style="min-width:33%; max-width:33%;">원금균등</v-btn>
                        <v-btn value="a3" style="min-width:34%; max-width:34%;">만기일시</v-btn>

                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader color="green darken-4">대출기간</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field placeholder="매매가 입력" suffix="개월"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader color="green darken-4">대출금액</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field placeholder="매매가 입력" suffix="만원"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader color="green darken-4">연이자율</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field placeholder="매매가 입력" suffix="%"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader color="green darken-4">거치기간</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field placeholder="매매가 입력" suffix="개월"></v-text-field>
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
            return {text1: 'a1'}
        }
    }
</script>

<style scoped="scoped">
    .being {
        display: flex;
        justify-content: center;
    }
</style>