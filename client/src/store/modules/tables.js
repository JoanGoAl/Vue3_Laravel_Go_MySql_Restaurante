import Constant from '../../Constant';

import TableService from '@/services/tables.service'

export const tables = {
    namespaced: true,
    mutations: {
        [Constant.GET_TABLE]: (state, payload) => {
            if (payload) {
                state.tables = {
                    terraza: payload.filter(table => table.type === 'Terraza'),
                    comedor: payload.filter(table => table.type === 'Comedor')
                }
            }
        }
    },
    actions: {
        [Constant.GET_TABLE]: (store, payload) => {
            TableService.getTables()
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