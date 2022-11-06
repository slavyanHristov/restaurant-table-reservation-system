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
    </div>
    <div class="content-wrapper">
      <AnimatedPlaceholder
        class="date-navigation"
        height="80px"
        width="100%"
        border-radius="100px"
      />
      <AnimatedPlaceholder
        class="header-text"
        height="150px"
        width="80%"
        border-radius="50px"
      />
      <AnimatedPlaceholder
        class="header-text"
        height="300px"
        width="80%"
        border-radius="100px"
      />
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  height: 100%;
  width: 100%;
}

.content-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
  width: 100%;
  background-color: var(--snow-white);
}

.header-text {
  margin-bottom: 15px;
  margin-left: var(--x-spacing-mobile);
}

.date-navigation {
  margin-top: 50px;
  margin-left: var(--x-spacing-mobile);
  margin-right: var(--x-spacing-mobile);
}

@media screen and (min-width: 1024px) {
  .date-navigation {
    margin-left: var(--x-spacing-desktop);
    margin-right: var(--x-spacing-desktop);
  }
}
</style>
