<script setup>
import Constant from "../../Constant"
import { reactive, computed, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps({
    longitud: {
        type: Number,
        required: true
    },
    cantPage: {
        type: Number,
        required: true
    },
    handlePagination: {
        type: Function,
        required: true
    },
    page: {
        type: Object,
        required: true
    }
})

const totalPages = Math.ceil(props.longitud / props.cantPage);

const selectPage = (comp) => {

    return comp === props.page.end / props.cantPage ? "selected" : "";

}

</script>

<template>
    <div class="pagination">
        <button @click="handlePagination(props.cantPage * -1)">
            Anterior
        </button>
            <div v-for="page in totalPages" :key="page" :class="selectPage(page)">
                <div class="number-pages">
                    {{ page }}
                </div>
            </div>
        <button @click="handlePagination(props.cantPage)">
            Siguiente
        </button>
    </div>
</template>

<style scoped>

button {
    width: 100px;
    height: 30px;
    background-color: grey;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
}

button:nth-child(1) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

button:nth-last-child(1) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.number-pages {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;    
}

.selected {
    background-color: #a97555;
    color: #fff;
}


.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
}
</style>