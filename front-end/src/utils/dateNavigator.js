class DateNavigator {
  datePattern = /^(\d{4}-\d{2}-\d{2})$/;

  asDateString(date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  }

  validateDateFormat(dateString) {
    return dateString.match(this.datePattern);
  }

  setToday() {
    return this.asDateString(new Date());
  }

  setPrevDay(currDate) {
    let [year, month, day] = currDate.split("-");
    month -= 1;
    const date = new Date(year, month, day);
    date.setMonth(date.getMonth());
    date.setDate(date.getDate() - 1);
    return this.asDateString(date);
  }

  setNextDay(currDate) {
    let [year, month, day] = currDate.split("-");
    month -= 1;
    const date = new Date(year, month, day);
    date.setMonth(date.getMonth());
    date.setDate(date.getDate() + 1);
    return this.asDateString(date);
  }
}

export default new DateNavigator();
