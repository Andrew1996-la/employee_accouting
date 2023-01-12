import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";
import employeesDB from "../../fakeDB/employeesDB";

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      {employeesDB.map((employee) => {
        return (
          <EmployeesListItem
            key={employee.key}
            name={employee.name}
            salary={employee.salary}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
