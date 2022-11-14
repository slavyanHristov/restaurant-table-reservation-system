<script setup>
import ButtonOutlined from "@/components/ButtonOutlined.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const routeToHome = () => router.push({ name: "home" });
</script>

<template>
  <div class="main-wrapper">
    <img
      class="notFound"
      src="@/assets/images/not-found.svg"
      alt="Not-Found-Image"
    />
    <div class="content">
      <h1>Page Not Found</h1>
      <ButtonOutlined text="Back To Home" @click="routeToHome" />
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
}
.notFound {
  width: 50%;
  min-width: 350px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

.content h1 {
  font-size: 36px;
}

@media screen and (min-width: 1024px) {
  .main-wrapper {
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 50px;
  }
  .content h1 {
    font-size: 54px;
  }
}
</style>
