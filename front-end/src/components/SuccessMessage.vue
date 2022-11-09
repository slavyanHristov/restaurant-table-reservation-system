<script setup>
import TickIcon from "~icons/mdi/tick-circle";
const props = defineProps({
  isSuccessful: Boolean,
  successMessage: String,
});
</script>

<template>
  <div class="success" v-if="props.isSuccessful">
    <TickIcon />
    <p>{{ props.successMessage }}</p>
  </div>
</template>

<style scoped>
.success {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: var(--primary-green);
  font-family: "Inter-Light";
}
</style>
