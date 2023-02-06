<template>
    <view class="notice">
        <!-- ：key 虚拟dom定位 -->
        <view class="notice-item" v-for="(item,index) in noticeList" :key='item.noticeId'>
            <view class=" notice-main">
                <block>
                    <!-- 感叹号 -->
                    <image class="notice-img" src="../../static/icons/感叹号.png" mode=""></image>

                </block>
                <view class="notice-warning">
                    <text>{{item.noticeTitle}}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            noticeList: {
                type: Array,
                default: []
            },
        },
    }
</script>

<style scoped>
    .notice-item {
        width: 674rpx;
        height: 60rpx;
        border: 1px solid #f88c35;
        background: rgba(248, 140, 53, .12);
        border-radius: 10rpx;
        color: #f88c35;

    }

    .notice-main {
        width: 674rpx;
        height: 60rpx;
        border-radius: 10rpx;
        display: flex;
        align-items: center;
        padding: 0 20rpx;
        box-sizing: border-box;
    }


    .notice-img {
        width: 29rpx;
        height: 29rpx;
    }

    .notice-main {
        width: 676rpx;
        height: 60rpx;
        border-radius: 10rpx;
        align-items: center;
        padding: 0 20rpx;
        box-sizing: border-box;
    }

    /* 默认 */
    .notice-text {
        background: rgba(248, 140, 53, .12);
        border: 2rpx solid #358cf8;
        color: #358cf8;
        font-size: 30rpx;
        font-weight: normal;
    }

    /* 警告 */
    .notice-warning {
        color: #f88c35;
        font-size: 28rpx;
        font-weight: normal;
    }
</style>
