<script setup>
import CalendarIcon from "~icons/bi/calendar-date";
import PhoneIcon from "~icons/bxs/phone";
import ClockIcon from "~icons/ant-design/clock-circle-outlined";
import EmailIcon from "~icons/carbon/email";
import GroupIcon from "~icons/clarity/group-solid";

const props = defineProps({
  reservation: Object,
});
</script>

<template>
  <div class="wrapper">
    <p class="names">
      {{ props.reservation.name }}
    </p>
    <div class="reservation-details">
      <div class="info-container">
        <CalendarIcon class="icon" />
        <p>{{ props.reservation.resDate }}</p>
      </div>
      <div class="info-container">
        <PhoneIcon class="icon" />
        <p>{{ props.reservation.phone }}</p>
      </div>
      <div class="info-container">
        <ClockIcon class="icon" />
        <p>{{ props.reservation.resTime }}</p>
      </div>
      <div class="info-container">
        <EmailIcon class="icon" />
        <p>{{ props.reservation.email }}</p>
      </div>
    </div>
    <div class="capacity-wrapper">
      <div class="info-container">
        <GroupIcon class="icon" />
        <p>{{ props.reservation.people }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: var(--primary-white);
  padding: 10px 15px;
  border: 1px solid var(--lighter-gray);
  border-radius: 10px;
}

.wrapper .reservation-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding-left: 25px;
  margin-bottom: 15px;
  font-family: "Inter-Medium";
}

.capacity-wrapper {
  display: flex;
  justify-content: center;
  font-family: "Inter-Medium";
}

.info-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.names {
  font-family: "Inter-Bold";
  margin-bottom: 10px;
}

.icon {
  font-size: 18px;
}

@media screen and (min-width: 1024px) {
  .icon {
    font-size: 25px;
  }
}
</style>
