<script setup>
import NavItem from "@/components/NavItem.vue";

import FoodIcon from "~icons/fluent/food-16-filled";
import CardListIcon from "~icons/bi/card-list";
import SearchIcon from "~icons/ant-design/search-outlined";
import PlusIcon from "~icons/akar-icons/plus";
</script>

<template>
  <div class="nav-items">
    <NavItem route-name="reservations" text="Reservations">
      <template #icon>
        <CardListIcon />
      </template>
    </NavItem>
    <NavItem route-name="new-reservation" text="New Reservation">
      <template #icon>
        <FoodIcon />
      </template>
    </NavItem>
    <NavItem route-name="search" text="Search">
      <template #icon>
        <SearchIcon />
      </template>
    </NavItem>
    <NavItem route-name="add-table" text="Add Table">
      <template #icon>
        <PlusIcon />
      </template>
    </NavItem>
  </div>
</template>

<style scoped>
.nav-items {
  display: flex;
  font-family: "Montserrat-Medium";
  font-weight: normal;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
}
@media screen and (min-width: 1024px) {
  .nav-items {
    gap: 35px;
  }
}
</style>
