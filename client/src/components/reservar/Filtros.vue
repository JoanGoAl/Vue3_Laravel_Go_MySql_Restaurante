<script setup>
import { ref } from 'vue';
import Constant from '@/Constant';
import { useStore } from "vuex";

const store = useStore();

const year = new Date().getFullYear()
const month = (new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1;
const day = (new Date().getDate()) < 10 ? `0${new Date().getDate()}` : new Date().getDate()


const date = ref(`${year}-${month}-${day}`);
const time = ref('');
const site = ref('%');

const handleFilter = (e) => {
    let info = {
        date: date.value,
        time: time.value,
        site: site.value
    }
    store.dispatch("tables/" + Constant.GET_TABLE, info);
}
</script>

<template>
    <div>
        <form action="" @change="handleFilter">
            <input type="date" name="date" id="" v-model="date" :min="date" @change="handleDateChange">
            <select name="time" id="" v-model="time">
                <option value="">Hora</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="20:30">20:30</option>
                <option value="21:30">21:30</option>
                <option value="22:30">22:30</option>
            </select>
            <select name="site" id="" v-model="site">
                <option value="%">Sitio</option>
                <option value="Comedor">Comedor</option>
                <option value="Terraza">Terraza</option>
            </select>
        </form>
    </div>
</template>

<style scoped>

</style>