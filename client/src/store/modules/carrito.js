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
        }
    },
    actions: {
        [Constant.ADD_TO_CART]: (store, payload) => {
            if (payload) {
                store.commit(Constant.ADD_TO_CART, payload);
            }
        }
    },
    getters: {
        getCart(state) {
            return state.cart;
        }
    }
}