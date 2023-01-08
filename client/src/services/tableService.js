import Api from '@/services/Api'
import secret from '../../core/config/secret'

const TABLE_API = secret.GO_API_URL + '/table-api'
// const TABLE_API_ADMIN = secret.LARAVER_API_URL + '/api'

export default {
    getTables(date) {
        return Api(TABLE_API).post('getTables', date)
    }
}