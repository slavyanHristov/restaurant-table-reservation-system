const db = require("../db/models");
const { fn, col } = db.sequelize;
const Reservation = db.reservation;
const Customer = db.customer;
const Table = db.table;
const { flattenArrayObjects } = require("../utils/flattenObject");

const findAllReservations = async () => {
  const reservations = await Reservation.findAll({
    attributes: ["id", "resDate", "resTime", "resStatus", "people"],
    include: [
      {
        model: Customer,
        attributes: [
          [fn("CONCAT", col("firstName"), " ", col("lastName")), "name"],
          "email",
          "phone",
        ],
      },
    ],
  });
  return flattenArrayObjects(reservations);
};

const findReservationById = async (reservationId) => {
  const reservation = await Reservation.findOne({
    where: {
      id: reservationId,
    },
  });

  return reservation;
};

const createCustomer = async (customerDetails, t = null) => {
  return await Customer.create(
    {
      firstName: customerDetails.firstName,
      lastName: customerDetails.lastName,
      phone: customerDetails.phone,
      email: customerDetails.email,
    },
    {
      transaction: t,
    }
  );
};

const createReservation = async (resDetails) => {
  const { resDate, resTime, people, ...customerDetails } = resDetails;
  const result = await db.sequelize.transaction(async (t) => {
    const customer = await createCustomer(customerDetails, t);

    const reservation = await Reservation.create(
      {
        resDate: resDate,
        resTime: resTime,
        people: people,
        customerId: customer.id,
      },
      { transaction: t }
    );

    return reservation;
  });
  return result;
};

const updateReservation = async (reservationId, resDetails) => {
  const [result, metadata] = await Reservation.update(resDetails, {
    where: {
      id: reservationId,
    },
  });

  return result;
};

const deleteReservation = async (reservation) => {
  return await reservation.destroy();
};

const setReservationStatus = async (reservation, status) => {
  reservation.resStatus = status;
  return await reservation.save();
};

const setReservationTable = async (reservationId, tableId) => {
  await Table.update(
    {
      isOccupied: true,
      reservationId: reservationId,
    },
    {
      where: {
        id: tableId,
      },
    }
  );
  return await Reservation.update(
    {
      resStatus: "seated",
    },
    {
      where: {
        id: reservationId,
      },
    }
  );
};

module.exports = {
  findAllReservations,
  createReservation,
  updateReservation,
  deleteReservation,
  findReservationById,
  setReservationTable,
  setReservationStatus,
};
