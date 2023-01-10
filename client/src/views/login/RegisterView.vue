<script setup>
import { ref } from "vue"

const infoUser = ref({
    email: "",
    password: "",
    password2: ""
})

const infoAdicional = ref({
    username: "",
    nombreCompleto: "",
    direccion: "",
    telefono: "",
    dni: ""
})

const errorEmail = ref(false)
const errorPassword = ref(["", false])

const seeInfoAdicional = ref(false)

const adicionalError = ref(false)

const handleRegister = (e) => {
    e.preventDefault();

    const regexEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

    if (regexEmail.test(infoUser.value.email)) {
        errorEmail.value = false
    } else {
        errorEmail.value = true
        return
    }
    if (infoUser.value.password === "") {
        console.log("Introduzca una contraseña");
        errorPassword.value = ["Introduzca una contraseña", true]
        return
    }
    if (infoUser.value.password2 === "") {
        errorPassword.value = ["Confirme la contraseña", true]
        return
    }
    if (infoUser.value.password !== infoUser.value.password2) errorPassword.value = ["Las contraseñas no coinciden", true]
    if (infoUser.value.password === infoUser.value.password2) errorPassword.value = ["", false]
    if (errorEmail.value === false && errorPassword.value[1] === false) {
        seeInfoAdicional.value = true
    }

}

const handleRegister2 = (e) => {
    e.preventDefault();

    let temp = {
        avatar: `https://www.gravatar.com/avatar/${infoAdicional.value.username}.png`,
        ...infoAdicional.value
    }

    let aux = false

    Object.keys(temp).some(item => {
        if (temp[item] === "") {
            aux = true
        }
    })

    if (aux) {

    }

    console.log(aux);

}




</script>

<template>
    <div class="main-register">
        <div register v-if="!seeInfoAdicional">
            <div class="title-container">
                <h1>REGISTER</h1>
            </div>
            <div class="form-container">
                <form action="">
                    <div formContianer>
                        <div>
                            <label for="email">Email</label>
                            <input type="text" v-model="infoUser.email" name="email" id="email">
                        </div>
                        <div v-if="errorEmail">
                            <br>
                            <span class="error">El email no es correcto</span>
                        </div>
                        <br>
                        <div>
                            <label for="password">Contraseña</label>
                            <input type="password" v-model="infoUser.password" name="password" id="password">
                        </div>
                        <br>
                        <div>
                            <label for="password">Repetir Contraseña</label>
                            <input type="password" v-model="infoUser.password2" name="password" id="password">
                        </div>
                        <div v-if="errorPassword[1]">
                            <br>
                            <span class="error">{{ errorPassword[0] }}</span>
                        </div>
                        <div class="container-button">
                            <button @click="handleRegister">Register</button>
                        </div>
                        <div class="contianer-route">
                            <RouterLink to="/login">
                                <span>¿Ya tienes cuenta?</span>
                            </RouterLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div infoAdicional v-if="seeInfoAdicional">
            <div class="title-container">
                <h1>Información adicional</h1>
            </div>
            <div class="form-container">
                <form action="">
                    <div formContianer>
                        <div>
                            <label for="username">Username</label>
                            <input type="text" v-model="infoAdicional.username" name="username" id="username">
                        </div>
                        <div>
                            <label for="nombreCompleto">Nombre completo</label>
                            <input type="text" v-model="infoAdicional.nombreCompleto" name="nombreCompleto"
                                id="nombreCompleto">
                        </div>
                        <div>
                            <label for="direccion">Dirección</label>
                            <input type="text" v-model="infoAdicional.direccion" name="direccion" id="direccion">
                        </div>
                        <div>
                            <label for="telefono">Teléfono</label>
                            <input type="text" v-model="infoAdicional.telefono" name="telefono" id="telefono">
                        </div>
                        <div>
                            <label for="dni">DNI</label>
                            <input type="text" v-model="infoAdicional.dni" name="dni" id="dni">
                        </div>
                        <div v-if="adicionalError">
                            <br>
                            <span class="error">{{ errorPassword[0] }}</span>
                        </div>
                        <div class="container-button">
                            <button @click="handleRegister2">Terminar registro</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
[infoAdicional] [formContianer]>div {
    margin-bottom: 15px;
}

.error {
    color: red;
}

.contianer-route {
    margin-top: 15px;
    text-align: right;
}

a {
    color: #fff;
    text-decoration: none;
}

.container-button {
    margin-top: 25px;
    /* padding: 5px; */
}

button {
    width: 100%;
    font-size: 17px;
    color: white;
    background-color: #a97555;
    padding: 5px;
    border-radius: 5px;
    border: none;
}

label {
    display: block;
    margin-bottom: 5px;
    color: white;
    font-size: 20px;
}

input {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 15px;
}

[formContianer] {
    padding: 0 40px 15px 40px;
    margin: 20px 0;
}

.main-register {
    height: 79vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://vinobjetivo.files.wordpress.com/2019/06/finca_moncloa.jpg");
}

.title-container {
    padding: 20px 0 0 0;
    color: white;
    text-align: center;
}

[infoAdicional] {
    background-color: hsla(0, 0%, 0%, 0.7);
    width: 500px;
    border-radius: 10px;
}

[register] {
    background-color: hsla(0, 0%, 0%, 0.7);
    width: 500px;
    border-radius: 10px;
}
</style>
