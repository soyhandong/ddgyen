<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>대상물의 등기 여부</v-list-item-title>
                    <v-btn-toggle
                        v-model="text"
                        tile="tile"
                        color = "green"
                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                        <v-btn class="btn" color="white" style="min-width:50%; max-width:50%;">등기</v-btn>
                        <v-btn class="btn" color="white" style="min-width:50%; max-width:50%;">미등기</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>대상물 구분</v-list-item-title>
                    <v-btn-toggle
                        v-model="text"
                        tile="tile"
                        color="green"
                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                        <v-btn class="btn" color="white" style="min-width:50%; max-width:50%;">주택</v-btn>
                        <v-btn class="btn" color="white" style="min-width:50%; max-width:50%;">비사업용토지</v-btn>
                        <v-btn class="btn" color="white" style="min-width:100%; max-width:100%;">기타 부동산(사업용 토지, 분양권 등)</v-btn>
                    </v-btn-toggle>
                    
                    <v-btn-toggle
                        v-model="text"
                        tile="tile"
                        color="green"
                        style="flex-wrap: wrap; min-width:100%; max-width:100%;">
                        <v-btn class="btn" color="white" style="min-width:50%; max-width:50%;">1주택자(일시적2주택자)</v-btn>
                        <v-btn class="btn" color="white" style="min-width:50%; max-width:50%;">2주택자이상</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>날짜 선택</v-list-item-title>
                    <v-btn class="btn" @click="arrivalPicker" color="white">
                        양도일을선택하세요
                    </v-btn>

                    <v-date-picker v-if="arrivalPicker" v-model="picker"></v-date-picker>
                    <v-btn class="btn" color="white">
                        취득일을선택하세요
                    </v-btn>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>금액</v-list-item-title>
                    
                </v-list-item-content>
            </v-list-item>

        </v-flex>
    </v-layout>

</template>
<script>
    export default {
        name: 'yangdo',
        data: () => ({
            arrivalPicker: false,
            picker: new Date()
                .toISOString()
                .substr(0, 10)
        }),
    }
</script>

<style scoped="scoped">
    .btn {
        border: rgb(220, 226, 233);
    }
</style>