<template>
    <view class="child">
        <view class="plain-list" v-if="child.objType !== 2">
            <view class="list-plain">
                <image class="list-item" src="" mode=""></image>
                <view class="list-title">
                    {{child.title}}
                </view>
                <view class="list-into" @tap="goReamrk(child)">
                    {{child.reamrk}}
                </view>
            </view>
        </view>
        <view class="plain-video" v-else>
            <view class="list-plain">
                <image class="list-item" src="" mode=""></image>
                <view class="list-title">
                    {{child.title}}
                </view>
            </view>
            <view class="video-content">
                <!-- 视频播放组件 -->
                <SyVideo :objUrl='child.objPath'></SyVideo>
            </view>
        </view>
    </view>
</template>

<script>
    import SyVideo from './sy-video.vue'
    export default {
        props: {
            child: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {}
        },
        components: {
            SyVideo
        },
        methods: {
            goReamrk(child) {
                // console.log(child)
                if (child.objType === 0) {
                    uni.switchTab({
                        url: '../../pages/initerview-question/initerview-question'
                    })
                } else if (child.objType === 1) {
                    this.copy(child.objPath)
                }
            },
            copy(value) {
                uni.showModal({
                    content: value, //模板中提示的内容
                    confirmText: '复制内容',
                    sucess: () => {
                        uni.setClipboardData({
                            data: value, //要被复制的内容
                            success: function() {
                                uni.hideToast({
                                    title: '复制成功，请打开百度网盘APP',
                                    duration: 2000,
                                    icon: 'none'
                                })
                            },
                            fail: function() {
                                uni.hideToast({
                                    title: '复制失败',
                                    icon: 'none'
                                })
                            }
                        })
                    }
                })

            }
        }
    }
</script>

<style scoped>
    .palan-list {
        display: flex;
        align-items: center;
        padding-bottom: 40rpx;
        padding-left: 30rpx;
    }

    .list-plain:nth-child(1) {
        margin: 16rpx 0 16rpx 0;
    }

    .list-plain {
        display: flex;
    }

    .list-item {
        width: 37rpx;
        height: 30rpx;
        padding-right: -15rpx;
    }

    .list-title {
        font-size: 30rpx;
        padding-right: 40rpx;

    }

    .list-into {
        font-size: 20rpx;
        color: #0072ff;
        align-self: center;
    }

    .plain-video {
        width: 650rpx;
    }



    .video-content {
        margin-top: 40rpx;
    }

    .video-content image {
        width: 650rpx;
        height: 450rpx;
    }
</style>
