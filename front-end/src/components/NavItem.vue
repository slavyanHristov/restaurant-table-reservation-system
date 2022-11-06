<script setup>
import { useRouter } from "vue-router";
const props = defineProps({
  routeName: String,
  text: String,
});

const router = useRouter();

const changeRoute = () => router.push({ name: props.routeName });
</script>

<template>
  <div class="nav-item" @click="changeRoute">
    <slot name="icon"></slot>
    <div>{{ props.text }}</div>
  </div>
</template>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.nav-item:hover {
  color: var(--primary-gray);
}
</style>
