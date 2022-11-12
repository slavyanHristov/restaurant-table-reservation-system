<script setup>
import ErrorIcon from "~icons/bxs/error-circle";

const props = defineProps({
  errorFlag: Boolean,
  errorMessage: String,
});
</script>

<template>
  <Transition name="fade">
    <div class="error" v-if="props.errorFlag">
      <ErrorIcon />
      <p>{{ props.errorMessage }}</p>
    </div>
  </Transition>
</template>

<style scoped>
.error {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: var(--primary-red);
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
