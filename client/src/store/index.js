import Vuex from "vuex";

import { tables } from './modules/tables'
import { clients } from './modules/clients'

export default Vuex.createStore({

    modules: {
        tables,
        clients
    }

});