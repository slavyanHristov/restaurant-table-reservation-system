<script setup>
const props = defineProps({
  text: String,
});
</script>

<template>
  <button class="wrapper">
    <slot name="icon"></slot>
    <div>{{ props.text }}</div>
  </button>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--primary-black);
  width: 100%;
  color: var(--snow-white);
  text-align: center;
  font-family: "Montserrat-Bold";
  border-radius: 5px;
  padding: 10px 20px;
  transition: 300ms;
  cursor: pointer;
}
.wrapper:hover {
  background-color: var(--darker-gray);
}
</style>
