export default {
    common: {
        baseUrl: 'https://fawnuat.xuexiluxian.cn/', //接口地址
        data: {}, // 默认值
        // 请求头
        header: {
            "Content-Type": "application/json", // 默认值
            "Content-Type": "application/x-www-form-urlencoded"
        },
        // 请求方式
        method: 'GET',
        dataType: 'json'
    },

    request(options = {}) {
        options.url = this.common.baseUrl + options.url;
        options.data = options.data || this.common.data;
        options.header = options.header || this.common.header;
        options.method = options.method || this.common.method;
        options.dataType = options.dataType || this.common.dataType;
        return new Promise((res, rej) => {
            //加载动画
            uni.showLoading({
                title: '加载中'
            })
            uni.request({
                ...options,
                success: (result) => {
                    if (result.data.resultCode != 200) {
                        setTimeout(function() {
                            //关闭加载动画
                            uni.hideLoading()
                        }, 300)
                    }
                    //是200,成功请求
                    setTimeout(function() {
                        //关闭加载动画
                        uni.hideLoading()
                    }, 300)
                    let data = result.data.data;
                    if (data) {
                        res(data)
                    } else {
                        res(result.data)
                    }
                }
            })
        })
    }
}
