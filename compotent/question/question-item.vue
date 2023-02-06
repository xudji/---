<template>
    <view class="question-item">
        <image class="item-img" :src="item.imgUrl" mode=""></image>
        <view class="item-text">
            <view class="item-title">{{item.title}}</view>
            <view class="item-tips">{{item.source}}</view>
        </view>
        <view class="item-start" @tap="goDetial(item.id)">
            开始刷题
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default: {}
            }
        },
        methods: {
            goDetial(typeId) {
                uni.navigateTo({
                    url: '../../pages/subject/subject?typeId=' + typeId
                })
            }
        }
    }
</script>

<style scoped>
    .question-item {
        width: 100%;
        height: 150rpx;
        display: flex;
        align-items: center;
        margin-bottom: 20rpx;
        background-color: #ffffff;
        border-radius: 15rpx;
    }

    .item-img {
        width: 118rpx;
        height: 118rpx;
        padding: 20rpx;
    }

    .item-text {
        flex: 1;
        padding: 0 40rpx;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
    }

    .item-title {
        height: 29rpx;
        font-size: 30rpx;
        font-weight: 400;
        color: #333333;
        padding-bottom: 40rpx;
    }

    .item-tips {
        height: 24rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #afafaf;
    }

    .item-start {
        width: 120rpx;
        height: 30rpx;
        padding: 20rpx;
        font-size: 30rpx;
        color: #0054ff;
    }
</style>
