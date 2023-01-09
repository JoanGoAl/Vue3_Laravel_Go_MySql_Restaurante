import Api from '@/services/Api'
import secret from '../../core/config/secret'

const PEDIDO_API_ADMIN = secret.LARAVER_API_URL + '/api'
const PEDIDO_API = secret.GO_API_URL + '/pedidos-api'

export default {
    setPedido(data) {
        return Api(PEDIDO_API).post('setPedido', data)
    }
}