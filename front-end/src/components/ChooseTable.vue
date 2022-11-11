<script setup>
import ComboBox from "@/components/ComboBox.vue";
import ButtonFilled from "@/components/ButtonFilled.vue";
import SaveIcon from "~icons/fluent/save-16-regular";

import reservationAPI from "@/services/reservationAPI";
import { ref } from "vue";

const props = defineProps({
  freeTables: Array,
  reservation: Object,
});

const payload = ref({
  tableId: null,
});
const emit = defineEmits(["onChosen"]);

const chooseTable = async () => {
  try {
    const res = await reservationAPI.chooseTable(
      props.reservation.id,
      payload.value
    );
    console.log(res);
    emit("onChosen");
  } catch (err) {
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
      <ButtonFilled>
        <template #icon>
          <SaveIcon />
        </template>
      </ButtonFilled>
    </form>
  </div>
</template>

<style scoped></style>
