class DateAndTimeValidator {
  asDateString(date) {
    return `${date.getFullYear()}-${this.padStartValue(
      date.getMonth() + 1
    )}-${this.padStartValue(date.getDate())}`;
  }
  asTimeString(date) {
    return `${this.padStartValue(date.getHours())}:${this.padStartValue(
      date.getMinutes()
    )}:${this.padStartValue(date.getSeconds())}`;
  }
  padStartValue(value) {
    return value.toString().padStart(2, "0");
  }
  isDateInThePast(currDate, givenDate) {
    return givenDate < currDate ? true : false;
  }
}

module.exports = new DateAndTimeValidator();
