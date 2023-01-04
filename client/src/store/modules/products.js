import Constant from "../../Constant";

import ProductService from "@/services/productService";

export const products = { 
    namespaced: true,
    mutations: {
        [Constant.GET_PRODUCTS_ADMIN]: (state, payload) => { 
            if (payload) {
                state.products = payload;
            }
        }
    },
    actions: {  
        [Constant.GET_PRODUCTS_ADMIN]: (store, payload) => {
            ProductService.getProductsAdmin()
                .then((res) => {
                    store.commit(Constant.GET_PRODUCTS_ADMIN, res.data);
                }).catch((err) => {
                    console.log(err);
                });
        }
    },
    getters: {
        getProductsAdmin(state) {
            return state.products;
        }
    }
}