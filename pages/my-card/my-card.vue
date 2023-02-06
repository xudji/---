<template>
    <view class="my-card">
        <view class="my-header">
            <!-- 自定义头部 -->
            <MyHeader :isBack="false" hasBgc="transparent" title="我的名片" color="#ffffff"></MyHeader>
            <view class="header-main">
                <view class="main-content">
                    <image class="main-img" :src="avatarUrl" mode=""></image>
                    <view class="main">
                        <view class="login" v-if="isLogin" style="position: relative; z-index:999;">
                            <view @tap="goLogin" class="header-name">
                                授权登录
                            </view>
                        </view>
                        <view v-else class="header-name">
                            {{nickName}}
                        </view>
                    </view>
                </view>
            </view>
        </view>





        <!-- 内容块 -->
        <view class="card-content">
            <view class="card-item" @tap="goCard" :myInfo="myInfo">
                <iamge class="item-img" src=""></iamge>
                <view class="item-card">
                    名片
                </view>
                <view class="card-item" @tap="goMess">
                    <image class="item-img1" src="" mode=""></image>
                    <view class="item-card">
                        消息
                    </view>
                </view>
                <view class="card-item">
                    <image class="item-img2" src="" mode=""></image>
                    <view class="item-card" @tap="goHelp">
                        客服及帮助
                    </view>
                </view>
            </view>
            <MyTabber :selected="selected"></MyTabber>
            <view class="mask" v-if="isLogin">

            </view>
        </view>
    </view>
</template>

<script>
    import MyTabbar from '@/common/tabbar/my-tabbar.vue'
    import MyHeader from '@/common/tabbar/my-tabbar.vue'
    import {
        authLogin
    } from '@/servies/login.js'
    import {
        stuCurrent
    } from '@/servies/sign.js'
    import {
        stuInfo
    } from '@/servies/student.js'
    import {
        mapState,
        mapActions
    } from 'vuex'
    export default {
        data() {
            return {
                selected: 4,
                myInfo: null,
                params: {},
                isLogin: true,
                avatarUrl: '../',
                nickName: '胜云'
            }
        },
        components: {
            MyTabbar,
            MyHeader
        },
        onShow() {
            this.getStu()
        },
        computed: {
            ...mapState({
                signInfo: state => state.sign.signInfo,
                userList: state => state.user.userList,
                student: state => state.user.student
            })
        },
        methods: {

            getStu() {
                if (uni.getStorageSync('token')) {
                    stuInfo().then(res => {
                        if (!res.name) return
                        this.myInfo = res
                        this.changeStudentActions(res)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            },
            getUser() {
                if (wx.getUserProfile) {

                    wx.getUserProfile({
                        desc: '用于获取名片展示用户头像和昵称',
                        lang: 'zh_CN',
                        sucess: userData => {
                            this.nickName = userData.userInfo.nickName
                            this.avatarUrl = userData.userInfo.avatarUrl
                            this.params.avatarUrl = userData.userInfo.avatarUrl
                            this.params.nickName = userData.userInfo.nickName
                            this.login()
                        },
                        fail: (err) => {
                            this.isLogin = false
                        }
                    })
                } else {
                    wx.getUserInfo({
                        success: res => {
                            this.params.avatarUrl = res.userInfo.avatarUrl
                            this.params.nickName = res.userInfo.nickName
                            this.nickName = res.userInfo.nickName
                            this.avatarUrl = res.userInfo.avatarUrl
                            this.login()
                        }
                    })
                }
            },
            login() {
                uni.login({

                    provider: 'weixin',
                    success: loginRes => {
                        authLogin({
                            code: loginRes.code
                        }).then(res => {
                            this.params.openId = res.openId
                            // 把openId保存到vuex
                            this.changeOpenIdActions(this.params)
                            //存储token到本地
                            uni.setStorageSync('token', res.token)
                            //获取学生信息
                            this.getStu()
                            //获取用户协议信息
                            stuCurrent().then(res => {
                                if (res.resultCode === 1020) {
                                    res.classProtocolPath = res.classProtocolPath
                                    res.signProtocolPath =
                                        'https://fawnuat.xuxiluxian.cn/api' + res
                                        .signProtocoPath
                                    this.addSignInfoActions(res)
                                    //改变状态
                                    this.changeStatus({
                                        status: 1
                                    }).catch(err => {
                                        console.log(err)
                                    })
                                    uni.showToast({
                                        title: '登录成功',
                                        icon: 'none'
                                    })
                                }



                            })
                        })
                    }


                })
            }
        }
    }
</script>

<style scoped>
</style>
