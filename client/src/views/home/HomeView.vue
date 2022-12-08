<script setup>
import TheWelcome from '../../components/TheWelcome.vue'
</script>

<template>
  <div class="container_img">
    <div class="img_left">
      <div class="text_img">
        <RouterLink to="/reserve">
          <span>Reservar</span>
        </RouterLink>
      </div>
    </div>
    <div class="img_right">
      <div class="text_img">
        <span>Realizar pedido</span>
      </div>
    </div>
  </div>
</template>


<style>
.container_img {
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 100%;
}

.img_left:hover {
  width: 250%;
}

.img_right:hover {
  width: 250%;
}

.img_left:hover,
.img_right:hover {
  transition: .5s;
  filter: brightness(60%);
}

.img_left {
  background-image: url('../../../public/restaurante_img.jpg');
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 100%;
}

.img_right {
  background-image: url('../../../public/domicilio_img.jpg');
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 100%;
}

.text_img {
  font-size: 50px;
  width: 100%;
  height: 100%;
  color: white;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; */
}

.text_img>* {
  text-decoration: none;
  color: white;
}

.text_img span {
  padding: 10px;
  background-color: #a97555;
}

.text_img span:hover {
  cursor: pointer;
  filter: brightness(120%);

}

.text_img:hover {
  opacity: 1;
  transition: .5s;
}
</style>