import "./app-filter.css";

const AppFilter = ({ filter, setFilter }) => {
  const buttons = [
    { name: "all", label: "Все сотрудники", id: 1 },
    { name: "rise", label: "На повышение", id: 2 },
    { name: "salary", label: "З/П больше 1000$", id: 3 },
  ];

  return (
    <div className="btn-group">
      {buttons.map((btn) => {
        const active = filter === btn.name;
        const clazz = active ? "btn btn-light" : "btn btn-outline-light";

        return (
          <button
            key={btn.id}
            type="button"
            name={btn.name}
            className={clazz}
            onClick={() => setFilter(btn.name)}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
};
export default AppFilter;
