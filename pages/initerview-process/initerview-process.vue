<template>
    <view class="initerview-process">
        <MyHeader :isBack="false" title="面试求职流程"></MyHeader>
        <view class="process">
            <view class="process-content">
                <!-- 面试流程组件 -->
                <ProcessItem :processList="processList"></ProcessItem>
            </view>
        </view>
        <MyTabbar :selected="selected"></MyTabbar>
    </view>
</template>

<script>
    import MyHeader from '@/common/my-header/my-header.vue'
    import MyTabbar from '@/common/tabbar/my-tabbar.vue'
    import {
        processList
    } from '@/servies/process.js'
    import ProcessItem from '@/compotent/process/process-item.vue'
    export default {
        data() {
            return {
                selected: 2,
                pageNum: 1,
                pageSize: 10,
                processList: []
            }
        },
        components: {
            MyTabbar,
            MyHeader,
            ProcessItem
        },
        onLoad() {
            this.__init()
        },
        computed: {
            changeList() {
                this.processList.map(item => {
                    item.interviewProcessAttrs.map(tem => {
                        if (tem.objType === 2) {
                            item.isVideo = true
                        } else {
                            item.isVideo = false
                        }
                    })
                })
            }
        },
        methods: {
            async __init() {
                const params = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }
                const res = await processList(params)
                console.log(res, '流程')
                this.processList = res

            }
        }
    }
</script>

<style scoped>
    page {
        height: auto;
    }

    .process {
        width: 750rpx;
        padding-top: 20px;
        padding-bottom: 120px;
        background-size: cover;
        background-image: linear-gradient(to top, #5555ff 0%, #aa55ff 100%);
        position: relative;
    }

    .process-content {
        width: 750rpx;
        height: 100%;
        position: relative;
        top: 0;
        left: 10rpx;
        padding-bottom: 4rpx;
    }
</style>
