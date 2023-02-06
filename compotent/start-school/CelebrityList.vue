<template>
    <view class="clebrityList">
        <Celebrity :datalist="excellentList"></Celebrity>
    </view>
</template>

<script>
    import Celebrity from '@/compotent/start-school/Celebrity.vue'
    export default {
        props: {
            excellentList: {
                type: Array,
                default: {}
            },
        },
        components: {
            Celebrity
        },
    }
</script>


<style>
</style>
