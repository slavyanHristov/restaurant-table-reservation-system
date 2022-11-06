<script setup>
import SearchSkeleton from "@/components/SearchSkeleton.vue";
import TheSearch from "@/components/TheSearch.vue";
</script>

<template>
  <div class="main-wrapper">
    <Suspense>
      <template #default>
        <TheSearch />
      </template>
      <template #fallback>
        <SearchSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
