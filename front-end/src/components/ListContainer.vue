<script setup>
import NotFoundIcon from "~icons/mdi/magnify-remove-outline";

const props = defineProps({
  collection: Array,
  filteredCollection: Array,
});
</script>

<template>
  <div v-if="props.collection">
    <div class="notFound-wrapper" v-if="!props.filteredCollection.length">
      <div class="content">
        <NotFoundIcon class="vector" />
        <h1>Not Found</h1>
      </div>
    </div>
    <div
      class="item-container"
      v-for="item in props.filteredCollection"
      :key="item.id"
    >
      <slot :item="item" name="card"></slot>
    </div>
  </div>
</template>

<style scoped>
.notFound-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  padding: 50px;
  border: 1px solid var(--lighter-gray);
  border-radius: 10px;
  background-color: var(--primary-white);
}
.notFound-wrapper .content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: var(--lighter-gray);
}

.vector {
  font-size: 60px;
}
.item-container {
  width: 100%;
}
</style>
