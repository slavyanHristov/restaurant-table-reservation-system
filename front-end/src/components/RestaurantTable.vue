<script setup>
import { computed } from "vue";
import tableAPI from "@/services/tableAPI";

const props = defineProps({
  table: Object,
});

const emit = defineEmits(["onFreedTable"]);

const cssProps = computed(() => {
  return {
    "--columns": props.table.capacity,
  };
});

const freeTable = async (id) => {
  try {
    const res = await tableAPI.freeTable(id);
    emit("onFreedTable");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
</script>
<template>
  <div class="main-wrapper">
    <div class="header">
      <div>{{ props.table?.name }}</div>
      <div class="table-status" v-show="props.table.isOccupied">Occupied</div>
      <div
        class="free-table-button"
        v-show="props.table.isOccupied"
        @click="freeTable(props.table.id)"
      >
        Free
      </div>
    </div>
    <div class="content">
      <div class="seats-wrapper" :style="cssProps">
        <div
          class="circle"
          :class="{ blackColor: props.table.isOccupied }"
          v-for="seat in props.table?.capacity"
          :key="seat"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  background-color: var(--primary-red);
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 1.5s;
}
.main-wrapper .header {
  display: flex;
  justify-content: space-around;
  position: relative;
  align-items: center;
  grid-gap: 10px;
  font-family: "Inter-Bold";
  color: var(--primary-white);
}
.header .table-status {
  background-color: transparent;
  color: var(--primary-black);
  font-family: "Inter-Light";
  font-size: 10px;
  border: 1px solid var(--primary-black);
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;
}
.header .free-table-button {
  position: relative;
  top: 0;
  right: 5px;
  color: var(--primary-black);
  border: 1px solid var(--primary-black);
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 20px;
  cursor: pointer;
  font-family: "Inter-Bold";
  transition: all 0.2s ease;
}
.free-table-button:hover {
  background-color: var(--primary-white);
  border-color: var(--primary-green);
  color: var(--primary-green);
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.seats-wrapper {
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
}

.circle {
  width: 15px;
  height: 15px;
  background-color: var(--primary-white);
  border-radius: 100%;
}
.blackColor {
  background-color: var(--primary-black);
}

@media screen and (min-width: 1024px) {
  .seats-wrapper {
    margin-top: 20px;
    width: 40%;
    margin-bottom: 20px;
  }
  .circle {
    width: 20px;
    height: 20px;
  }
}
</style>
