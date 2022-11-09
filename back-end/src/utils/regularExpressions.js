const regularExpressions = {
  name: {
    regex: /^[A-Z][a-zA-Z]{2,}$/,
    msg: "Invalid name!",
  },
  phone: {
    regex: /^\d{10}$/, // TODO: Figure out better regular expression for phone numbers
    msg: "Invalid phone number!",
  },
};

module.exports = regularExpressions;
