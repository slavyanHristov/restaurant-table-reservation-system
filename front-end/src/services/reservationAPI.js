import API from "./API";

class ReservationAPI {
  getReservations() {
    return API().get("/reservations");
  }
}

export default new ReservationAPI();
