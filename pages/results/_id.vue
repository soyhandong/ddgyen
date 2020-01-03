<template>
    <div>
        <h1>Results of Calculating
            {{$route.params.id}}</h1>
        <h2>
            output
        </h2>
        {{albumData}}
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        asyncData({params}) {
             axios.post('https://www.ddhouse.co.kr/api/v1/public/calculator/fee-broker', {
                mjws: '',
                asset_type: '',
                price_m: '',
                price_wbo: '',
                price_w: '',
                price_current: '',
                price_premium: ''
             })
                    .then(res => {
                        return {albumData: response.data.results}
                    })
                    .catch(err => {
                        console.log(err);
                    });

        },
        middleware: 'letscal'
    }
</script>