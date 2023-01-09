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
            console.log(payload);
            if (payload) {
                state.reserve = payload
            }
        },
        [Constant.GET_TABLE_ADMIN]: (state, payload) => {
            if (payload) {
                state.tablesAdmin = payload
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
        },
        [Constant.GET_TABLE_ADMIN]: (store) => {
            TableService.getTablesAdmin()
                .then((res) => {
                    store.commit(Constant.GET_TABLE_ADMIN, res.data)
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
        },
        getTablesAdmin(state) {
            console.log(state.tablesAdmin);
            return state.tablesAdmin
        }
    }
}