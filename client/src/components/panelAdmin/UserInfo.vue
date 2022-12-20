<script setup>
import { ref } from 'vue';
import ClientService from '@/services/clientService'
import { useStore } from 'vuex';
import Constant from '../../Constant';
import { createToaster } from "@meforma/vue-toaster";

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})
const toaster = createToaster({
    position: "bottom-right",
    duration: 3000,
});


const store = useStore();
const disableButton = ref(true)

const newUser = ref({
    id: props.user.id,
    nombre: props.user.nombre,
    dni: props.user.dni,
    email: props.user.email,
    username: props.user.username,
    telefono: props.user.telefono,
    direccion: props.user.direccion,
    admin: props.user.admin ? true : false,
    avatar: props.user.avatar
})

const compInfo = (e) => {

    newUser.value[e.target.name] = e.target.value

    let comp = []
    for (let i in props.user) {
        comp.push(props.user[i] === newUser.value[i])
    }

    if (comp.includes(false)) {
        disableButton.value = false
    } else {
        disableButton.value = true
    }
}

const editUser = () => {
    ClientService.editClient(newUser.value)
        .then(({ status }) => {
            if (status === 200) {
                store.dispatch("clients/" + Constant.GET_CLIENTS);
                toaster.success("Usuario editado correctamente");
            }
        })
        .catch(err => {
            console.log(err);
            toaster.error("Error al editar el usuario");
        })
}
</script>


<template>

    <div class="contianer-info-user">
        <div userImage>
            <img :src="props.user.avatar" alt="" width="100">
        </div>

        <form action="" id="form-user-update" @input="compInfo">
            <div userInputs>
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
                <div style="width: 100%;">
                    <label for="direccion">Direccion</label>
                    <br>
                    <input type="text" name="direccion" id="direccion" :value="props.user.direccion">
                </div>
                <!-- <div style="width: 20%;">
                    <label for="admin">Admin</label>
                    <input type="checkbox" name="admin" id="admin" :checked="props.user.admin">
                </div> -->
            </div>
        </form>

        <div buttonInfo v-on:click="hola">
            <button v-on:click="editUser" :disabled="disableButton">Editar</button>
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

