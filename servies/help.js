// 咨询帮助的接口管理
import $http from './request.js'

//咨询帮助列表
// /wechat/help/list
export const getHelpList = ({
    pageNum,
    pageSize

}) => {
    return $http.request({
        url: '/wechat/help/list',
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        data: {
            pageNum,
            pageSize
        }
    })
}
