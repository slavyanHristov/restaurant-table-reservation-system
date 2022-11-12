<script setup>
import TextBox from "@/components/TextBox.vue";
import ButtonFilled from "@/components/ButtonFilled.vue";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import SaveIcon from "~icons/fluent/save-16-regular";

import getValues from "@/utils/getValues";
import tableAPI from "@/services/tableAPI";

import { ref } from "vue";

const table = ref({
  name: {
    textBoxType: "text",
    id: "name",
    labelText: "Table Name",
    placeholderText: "Enter table name...",
    value: "",
  },
  capacity: {
    textBoxType: "number",
    id: "capacity",
    labelText: "Capacity",
    placeholderText: "Enter capacity...",
    value: "",
  },
});

const validationErrors = ref(null);
const emptyFieldsError = ref(null);
const isSuccessful = ref(false);

const registerTable = async () => {
  validationErrors.value = null;
  emptyFieldsError.value = null;
  isSuccessful.value = false;
  try {
    const payload = getValues(table.value);
    await tableAPI.registerTable(payload);
    isSuccessful.value = true;
  } catch (err) {
    if (err.response && err.response.data) {
      emptyFieldsError.value = err.response.data.message;
      validationErrors.value = err.response.data.errors;
      console.log(validationErrors.value);
    }
  }
};
</script>

<template>
  <div class="main-wrapper">
    <div class="header">
      <h1>Add Table</h1>
    </div>
    <div class="form-wrapper">
      <form @submit.prevent="registerTable">
        <TextBox
          v-for="textBox in table"
          :key="textBox.id"
          :text-box-type="textBox.textBoxType"
          :id="textBox.id"
          :label-text="textBox.labelText"
          :placeholder-text="textBox.placeholderText"
          :errors="validationErrors"
          v-model:input="textBox.value"
        />
        <ErrorMessage
          :error-flag="emptyFieldsError"
          :error-message="emptyFieldsError"
        />
        <SuccessMessage
          :is-successful="isSuccessful"
          success-message="Successfully registered the new table!"
        />
        <ButtonFilled class="button" text="Submit">
          <template #icon><SaveIcon /></template>
        </ButtonFilled>
      </form>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 200px;
  background: var(--lighter-gray) url("@/assets/images/add-table-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 40%;
}
.header h1 {
  margin-left: var(--x-spacing-mobile);
  margin-bottom: 15px;
  font-size: 35px;
  color: var(--snow-white);
  text-shadow: 1px 1px 2px var(--primary-black);
}
.form-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: var(--x-spacing-mobile);
  margin-right: var(--x-spacing-mobile);
  align-items: center;
  background-color: var(--primary-white);
  padding: 20px 20px;
  border: 1px solid var(--primary-black);
  border-radius: 10px;
}
form {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.general-error {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: var(--accent-red);
  font-family: "Inter-Light";
}

.button {
  width: 200px;
}

@media screen and (min-width: 1024px) {
  .form-wrapper {
    margin: 50px var(--x-spacing-desktop) var(--x-spacing-desktop) 50px;
  }
  .header h1 {
    margin-left: var(--x-spacing-desktop);
    font-size: 45px;
    margin-bottom: 20px;
  }
}
</style>
