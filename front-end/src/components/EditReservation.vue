<script setup>
import ButtonFilled from "@/components/ButtonFilled.vue";
import TextBox from "@/components/TextBox.vue";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import SaveIcon from "~icons/fluent/save-16-regular";

import { ref } from "vue";

import reservationAPI from "@/services/reservationAPI";
import getValues from "@/utils/getValues";

const props = defineProps({
  reservation: Object,
});

const emit = defineEmits(["onEdited"]);

console.log(props.reservation);

const reservation = ref({
  resDate: {
    textBoxType: "date",
    id: "resDate",
    labelText: "Reservation Date",
    placeholderText: "Enter reservation date...",
    value: props.reservation?.resDate,
  },
  resTime: {
    textBoxType: "time",
    id: "resTime",
    labelText: "Reservation Time",
    placeholderText: "Enter reservation time...",
    value: props.reservation?.resTime,
  },
  people: {
    textBoxType: "number",
    id: "people",
    labelText: "Number of People",
    placeholderText: "Enter the number of people...",
    value: props.reservation?.people.toString(),
  },
});
const validationErrors = ref({});
const isSuccessful = ref(false);
const generalErrors = ref(null);
const editReservation = async () => {
  validationErrors.value = {};
  generalErrors.value = null;
  isSuccessful.value = false;
  try {
    const res = await reservationAPI.editReservation(
      props.reservation.id,
      getValues(reservation.value)
    );
    emit("onEdited");
    isSuccessful.value = true;
    console.log(res);
  } catch (err) {
    if (err.response && err.response.data) {
      validationErrors.value = err.response.data.errors;
      generalErrors.value = err.response.data.message;
    }
    console.log(err);
  }
};
</script>

<template>
  <div class="main-wrapper">
    <form @submit.prevent="editReservation()">
      <TextBox
        v-for="textBox in reservation"
        :key="textBox.id"
        :text-box-type="textBox.textBoxType"
        :id="textBox.id"
        :label-text="textBox.labelText"
        :placeholder-text="textBox.placeholderText"
        :errors="validationErrors"
        v-model:input="textBox.value"
      />
      <ErrorMessage
        :error-flag="generalErrors"
        :error-message="generalErrors"
      />
      <SuccessMessage
        class="success"
        :is-successful="isSuccessful"
        success-message="Done!"
      />
      <ButtonFilled text="Done">
        <template #icon>
          <SaveIcon />
        </template>
      </ButtonFilled>
    </form>
  </div>
</template>

<style scoped>
.success {
  margin-bottom: 20px;
}
</style>
