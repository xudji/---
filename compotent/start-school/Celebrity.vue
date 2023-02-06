<template>
    <view class="celebrity">
        <view class="celebrity-item" v-for="item in datalist" :key="item.id">
            <!-- 姓名和奖杯 -->
            <view class="item-header">
                <view class="header-left">
                    <view class="student">
                        {{item.studentName}}
                    </view>
                    <view class="student-start">
                        <image class="start" src="../../static/icons/评分、星星.png" mode=""></image>
                    </view>
                </view>
                <view class="header-right">
                    <image class="trophy" src="../../static/icons/奖杯2-1.png" mode=""></image>
                </view>
            </view>
            <!-- 城市、薪资、班级 -->
            <view class="item-content">
                <view class="item-list">
                    就业城市:<text class="item-text">{{item.wrokCity}}</text>
                </view>
                <view class="item-list">
                    就业薪资:<text class="item-text item-active-text">{{item.salary}}</text>
                </view>
                <view class="item-list">
                    来自班级:<text class="item-text"> {{item.className}}</text>
                </view>
            </view>
            <!-- 学历列表 -->
            <view class="item-foot">
                <view class="foot-item">
                    <image class="foot-bg" src="" mode=""></image>
                    <view class="foot-text">
                        {{item.education}}
                    </view>
                </view>
                <view class="foot-item">
                    <image class="foot-bg" src="" mode=""></image>
                    <view class="foot-text">
                        {{item.workWay}}
                    </view>
                </view>
                <view class="foot-item">
                    <image class="foot-bg" src="" mode=""></image>
                    <view class="foot-text">
                        {{item.studentAge}}
                    </view>
                </view>
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        props: {
            datalist: {
                type: Array,
                default: []
            },
        },
    }
</script>

<style scoped>
    .celebrity {
        display: flex;
        flex-wrap: nowrap;
        padding-top: 36rpx;

    }

    .celebrity-item {
        width: 289rpx;
        height: 300rpx;
        background-color: #fff;
        border-radius: 20rpx;
        margin: 0 40rpx 20rpx 20rpx;
        /* background: url(); */
        background-size: cover;
        box-shadow: rgba(100, 100, 211, 0.2) 0px 2px 8px 2px;

    }

    .item-header {
        padding-top: 10rpx;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .start {
        width: 30rpx;
        height: 30rpx;
    }

    .trophy {
        width: 80rpx;
        height: 80rpx;

    }

    .item-content {
        padding-top: 20rpx;
        padding-left: 20rpx;

    }

    .item-list {
        height: 25rpx;
        font-size: 25rpx;
        font-weight: 400;
        color: #333333;
        line-height: 27rpx;
        padding-bottom: 20rpx;
    }

    .item-text {
        padding-left: 10rpx;
    }

    .item-active-text {
        color: #f00;
        font-size: 30rpx;
        font-weight: bold;
    }

    .item-foot {
        width: 100%;
        height: 50rpx;
        background: #006cff;
        display: flex;
        justify-content: space-around;
        border-radius: 0 0 20rpx 20rpx;
    }

    .foot-item {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .foot-bg {
        width: 22rpx;
        height: 21rpx;

    }

    .foot-text {
        font-size: 24rpx;
        line-height: 27rpx;
        font-weight: normal;
        color: #ffffff;
    }
</style>
