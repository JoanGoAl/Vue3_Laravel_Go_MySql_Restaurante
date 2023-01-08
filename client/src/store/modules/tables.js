import Constant from '../../Constant';
import TableService from '@/services/tableService'

export const tables = {
    namespaced: true,
    mutations: {
        [Constant.GET_TABLE]: (state, payload) => {
            if (payload) {
                state.tables = payload
            }
        },
        [Constant.SET_RESERVE]: (state, payload) => {
            if (payload) {
                state.reserve = payload
            }
        }
    },
    actions: {
        [Constant.GET_TABLE]: (store, payload) => {
            store.commit(Constant.SET_RESERVE, payload)
            TableService.getTables(payload)
                .then((res) => {
                    store.commit(Constant.GET_TABLE, res.data)
                }).catch((err) => {
                    console.log(err)
                });
        }
    },
    getters: {
        getTables(state) {
            return state.tables
        },
        getReserve(state) {
            return state.reserve
        }
    }
}