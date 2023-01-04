<script setup>

import { useStore } from "vuex";
import { computed, reactive } from "vue";
import Constant from "@/Constant";
import Target from "@/components/panelAdmin/TargetTable.vue"


const store = useStore();
store.dispatch("tables/" + Constant.GET_TABLE);
const state = reactive({
  tableslist: computed(() => store.getters['tables/' + Constant.GET_TABLE]),
});


</script>

<template >
  <div class="container-all">
    <div class="title">
      <h1>Mesas</h1>
    </div>
    <div class="main">
      <div class="container_targets" v-for="(mesa, index) in state.tableslist">
        <Target :table="mesa" />
      </div>

      <!-- <div class="container-pagination" v-if="state.tableslist">
        <paginate :page-count="Math.ceil(state.tableslist.length / 6)" :page-range="3" :margin-pages="2"
          :click-handler="clickCallback" :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'"
          :page-class="'page-item'">
        </paginate>
      </div> -->
    </div>
  </div>

</template>

<style scoped>
/* Write your own CSS for pagination */
.container-all {
  width: 100%;
  height: 100%;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6%;
}

.main {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 25px;
  /* height: 85%; */
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  /* height: 89.5vh; */
}

.container_targets {
  margin: 10px 15px;

  /* width: 100%;
  height: 100%; */
}
</style>