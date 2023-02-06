<template>
    <view class="question">
        <MyHeader :isBack="false" title="面试题"></MyHeader>
        <!-- 内容部分 -->
        <view class="question-content">
            <!-- 搜素区域 -->
            <view class="question-header">
                <input type="text" value="" placeholder="请输入搜索的关键字">
                <image class="question-search" src="../../static/icons/搜索.png" mode=""></image>
            </view>
            <scroll-view scroll-y="true" :style="'height:'+clientHeight+'px;'">
                <view class="commidty" :style="'height:'+clientHeight+'px;'">
                    <!-- 面试题板块 -->
                    <!-- 子组件传递值a -->
                    <QuestionCommidty :dataList="dataList"></QuestionCommidty>


                </view>
            </scroll-view>
        </view>
        <MyTabbar :selected="selected"></MyTabbar>
    </view>
</template>

<script>
    import MyHeader from '@/common/my-header/my-header.vue'
    import MyTabbar from '@/common/tabbar/my-tabbar.vue'
    import QuestionCommidty from '@/compotent/question/question-commidty.vue'
    import {
        getQuestionTypeList
    } from '@/servies/question.js'
    export default {
        data() {
            return {
                selected: 1,
                clientHeight: null,
                pageNum: 1,
                pageSize: 10,
                dataList: []
            }
        },
        onLoad() {
            this.__init()
        },
        onReady() {
            uni.getSystemInfo({
                success: (res) => {
                    let info = uni.createSelectorQuery().in(this).select(".question-header")
                    info.boundingClientRect((data) => {
                        //data包含元素的高度信息
                        //data.height  头部高度 68tabbar高度
                        console.log(data)
                        this.clientHeight = res.windowHeight - data.height - 68 - 60
                    }).exec(function(res) {
                        //这个方法必须执行，不然获取不到信息
                    })
                }
            })
        },

        methods: {
            //初始化页面面试题数据
            async __init() {
                const data = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }
                const res = await getQuestionTypeList(data)
                this.dataList = res
            }
        },
        components: {
            MyHeader,
            MyTabbar,
            QuestionCommidty
        }
    }
</script>

<style scoped>
    /* 取消滚动条 */
    scroll-view ::-webkit-scrollbar {
        display: none;
        width: 0 !important;
        height: 0 !important;
        -webkit-appearance: none;
        background: transparent;
        color: transparent;
    }

    .question {
        width: 100vw;
        height: 100vh;
        /* background: url('https://fawnuat.xuexiluxian.cn/api/profile/wechat/bgimg/question-bg.png') */
        background-color: #f3f4f5;
    }

    .question-content {
        padding: 0 35rpx;
    }

    /* 搜索框 */
    .question-header {
        width: 680rpx;
        height: 80rpx;
        line-height: 80rpx;
        margin-bottom: 30rpx;
        background-color: #ffffff;
        border-radius: 45rpx;
        position: relative;
    }

    .question input {
        width: 680rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        margin-top: 20rpx;
        font-size: 30rpx;
        font-weight: 400;
    }

    .question-search {
        width: 36rpx;
        height: 38rpx;
        position: absolute;
        top: 20rpx;
        right: 30rpx;
    }
</style>
