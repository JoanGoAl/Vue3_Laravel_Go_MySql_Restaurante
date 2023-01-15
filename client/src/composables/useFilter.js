import {ref, reactive, computed} from "vue";

export default function useFilter(data) {

    function filter(filterData) {

        let returnData = data

        if (filterData.categoria) {
            returnData = returnData.filter(item => item.categoria === filterData.categoria)
        }

        if (filterData.search) {
            returnData = returnData.filter(item => item.nombre.toLowerCase().includes(filterData.search.toLowerCase()))
        }

        return returnData
        
    }

    return {
        filter, filteredPosts: data
    };
}