<script setup>
const props = defineProps({
  collection: Array,
});
</script>

<template>
  <div class="main-wrapper">
    <div class="grid-container">
      <div
        v-for="item in props.collection"
        :key="item.id"
        class="grid-item-container"
      >
        <slot :item="item" name="card"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  background-color: var(--primary-white);
  border: 1px solid var(--primary-gray);
  border-radius: 10px;
  padding: 15px;
  transition: all 1.5s;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  grid-auto-rows: 1fr;
}

@media screen and (min-width: 1024px) {
  .main-wrapper {
    padding: 30px;
  }
  .grid-container {
    grid-gap: 30px;
  }
}
</style>
