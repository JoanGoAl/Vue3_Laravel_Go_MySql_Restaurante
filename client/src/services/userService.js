import Api from '@/services/Api'
import secret from '../../core/config/secret'

const USER_API = secret.GO_API_URL + '/auth'

export default {
    register(credentials) {
        return Api(USER_API).post('register', credentials)
    }
}