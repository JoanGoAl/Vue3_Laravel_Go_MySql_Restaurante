import Constant from "../../Constant";

import ProductService from "@/services/productService";

export const products = { 
    namespaced: true,
    mutations: {
        [Constant.GET_PRODUCTS_ADMIN]: (state, payload) => { 
            if (payload) {
                state.productsAdmin = payload;
            }
        },
        [Constant.GET_PRODUCTS]: (state, payload) => {
            if (payload) {
                state.products = payload;
            }
        },
        [Constant.GET_CATEGORIAS]: (state, payload) => {
            if (payload) {
                console.log(payload);
                state.categorias = payload;
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
        },
        [Constant.GET_PRODUCTS]: (store, payload) => {
            ProductService.getProducts()
                .then((res) => {
                    store.commit(Constant.GET_PRODUCTS, res.data);
                }).catch((err) => {
                    console.log(err);
                });
        }
    },
    getters: {
        getProductsAdmin(state) {
            return state.productsAdmin;
        },
        getProducts(state) {
            return state.products;
        }
    }
}