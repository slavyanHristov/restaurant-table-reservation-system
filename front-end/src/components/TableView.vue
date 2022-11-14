<script setup>
import ButtonAction from "@/components/ButtonAction.vue";
import CrossIcon from "~icons/radix-icons/cross-circled";
import NotFoundResource from "@/components/NotFoundResource.vue";
import reservationAPI from "@/services/reservationAPI";

const props = defineProps({
  fields: Object,
  collection: Array,
});

const emit = defineEmits([
  "onOpen",
  "onSelectedReservation",
  "onCanceledReservation",
]);

const passItemData = (item) => {
  emit("onSelectedReservation", item);
};

const openPopup = (text) => {
  emit("onOpen", {
    isOpen: true,
    headerText: text,
  });
};

const toUpperCase = (str) => {
  return str.toUpperCase();
};

const isResStatusMissed = (resStatus) => {
  return resStatus === "missed";
};
const cancelReservation = async (item) => {
  try {
    const res = await reservationAPI.cancelReservation(item.id);
    console.log(res);
    emit("onCanceledReservation");
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="main-wrapper">
    <table key="1" v-if="props.collection.length !== 0">
      <thead>
        <tr class="header-row">
          <th v-for="field in props.fields" :key="field">
            {{ field }}
          </th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr class="body-row" v-for="item in props.collection" :key="item">
          <td v-for="(field, index) in props.fields" :key="field">
            {{ item[index] }}
          </td>
          <td>
            <div v-if="item.resStatus === 'pending'" class="actions">
              <ButtonAction
                text="Seat"
                color="#22c55e"
                @click="
                  openPopup('Choose Table');
                  passItemData(item);
                "
              />
              <ButtonAction
                text="Edit"
                color="#3b82f6"
                @click="
                  openPopup('Edit Reservation');
                  passItemData(item);
                "
              />
              <ButtonAction
                text="Cancel"
                color="#ef4444"
                @click="cancelReservation(item)"
              />
            </div>
            <div class="status" v-else>
              <p
                :class="
                  isResStatusMissed(item.resStatus) ? 'redColor' : 'blueColor'
                "
              >
                {{ toUpperCase(item.resStatus) }}
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <NotFoundResource
      class="test"
      v-else
      text="No Reservations"
      position="relative"
    >
      <template #icon><CrossIcon class="vector" /></template>
    </NotFoundResource>
  </div>
</template>

<style scoped>
.main-wrapper {
  width: 100%;
  position: relative;
  display: grid;
}

table {
  border-collapse: separate;
  border-spacing: 0 0px;
  border: 1px solid var(--primary-black);
  border-top: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
}
.header-row {
  color: var(--primary-white);
  font-family: "Inter-Bold";
}
.header-row th {
  height: 40px;
  background-color: var(--primary-black);
}
.header-row th:first-of-type {
  border-top-left-radius: 10px;
}
.header-row th:last-of-type {
  border-top-right-radius: 10px;
}
.body-row {
  background-color: var(--primary-white);
  font-family: "Inter-Light";
}
.body-row td {
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
}
.actions {
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  gap: 2px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.status {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 13px;
  font-family: "Inter-Bold";
}

.redColor {
  color: var(--primary-red);
}

.blueColor {
  color: var(--primary-blue);
}

.vector {
  font-size: 40px;
}
.item-container {
  width: 100%;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  filter: blur(5px);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-out;
}

@media screen and (min-width: 1024px) {
  .status {
    font-size: 15px;
  }
}
</style>
