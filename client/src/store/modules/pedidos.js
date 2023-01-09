import Constant from "../../Constant";

import PedidoService from "@/services/pedidoService";
export const pedidos = {
    namespaced: true,
    state: {
        cart: []
    },
    mutations: {
        [Constant.ADD_TO_CART]: (state, payload) => {
            if (state.cart.length == 0) {
                state.cart.push({...payload.product, cantidad: payload.cant});
                return;
            }
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == payload.product.id) {
                    state.cart[i].cantidad += payload.cant;
                    return;
                }
            }
            state.cart.push({...payload.product, cantidad: payload.cant});
        },
        [Constant.CHANGE_CANT]: (state, payload) => {
            if (state.cart.length == 0) {
                return;
            }
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == payload.product.id) {
                    state.cart[i].cantidad = payload.cant;
                    return;
                }
            }
        },
        [Constant.CLEAR_CART]: (state) => {
            state.cart = [];
        },
        [Constant.GET_PEDIDOS_ADMIN]: (state, payload) => {
            state.pedidos = payload;
        }
    },
    actions: {
        [Constant.ADD_TO_CART]: (store, payload) => {
            if (payload) {
                store.commit(Constant.ADD_TO_CART, payload);
            }
        },
        [Constant.CHANGE_CANT]: (store, payload) => {
            if (payload) {
                store.commit(Constant.CHANGE_CANT, payload);
            }
        },
        [Constant.CLEAR_CART]: (store) => {
            store.commit(Constant.CLEAR_CART);
        },
        [Constant.GET_PEDIDOS_ADMIN]: (store) => {
            PedidoService.getPedidosAdmin().then((response) => {
                store.commit(Constant.GET_PEDIDOS_ADMIN, response.data);
            });
        }
        // [Constant.REMOVE_FROM_CART]: (store, payload) => {
        //     if (payload) {
        //         store.commit(Constant.REMOVE_FROM_CART, payload);
        //     }
        // }
    },
    getters: {
        getCart(state) {
            return state.cart;
        },
        getPedidosAdmin(state) {
            return state.pedidos;
        }
    }
}