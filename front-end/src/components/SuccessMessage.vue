<script setup>
import TickIcon from "~icons/mdi/tick-circle";
const props = defineProps({
  isSuccessful: Boolean,
  successMessage: String,
});
</script>

<template>
  <Transition name="fade">
    <div class="success" v-if="props.isSuccessful">
      <TickIcon />
      <p>{{ props.successMessage }}</p>
    </div>
  </Transition>
</template>

<style scoped>
.success {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: var(--primary-green);
  font-family: "Inter-Light";
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
