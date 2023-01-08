<script setup>
import { ref } from 'vue';

const year = new Date().getFullYear()
const month = (new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1;
const day = (new Date().getDate()) < 10 ? `0${new Date().getDate()}` : new Date().getDate()


const date = ref(`${year}-${month}-${day}`);
const time = ref('13:00');
const handleFilter = (e) => {
    let info = {
        date: date.value,
        time: time.value
    }
    
    console.log(info);
}
</script>

<template>
    <div>
        <form action="" @change="handleFilter">
            <input type="date" name="date" id="" v-model="date" @change="handleDateChange">
            <select name="time" id="" v-model="time">
                <option value="">Hora</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="20:30">20:30</option>
                <option value="21:30">21:30</option>
                <option value="22:30">22:30</option>
            </select>
        </form>
    </div>
</template>

<style scoped>

</style>