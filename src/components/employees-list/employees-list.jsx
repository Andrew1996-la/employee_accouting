import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";
import { Component } from "react";

class EmployeesList extends Component {
  render() {
    const { onDeleteEmployee, employeesDB } = this.props;

    return (
      <ul className="app-list list-group">
        {employeesDB.map((employee) => {
          return (
            <EmployeesListItem
              key={employee.key}
              name={employee.name}
              salary={employee.salary}
              onDeleteEmployee={() => onDeleteEmployee(employee.key)}
            />
          );
        })}
      </ul>
    );
  }
}

export default EmployeesList;
