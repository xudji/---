<template>
    <view class="tabbar">
        <view class="tabbr-list">
            <view class="tabber-list-ul">
                <view class="tabber-list-li" v-for="(item, index) in tabBar.list" :key="index" @click="setSelected(index)">
                    <view class="tabber-list-li-icon">
                        <image :src="selected == index ? item.selectedIconPath : item.iconPath" mode=""></image>
                    </view>
                    <view :class="selected == index ? 'tabbar-list-li-name active' : 'tabbar-list-li-name'">
                        {{ item.text }}
                    </view>
                </view>
            </view>



        </view>
    </view>
</template>

<script>
export default {
    props: ['selected'],
    data() {
        return {
            tabBar: {
                list: [{
                    pagePath: '/pages/index/index',
                    iconPath: '../../static/icons/仓储仓库.png',
                    selectedIconPath: '../../static/icons/仓储仓库 (1).png',
                    text: '首页'
                },
                {
                    pagePath: '/pages/initerview-question/initerview-question',
                    iconPath: '../../static/icons/文档.png',
                    selectedIconPath: '../../static/icons/文档 (1).png',
                    text: '面试题库'
                },
                {
                    pagePath: '/pages/initerview-process/initerview-process',
                    iconPath: '../../static/icons/分支.png',
                    selectedIconPath: '../../static/icons/分支 (1).png',
                    text: '面试流程'
                }, {
                    pagePath: '/pages/my-contract/my-contract',
                    iconPath: '../../static/icons/智能合约.png',
                    selectedIconPath: '../../static/icons/智能合约 (1).png',
                    text: '我的协议'
                }, {
                    pagePath: '/pages/my-card/my-card',
                    iconPath: '../../static/icons/用户.png',
                    selectedIconPath: '../../static/icons/用户 (1).png',
                    text: '我的名片'
                }
                ]
            }
        }
    },
    methods: {
        setSelected(index) {
            uni.switchTab({
                url: this.tabBar.list[index].pagePath
            })
        }
    }
}
</script>

<style scoped>
.tabbar {
    width: 100%;
    position: fixed;
    box-sizing: border-box;
}

.tabbr-list {
    width: 100%;
    color: #344356;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0px -12px 37px rgba(230, 235, 243, 0.9);
    border-top-left-radius: 30rpx;
    border-top-right-radius: 30rpx;
    box-sizing: border-box;
}

.tabber-list-ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
}

.tabber-list-li-icon {
    width: 56rpx;
    height: 56rpx;
    margin: 0 auto;
    padding: 4rpx 0;
}

.tabber-list-li-icon image {
    width: 56rpx;
    height: 56rpx;
}

.tabbar-list-li-name {
    width: 100%;
    text-align: center;
    height: 40rpx;
    line-height: 40rpx;
    font-size: 28rpx;
}
</style>
