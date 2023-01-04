import Api from '@/services/Api'
import secret from '../../core/config/secret'

const PRODUCT_API_ADMIN = secret.LARAVER_API_URL + '/api'

export default {
    getProductsAdmin() {
        return Api(PRODUCT_API_ADMIN).get('getProducts')
    }
}