import Api from '@/services/Api'
import secret from '../../core/config/secret'

const USER_API = secret.GO_API_URL + '/auth'
const USER_API_ADMIN = secret.LARAVER_API_URL + '/api'

export default {
    register(credentials) {
        return Api(USER_API).post('register', credentials)
    },
    login(credentials) {
        return Api(USER_API).post('login', credentials)
    },
    checkAdmin(email) {
        return Api(USER_API_ADMIN).get(`checkAdmin/${email}`)
    }
}