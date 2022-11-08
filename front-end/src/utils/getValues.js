export default (payload) => {
  const payloadValues = Object.keys(payload).reduce(
    (accumulator, currentVal) => {
      return {
        ...accumulator,
        [currentVal]: payload[currentVal]?.value,
      };
    },
    {}
  );
  return payloadValues;
};
