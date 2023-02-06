<template>
    <view class="question-commidty">
        <block v-for="(item,index) in dataList" :key='index'>
            <!-- 分类组件 -->
            <QuestionItem :item='item'></QuestionItem>
        </block>
    </view>
</template>

<script>
    import QuestionItem from '@/compotent/question/question-item.vue'
    export default {
        //接受父组件值
        props: {
            dataList: {
                type: Array,
                default: []
            }
        },
        components: {
            QuestionItem
        }
    }
</script>

<style scoped>
    .question-commidty {
        padding-bottom: 40rpx;
        box-sizing: border-box;
    }
</style>
