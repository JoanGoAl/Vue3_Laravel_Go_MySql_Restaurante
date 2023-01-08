import Constant from '../../Constant';
import TableService from '@/services/tableService'

export const tables = {
    namespaced: true,
    mutations: {
        [Constant.GET_TABLE]: (state, payload) => {
            if (payload) {
                state.tables = payload
            }
        }
    },
    actions: {
        [Constant.GET_TABLE]: (store, payload) => {
            console.log(payload);
            TableService.getTables(payload)
                .then((res) => {
                    store.commit(Constant.GET_TABLE, res.data)
                }).catch((err) => {
                    console.log(err)
                });
        }
    },
    getters: {
        gatTables(state) {
            return state.tables
        }
    }
}