<script setup>
import TableView from "@/components/TableView.vue";
import ButtonFilled from "@/components/ButtonFilled.vue";
import PopupBox from "@/components/PopupBox.vue";
import EditReservation from "@/components/EditReservation.vue";
import ChooseTable from "@/components/ChooseTable.vue";
import GridContainer from "@/components/GridContainer.vue";
import RestaurantTable from "@/components/RestaurantTable.vue";

import RightArrowIcon from "~icons/ant-design/arrow-right-outlined";
import LeftArrowIcon from "~icons/ant-design/arrow-left-outlined";

import { onIntersect } from "@/utils/intersectObserver";
import reservationAPI from "@/services/reservationAPI";
import tableAPI from "@/services/tableAPI";
import dateNavigator from "@/utils/dateNavigator";

import { ref, computed, onMounted, onUnmounted } from "vue";

const observer = ref({});
const allTablesRef = ref({});

const fields = ref({
  name: "Name",
  phone: "Phone",
  resTime: "Reservation Time",
});

const reservations = ref(null);
const tables = ref(null);
const currDate = ref(dateNavigator.setToday());

const freeTables = computed(() => {
  return tables.value.filter((table) => !table.isOccupied);
});
const filterReservations = computed(() => {
  return reservations.value.filter(
    (reservation) => reservation.resDate === currDate.value
  );
});

const isPopupOpen = ref(false);
const popupHeaderText = ref("");
const selectedReservation = ref(null);

const getReservations = async () => {
  try {
    const res = await reservationAPI.getReservations();
    reservations.value = res.data.collection;
  } catch (err) {
    console.log(err);
  }
};

const getTables = async () => {
  try {
    const res = await tableAPI.getAllTables();
    tables.value = res.data.collection;
    console.log(tables.value);
  } catch (err) {
    console.log(err);
  }
};

await getReservations();
await getTables();

const refreshReservations = async (isEditOpen = false) => {
  await getReservations();
  if (isEditOpen)
    setTimeout(() => {
      isPopupOpen.value = false;
    }, 2000);
};

const refreshTables = async () => {
  await getTables();
  setTimeout(() => {
    isPopupOpen.value = false;
  }, 2000);
};

const today = () => {
  currDate.value = dateNavigator.setToday();
};

const prev = () => {
  currDate.value = dateNavigator.setPrevDay(currDate.value);
};

const next = () => {
  currDate.value = dateNavigator.setNextDay(currDate.value);
};

const openPopup = (popup) => {
  isPopupOpen.value = popup?.isOpen;
  popupHeaderText.value = popup?.headerText;
};

const assignSelectedReservation = (reservation) => {
  selectedReservation.value = reservation;
  console.log(selectedReservation.value);
};

// callback being called on intersection
const onEnter = () => {
  document.documentElement.style.setProperty("--opacity-val", 1);
  document.documentElement.style.setProperty("--blur-val", 0);
};

// optional callback being called when the targetElement is no longer intersected
const onExit = () => {
  document.documentElement.style.setProperty("--opacity-val", 0);
  document.documentElement.style.setProperty("--blur-val", "5px");
};

onMounted(() => {
  observer.value = onIntersect(allTablesRef.value, onEnter, onExit, true, {
    threshold: 0.2,
  });
});

onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<template>
  <div class="main-wrapper">
    <PopupBox
      :is-open="isPopupOpen"
      :header-text="popupHeaderText"
      :is-closable="true"
      @closeModal="isPopupOpen = false"
    >
      <template #popup-content>
        <EditReservation
          v-if="popupHeaderText === 'Edit Reservation'"
          :reservation="selectedReservation"
          @on-edited="refreshReservations(true)"
        />
        <ChooseTable
          v-else
          :free-tables="freeTables"
          :reservation="selectedReservation"
          @on-chosen="
            refreshTables();
            getReservations();
          "
        />
      </template>
    </PopupBox>
    <div class="header">
      <h1>Reservations</h1>
    </div>
    <div class="content-wrapper">
      <div class="reservations-wrapper">
        <h1>Reservations for {{ currDate }}</h1>
        <div class="date-navigation">
          <LeftArrowIcon class="vector" @click="prev()" />
          <ButtonFilled text="Today" @click="today()" />
          <RightArrowIcon class="vector" @click="next()" />
        </div>
        <div class="table-wrapper">
          <TableView
            :fields="fields"
            :collection="filterReservations"
            @onOpen="openPopup"
            @onSelectedReservation="assignSelectedReservation"
            @onCanceledReservation="refreshReservations"
          />
        </div>
      </div>
      <div class="all-tables" ref="allTablesRef">
        <h1>Tables</h1>
        <GridContainer :collection="tables">
          <template #card="slotProps">
            <RestaurantTable
              :table="slotProps.item"
              @on-freed-table="
                getTables();
                getReservations();
              "
            />
          </template>
        </GridContainer>
      </div>
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
  background: var(--lighter-gray) url("@/assets/images/reservations-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.header h1 {
  margin-left: var(--x-spacing-mobile);
  font-size: 35px;
  color: var(--snow-white);
  text-shadow: 1px 1px 2px var(--primary-black);
}
.content-wrapper {
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  flex-direction: column;
}

.content-wrapper h1 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}
.reservations-wrapper {
  background-color: var(--primary-white);
  margin-top: 20px;
  margin-left: var(--x-spacing-mobile);
  margin-right: var(--x-spacing-mobile);
  border: 1px solid var(--lighter-gray);
  border-radius: 10px;
  padding-bottom: 50px;
}
.table-wrapper {
  display: flex;
  justify-content: center;
  flex: 1;
  margin-left: var(--x-spacing-mobile);
  margin-right: var(--x-spacing-mobile);
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;
}

.date-navigation {
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 30px;
}

.date-navigation .vector {
  font-size: 80px;
  cursor: pointer;
  transition: 0.2s ease-in;
}
.all-tables {
  margin-left: var(--x-spacing-mobile);
  margin-right: var(--x-spacing-mobile);
  margin-bottom: 30px;
  transition: all 1.5s;
  filter: blur(var(--blur-val));
  opacity: var(--opacity-val);
}

.date-navigation .vector:hover {
  color: var(--darker-gray);
}
.button {
  width: 200px;
}

@media screen and (min-width: 1024px) {
  .table-wrapper {
    margin-left: var(--x-spacing-desktop);
    margin-right: var(--x-spacing-desktop);
  }
  .header h1 {
    margin-left: var(--x-spacing-desktop);
    font-size: 45px;
    margin-bottom: 20px;
  }
  .date-navigation {
    width: 50%;
    padding-left: var(--x-spacing-desktop);
    padding-right: var(--x-spacing-desktop);
  }
  .all-tables {
    margin-left: 200px;
    margin-right: 200px;
  }
  .reservations-wrapper {
    margin-left: var(--x-spacing-desktop);
    margin-right: var(--x-spacing-desktop);
  }
}
</style>
