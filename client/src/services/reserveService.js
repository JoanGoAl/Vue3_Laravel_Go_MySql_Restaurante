import Api from '@/services/Api'
import secret from '../../core/config/secret'

const RESERVE_API = secret.GO_API_URL + '/reserva-api'

export default {
    setReserve(reserve) {
        return Api(RESERVE_API).post('createReserva', reserve)
    }
}