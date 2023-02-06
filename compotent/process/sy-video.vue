<template>
    <view class="syvideo">
        <video :src="objUrl" :controls="true" :enable-play-gesture="true"></video>
    </view>
</template>

<script>
    export default {
        props: {
            objUrl: {
                type: String
            }
        }
    }
</script>

<style scoped>
    video {
        width: 640rpx;
    }
</style>
