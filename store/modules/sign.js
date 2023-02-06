export default {
    states: {
        SignInfo: null
    },
    getters: {

    },
    mutations: {
        addSignInfo(state, option) {
            state.SignInfo = option
        }

    },
    actions: {
        addSignInfoActions({
            commit
        }, option) {
            commit('addSignInfo', option)
        },
    }

}
