import Constant from "../../Constant";

import ReservaService from "@/services/reservaService";

export const reservas = {
    namespaced: true,
    mutations: {
        [Constant.GET_RESERVAS]: (state, payload) => {
            if (payload) {
                state.reservas = payload;
            }
        }
    },
    actions: {
        [Constant.GET_RESERVAS]: (store, payload) => {
            ReservaService.getReservas()
                .then(res => {
                    store.commit(Constant.GET_RESERVAS, res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    getters: {
        getReservas(state) {
            return state.reservas;
        }
    }
};