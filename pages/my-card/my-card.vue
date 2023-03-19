<template>
    <view class="my-card">
        <view class="my-header">
            <!-- 自定义头部 -->
            <MyHeader :isBack="false" hasBgc="transparent" title="我的名片" color="#ffffff"></MyHeader>
            <view class="header-main">
                <view class="main-content">
                    <view class="main">
                        <view class="header-name">
                            <image class="main-img" :src="avatarUrl" mode=""></image> {{nickName}}
                        </view>
                    </view>

                </view>

            </view>
        </view>

        <!-- 内容块 -->
        <view class="card-content">
            <view class="card-item" :myInfo="myInfo">
                <view class="item-card" @tap="goCard">
                    名片
                </view>
            </view>
            <view class="card-item" @tap="goMess">
                <view class="item-card">
                    消息
                </view>
            </view>
            <view class="card-item">
                <view class="item-card" @tap="goHelp">
                    客服及帮助
                </view>
            </view>
            <view class="card-item">
                <view class="item-card" @tap="goBack">
                    返回
                </view>
            </view>
        </view>



        <MyTabber :selected="selected"></MyTabber>

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
                selected: 4,
                myInfo: null,
                params: {},

                avatarUrl: '../../static/img/pop.jpeg',
                nickName: '胜云'
            }
        },
        components: {
            MyTabbar,
            MyHeader
        },
        methods: {
            goCard() {
                uni.showToast({
                    title: '请先入学',
                    icon: 'error'
                })
            },
            goMess() {
                uni.showToast({
                    title: '该功能暂不开放',
                    icon: 'error'
                });
            },
            goBack() {
                uni.switchTab({
                    url: '/pages/index/index'
                });
            },
            goHelp() {
                uni.navigateTo({
                    url: '../consulting-help/consulting-help'
                })
            }
        }
    }
</script>

<style scoped>
    .my-card {

        width: 100vw;
        height: 100vh;
        background-color: #F3F5F7;
    }

    .my-header {
        background-color: #5555ff;
        width: 100vw;
        height: 400rpx;
    }



    .main-content {}

    .main-img {
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
        position: absolute;
        left: -150rpx;
        top: -30rpx;
    }

    .main {
        font-size: 40rpx;
        height: 60rpx;

        color: #FFFFFF;
        position: absolute;
        top: 200rpx;
        left: 50%;
        transform: translate(-50%);
    }

    .header-name {}

    .card-content {
        position: absolute;
        top: 240rpx;
        width: 100vw;
        padding: 0 48rpx;
        box-sizing: border-box;
        margin-top: 60rpx;

    }



    .card-item {
        background-color: #FFFFFF;
        box-sizing: border-box;
        margin-top: 30rpx;
        border-radius: 20rpx;
    }




    .item-card {
        line-height: 110rpx;
        font-size: 28rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #464646;
        padding-left: 10rpx;

        border-radius: 20rpx;
        padding-left: 40rpx;
    }

    .finger {
        width: 50rpx;
        heigth: 50rpx;
        animation: fingerHandle 1s ease infinite both;
        transform: rotate(90deg);
    }


    .login {
        position: relative;
        z-index: 800;
        width: 400rpx;
        text-align: center;


    }

    /* 
    @keyframes fingerHandle {
        0% {
            transform: none;
        }

        70% {
            transform: scale3d(.8, .8, .8)
        }

        100% {
            transform: none;
        }
    }
 */

    /* .mask {
        position: absolute;
        top: 0;
        z-index: 1;
        height: 100%;
        width: 100%;
        opacity: 0.7;
        background-color: #000;
        filter: alpha(opacity=70%);
    } */
</style>
