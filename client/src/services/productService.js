import Api from '@/services/Api'
import secret from '../../core/config/secret'

const PRODUCT_API_ADMIN = secret.LARAVER_API_URL + '/api'

export default {
    getProductsAdmin() {
        return Api(PRODUCT_API_ADMIN).get('getProducts')
    },
    addProduct(data) {
        return Api(PRODUCT_API_ADMIN).post('addProduct', data)
    },
    deleteProduct(id) {
        return Api(PRODUCT_API_ADMIN).delete(`deleteProduct/${id}`)
    },
    updateProduct(id, data) {
        return Api(PRODUCT_API_ADMIN).put(`updateProduct/${id}`, data)
    }
}