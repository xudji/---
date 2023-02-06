//班级信息接口管理
import $http from './request.js'
//查询班级列表
///wechat/class/list
export const getClassList = ({
    pageSize,
    pageNum
}) => {
    return $http.request({
        url: '/wechat/class/list',
        method: 'POST',
        header: {
            "Content-Type": "application/json"
        },
        data: {
            pageNum,
            pageSize
        }
    })
}
