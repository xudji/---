import $http from "./request.js"
export const stuInfo = () => {
    return $http.request({
        url: '/wechat/student/info',
        method: 'GET',
        header: {
            "token": uni.getStorageSync('token')
        }
    })
}
