import { useState, useEffect } from "react";

import "./App.css";

/* Components Imports */
import Header from "./components/Header";
import Holidaycard from "./components/HolidayCard";
import MonthFilter from "./components/MonthFilter";
import NextHoliday from "./components/NextHoliday";
import YearForm from "./components/YearForm";

/* Mocked data */
// import holidays from "./data/holidays";

const apiURL = "https://brasilapi.com.br/api/feriados/v1/";

function App() {
  const [month, setMonth] = useState("");
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadHolidays() {
      setLoading(true);
      setErrorMessage("");

      try {
        const response = await fetch(`${apiURL}2026`);
        const data = await response.json();

        if (response.ok == false) {
          setErrorMessage(data.message);
          setHolidays([]);
          setLoading(false);

          return;
        }

        setHolidays(data);
        //console.log(data);
      } catch (error) {
        console.log(error);
        setErrorMessage("Erro ao realizar a consulta");
        setHolidays([]);
      }

      setLoading(false);
    }

    loadHolidays();
  }, []);

  const isVisible = holidays.filter((holiday) => {
    return month == "" || holiday.date.includes(`-${month}-`);
  });

  let content = "";

  if (loading) {
    content = <p className="status">Carregando feriados...</p>;
  } else if (errorMessage != "") {
    content = <p className="status error">{errorMessage}</p>;
  } else if (isVisible.length == 0) {
    content = <p className="empty">Nenhum feriado neste mês</p>;
  } else {
    content = (
      <>
        <p className="count">
          <span>{isVisible.length}</span> feriados em 2026
        </p>

        <main className="holiday-list">
          {isVisible.map((item) => (
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

  return (
    <>
      <Header />

      <NextHoliday />

      <section className="filters">
        <YearForm />
        <MonthFilter month={month} onChange={setMonth} />
      </section>

      {content}
    </>
  );
}

export default App;
