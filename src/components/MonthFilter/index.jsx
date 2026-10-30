import "./month-filter.css";

import months from "../../data/months";

export default function MonthFilter() {
  return (
    <div className="month-filter">
      <label htmlFor="month">Mês</label>
      <select name="month" id="month">
        <option value="">Todos</option>

        {months.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
