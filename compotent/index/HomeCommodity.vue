<template>
    <view class="home-main">
        <block v-for="(item,index) in homeDate" :key='index'>
            <HomeItem :item='item'></HomeItem>
        </block>
    </view>
</template>

<script>
    import HomeItem from '@/compotent/index/HomeItem.vue'
    export default {
        props: {

        },

        data() {
            return {
                homeDate: [{
                    classImgLink: "https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/369091cb-f375-47fe-b2d6-5cdd37a6d676.png",
                    className: '实训室'
                }, {
                    classImgLink: "https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/899176a6-ca95-46f0-9848-5c17b5b9c9e3.png",
                    className: 'p4'
                }, {
                    classImgLink: "https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/2f9a24a9-1f2f-48e9-a280-1040161e0d30.png",
                    className: 'p5'
                }, {
                    classImgLink: "https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/3f3b0305-ff8c-4888-aaa9-9840d144ea1c.png",
                    className: '全日班'
                }, {
                    classImgLink: "https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/6557cfd3-8714-446e-9e71-aaeb5133d5b4.png",
                    className: '线下班'
                }]
            }
        },
        components: {
            HomeItem
        }
    }
</script>

<style scoped>
    .home-main {
        width: 676rpx;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-left: 38rpx;
    }
</style>
