<template>
    <p>Current value is: {{ value }}</p>
    <button @click="value++">Increase</button>
    <button @click="value--">Decrease</button>
</template>

<script setup>
import { ref } from "vue";

const value = ref(0);
</script>
