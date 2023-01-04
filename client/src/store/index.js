import Vuex from "vuex";

import { tables } from './modules/tables'
import { clients } from './modules/clients'
import { products } from "./modules/products";

export default Vuex.createStore({

    modules: {
        tables,
        clients,
        products
    }

});