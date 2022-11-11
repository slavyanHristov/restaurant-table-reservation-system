import API from "./API";

class ReservationAPI {
  getReservations() {
    return API().get("/reservations");
  }
  registerReservation(reservationData) {
    return API().post("/reservations", reservationData);
  }
  editReservation(id, reservationData) {
    return API().patch("/reservations/" + id, reservationData);
  }
  cancelReservation(id) {
    return API().delete("/reservations/" + id);
  }
  chooseTable(id, tableId) {
    return API().post("/reservations/choose-table/" + id, tableId);
  }
}

export default new ReservationAPI();
