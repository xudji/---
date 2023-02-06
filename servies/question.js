//请求面试题信息

import $http from './request.js'

//查询面试题分类列表
// /wechat/questions/typeList
export const getQuestionTypeList = ({
    pageNum,
    pageSize
}) => {
    return $http.request({
        url: '/wechat/questions/typeList',
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

//查询面试题
// /wechat/questions / list
export const getQuestionList = ({
    pageNum,
    pageSize,
    typeId
}) => {
    return $http.request({
        url: '/wechat/questions/list',
        method: 'POST',
        header: {
            "Content-Type": "application/json"
        },
        data: {
            pageNum,
            pageSize,
            typeId
        }
    })
}
//获取面试题总条数
// /wechat/questions/selQuestionNum/{typeId}
export const getQuestionNum = ({
    typeId
}) => {
    return $http.request({
        url: '/wechat/questions/selQuestionNum/' + typeId,
        method: 'GET'

    })
}
