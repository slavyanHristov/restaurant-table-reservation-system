<script setup>
import ErrorIcon from "~icons/bxs/error-circle";

const props = defineProps({
  textBoxType: String,
  id: String,
  labelText: String,
  placeholderText: String,
  input: String,
  errors: Object,
});

console.log(props.errors);
const emit = defineEmits(["update:input"]);
</script>

<template>
  <div class="wrapper">
    <label :for="props.id">{{ props.labelText }}</label>
    <input
      :class="{ redBorder: props.errors && props.errors[props.id] }"
      class="input"
      :type="props.textBoxType"
      :id="props.id"
      :name="props.id"
      :placeholder="props.placeholderText"
      :value="props.input"
      @input="emit('update:input', $event.target.value)"
    />
    <div v-if="props.errors && props.errors[props.id]" class="errors-wrapper">
      <div v-for="err in props.errors[props.id]" :key="err" class="error">
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
.error p {
  font-family: "Inter-Light";
  font-size: 12px;
}
</style>
