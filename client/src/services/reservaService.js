import Api from '@/services/Api'
import secret from '../../core/config/secret'

const RESERVE_API = secret.GO_API_URL + '/reserva-api'
const RESERVE_API_ADMIN = secret.LARAVER_API_URL + '/api'

export default {
    setReserve(reserve) {
        return Api(RESERVE_API).post('createReserva', reserve)
    },
    getReservas() {
        return Api(RESERVE_API_ADMIN).get(`getReservas`)
    },
    changeStatusReserva(id, status) {
        return Api(RESERVE_API_ADMIN).put(`changeStatusReserva/${id}`, status)
    },
    getUserReservas() {
        return Api(RESERVE_API).get(`getReservas`)
    }
}