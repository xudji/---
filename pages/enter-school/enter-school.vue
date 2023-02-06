<template>
    <view class="enter-scholl">
        <MyHeader title="填写入学信息"></MyHeader>
        <image class=" enter-banner" src="../../static/img/填写背景.jpg" mode="">
        </image>
        <form action="">
            <view class="manage-form">
                <!-- 姓名和性别 -->
                <view class="manage-item clear-line">
                    <view class="item-title">
                        姓名
                    </view>
                    <view class="item-main">
                        <input type="text" name="name" placeholder="请填写姓名" value="">
                    </view>
                </view>
                <!-- 性别 -->
                <view class="manage-item">
                    <view class="item-title"></view>
                    <view class="item-main sex-item">
                        <radio-group name="gender" class="item-main sex-item">
                            <label>
                                <radio :value="1" color="#0066ff" />女士
                            </label>
                            <label>
                                <radio :value="0" color="#0066ff" />先生
                            </label>
                        </radio-group>
                    </view>

                </view>
                <!-- 入学码 -->
                <view class="manage-item">
                    <view class="item-title">
                        入学码
                    </view>
                    <view class="item-main">
                        <input type="text" name="admissionCode" placeholder="请填写入学码(通过顾问老师获取)" value="">
                    </view>
                </view>
                <!-- 身份证 -->
                <view class="manage-item">
                    <view class="item-title">
                        身份证
                    </view>
                    <view class="item-main">
                        <input type="text" name="idCard" placeholder="请填写身份证号码" value="">
                    </view>
                </view>
                <!-- 手机号 -->
                <view class="manage-item">
                    <view class="item-title">
                        手机号
                    </view>
                    <view class="item-main">
                        <input type="text" name="phone" placeholder="请填写手机号码" value="">
                    </view>
                </view>
                <!-- 前端阶段 -->
                <view class="manage-item">
                    <view class="item-title">
                        前端阶段
                    </view>
                    <view class="item-main">
                        <input type="text" name="frontStage" placeholder="请填写前端阶段" value="">
                    </view>
                </view>
                <!-- 家庭地址 -->
                <view class="manage-item address">
                    <view class="address-title">
                        <view class="item-title">
                            家庭住址 </view>
                        <Kregion class="item-local" width="400" height="40"></Kregion>
                    </view>
                    <view class="address-main">
                        <input type="text" name="addressInfo" placeholder="详细地址:如道路/门牌号/小区/楼栋号/单元楼等">
                    </view>
                </view>


                <!-- 出生日期 -->
                <view class="manage-item">
                    <view class="item-title">
                        出生日期
                    </view>
                    <view class="item-main">
                        <input type="text" name="birthDate" placeholder="请填写格式:xxxx-xx-xx" value="">
                    </view>
                </view>
                <!-- 学历 -->
                <view class="manage-item">
                    <view class="item-title">
                        学历
                    </view>
                    <view class="item-main">
                        <input type="text" name="education" placeholder="请填写学历" value="">
                    </view>
                </view>
                <!-- 专业 -->
                <view class="manage-item">
                    <view class="item-title">
                        专业
                    </view>
                    <view class="item-main">
                        <input type="text" name="major" placeholder="请填写专业" value="">
                    </view>
                </view>
                <!-- 微信号 -->
                <view class="manage-item">
                    <view class="item-title">
                        微信号
                    </view>
                    <view class="item-main">
                        <input type="text" name="wechat" placeholder="请填写微信号" value="">
                    </view>
                </view>
                <!-- QQ号 -->
                <view class="manage-item">
                    <view class="item-title">
                        QQ号
                    </view>
                    <view class="item-main">
                        <input type="text" name="qq" placeholder="请填写QQ号" value="">
                    </view>
                </view>
                <!-- 目前状态 -->
                <view class="manage-item">
                    <view class="item-title">
                        目前状态
                    </view>
                    <view class="item-main">
                        <input type="text" name="currentState" placeholder="在职/待业/就读" value="">
                    </view>
                </view>
                <!-- 目标就业城市 -->
                <view class="manage-item">
                    <view class="item-title">
                        目前就业城市
                    </view>
                    <view class="item-main">
                        <input type="text" name="city" placeholder="请填写目标就业城市" value="">
                    </view>
                </view>
                <!-- 紧急联系人 -->
                <view class="manage-item">
                    <view class="item-title">
                        紧急联系人
                    </view>
                    <view class="item-main">
                        <input type="text" name="emergencyContent" placeholder="请填写紧急联系人" value="">
                    </view>
                </view>
                <!-- 紧急联系人电话 -->
                <view class="manage-item">
                    <view class="item-title">
                        紧急联系人电话
                    </view>
                    <view class="item-main">
                        <input type="text" name="emergencyPhone" placeholder="请填写紧急联系人电话" value="">
                    </view>
                </view>
                <!-- 顾问老师 -->
                <view class="manage-item">
                    <view class="item-title">
                        顾问老师
                    </view>
                    <view class="item-main">
                        <input type="text" name="teacher" placeholder="请填写顾问老师" value="">
                    </view>
                </view>
            </view>
            <!-- 确认 -->
            <view class="manage-btn">
                <button class="btn-sure" form-type="submit">提交</button>
            </view>


        </form>
    </view>
</template>

<script>
    import MyHeader from '@/common/my-header/my-header.vue'
    export default {
        components: {
            MyHeader
        },
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
