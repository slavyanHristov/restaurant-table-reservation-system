<script setup>
import ComboBox from "@/components/ComboBox.vue";
import ButtonFilled from "@/components/ButtonFilled.vue";
import SaveIcon from "~icons/fluent/save-16-regular";

import { ref } from "vue";

const props = defineProps({
  freeTables: Array,
});

const table = ref("");

const chooseTable = () => {};
</script>

<template>
  <div>
    <form @submit.prevent="chooseTable">
      <ComboBox
        id="table"
        label-text="Table"
        placeholder-text="Choose a table..."
        :collection="props.freeTables"
        v-model:selectedItem="table"
      />
      <ButtonFilled>
        <template #icon>
          <SaveIcon />
        </template>
      </ButtonFilled>
    </form>
  </div>
</template>

<style scoped></style>
