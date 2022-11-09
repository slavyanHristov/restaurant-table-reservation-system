<script setup>
import ReservationInfo from "@/components/ReservationInfo.vue";
import ListContainer from "@/components/ListContainer.vue";
import SearchIcon from "~icons/ant-design/search-outlined";

import filterCollectionByVal from "@/utils/filterCollection";
import reservationAPI from "@/services/reservationAPI";

import { ref, computed } from "vue";

const searchVal = ref("");

const reservations = ref([
  {
    firstName: "Slavyan",
    lastName: "Hristov",
    phone: "+123456789",
    email: "slavqn@example.com",
    resDate: "16/10/2022",
    resTime: "08:00 AM",
    people: 3,
  },
  {
    firstName: "John",
    lastName: "Doe",
    phone: "+123456789",
    email: "johndoe@example.com",
    resDate: "17/10/2022",
    resTime: "09:00 AM",
    people: 5,
  },
]);

const getReservations = async () => {
  try {
    const res = await reservationAPI.getReservations();
    console.log(res.data.collection);
    reservations.value = res.data.collection;
  } catch (err) {
    console.log(err);
  }
};
await getReservations();

const filteredReservations = computed(() => {
  return filterCollectionByVal(reservations.value, searchVal.value);
});
</script>

<template>
  <div class="main-wrapper">
    <div class="header">
      <div class="header-wrapper">
        <h1>Search Reservations</h1>
        <div class="search-wrapper">
          <div class="icon">
            <SearchIcon class="icon-vector" />
          </div>
          <input
            type="search"
            class="search-box"
            placeholder="Search..."
            v-model="searchVal"
          />
        </div>
      </div>
    </div>
    <ListContainer
      class="results-wrapper"
      :collection="reservations"
      :filteredCollection="filteredReservations"
    >
      <template #card="slotProps">
        <ReservationInfo :reservation="slotProps.item" />
      </template>
    </ListContainer>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  height: 200px;
  background: var(--lighter-gray) url("@/assets/images/search-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.header-wrapper {
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-left: var(--x-spacing-mobile);
  margin-bottom: 15px;
}
.header h1 {
  font-size: 35px;
  color: var(--snow-white);
  text-shadow: 1px 1px 2px var(--primary-black);
}
.results-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: var(--x-spacing-mobile);
  margin-right: var(--x-spacing-mobile);
}

.search-wrapper {
  position: relative;
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  background-color: var(--primary-white);
}
.icon {
  display: flex;
  align-items: center;
  padding-left: 6px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
}
.icon .icon-vector {
  width: 25px;
  height: 25px;
  color: var(--primary-black);
}

.search-box {
  display: block;
  padding: 10px 0;
  width: 100%;
  font-family: "Inter-Light";
  font-size: 16px;
  color: var(--primary-black);
  border-radius: 10px;
  padding-left: 40px;
  background: none;
  border: 1px solid var(--lighter-gray);
}
.test {
  transition: all 1.5s;
  filter: blur(var(--blur-val));
  opacity: var(--opacity-val);
}

.search-box:focus {
  outline: 2px solid black;
}

@media screen and (min-width: 1024px) {
  .header-wrapper {
    margin-left: var(--x-spacing-desktop);
    margin-bottom: 20px;
  }
  .header h1 {
    font-size: 45px;
  }
  .results-wrapper {
    margin-left: 200px;
    margin-right: 200px;
  }
}
</style>
