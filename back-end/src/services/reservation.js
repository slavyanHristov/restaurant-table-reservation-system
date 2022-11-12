const dateTimeValidator = require("../utils/dateAndTimeValidator");

const getAllReservations = async (reservationDAO) => {
  return await reservationDAO.findAllReservations();
};

const registerReservation = async (reservationDAO, payload) => {
  return await reservationDAO.createReservation(payload);
};

const editReservation = async (reservationId, reservationDAO, payload) => {
  return await reservationDAO.updateReservation(reservationId, payload);
};

const cancelReservation = async (reservationId, reservationDAO) => {
  const reservation = await reservationDAO.findReservationById(reservationId);
  if (reservation) return await reservationDAO.deleteReservation(reservation);

  throw {
    status: 400,
    message: "Given reservation doesn't exist!",
  };
};

const compareResDateToCurrDate = (resDate, currDate) => {
  return resDate > currDate ? 1 : resDate < currDate ? -1 : 0;
};

const chooseTable = async (
  reservationId,
  tableId,
  reservationDAO,
  tableDAO
) => {
  let reservation = await reservationDAO.findReservationById(reservationId);
  if (!reservation) {
    throw {
      status: 404,
      message: "Reservation not found!",
    };
  }
  const table = await tableDAO.findTableById(tableId);

  const currDate = new Date();
  const currDateStr = dateTimeValidator.asDateString(currDate);

  /**
   * if the reservation day is in the future (compared to current date)
   *  => throw error
   */
  if (compareResDateToCurrDate(reservation.resDate, currDateStr) === 1) {
    throw {
      status: 400,
      message: "PHONKY TOWN",
    };
  }

  /**
   * if the reservation day is in the past (compared to current date)
   *  => update the reservation's status to 'missed'
   */

  if (compareResDateToCurrDate(reservation.resDate, currDateStr) === -1) {
    await reservationDAO.setReservationStatus(reservation, "missed");
  }

  /**
   * If the reservation day is equal to current day
   *  and reservation time is the past (compared to current date - 30 minutes)
   *  => update the reservation's status to missed
   */
  if (compareResDateToCurrDate(reservation.resDate, currDateStr) === 0) {
    const currTimePlus30minsStr = dateTimeValidator.asTimeString(
      new Date(currDate.setMinutes(currDate.getMinutes() - 2))
    );
    if (currTimePlus30minsStr > reservation?.resTime) {
      reservation = await reservationDAO.setReservationStatus(
        reservation,
        "missed"
      );
    }
  }
  /**
   *
   * if reservation.resStatus === 'seated'
   *  => throw error => "You've already reserved a table. Please make a new reservation."
   * if reservation.resStatus === 'missed'
   *  => throw error => "You've missed your reservation date"
   */
  if (reservation.resStatus === "seated") {
    throw {
      status: 400,
      message:
        "You've already reserved a table! Please make a new reservation.",
    };
  } else if (reservation.resStatus === "missed") {
    throw {
      status: 400,
      message:
        "You've missed the reservation date and time! Please make a new reservation.",
    };
  }
  /**
   *
   * If the given table is already occupied throw an error
   */
  if (table.isOccupied)
    throw {
      status: 400,
      message: "Given table is already reserved!",
    };

  /**
   *
   * If the given reservation's party size is bigger than the table's capacity =>
   *  throw Error
   *  else => create the record
   */
  if (reservation.people > table.capacity)
    throw {
      status: 400,
      message: "Reservation's party size is too big for this table!",
    };

  return await reservationDAO.setReservationTable(reservationId, tableId);
};

module.exports = {
  getAllReservations,
  registerReservation,
  editReservation,
  cancelReservation,
  chooseTable,
};
