//https://github.com/hypeserver/react-date-range
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./selectDate.css"; // override styles
import { Calendar } from "react-date-range";

const getTodaysDate = () => {
  const date = new Date();
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};

const SelectDate = () => {
  const [date, setDate] = useState(null);

  return (
    <Calendar
      color={"#FFFFFF"}
      //locale={"Norwegian Bokmål"}
      onChange={(item) => setDate(item)}
      date={date}
      minDate={new Date(getTodaysDate())}
      showMonthAndYearPickers={false}
    />
  );
};
export default SelectDate;
