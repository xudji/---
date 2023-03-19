<template>
    <view class="my-contract">
        <text>我的协议</text>
        <MyHeader title="签署协议"></MyHeader>
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
    import {
        stuCurrent
    } from '@/servies/sign.js'
    export default {
        data() {
            return {
                selected: 3
            }
        },
        components: {
            MyTabbar
        },
        onLoad() {
            this.contractTime = uni.getStorageSync('signtime')
        },
        computed: {
            ...mapState({
                userList: state => state.user.userList,
                signInfo: state => state.sign.signInfo,
                barHeight: state => state.bar.barHeight
            })
        },
        onReady() {
            uni.getSystemInfo({
                success: (res) => {
                    this.clientHeight = res.windowHeight - 68 - res.statusBarHeight
                }
            })
        },
        methods: {
            ...mapActions(['addSignInfoActions']),
            _init() {
                stuCurrent().then(res => {
                    this.userList.status = 1
                    res.classProtocolPath = res.classProtocolPath
                    res.signProtocolPath = 'https://fawn.xuexiluxian.cn/api' + res.signProtocolPath
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style>
</style>
