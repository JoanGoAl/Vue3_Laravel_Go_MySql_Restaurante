import Vuex from "vuex";

import { tables } from './modules/tables'
import { clients } from './modules/clients'
import { products } from "./modules/products";
import {reservas} from "./modules/reservas";
import { pedidos } from "./modules/pedidos";
import { auth } from "./modules/auth";

export default Vuex.createStore({

    modules: {
        tables,
        clients,
        products,
        reservas,
        pedidos,
        auth
    }

});