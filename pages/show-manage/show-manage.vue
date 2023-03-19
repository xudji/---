<template>
    <view class="enter-scholl">
        <MyHeader title="档案管理"></MyHeader>
        <view class="manage-form">
            <!-- 姓名和性别 -->
            <view class="manage-item clear-line">
                <view class="item-title">
                    姓名
                </view>
                <view class="item-main">
                    {{form.name}}
                </view>
            </view>
            <!-- 性别 -->
            <view class="manage-item">
                <view class="item-title">性别</view>
                <view class="item-main sex-item">
                    <radio-group name="gender" class="item-main sex-item">
                        <label>
                            <radio :value="1" :checked="form.gender == 1" color="#0066ff" />女士
                        </label>
                        <label>
                            <radio :value="0" :checked="form.gender == 2" color="#0066ff" />先生
                        </label>
                    </radio-group>
                </view>
            </view>
            <!-- 身份证 -->
            <view class="manage-item">
                <view class="item-title">
                    身份证号码
                </view>
                <view class="item-main">
                    {{form.idCard}}
                </view>
            </view>
            <!-- 手机号 -->
            <view class="manage-item">
                <view class="item-title">
                    手机号
                </view>
                <view class="item-main">
                    {{form.phone}}
                </view>
            </view>
            <!-- 前端阶段 -->
            <view class="manage-item">
                <view class="item-title">
                    前端阶段
                </view>
                <view class="item-main">
                    {{form.frontStage}}
                </view>
            </view>
            <!-- 家庭地址 -->
            <view class="manage-item ">
                <view class="item-title">
                    家庭住址 </view>
                <view class="address-main">
                    {{form.addressInfo}}
                </view>
            </view>
            <!-- 出生日期 -->
            <view class="manage-item">
                <view class="item-title">
                    出生日期
                </view>
                <view class="item-main">
                    {{form.birthDate}}
                </view>
            </view>
            <!-- 学历 -->
            <view class="manage-item">
                <view class="item-title">
                    学历
                </view>
                <view class="item-main">
                    {{form.education}}
                </view>
            </view>
            <!-- 专业 -->
            <view class="manage-item">
                <view class="item-title">
                    专业
                </view>
                <view class="item-main">
                    {{form.major}}
                </view>
            </view>
            <!-- 微信号 -->
            <view class="manage-item">
                <view class="item-title">
                    微信号
                </view>
                <view class="item-main">
                    {{form.wechat}}
                </view>
            </view>
            <!-- QQ号 -->
            <view class="manage-item">
                <view class="item-title">
                    QQ号
                </view>
                <view class="item-main">
                    {{form.qq}}
                </view>
            </view>
            <!-- 目前状态 -->
            <view class="manage-item">
                <view class="item-title">
                    目前状态
                </view>
                <view class="item-main">
                    {{form.current}}
                </view>
            </view>
            <!-- 目标就业城市 -->
            <view class="manage-item">
                <view class="item-title">
                    目前就业城市
                </view>
                <view class="item-main">
                    {{form.city}}
                </view>
            </view>
            <!-- 紧急联系人 -->
            <view class="manage-item">
                <view class="item-title">
                    紧急联系人
                </view>
                <view class="item-main">
                    {{form.emergencyContact}}
                </view>
            </view>
            <!-- 紧急联系人电话 -->
            <view class="manage-item">
                <view class="item-title">
                    紧急联系人电话
                </view>
                <view class="item-main">
                    {{form.emergencyPhone}}
                </view>
            </view>
            <!-- 顾问老师 -->
            <view class="manage-item">
                <view class="item-title">
                    顾问老师
                </view>
                <view class="item-main">
                    {{form.teacher}}
                </view>
            </view>
        </view>
        <!-- 确认 -->
        <view class="manage-btn">
            <button class="btn-sure" @tap="sureCheck">提交</button>
        </view>



    </view>
</template>

<script>
    import MyHeader from '@/common/my-header/my-header.vue'
    import {
        mapState
    } from 'vuex'
    export default {
        components: {
            MyHeader
        },
        data() {
            return {
                form: {
                    name: '',
                    gender: '',
                    adminssionCode: '',
                    idCard: '',
                    phone: '',
                    frontStage: '',
                    province: '',
                    addressInfo: '',
                    birthDate: '',
                    education: '',
                    major: '',
                    wechat: '',
                    qq: '',
                    currentState: '',
                    city: '',
                    emergencyContact: '',
                    emergencyPhone: '',
                    teacher: ''
                },
                classId: 0,
            }
        },
        onLoad(options) {
            this.classId = parseInt(options.classId)
            if (this.classId === this.classInfo.classId) {
                this.form = this.classInfo
            }
        },
        computed: {
            ...mapState({
                userList: state => state.user.userList,
                classInfo: state => state.classes.classInfo

            })
        },
        methods: {
            sureCheck() {
                uni.navigateBack({
                    delta: 1
                })
            }
        }

    }
</script>

<style scoped>
    .enter-scholl {
        width: 750rpx;
        height: 100%;
        background: #ffffff;

    }

    .enter-banner {
        width: 750rpx;
        height: 273rpx;

    }

    .manage-form {
        background-color: #ffffff;
        box-sizing: border-box;

    }

    .manage-item {
        width: 100vw;
        border-bottom: 2rpx solid #f3f4f6;
        display: flex;
        align-items: center;
        padding: 32rpx 42rpx;
        box-sizing: border-box;
    }

    .address {
        display: block;
        height: 200rpx;
    }

    .address-title {
        display: flex;
        align-items: center;
        color: #999999;
    }

    .address-main {
        width: 671rpx;
        padding-top: 40rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: #999999;
        line-height: 88rpx;
        opacity: 0.8;
    }

    .clear-line {
        border: none;
    }

    .item-title {
        width: 200rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
        line-height: 16rpx;
    }

    .item-local {
        font-size: 28rpx;
    }

    .item-main {
        flex: 1;
        font-size: 28rpx;
        font-weight: 400;
        color: #999999;
        padding-left: 20rpx;
        opacity: 0.8;
    }

    .sex-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .manage-btn {
        width: 750rpx;
        height: 265rpx;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-sure {
        width: 420rpx;
        height: 80rpx;
        line-height: 80rpx;
        background: #0066ff;
        border-radius: 40rpx;
        text-align: center;
        font-size: 30rpx;
        font-weight: 400;
        color: #ffffff;

    }
</style>
