<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container-header">
        <div class="container-img"><img src="../../../public/ggFood_logo.png" alt=""></div>
        <nav>
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
            <div nav_ancor>
                <RouterLink to="/profile">LOGIN</RouterLink>
            </div>
        </nav>
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