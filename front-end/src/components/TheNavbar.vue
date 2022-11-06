<script setup>
import NavItems from "@/components/NavItems.vue";
import ButtonHamburger from "@/components/ButtonHamburger.vue";

import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();

const isMobile = ref(null);
const mobileNav = ref(null);
const windowWidth = ref(null);

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};

const checkWindowWidth = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 768) {
    isMobile.value = true;
    return;
  }
  isMobile.value = false;
  mobileNav.value = false;
  return;
};

onMounted(() => {
  window.addEventListener("resize", checkWindowWidth);
  checkWindowWidth();
});
</script>

<template>
  <header>
    <nav>
      <img
        class="logo"
        src="@/assets/images/rtrs.png"
        alt="Logo"
        @click="router.push({ name: 'home' })"
      />
      <div v-show="!isMobile" class="nav-links">
        <NavItems />
      </div>
      <ButtonHamburger
        :mobile-nav="mobileNav"
        :is-mobile="isMobile"
        :toggle-mobile-nav="toggleMobileNav"
      />
      <Transition name="fade">
        <div class="overlay" v-show="mobileNav" @click.self="toggleMobileNav">
          <Transition name="mobile-nav">
            <div class="mobile-nav" v-show="mobileNav">
              <NavItems class="mobile-nav-items" />
            </div>
          </Transition>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--primary-red);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
}
nav {
  display: flex;
  padding: 5px var(--x-spacing-mobile);
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 180px;
  height: 75px;
  cursor: pointer;
}
.nav-links {
  font-size: 12px;
  color: var(--snow-white);
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

.mobile-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  color: var(--primary-black);
  top: 0;
  left: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 250px;
  background-color: var(--snow-white);
}

.mobile-nav-items {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-direction: column;
  align-items: center;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-out;
}

@media screen and (min-width: 1024px) {
  nav {
    padding: 5px var(--x-spacing-desktop);
  }
  .nav-links {
    font-size: 14px;
  }
}
</style>
