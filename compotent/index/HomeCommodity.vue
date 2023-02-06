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
            homeDate: {
                type: Array,
                default: []
            }
        },

        data() {
            return {
                /* homeDate: [{
                    classImgLink: 'https://s1.imagehub.cc/images/2023/01/23/5038bfa12215e1870fc2a5db01237289.png',
                    className: '实训室'
                }, {
                    classImgLink: 'https://s1.imagehub.cc/images/2023/01/23/ef9b8d500c8cde3b64463cb60485bd8c.png',
                    className: 'p4'
                }, {
                    classImgLink: 'https://s1.imagehub.cc/images/2023/01/23/7fad0148b66398a2367e82fa6fcd0cf8.png',
                    className: 'p5'
                }, {
                    classImgLink: 'https://s1.imagehub.cc/images/2023/01/23/3a39fcae9d06b20011f9732011dc11d2.png',
                    className: '全日班'
                }, {
                    classImgLink: 'https://s1.imagehub.cc/images/2023/01/23/6d0b276f4db9430d047cd815eed2eed1.png',
                    className: '线下班'
                }] */
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
