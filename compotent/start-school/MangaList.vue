<template>
    <view class="manga-list">
        <view class="list-item" @tap="goArchives">
            <image class="item-bg" src="../../static/icons/档案管理.png" mode=""></image>
            <view class="item-text">
                档案管理
            </view>
        </view>
        <view class="list-item" @tap="goContract">
            <image class="item-bg" :src="mangaList.imgUrl" mode=""></image>
            <view class="item-text">
                我的协议
            </view>
        </view>
        <view class="list-item" @tap="goSign">
            <image class="item-bg" :src="signList.imgUrl" mode=""></image>
            <view class="item-text">
                签署协议
            </view>
        </view>
        <view class="list-item" @tap="goHelp">
            <image class="item-bg" src="../../static/icons/帮助中心.png" mode=""></image>
            <view class="item-text">
                咨询帮助
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            classId: {
                type: String,
                default: 0
            },
            title: {
                type: String,
                default: ''
            }
        },
        data() {
            return {

                mangaList: {
                    imgUrl: '../../static/icons/用户协议.png',
                    name: '我的协议'
                },
                signList: {
                    imgUrl: '../../static/icons/单据管理.png',
                    name: '签署协议'
                }
            }

        },
        methods: {
            goHelp() {
                uni.navigateTo({
                    url: '../../pages/consulting-help/consulting-help'
                })
            },
            goArchives() {
                uni.navigateTo({
                    url: '../../pages/show-manage/show-manage?classId=' + this.classId
                })
            },
            goContract() {
                uni.navigateTo({
                    url: '../../pages/my-contractItem/my-contractItem'
                })
            },

            goSign() {
                uni.navigateTo({
                    url: '../../pages/sign-contract/sign-contract'
                })
            }
        }
    }
</script>

<style scoped>
    .manga-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }

    .item-bg {
        width: 100rpx;
        height: 100rpx;
    }

    .item-text {
        width: 104rpx;
        height: 25rpx;
        font-size: 26rpx;
        font-weight: 400;
        color: #222;
        padding-top: 10rpx;
    }
</style>
