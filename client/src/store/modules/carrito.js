import Constant from "../../Constant";

import ProductSerice from "@/services/productService";

export const carrito = {
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
        }
        // [Constant.REMOVE_FROM_CART]: (state, payload) => {
        //     if (state.cart.length == 0) {
        //         return;
        //     }
        //     for (let i = 0; i < state.cart.length; i++) {
        //         if (state.cart[i].id == payload.product.id) {
        //             state.cart[i].cantidad -= payload.cant;
        //             if (state.cart[i].cantidad <= 0) {
        //                 state.cart.splice(i, 1);
        //             }
        //             return;
        //         }
        //     }
        // }
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
        }
    }
}