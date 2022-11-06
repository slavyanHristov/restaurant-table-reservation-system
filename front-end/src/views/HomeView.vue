<script setup>
import ButtonFilled from "@/components/ButtonFilled.vue";
import ButtonOutlined from "@/components/ButtonOutlined.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const changeRoute = (routeName) => router.push({ name: routeName });
</script>

<template>
  <div class="main-wrapper">
    <div class="left-section">
      <div class="heading">
        <h1>Straight to the point restaurant booking system</h1>
      </div>
      <div class="buttons">
        <ButtonFilled
          text="New Reservation"
          @click="changeRoute('new-reservation')"
        />
        <ButtonOutlined text="Search" @click="changeRoute('search')" />
      </div>
    </div>
    <div class="right-section">
      <img src="@/assets/images/hero-section-img.png" alt="food" />
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  padding-left: var(--x-spacing-mobile);
  padding-right: var(--x-spacing-mobile);
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.left-section {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  justify-content: center;
}

.buttons {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.right-section {
  padding-left: 5px;
}

img {
  width: 600px;
  height: 100%;
  max-width: 100%;
}

h1 {
  font-family: "Jost-Bold";
  line-height: 40px;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .main-wrapper {
    padding-left: var(--x-spacing-desktop);
    padding-right: var(--x-spacing-desktop);
  }
  .left-section {
    gap: 100px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .buttons {
    flex-direction: row;
    gap: 30px;
  }
  .right-section {
    padding-left: 100px;
  }
  img {
    width: 900px;
  }
  h1 {
    font-size: 56px;
    line-height: 70px;
  }
}
</style>
