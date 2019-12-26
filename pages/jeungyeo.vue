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
                        <v-btn class="btn" color="white" style="min-width:50%; max-width:50%;">배우자</v-btn>
                        <v-btn class="btn" color="white" style="min-width:50%; max-width:50%;">직계존속</v-btn>
                        <v-btn class="btn" color="white" style="min-width:33%; max-width:33%;">직계비속</v-btn>
                        <v-btn class="btn" color="white" style="min-width:33%; max-width:33%;">기타친족</v-btn>
                        <v-btn class="btn" color="white" style="min-width:34%; max-width:34%;">타인</v-btn>
                        
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader color="green darken-4">증여금액</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field placeholder="증여금액을 입력하세요" suffix="만원"></v-text-field>
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