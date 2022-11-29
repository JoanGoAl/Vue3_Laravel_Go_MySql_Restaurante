import Api from '@/services/Api'
import env from '../secret'

export default {
    getTables() {
        return env.GO_API_URL
    }
}