<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">

            <v-row>
                <v-col cols="4">
                    <v-subheader color="green darken-4">매수가격</v-subheader>
                </v-col>
                <v-col cols="7">
                    <v-text-field placeholder="부동산을 매수할 금액" suffix="만원"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-subheader color="green darken-4">투입자본</v-subheader>
                </v-col>
                <v-col cols="7">
                    <v-text-field placeholder="투입할 자본금액" suffix="만원"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-subheader color="green darken-4">보증금</v-subheader>
                </v-col>
                <v-col cols="7">
                    <v-text-field placeholder="임대 보증금" suffix="만원"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-subheader color="green darken-4">월세</v-subheader>
                </v-col>
                <v-col cols="7">
                    <v-text-field placeholder="월 임대료" suffix="만원"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-subheader color="green darken-4">대출 금리</v-subheader>
                </v-col>
                <v-col cols="7">
                    <v-text-field placeholder="이자율" suffix="(연 %)"></v-text-field>
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