<template>
    <view class="show-contract">
        <view class="contract-header">
            <!-- 班级权益图片 -->
            <view class="text">
                班级权益说明
            </view>
        </view>
        <scroll-view scroll-y="true" :style="'height:'+clientHeight+'px;'">
            <view class="contract" :style="'height:'+clientHeight+'px;'">
                <view class="show-contract-content">
                    <view class="sign-item" v-for="item in classInfo" :key='item.id'>
                        <view class="sign-bg-title">
                            <view class="item-title">{{item.className}}</view>
                        </view>
                        <view class="item-content">
                            <view class="item-text">
                                <rich-text :nodes="item.classDesc"></rich-text>
                                <!-- <rich-text>学习周期一个月</rich-text>
                                <rich-text>学习周期一个月</rich-text> -->
                            </view>
                            <view class="sign-bg-footer">
                                <!-- <rich-text>123456789</rich-text> -->
                            </view>
                        </view>
                    </view>
                    <!-- <view class="sign-item">
                        <view class="sign-bg-title">
                            <view class="item-title">实训室</view>
                        </view>
                        <view class="item-content">
                            <view class="item-text">
                                <rich-text>学习周期一个月</rich-text>
                                <rich-text>学习周期一个月</rich-text>
                                <rich-text>学习周期一个月</rich-text>
                            </view>
                            <view class="sign-bg-footer">
                                <rich-text>123456789</rich-text>
                            </view>
                        </view>
                    </view>-->
                    <!-- <view class="sign-item">
                        <view class="sign-bg-title">
                            <view class="item-title">实训室</view>
                        </view>
                        <view class="item-content">
                            <view class="item-text">
                                <rich-text>学习周期一个月</rich-text>
                                <rich-text>学习周期一个月</rich-text>
                                <rich-text>学习周期一个月</rich-text>
                            </view>
                            <view class="sign-bg-footer">
                                <rich-text>123456789</rich-text>
                            </view>
                        </view>
                    </view> -->
                </view>
            </view>
        </scroll-view>
        <view class="know">
            <view class="contract-know" @tap="goBack">我知道了</view>
        </view>
    </view>
</template>

<script>
    import {
        getClassList
    } from '@/servies/class.js'


    export default {
        data() {
            return {
                clientHeight: null,
                classInfo: null
            }
        },
        onReady() {
            uni.getSystemInfo({
                success: (res) => {
                    //获取头部的高度
                    let info = uni.createSelectorQuery().in(this).select(".contract-header")
                    info.boundingClientRect((data) => {
                        //data包含元素的高度信息
                        //data.height  头部高度 68tabbar高度
                        this.clientHeight = res.windowHeight - data.height
                    }).exec(function(res) {
                        //这个方法必须执行，不然获取不到信息
                    })
                    //获取我知道的高度
                    let know = uni.createSelectorQuery().in(this).select(".know")
                    know.boundingClientRect((data) => {
                        //data包含元素的高度信息
                        //data.height  头部高度 68tabbar高度
                        this.clientHeight = this.clientHeight - data.height
                    }).exec(function(res) {
                        //这个方法必须执行，不然获取不到信息
                    })
                }
            })
        },
        onLoad() {
            this.__init()
        },
        methods: {
            //请求数据
            async __init() {
                const data = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }
                const res = await getClassList(data)
                this.classInfo = res;
            },
            goBack() {
                uni.navigateBack({
                    delta: 1
                });
            }
        }
    }
</script>

<style scoped>
    scroll-view ::-webkit-scrollbar {
        display: none;
        width: 0 !important;
        height: 0 !important;
        -webkit-appearance: none;
        background: transparent;
        color: transparent;

    }

    .show-contract {
        width: 750rpx;
        height: 100vh;
        box-sizing: border-box;
        background-color: #8F86FA;

    }

    .contract-header {
        height: 100vh;
        height: 300rpx;
        text-align: center;
        position: relative;
        margin: 0 0 0 30rpx;
    }

    .contract-header .text {
        font-size: 60rpx;
        height: 60rpx;
        line-height: 60rpx;
        font-weight: bold;
        color: #ffffff;
        letter-spacing: 20rpx;
        padding: 160rpx 0;
        text-shadow: 2px 2px 2px rgba(100, 100, 100, .8);

    }

    .contract {
        width: 702rpx;
        padding: 0 24rpx;
        padding-bottom: 60rpx;

    }

    .sign-bg-title {
        width: 240rpx;
        height: 80rpx;
        border-radius: 20rpx;
        /* background: url(); */
        background-color: #FFDE76;
        background-size: 100%;
        box-shadow: 0rpx 10rpx 10rpx -6rpx rgba(100, 100, 100, .4);
        position: relative;
        top: 40rpx;
        z-index: 1;
        margin: 0 auto;
    }

    .item-title {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        font-size: 40rpx;
        font-weight: normal;
        color: #5d6fe5;
        line-height: 40rpx;

    }

    .item-content {
        width: 702rpx;
        height: 100%;
        background: #ffffff;
        border-radius: 20rpx;
        background-size: 100% 100%;
        position: relative;


    }

    .sign-bg-footer {
        width: 702rpx;
        height: 100%;
        /* background: url(); */
        background-size: 100% 100%;
        position: relative;
    }

    .item-text {
        padding: 60rpx 40rpx 20rpx;
        font-size: 30rpx;
        font-family: 400;
        color: #7a8bff;
    }

    .know {
        width: 100vw;
        height: 200rpx;
        position: relative;
    }

    .contract-know {
        width: 520rpx;
        height: 80rpx;
        font-size: 30rpx;
        font-family: Microsoft YaHei;
        font-weight: normal;
        color: #5d6fe5;
        text-align: center;
        line-height: 80rpx;
        background-color: #ffffff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20rpx;
    }
</style>
