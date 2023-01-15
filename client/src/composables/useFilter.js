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

        if (filterData.end) {
            returnData = returnData.slice(filterData.start, filterData.end)
        }

        return returnData
        
    }

    return {
        filter, filteredPosts: data
    };
}