<script setup>
import NotFoundIcon from "~icons/mdi/magnify-remove-outline";
import NotFoundResource from "@/components/NotFoundResource.vue";

const props = defineProps({
  collection: Array,
  filteredCollection: Array,
});
</script>

<template>
  <div v-if="props.collection">
    <NotFoundResource
      v-if="!props.filteredCollection.length"
      text="Not Found"
      position="static"
    >
      <template #icon><NotFoundIcon class="vector" /></template>
    </NotFoundResource>
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
.vector {
  font-size: 60px;
}
.item-container {
  width: 100%;
}
</style>
