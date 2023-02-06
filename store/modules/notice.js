export default {
    states: {
        noticeInfo: null
    },
    getters: {

    },
    mutations: {
        addNocticeInfo(state, option) {
            state.noticeInfo = option
        }

    },
    actions: {
        addNocticeActions({
            commit
        }, option) {
            commit('addNocticeInfo', option)
        },
    }

}
