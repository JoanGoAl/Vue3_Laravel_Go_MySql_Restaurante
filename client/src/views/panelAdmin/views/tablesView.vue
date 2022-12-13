<script>

import { useStore } from "vuex";
import { computed, reactive } from "vue";
import Constant from "@/Constant";
import Target from "@/components/panelAdmin/Target.vue"

export default {
  components: {
    Target
  },
  setup() {
    const store = useStore();
    const state = reactive({
      tableslist: computed(() => store.getters['tables/' + Constant.GET_TABLE]),
    });

    store.dispatch("tables/" + Constant.GET_TABLE);

    return {
      state
    }
  }
}
</script>

<template >
  <div class="container-all">
    <div class="title">
      <h1>Mesas</h1>
    </div>
    <div class="main">
      <div class="container_targets" v-for="(mesa, index) in state.tableslist">
        <Target v-if="index < 9" />
      </div>
    </div>
  </div>

</template>

<style scoped>
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
  grid-template-rows: repeat(3, 1fr);
  height: 85%;
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