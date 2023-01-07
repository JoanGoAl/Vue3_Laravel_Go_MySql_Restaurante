<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import Constant from "@/Constant";

const store = useStore();
store.dispatch("products/" + Constant.GET_PRODUCTS);
const state = reactive({
  productslist: computed(() => store.getters['products/' + Constant.GET_PRODUCTS]),
});

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

  <div class="container-carrusel">
    <Carousel :itemsToShow="3.5" :wrapAround="true" :transition="500">
    <Slide v-for="product in state.productslist" :key="product">
      <div class="carousel__item">
        <img :src="product.img" alt="img" width="250"/>
        <b> {{ product.nombre }} </b>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
  </div>
</template>


<style scoped>
.carousel__icon {
  font-size: 2rem;
  color: white;
  fill: white;
}
.carousel__item {
  width: 80%;
  height: 100%;
  background-color: #a97555;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  padding: 10px;
}

.container-carrusel {
  margin-top: 25px;
}

.container_img {
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 100%;
}

.img_left,
.img_right {
  transition: width .3s ease-in-out;
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 100%;
}

.img_left {
  background-image: url('../../../public/restaurante_img.jpg');

}

.img_right {
  background-image: url('../../../public/domicilio_img.jpg');
}

.img_left:hover,
.img_right:hover {
  width: 250%;
  transition: .5s ease-in-out;
  /* filter: brightness(60%); */
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
