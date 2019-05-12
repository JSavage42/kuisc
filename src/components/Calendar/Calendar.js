import React from "react";
import "./Calendar.css";

const Calendar = () => (
  <main id="calendar">
    <iframe
      title="KUISC Calendar"
      src="https://calendar.google.com/calendar/embed?showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=kuinfosecclub%40gmail.com&amp;color=%2342104A&amp;ctz=America%2FChicago"
      style={{ borderWidth: "0" }}
      frameborder="0"
      scrolling="no"
    />
  </main>
);

export default Calendar;
