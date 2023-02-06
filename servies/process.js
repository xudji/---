//面试流程
import $http from './request.js'
export const processList = ({
    pageNum,
    pageSize
}) => {
    return $http.request({
        url: '/wechat/process/list',
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
