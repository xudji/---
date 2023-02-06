import $http from "./request.js"
export const stuCurrent = ({

}) => {
    return $http.request({
        url: '/wechat/stuProtocol/current',
        method: 'GET',
        header: {
            "token": uni.getStorageSync('token')
        }
    })
}
