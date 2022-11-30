import Api from '@/services/Api'
import secret from '../../core/config/secret'

const TABLE_API = secret.GO_API_URL + '/table-api'

export default {
    getTables() {
        return Api(TABLE_API).get('allTables')
    }
}