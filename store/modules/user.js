export default {
    states: {
        uesrList: {
            name: 'xxx',
            tel: '000',
            //未签协议0  已签协议1
            status: 0,
            selectedPath: '',
            avatarUrl: '../../static/imgs/weidenglu.png',
            nickName: '花花',
            classId: null
        },
        student: {}
    },
    getters: {

    },
    mutations: {
        changeUserStatus(state, option) {
            state.userLsit.status = option.status
        },
        changeOpenID(state, option) {
            state.userLsit.openId = option.openId
            state.userLsit.avatarUrl = option.avatarUrl
            state.userLsit.nickName = option.nickName

        },
        changeClassId(state, option) {
            state.userLsit.classId = option.classId
        },
        changeStudent(state, option) {
            state.student = option.student
        }
    },
    actions: {
        changeStatus({
            commit
        }, option) {
            commit('changeUserStatus', option)
        },
        changeOpenIDActions({
            commit
        }, option) {
            commit('changeOpenID', option)
        },
        changeClassIdActions({
            commit
        }, option) {
            commit('changeClassId', option)
        },
        changeStudentActions({
            commit
        }, option) {
            commit('changeStudent', option)
        }
    }

}
