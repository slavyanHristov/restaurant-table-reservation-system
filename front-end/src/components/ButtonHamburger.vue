<script setup>
const props = defineProps({
  mobileNav: Boolean,
  isMobile: Boolean,
  toggleMobileNav: Function,
});
</script>

<template>
  <div
    class="hamburger"
    :class="{ 'hamburger-active': props.mobileNav }"
    v-show="props.isMobile"
    @click="props.toggleMobileNav"
  >
    <span class="hamburger-spans"></span>
    <span class="hamburger-spans"></span>
    <span class="hamburger-spans"></span>
  </div>
</template>

<style scoped>
.hamburger {
  cursor: pointer;
}
.hamburger-spans {
  display: block;
  width: 24px;
  height: 4px;
  margin-bottom: 4px;
  transition: 200ms ease-in;
  position: relative;
  border-radius: 5px;
  background-color: var(--snow-white);
}

.hamburger.hamburger-active span:nth-child(1) {
  transform: translate(-3px, 7px) rotate(45deg);
}
.hamburger.hamburger-active span:nth-child(2) {
  opacity: 0;
  transform: translateX(15px);
}
.hamburger.hamburger-active span:nth-child(3) {
  transform: translate(-3px, -9px) rotate(-45deg);
}
.hamburger.hamburger-active:hover span {
  background-color: var(--light-pink);
}
</style>
