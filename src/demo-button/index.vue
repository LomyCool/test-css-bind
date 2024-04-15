<template>
    <h1 class="demo1">12312312</h1>
    <h2>DDDDDD</h2>
  <button class="demo-button">
    <slot />
  </button>

 </template>
 <script setup lang="ts">
   const width = `100px`
   const height = `100px`
 </script>
 
 <style scoped>
 
 </style>

<style lang="less">

.demo1 {
  width: v-bind(width);
  height: v-bind(height);
  background-color: #f44;
}
.demo-button {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  border-radius: 30px;
}
</style>
