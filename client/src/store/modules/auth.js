import Constant from "../../Constant";

import userService from "../../services/userService";

export const auth = {
    namespaced: true,
    state: {
        user: null,
    },
    mutations: {
        [Constant.REGISTER_USER]: (state, payload) => {
            if (payload) {
                state.user = payload;
            }
        },
    },
    actions: {
        [Constant.REGISTER_USER]: (store, payload) => {
            userService.register(payload)
                .then((res) => {
                    localStorage.setItem('token', res.data.token)
                    store.commit(Constant.REGISTER_USER, res.data)
                }).catch((err) => {
                    console.log(err)
                });
        },
    },
    getters: {
        getUser(state) {
            return state.user
        }
    }
}