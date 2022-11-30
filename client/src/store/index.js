import Vuex from "vuex";

import { tables } from './modules/tables'


export default Vuex.createStore({

    modules: {
        tables: tables
    }

});