import { Component } from "react";

import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

class EmployeesList extends Component {
  render() {
    const {
      onDeleteEmployee,
      employeesDB,
      onToggleIncrease,
      onToggleRise,
      updateSalary,
    } = this.props;

    return (
      <ul className="app-list list-group">
        {employeesDB.map((employee) => {
          return (
            <EmployeesListItem
              key={employee.key}
              name={employee.name}
              salary={employee.salary}
              increase={employee.increase}
              rise={employee.rise}
              onDeleteEmployee={() => onDeleteEmployee(employee.key)}
              onToggleIncrease={() => onToggleIncrease(employee.key)}
              onToggleRise={() => onToggleRise(employee.key)}
              idEmployee={employee.key}
              updateSalary={updateSalary}
            />
          );
        })}
      </ul>
    );
  }
}

export default EmployeesList;
