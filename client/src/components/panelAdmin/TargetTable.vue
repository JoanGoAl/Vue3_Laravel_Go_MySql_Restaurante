<script setup>
import { defineProps, ref } from 'vue';
import TableService from '../../services/tableService';
import { createToaster } from "@meforma/vue-toaster";

const props = defineProps({
  table: {
    type: Object
  }
})

const toaster = createToaster({
    position: "bottom-right",
    duration: 3000,
});

const editable = ref(false);

const handleEdit = () => {
  editable.value = !editable.value;

  let item = {
    "id": props.table.id,
    "type": props.table.type,
    "capacity": props.table.capacity,
    "img": props.table.img
  }

  if (!editable.value) {
    console.log(item);
    TableService.updateTableAdmin(item.id, item)
      .then(res => {
        if (res.statusText = "Created") {
          toaster.success(`<b>${item.type}</b> Mesa actualizada correctamente`);
        } else {
          toaster.error("Error al actualizar la mesa");
        }
      }).catch(err => {
        console.log(err);
      })
  }
}

// const handleDelete = () => {
//   console.log("Delete");
// }


</script>

<template>
  <div class="container-info">
    <div class="container-img">
      <img :src="`../../../public/${table.img}.png`" :alt="table.img" width="150">
    </div>
    <div class="info-table">
      <h3 v-if="!editable">Sitio: {{ table.type }}</h3>
      <div v-else>
        <label for="type">Sitio</label>
        <select v-model="table.type">
          <option value="Comedor">Comedor</option>
          <option value="Terraza">Terraza</option>
        </select>
      </div>
      <h3 v-if="!editable">Capacidad: {{ table.capacity }}</h3>
      <div v-else>
        <label for="capacity">Capacidad</label>
        <input type="number" class="edit-title" v-model="table.capacity">
      </div>
    </div>
    <div class="container-butt">
      <button @click="handleEdit">Editar</button>
      <!-- <button @click="handleDelete">Eliminar</button> -->
    </div>
  </div>
</template>

<style scoped>
.info-table input {
  width: 50px;
}

.info-table label {
  margin-right: 10px;
}

.container-butt {
  display: flex;
  justify-content: right;
}

.container-img {
  max-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-info {
  padding: 10px;
  /* height: 300px; */
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>