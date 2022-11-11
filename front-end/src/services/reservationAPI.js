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
}

export default new ReservationAPI();
