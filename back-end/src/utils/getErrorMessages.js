module.exports = (errorsArray) => {
  return errorsArray.reduce((errors, currentIter) => {
    if (errors[currentIter.path]) {
      errors[currentIter.path].push(currentIter.message);
    } else {
      errors[currentIter.path] = [currentIter.message];
    }
    return errors;
  }, {});
};
