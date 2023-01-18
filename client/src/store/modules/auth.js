import Constant from "../../Constant";
import userService from "../../services/userService";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster();

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
        [Constant.LOGIN_USER]: (state, payload) => {
            if (payload) {
                state.user = payload;
            }
        }
    },
    actions: {
        [Constant.REGISTER_USER]: (store, payload) => {
            userService.register(payload)
                .then((res) => {
                    toaster.success("Bienvenido " + res.data.nombre)
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify(res.data))
                    store.commit(Constant.REGISTER_USER, res.data)
                    window.location.replace('/')
                }).catch((err) => {
                    console.log(err)
                });
        },
        [Constant.LOGIN_USER]: (store, payload) => {
            userService.login(payload)
                .then((res) => {
                    if (res.data.error) {
                        toaster.error(res.data.error)
                    } else {
                        toaster.success("Bienvenido " + res.data.nombre)
                        localStorage.setItem('token', res.data.token)
                        localStorage.setItem('user', JSON.stringify(res.data))
                        store.commit(Constant.LOGIN_USER, res.data)
                        window.location.replace('/')
                    }
                }).catch((err) => {
                    console.log(err)
                });
        },
        [Constant.LOGOUT_USER]: (store) => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            store.commit(Constant.LOGIN_USER, null)
            window.location.replace('/home')
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    }
}