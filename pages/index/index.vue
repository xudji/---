<template>
    <view class="home">
        <view class="home-container">
            <view class="home-header">
                <view class="home-title">
                    胜云技术学院 </view>
                <view class="home-school">入学信息入口</view>
                <view class="home-show" @tap="goShowContract">
                    <view class="home-class">
                        <text class="show-text">查看班级权益</text>
                    </view>
                    <image class="home-img" src="../../static/icons/放大镜.png"></image>
                </view>
            </view>
            <scroll-view scroll-y="true" :style="'height:'+clientHeight+'px;'">
                <view class="home-content" :style="'height:'+clientHeight+'px;'">
                    <HomeCommodity :homeDate="homeDate"> </HomeCommodity>
                </view>
            </scroll-view>
        </view>
        <MyTabbar :selected="selected"></MyTabbar>
    </view>
</template>

<script>
    import MyTabbar from '@/common/tabbar/my-tabbar.vue'
    import HomeCommodity from '@/compotent/index/HomeCommodity.vue'
    import {
        getClassList
    } from '@/servies/class.js'
    export default {
        data() {
            return {
                selected: 0,
                clientHeight: null,
                homeDate: []
            }
        },
        onLoad() {
            //获取班级信息列表
            this.__init()
        },
        onReady() {
            uni.getSystemInfo({
                success: (res) => {
                    let info = uni.createSelectorQuery().in(this).select(".home-header")
                    info.boundingClientRect((data) => {
                        this.clientHeight = res.windowHeight - data.height - 68
                    }).exec(function(res) {
                        //这个方法必须执行，不然获取不到信息
                    })
                }
            })
        },
        methods: {
            async __init() {
                const data = {
                    pageNum: 1,
                    pageSize: 10
                }
                const res = await getClassList(data);
                console.log(res)
                this.homeDate = res

            },

            goShowContract() {
                uni.navigateTo({
                    url: '../show-contract/show-contract'
                })
            }
        },
        components: {
            MyTabbar,
            HomeCommodity
        }
    }
</script>

<style>
    scroll-view ::-webkit-scrollbar {
        display: none;
        width: 0 !important;
        height: 0 !important;
        -webkit-appearance: none;
        background: transparent;
        color: transparent;
    }

    .home-container {
        width: 100vm;
        height: 100%;
        margin-right: -7rpx;
        /* background: url(); */
        background-size: cover;
        margin-bottom: 120rpx;
        box-sizing: border-box;
    }

    .home-header {
        padding: 131rpx 37rpx 0 37rpx;
    }

    /* 设置标题 */
    .home-title {
        width: 420px;

        font-size: 60rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #000cff;

    }

    /* 入学信息 */
    .home-school {
        width: 236rpx;
        height: 40rpx;
        line-height: 56rpx;
        font-size: 38rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #344356;
        opacity: .8;
        padding: 20rpx 0;
    }

    /* 查看权益 */
    .home-show {
        width: 290rpx;
        height: 59rpx;
        display: flex;
        align-items: center;
        background-color: #5468ff;
        border-radius: 10rpx;
        padding: 0 20rpx;
        box-sizing: border-box;
    }

    .home-class {
        height: 27rpx;
        line-height: 27rpx;
        font-size: 28rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
    }

    .home-class::after {
        content: '';
        width: 1rpx;
        height: 31rpx;
        margin: 0 20rpx;
        border-left: 4rpx solid #ffffff;
    }

    .home-img {
        width: 28rpx;
        height: 28rpx;

    }
</style>
