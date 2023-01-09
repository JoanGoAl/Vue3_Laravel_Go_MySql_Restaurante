<script setup>
</script>

<template>
    <div class="main-login">
        <div login>
            <div class="title-container">
                <h1>LOGIN</h1>
            </div>
            <div class="form-container">
                <form action="">
                    <div formContianer>
                        <div>
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username">
                        </div>
                        <br>
                        <div>
                            <label for="password">Contraseña</label>
                            <input type="password" name="password" id="password">
                        </div>
                        <div class="container-button">
                            <button disabled>Login</button>
                        </div>
                        <div class="contianer-route">
                            <RouterLink to="/register">
                                <span>¿No tienes cuenta?</span>
                            </RouterLink>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    </div>
</template>

<style scoped>
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

.main-login {
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

[login] {
    background-color: hsla(0, 0%, 0%, 0.7);
    width: 500px;
    border-radius: 10px;
}
</style>