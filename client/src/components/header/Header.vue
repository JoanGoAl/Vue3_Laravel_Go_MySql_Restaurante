<script setup>
import { RouterLink } from 'vue-router'
import { useStore } from "vuex";
import { ref } from "vue";
import Constant from '../../Constant';

const store = useStore();

const img = ref("")
const isLoged = ref(false)

if (localStorage.getItem("token")) {
    let user = JSON.parse(localStorage.getItem("user"))
    img.value = user.avatar
    isLoged.value = true
} else {
    isLoged.value = false
}

const logout = () => {
    store.dispatch("auth/" + Constant.LOGOUT_USER);
}

</script>

<template>
    <div class="container-header">
        <div class="container-img"><img src="../../../public/ggFood_logo.png" alt=""></div>
        <nav v-if="$route.path.split('/')[1] !== 'profile'">
            <div nav_ancor>
                <RouterLink to="/">
                    <span>HOME</span>
                    <span>
                        <i class="fas fa-address-card" aria-hidden="true"></i>
                    </span>
                </RouterLink>
            </div>
            <div nav_ancor>
                <RouterLink to="/reserve">RESERVAR</RouterLink>
            </div>
            <div nav_ancor>
                <RouterLink to="/pedido">PEDIDOS</RouterLink>
            </div>
            <div nav_ancor v-if="!isLoged">
                <RouterLink to="/login">LOGIN</RouterLink>
            </div>
            <div nav_ancor v-else>
                <RouterLink to="/profile">
                    <img :src="img" alt="" width="50" />
                </RouterLink>
            </div>
        </nav>
        <div v-else>
            <div nav_ancor class="logout">
                <a @click="logout">LOGOUT</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: 'Yu Gothic';
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
}

[nav_ancor] {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
}

[nav_ancor]>a {
    /* disable decoration a */
    color: rgb(76, 76, 76);
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
}

[nav_ancor]>a:hover {
    color: #a97555;
}

.container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10.5vh;
    /* padding: 1rem; */
    box-shadow: -1px 3px 9px -4px rgba(0, 0, 0, 0.32);
}

.container-img {
    width: 100px;
    height: 100px;
}

.container-img>img {
    width: 100%;
    height: 100%;
}
</style>