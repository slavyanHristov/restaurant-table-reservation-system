import API from "./API";

class ReservationAPI {
  getReservations() {
    return API().get("/reservations");
  }
  registerReservation(reservationData) {
    return API().post("/reservations", reservationData);
  }
}

export default new ReservationAPI();
