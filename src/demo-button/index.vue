<template>
  <div>
    <h1 class="demo1">12312312</h1>
    <h2>{{ calcWidth }}</h2>
    <button class="demo-button">
      <slot />
    </button>
  </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
defineOptions({ name: 'DemoButton' })

//当定义了props变量，打包时会报错，
//error TS2742: The inferred type of '__vue_sfc__' cannot be named without a reference to '.pnpm/@vue+shared@3.4.21/node_modules/@vue/shared'. This is likely not portable. A type annotation is necessary.
const props = defineProps({
  width: {
    type: String,
    default: '100px'
  },
})
// const width = `100px`
const height = `100px`
const calcWidth = computed(() => {
  return props.width
})
</script>

<style scoped></style>

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
