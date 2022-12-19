<script setup>
import { ref } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

const infoAnterior = ref(props.user);
const disabled = ref(true)

const compInfo = (e) => {
    infoAnterior.value[e.target.name] = e.target.value;

    console.log(props.user[e.target.name], infoAnterior.value[e.target.name]);
}
console.log();
</script>

<template>
    <div class="contianer-info-user">
        <div userImage>
            <img :src="props.user.avatar" alt="" width="100">
        </div>
        <div userInputs @change="compInfo">
            <div style="width: 50%;">
                <label for="nombre">Nombre</label>
                <br>
                <input type="text" name="nombre" id="name" :value="props.user.nombre">
            </div>
            <div style="width: 50%;">
                <label for="dni">DNI</label>
                <br>
                <input type="text" name="dni" id="dni" :value="props.user.dni">
            </div>
            <div style="width: 100%;">
                <label for="email">Email</label>
                <br>
                <input type="text" name="email" id="email" :value="props.user.email">
            </div>
            <div style="width: 50%;">
                <label for="username">Username</label>
                <br>
                <input type="text" name="username" id="username" :value="props.user.username">
            </div>
            <div style="width: 50%;">
                <label for="telefono">Telefono</label>
                <br>
                <input type="text" name="telefono" id="telefono" :value="props.user.telefono">
            </div>
            <div style="width: 80%;">
                <label for="direccion">Direccion</label>
                <br>
                <input type="text" name="direccion" id="direccion" :value="props.user.direccion">
            </div>
            <div style="width: 20%;">
                <label for="admin">Admin</label>
                <input type="checkbox" name="admin" id="admin" :checked="props.user.admin">
            </div>
        </div>
        <div buttonInfo v-on:click="hola">
            <button :disabled="disabled">Editar</button>
        </div>
    </div>
</template>




<style scoped>
[userInputs] {
    padding: 10px;
}

[userInputs] div {
    display: inline-block;
    margin: 10px 0;
}

[userInputs] div input {
    width: 80%;
}

[userInputs] label {
    /* display: block; */
    font-size: 20px;
    font-weight: bold;
}

[userInputs] input[type="text"] {
    height: 30px;
}

[userInputs] input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0;
}

.contianer-info-user {
    width: 100%;
    height: 100%;
    padding: 20px;
}

[userImage] {
    display: flex;
    justify-content: center;
}
</style>

