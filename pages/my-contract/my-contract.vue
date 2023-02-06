<template>
    <view class="my-contract">
        <text>我的协议</text>
        <MyTabbar :selected="selected"></MyTabbar>
    </view>
</template>

<script>
    import MyTabbar from '@/common/tabbar/my-tabbar.vue'
    import MyHeader from '@/common/my-header/my-header.vue'
    import {
        mapState,
        mapActions
    } from 'vuex'
    export default {
        data() {
            return {
                selected: 3
            }
        },
        components: {
            MyTabbar
        }
    }
</script>

<style>
</style>
