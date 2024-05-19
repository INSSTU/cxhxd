<script setup lang="ts">
const count = ref(10)
const newCount = computed(() => count.value + 3)
tools()
</script>

<template>
  <h1>{{ count }}--{{ newCount }}--{{ tools() }}</h1>
</template>

<style scoped></style>
