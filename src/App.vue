<script setup lang="ts">
const count = ref(10)
const newCount = computed(() => count.value + 3)

</script>

<template>
  <h1>{{ count }}--{{ newCount }}</h1>
  <Hello></Hello>
  
</template>

<style scoped></style>
