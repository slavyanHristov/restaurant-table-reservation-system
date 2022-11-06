<script setup>
import ErrorIcon from "~icons/bxs/error-circle";

import { computed } from "vue";

const props = defineProps({
  id: String,
  labelText: String,
  placeholderText: String,
  collection: Array,
  selectedItem: Number,
  errors: Object,
});

const emit = defineEmits(["update:selectedItem"]);

const value = computed({
  get() {
    return props.selectedItem;
  },
  set(value) {
    emit("update:selectedItem", value);
  },
});
</script>

<template>
  <div class="wrapper">
    <label :for="props.id">{{ props.labelText }}</label>
    <select
      class="input"
      :class="{ redBorder: props.errors && props.errors[id] }"
      :name="props.id"
      v-model="value"
      required
    >
      <option value="" disabled selected hidden>
        {{ props.placeholderText }}
      </option>
      <option v-for="item in props.collection" :key="item.id" :value="item?.id">
        {{ item?.name }}
      </option>
    </select>
    <div v-if="props.errors && props.errors[id]" class="errors-wrapper">
      <div v-for="err in props.errors[id]" :key="err.id" class="error">
        <ErrorIcon />
        <p>{{ err }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
label {
  font-family: "Inter-Medium";
  color: var(--secondary-gray);
  font-size: 14px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
}

.input {
  padding: 12px 10px;
  font-family: "Inter-Light";
  color: var(--primary-black);
  font-size: 16px;
  border: 1px solid var(--lighter-gray);
  border-radius: 10px;
}
.redBorder {
  border-color: var(--accent-red);
}
.errors-wrapper {
  margin-top: 5px;
  color: var(--accent-red);
}
.error {
  display: flex;
  align-items: center;
  gap: 5px;
}
select,
option {
  font-family: "Inter-Light", monospace;
}

.error p {
  font-family: "Inter-Light";
  font-size: 12px;
}
</style>
