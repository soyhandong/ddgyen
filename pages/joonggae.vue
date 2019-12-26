<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>대상물 구분</v-list-item-title>
                    <v-btn-toggle
                        v-model="text"
                        tile="tile"
                        color="green"
                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                        <v-btn class="btn" color="white" style="min-width:33%; max-width:33%;">매매계약</v-btn>
                        <v-btn class="btn" color="white" style="min-width:33%; max-width:33%;">전세계약</v-btn>
                        <v-btn class="btn" color="white" style="min-width:34%; max-width:34%;">월세계약</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>
            
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>거래 구분</v-list-item-title>
                    <v-btn-toggle
                        v-model="text"
                        tile="tile"
                        color="green"
                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                        <v-btn class="btn" color="white" style="min-width:33%; max-width:33%;">주택</v-btn>
                        <v-btn class="btn" color="white" style="min-width:33%; max-width:33%;">오피스텔</v-btn>
                        <v-btn class="btn" color="white" style="min-width:34%; max-width:34%;">주택이외(토지,상가 등)</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>            

            <v-list-item>
                <v-list-item-content>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader color="green darken-4">매매가</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field placeholder="매매가를 입력하세요" suffix="만원"></v-text-field>
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
    export default {name: 'chwideug'}
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