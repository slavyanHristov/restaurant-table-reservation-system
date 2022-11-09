const db = require("../db/models");
const Reservation = db.reservation;
const Customer = db.customer;

const { flattenArrayObjects } = require("../utils/flattenObject");

const findAllReservations = async () => {
  const reservations = await Reservation.findAll({
    attributes: ["resDate", "resTime", "people"],
    include: [
      {
        model: Customer,
        attributes: ["firstName", "lastName", "email", "phone"],
      },
    ],
  });
  return flattenArrayObjects(reservations);
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

module.exports = {
  findAllReservations,
  createReservation,
};
