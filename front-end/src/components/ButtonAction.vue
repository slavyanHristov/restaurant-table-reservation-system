<script setup>
import { computed } from "vue";

const props = defineProps({
  text: String,
  color: String,
});

const cssProps = computed(() => {
  return {
    "--main-color": props.color,
  };
});
</script>

<template>
  <button class="wrapper" :style="cssProps">
    <slot name="icon"></slot>
    <div>{{ props.text }}</div>
  </button>
</template>

<style scoped>
.wrapper {
  background-color: var(--primary-white);
  border: 1px solid var(--main-color);
  color: var(--main-color);
  width: 100%;
  text-align: center;
  font-family: "Inter-Light";
  border-radius: 5px;

  transition: 300ms;
  cursor: pointer;
}
.wrapper:hover {
  background-color: var(--main-color);
  color: var(--snow-white);
}
</style>
