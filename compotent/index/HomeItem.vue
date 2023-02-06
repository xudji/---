<template>
    <view class="home-item">
        <!-- 首页渲染有问题  -->
        <view class="item-main" @tap="goStart(item)">
            <view class=" item-content">
                <image class="left" src="../../static/icons/左箭头.png" mode=""></image>
                <view class="item-text">{{item.className}}</view>
                <image src="../../static/icons/右箭头.png" mode=""></image>
            </view>
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

        data() {
            return {
                classImgLink: ''
            }
        },
        computed: {
            changeImg() {
                return this.classImgLink = this.item.classImgLink
            }
        },
        methods: {
            goStart(item) {
                uni.navigateTo({
                    url: '../../pages/start-school/start-school?item=' + JSON.stringify(item)
                });
            }
        }

    }
</script>

<style>
    .home-item {
        width: 320rpx;
        height: 404rpx;
        background: #ffffff;
        box-shadow: 0rpx 24rpx 38rpx 0rpx rgba(60, 128, 209, 0.09);

        border-radius: 30rpx;
        position: relative;
        margin-bottom: 40rpx;

    }

    .item-main {
        width: 294rpx;
        height: 371rpx;
        background-image: url("https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/899176a6-ca95-46f0-9848-5c17b5b9c9e3.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0%;
        position: absolute;
        top: 15rpx;
        left: 10rpx;
    }

    .item-content {
        padding-top: 290rpx;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
    }

    .item-content image {
        width: 30rpx;
        height: 20rpx;
    }

    .item-text {
        font-size: 36rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
    }
</style>
