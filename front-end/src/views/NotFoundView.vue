<script setup>
import ButtonOutlined from "@/components/ButtonOutlined.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const routeToHome = () => router.push({ name: "home" });
</script>

<template>
  <div>
    <h1>Page Not Found</h1>
    <ButtonOutlined text="Back To Home" @click="routeToHome" />
  </div>
</template>

<style scoped></style>
