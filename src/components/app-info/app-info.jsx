import "./app-info.css";

const AppInfo = ({ increased, employeesCount }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Apple</h1>
      <h2>Общее число сотрудников: {employeesCount}</h2>
      <h2>Премию получат: {increased}</h2>
    </div>
  );
};

export default AppInfo;
