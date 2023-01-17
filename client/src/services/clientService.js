import Api from '@/services/Api'
import secret from '../../core/config/secret'

const CLIENT_API = secret.GO_API_URL + '/auth'
const CLIENT_API_ADMIN = secret.LARAVER_API_URL + '/api'

export default {
    getClients() {
        return Api(CLIENT_API_ADMIN).get('getUsers')
    },
    editClient(client) {
        return Api(CLIENT_API_ADMIN).put('updateUser', client)
    },
    getProfile() {
        return Api(CLIENT_API).get('user')
    }
}