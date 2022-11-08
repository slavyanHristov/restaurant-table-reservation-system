const flattenObject = (userObject) => {
  const flattened = {};

  Object.keys(userObject).forEach((key) => {
    const value = userObject[key];
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value));
    } else {
      flattened[key] = value;
    }
  });

  return flattened;
};

const flattenArrayObjects = (collection) => {
  let flattenedArray = [];
  flattenedArray = collection.map((item) => {
    return flattenObject(item.toJSON());
  });
  return flattenedArray;
};

module.exports = { flattenObject, flattenArrayObjects };
