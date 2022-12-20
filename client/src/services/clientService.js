import Api from '@/services/Api'
import secret from '../../core/config/secret'

const CLIENT_API = secret.LARAVER_API_URL + '/api'
// const CLIENT_API_ADMIN = secret.LARAVER_API_URL + '/api'

export default {
    getClients() {
        return Api(CLIENT_API).get('getUsers')
    },
    editClient(client) {
        return Api(CLIENT_API).put('updateUser', client)
    }
}