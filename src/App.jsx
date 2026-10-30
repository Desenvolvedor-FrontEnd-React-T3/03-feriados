import "./App.css";

/* Components Imports */
import Header from "./components/Header";
import Holidaycard from "./components/HolidayCard";
import MonthFilter from "./components/MonthFilter";
import NextHoliday from "./components/NextHoliday";
import YearForm from "./components/YearForm";

/* Mocked data */
import holidays from "./data/holidays";

function App() {
  return (
    <>
      <Header />

      <NextHoliday />

      <section className="filters">
        <YearForm />
        <MonthFilter />
      </section>

      <p className="count">14 feriados em 2026</p>

      <main className="holiday-list">
        {holidays.map((item) => (
          <Holidaycard
            key={item.date}
            date={item.date}
            name={item.name}
            weekday={item.weekday}
          />
        ))}
      </main>
    </>
  );
}

export default App;
