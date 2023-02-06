// 请求班级信息名人堂
import $http from './request.js'

//查询名人堂信息
export const excellentList = ({
    pageNum,
    pageSize

}) => {
    return $http.request({
        url: '/wechat/excellent/list',
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
//公告
// /wechat/notice/list
export const noticeList = ({
    pageNum,
    pageSize

}) => {
    return $http.request({
        url: '/wechat/notice/list',
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
