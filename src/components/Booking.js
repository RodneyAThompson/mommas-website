import React from "react";
import {useState} from "react";
import Calendar from "react-calendar";

const Bookings = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar">
      <h1 className="text-center">React Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
};

export default Bookings;
