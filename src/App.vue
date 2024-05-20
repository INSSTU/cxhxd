<script setup lang="ts"></script>

<template>
  <h1>hello vue</h1>
  <Hello></Hello>
</template>

<style lang="scss" scoped>
/* 
  scoped
      - style标签设置scoped后，样式只会在当前组件中生效
      - 它的实现原理是，
          vue会为当前组件中的元素都添加一个唯一的属性
          设置样式时，所有的选择器都会被添加一个属性选择器
          h1 -> h1[data-v-7a7a37b1]
      - 除了为组件中元素设置属性外，他也会为子组件添加属性
*/
h1 {
  background-color: #bfa;
}</style>
