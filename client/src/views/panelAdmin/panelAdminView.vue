<script setup>


const toggleClass = (e) => {
  if (e.target.className === 'section_panel active') {
    e.target.className = 'section_panel'
  } else {
    e.target.className = 'section_panel active'
  }
}

</script>

<template>

  <div class="container_panel_admin">
    <nav>
      <div class="section_panel active" v-on:click="toggleClass">
        <!-- <svg class="active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
        </svg> -->
      </div>
      <div class="section_panel" v-on:click="toggleClass">
        <!-- <svg class="off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
        </svg> -->
      </div>
    </nav>
  </div>

</template>

<style>
/* html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: red;
} */

.container_panel_admin {
  padding-top: 10px;
  /* background-color: red;  */
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 89vh;
}

.container_panel_admin nav {
  background-color: #a97555;
  width: 125px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.container_panel_admin nav .section_panel {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100px;
  height: 60px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section_panel.active {
  background-color: white;
}

.section_panel.active svg {
  width: 30px;
  height: 30px;
  color: #a97555;
  fill: #a97555;
}

.section_panel svg {
  width: 30px;
  height: 30px;
  color: white;
  fill: white;

}



</style>