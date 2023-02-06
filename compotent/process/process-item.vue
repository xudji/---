<template>
    <view class="process-content">
        <view class="process-item" v-for="(item,index) in processList" :key='item.id'>
            <view class="item">
                <view class="item-title">
                    <image class="item-img" src="" mode=""></image>
                    <view class="title-content">
                        {{index+1}}、{{item.title}}
                    </view>
                </view>
                <view class="item-content">
                    <block v-for="child in item.interviewProcessAttrs" :key='child.id'>
                        <!-- 内容组件 -->
                        <ProcessChild :child='child'></ProcessChild>
                    </block>
                </view>
                <view class="item-book">
                    <image src=""></image>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import ProcessChild from './process-child.vue'
    export default {
        props: {
            processList: {
                type: Array,
                default: []
            }
        },
        components: {
            ProcessChild
        }
    }
</script>

<style scoped>
    .process-content {
        width: 702rpx;
        height: 100%;
        top: 0;
        left: 10rpx;
        position: relative;
        padding-bottom: 20rpx;

    }

    .process-item {
        width: 702rpx;
        height: 100%;
        border-radius: 15rpx;
        background-color: #ffffff;
        margin-bottom: 60rpx;
        position: relative;
        left: 2rpx;
        border: 2rpx solid #ffffff;
    }

    .item {
        width: 650rpx;
        border: 6rpx dashed #cccccc;
        position: relative;
        margin: 20rpx;
    }

    .item-book {
        position: absolute;
        right: 40rpx;
        top: 10rpx;
    }

    .item-book image {
        width: 80rpx;
        height: 60rpx;
    }

    .item-title {
        position: absolute;
        height: 66rpx;
        left: -40rpx;
        top: 0rpx;
        display: flex;
        position: relative;
        align-items: center;

    }

    .item-img {
        width: 40rpx;
        height: 86rpx;
    }

    .title-content {
        padding: 0 40rpx;
        border-radius: 10rpx;
        background-color: rgb(255, 203, 65);
        position: absolute;
        left: 10rpx;
        font-size: 36rpx;
        font-weight: 400;
        color: #2a2929;
    }
</style>
