<script setup>
import CloseIcon from "~icons/bytesize/close";

const props = defineProps({
  isOpen: Boolean,
  headerText: String,
  isClosable: Boolean,
});

const emit = defineEmits(["closeModal"]);
</script>

<template>
  <Transition name="popupAnimation">
    <div class="main-wrapper" v-if="props.isOpen">
      <div
        class="overlay"
        @click.self="props.isClosable ? emit('closeModal') : null"
      >
        <div class="popup-wrapper">
          <div class="header">
            <h1>{{ props.headerText }}</h1>
            <button v-if="props.isClosable" @click="emit('closeModal')">
              <CloseIcon />
            </button>
          </div>
          <div class="popup-content">
            <slot name="popup-content"></slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.main-wrapper {
  position: relative;
  z-index: 20;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--darkened-color);
}
button {
  appearance: none;
  background: none;
  cursor: pointer;
}

.popup-wrapper {
  position: relative;
  width: 40%;
  min-width: 420px;
  background-color: var(--primary-white);
  border-radius: 10px;
}

.popup-content {
  padding: 20px;
}

.popup-wrapper .header {
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}

.header h1 {
  text-align: center;
}

.popupAnimation-enter-from,
.popupAnimation-leave-to {
  opacity: 0;
}
.popupAnimation-enter-active,
.popupAnimation-leave-active {
  transition: opacity 0.1s ease-out;
}
</style>
