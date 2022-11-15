<script setup>
import NavItem from "@/components/NavItem.vue";

import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <footer>
    <div class="footer-wrapper">
      <nav>
        <NavItem class="item" route-name="reservations" text="Reservations" />
        <NavItem
          class="item"
          route-name="new-reservation"
          text="New Reservation"
        />
        <div>
          <img
            class="secondary-logo"
            src="@/assets/images/secondary-logo.png"
            alt="secondary-logo"
            @click="router.push({ name: 'home' })"
          />
        </div>
        <NavItem class="item" route-name="search" text="Search" />
        <NavItem class="item" route-name="add-table" text="Add Table" />
      </nav>
      <div class="line"></div>
      <div class="copyright">© Restaurant System, Inc. 2022.</div>
      <div class="copyright">Made by: Slavyan Hristov</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--primary-black);
  font-family: "Montserrat-Normal";
  font-weight: lighter;
}
.footer-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  width: 100%;
  padding: 100px var(--x-spacing-mobile);
}

.secondary-logo {
  height: 50px;
  width: 50px;
  cursor: pointer;
}

nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: var(--snow-white);
}

.item {
  width: 0;
  flex: 1 1 0;
  font-size: 10px;
}

.line {
  height: 1px;
  width: 70%;
  background-color: var(--light-pink);
  margin-left: 50px;
  margin-right: 50px;
}

.copyright {
  color: var(--primary-gray);
  font-size: 10px;
}

@media screen and (min-width: 1024px) {
  .wrapper {
    padding: 100px var(--x-spacing-desktop);
  }
  nav {
    width: 80%;
  }
  .item {
    font-size: 14px;
  }
  .copyright {
    font-size: 14px;
  }
}
</style>
