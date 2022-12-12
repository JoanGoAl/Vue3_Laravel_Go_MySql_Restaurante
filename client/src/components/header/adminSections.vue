<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: false
    },
    icon: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div class="container" :class="props.title === $route.name ? 'active' : ''">
        <v-icon :name=props.icon scale="2" />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 80px;
    text-align: center;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    color: white;
}

svg {
    margin: 5px 10px;
}

.container:hover,
.active {
    background-color: white;
    color: #a97555;
}
</style>