<template>
    <view class="subject">
        <MyHeader title="刷题" isBack="true"></MyHeader>
        <view class="subject-content">
            <view class="subject-common">
                <!-- 定义计数 -->
                <view class="dots">
                    <text>{{topSwiperIndex+1}}/{{totalNum}}</text>
                </view>
                <!-- 中间滑动内容 -->
                <swiper :current="topSwiperIndex" @change="toSwiperTab" :style="'height:'+1000+'px;'">
                    <swiper-item v-for="(item,index) in toSwiper" :key="index">
                        <scroll-view scroll-y="true" :style="'height:'+clientHeight+'px;'">
                            <SubjectItem :item="item" :index="topSwiperIndex"></SubjectItem>
                        </scroll-view>
                    </swiper-item>
                </swiper>
            </view>
        </view>
        <!-- 底部上下题 -->
        <view class="subject-check">
            <view @tap="goBefore">
                上一题
            </view>
            <view class="next" @tap="goNext">
                下一题
            </view>
        </view>
    </view>
</template>

<script>
    import MyHeader from "@/common/my-header/my-header.vue"
    import SubjectItem from "@/compotent/subject/subject-item.vue"
    import {
        getQuestionList,
        getQuestionNum
    } from "@/servies/question.js"
    export default {
        data() {
            return {
                clientHeight: 0,
                typeId: 0,
                toSwiper: [],
                totalNum: 0,
                topSwiperIndex: 0,
                //length是渲染数字-1
                currentNum: 0,
                pageSize: 10,
                pageNum: 1
            }
        },
        //写了方法要调用
        onLoad(options) {
            //获取类型id
            this.typeId = options.typeId
            this.__init()
            this.getTotal()
            //写了方法要调用
        },
        methods: {
            //返回上一题
            goBefore() {
                if (this.topSwiperIndex === 0) {
                    uni.showToast({
                        title: '不能再往前了~',
                        duration: 2000,
                        icon: "none"

                    })
                    return
                } else {
                    this.topSwiperIndex--;
                }
            },
            //前往下一题
            goNext() {
                if (this.toSwiperIndex === this.totalNum - 1) {
                    uni.showToast({
                        title: '等待更新~',
                        icon: "none"
                    })
                    return
                } else {
                    this.topSwiperIndex++;
                    if (this.topSwiperIndex === this.totalNum) {
                        //重新请求 无法使用改用此方法
                        //不同继续点击
                        this.topSwiperIndex--;
                    }
                }


            },

            //滑动轮播触发改变
            toSwiperTab(e) {
                this.topSwiperIndex = Number(e.target.current)
                const current = this.topSwiperIndex + 1
                if (current === this.currentNum - 1) {
                    //相等继续请求
                    this.continueReq()
                    //滑到总页面下一页
                } else if (current === this.totalNum) {
                    uni.showToast({
                        title: '等待更新',
                        icon: 'none'
                    })

                }
                return
            },
            continueReq() {
                this.pageNum += 1
                if (this.totalNum === this.toSwiper.length) return
                this.__init()

            },
            //获取面试题总条数
            async getTotal() {
                const data = {
                    typeId: this.typeId
                }
                const res = await getQuestionNum(data)
                console.log('总条数', res)
                this.totalNum = res.questionNum
            },
            //获取面试题数据
            async __init() {
                const data = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    typeId: this.typeId
                }
                const res = await getQuestionList(data)
                this.currentNum += res.length
                this.toSwiper.push(...res)
            },

            getClientHeight() {
                const res = uni.getSystemInfo()
                return res.statusBarHeight
            }
        },
        onReady() {
            uni.getSystemInfo({
                success: (res) => {
                    this.clientHeight = res.windowHeight - this.getClientHeight()
                    //获取计数高度
                    let dots = uni.createSelectorQuery().in(this).select(".dots")
                    dots.boundingClientRect((data) => {
                        //data包含元素的高度信息
                        //data.height  头部高度 68tabbar高度
                        this.clientHeight = this.clientHeight - data.height
                    }).exec(function(res) {
                        //这个方法必须执行，不然获取不到信息
                    })
                    //获取底部切换的高度
                    let info = uni.createSelectorQuery().in(this).select(".subject-check")
                    info.boundingClientRect((data) => {
                        //data包含元素的高度信息
                        //data.height  头部高度 68tabbar高度
                        this.clientHeight = this.clientHeight - data.height
                    }).exec(function(res) {
                        //这个方法必须执行，不然获取不到信息
                    })
                }
            })
        },

        components: {
            MyHeader,
            SubjectItem



        },
    }
</script>

<style scoped>
    scroll-view ::-webkit-scrollbar {
        display: none;
        width: 0 !important;
        height: 0 !important;
        -webkit-appearance: none;
        background: transparent;
        color: transparent;
    }

    swiper {
        height: auto;
    }

    .subject {
        position: relative;
        width: 100vw;
        background-color: #f0f3f7;
        box-sizing: border-box;
    }

    .subject-content {
        padding: 0 37rpx;
        width: 100%;
        box-sizing: border-box;
    }

    .dots {
        height: 30rpx;
        text-align: center;
        font-size: 32rpx;
        font-weight: 500;
        color: #344356;
        opacity: .6;

    }

    .subject-common {
        padding-bottom: 50rpx;
    }

    .subject-check {
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .subject-check view {

        width: 311rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        border-radius: 40rpx;
        color: #ffffff;
        margin-left: 55rpx;
        background-color: rgb(90, 103, 247);
    }

    .next {
        background-color: rgb(90, 139, 245);
    }
</style>
