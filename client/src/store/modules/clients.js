import Constant from '../../Constant';

import ClientService from '@/services/clientService'

export const clients = {
    namespaced: true,
    mutations: {
        [Constant.GET_CLIENTS]: (state, payload) => {
            if (payload) {
                state.clients = payload
            }
        }
    },
    actions: {
        [Constant.GET_CLIENTS]: (store, payload) => {
            ClientService.getClients()
                .then((res) => {
                    store.commit(Constant.GET_CLIENTS, res.data)
                }).catch((err) => {
                    console.log(err)
                });
        }
    },
    getters: {
        getClients(state) {
            return state.clients
        }
    }
}