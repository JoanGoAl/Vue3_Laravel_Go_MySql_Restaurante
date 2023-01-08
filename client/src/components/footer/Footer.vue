<script setup>
</script>

<template>
    <div class="container-footer">
        <RouterLink to="/admin">
          <span>¿Eres administrador?</span>
        </RouterLink>
        <br>
        <br>
        <p>© 2022 La posada Serril. All right reserved</p>
    </div>
</template>

<style scoped>
a {
    color: #fff;
    text-decoration: none;
}
.container-footer {
    height: 10.5vh;
    margin-top: 25px;
    background-color: #a97555;
    color: #fff;
    padding: 20px;
    text-align: center;
}
</style>