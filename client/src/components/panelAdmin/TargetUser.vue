<script setup>
import { defineProps } from 'vue';
import { ref } from "vue";

const props = defineProps({
    user: {
        type: Object
    }
})


const camposNoMostrar = ["username", "id", "avatar"];
const disabled = ref(true);

const toogleDisabled = () => {
    disabled.value = !disabled.value;
};
</script>

<template>

    <div class="user-target">
        <div class="avatar">
            <img :src="`https://api.multiavatar.com/${props.user.avatar}.png`" :alt="props.user.avatar">
            <h4>{{ props.user.username }}</h4>
        </div>
        <div class="info">
            <div v-for="campo in Object.keys(props.user).filter(campo => !camposNoMostrar.includes(campo))">
                <div>
                    <h3>{{ campo }}</h3>
                    <input v-if="campo != 'admin'" type="text" :disabled="disabled" :value="props.user[campo]">
                    <input v-else type="checkbox" :disabled="disabled" :checked="props.user[campo]">
                </div>
            </div>
        </div>
        <div class="container-buttons">
            <button @click="toogleDisabled">Editar</button>
        </div>
    </div>

</template>

<style scoped>
.container-buttons {
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    border: 1px solid red;
}

.info input {
    height: 2rem;
    margin-top: 5px;
}

.avatar {
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
}

.avatar>img {
    max-width: 50%;
    height: auto;
}

.avatar>h4 {
    width: 100%;
    height: 20%;
    text-align: center;
}

.info {
    height: 100%;
    width: 80%;
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr
}

.info>div {
    margin: 10px 20px;
}

.user-target {
    /* background-color: rgb(141, 141, 221); */
    margin: 25px;
    height: 250px;
    display: flex;
    flex-direction: row;
    max-width: 75%;
}
</style>