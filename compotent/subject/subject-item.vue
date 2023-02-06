<template>
    <view class="swiper-item">
        <view class="item-title">
            <text>{{index+1}}.{{item.title}}</text>

        </view>
        <view class="item-content">
            <view class="item-result" v-if="item.answer">
                <image class="item-img" src="../../static/icons/结果.png" mode=""></image>
                <view class="result">
                    结果:
                </view>

                <view class="rich">
                    <rich-text :nodes="item.answer"></rich-text>
                </view>

            </view>
            <view class="item-result" v-if="item.parsing">
                <image class="item-img " src="../../static/icons/参考答案.png" mode=""></image>
                <view class="result">
                    解释:
                </view>


                <view class="rich">
                    <rich-text :nodes="item.parsing"></rich-text>
                </view>


            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            item: {
                type: Object,
                default: {}
            },
            index: {
                type: Number,
                default: 1
            }
        },
    }
    // import MDParserHighlight from '@/common/cmder-MDParserHighlight/index.vue'
    // export default {
    //     components: {
    //         MDParserHighlight
    //     },

    // }
</script>

<style scoped>
    .swiper-item {
        margin-top: 60rpx;
        margin-bottom: 100rpx;
    }

    .item-title {
        width: 100%;
        height: 100%;
        font-size: 30rpx;
        padding: 0 20rpx;
        font-weight: normal;
        color: #3444356;
        box-sizing: border-box;
    }

    .item-content {
        display: flex;
        flex-direction: column;
        padding: 0 20rpx;
        box-sizing: border-box;
        height: auto;
    }

    .item-result {
        display: flex;
    }

    .item-img {
        width: 45rpx;
        height: 44rpx;
    }

    .answer {
        width: 36rpx;
        height: 36rpx;
        margin: 0 4rpx;
    }

    .result {
        width: 120rpx;
        font-size: 32rpx;
        font-weight: 400;
        color: #333333;
        padding-left: 10rpx;
    }

    rich-text {
        font-size: 24rpx;


    }


    .rich {
        width: 700rpx;
    }

    rich-text {
        width: 700rpx;
    }
</style>
