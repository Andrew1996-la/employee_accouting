import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";
import employeesDB from "../../fakeDB/employeesDB";
import { Component } from "react";

class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesDB: employeesDB,
    };
  }

  onDeleteEmployee = (key) => {
    this.setState(({ employeesDB }) => ({
      employeesDB: employeesDB.filter((employee) => employee.key !== key),
    }));
  };

  render() {
    const { employeesDB } = this.state;

    return (
      <ul className="app-list list-group">
        {employeesDB.map((employee) => {
          return (
            <EmployeesListItem
              key={employee.key}
              name={employee.name}
              salary={employee.salary}
              onDeleteEmployee={() => this.onDeleteEmployee(employee.key)}
            />
          );
        })}
      </ul>
    );
  }
}

export default EmployeesList;
