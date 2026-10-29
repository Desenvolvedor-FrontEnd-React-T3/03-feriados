import "./App.css";

/* Components Imports */
import Header from "./components/Header";
import Holidaycard from "./components/HolidayCard";
import NextHoliday from "./components/NextHoliday";

/* Mocked data */
import holidays from "./data/holidays";

function App() {
  return (
    <>
      <Header />

      <NextHoliday />

      <p className="count">14 feriados em 2026</p>

      <main className="holiday-list">
        {holidays.map((item) => (
          <Holidaycard
            key={item.date}
            date={item.date}
            name={item.name}
            weekday={item.weekday}
            type={item.type}
          />
        ))}
      </main>
    </>
  );
}

export default App;
