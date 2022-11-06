<script setup>
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder.vue";
</script>

<template>
  <div class="main-wrapper">
    <div class="header">
      <AnimatedPlaceholder
        class="header-text"
        height="30px"
        width="400px"
        border-radius="100px"
      />
      <AnimatedPlaceholder
        class="header-text"
        height="30px"
        width="350px"
        border-radius="100px"
      />
    </div>
    <div class="results-wrapper">
      <AnimatedPlaceholder
        v-for="i in 4"
        :key="i"
        height="150px"
        width="100%"
        border-radius="10px"
      />
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  height: 100%;
  width: 100%;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px;
  height: 200px;
  width: 100%;
  background-color: var(--snow-white);
}

.header-text {
  margin-bottom: 15px;
  margin-left: var(--x-spacing-mobile);
}

.results-wrapper {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex-direction: column;
  margin-left: var(--x-spacing-mobile);
  margin-right: var(--x-spacing-mobile);
  gap: 10px;

  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
}

@media screen and (min-width: 1024px) {
  .header-wrapper {
    margin-left: var(--x-spacing-desktop);
    margin-bottom: 20px;
  }
  .results-wrapper {
    margin-left: 200px;
    margin-right: 200px;
  }
}
</style>
