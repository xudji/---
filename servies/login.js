import $http from "./request.js"
export const authLogin = ({
    code
}) => {
    return $http.request({
        url: '/wechat/user/auth/login',
        method: 'POST',
        header: {
            "Content-Type": "application/json"
        },
        data: {
            code
        }
    })
}
