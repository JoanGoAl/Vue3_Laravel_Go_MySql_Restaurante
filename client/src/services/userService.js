import Api from '@/services/Api'
import secret from '../../core/config/secret'

const USER_API = secret.GO_API_URL + '/user-api'

export default {
    register(credentials) {
        return Api(USER_API).post('register', credentials)
    }
}