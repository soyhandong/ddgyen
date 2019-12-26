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
                        <v-btn class="btn" color="white" style="min-width:33%; max-width:33%;">주택</v-btn>
                        <v-btn class="btn" color="white" style="min-width:33%; max-width:33%;">농지</v-btn>
                        <v-btn class="btn" color="white" style="min-width:34%; max-width:34%;">토지,건물,오피스텔</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>취득 구분</v-list-item-title>
                    <v-btn-toggle
                        v-model="text"
                        tile="tile"
                        color="green"
                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                        <v-btn class="btn" color="white" style="min-width:25%; max-width:25%;">매매</v-btn>
                        <v-btn class="btn" color="white" style="min-width:25%; max-width:25%;">증여</v-btn>
                        <v-btn class="btn" color="white" style="min-width:25%; max-width:25%;">상속</v-btn>
                        <v-btn class="btn" color="white" style="min-width:25%; max-width:25%;">신축</v-btn>
                    </v-btn-toggle>
                    <v-btn-toggle
                        v-model="text"
                        tile="tile"
                        color="green"
                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                        <v-btn class="btn" color="white" style="min-width:50%; max-width:50%;">85m^2 이하(읍, 면지역은 100m^2)</v-btn>
                        <v-btn class="btn" color="white" style="min-width:50%; max-width:50%;">85m^2 초과(읍, 면지역은 100m^2)</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>취득가액</v-list-item-title>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader color="green darken-4">취득가액</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field placeholder="취득가액을 입력하세요" suffix="만원"></v-text-field>
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