<script setup>
import ComboBox from "@/components/ComboBox.vue";
import ButtonFilled from "@/components/ButtonFilled.vue";
import SaveIcon from "~icons/fluent/save-16-regular";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

import reservationAPI from "@/services/reservationAPI";
import { ref } from "vue";

const props = defineProps({
  freeTables: Array,
  reservation: Object,
});

const emit = defineEmits(["onChosen"]);

const payload = ref({
  tableId: null,
});

const errMsg = ref(null);
const isSuccessful = ref(false);

const chooseTable = async () => {
  errMsg.value = null;
  isSuccessful.value = false;
  try {
    const res = await reservationAPI.chooseTable(
      props.reservation.id,
      payload.value
    );
    console.log(res);
    isSuccessful.value = true;
    emit("onChosen");
  } catch (err) {
    if (err.response && err.response.data) {
      if (err.response.status === 400) {
        emit("onChosen");
        errMsg.value = err.response.data.message;
      }
    }
    console.log(err);
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="chooseTable">
      <ComboBox
        id="table"
        label-text="Table"
        placeholder-text="Choose a table..."
        :collection="props.freeTables"
        v-model:selectedItem="payload.tableId"
      />
      <SuccessMessage
        :is-successful="isSuccessful"
        success-message="Successfully reserved a table!"
      />
      <ErrorMessage :error-flag="errMsg" :error-message="errMsg" />
      <ButtonFilled text="Done">
        <template #icon>
          <SaveIcon />
        </template>
      </ButtonFilled>
    </form>
  </div>
</template>

<style scoped></style>
