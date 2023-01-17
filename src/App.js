import { Component } from "react";

import AppInfo from "./components/app-info/app-info";
import AppFilter from "./components/app-filter/app-filter";
import SearchPanel from "./components/search-panel/search-panel";
import EmployeesList from "./components/employees-list/employees-list";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";
import employeesDB from "./fakeDB/employeesDB";
import { generateId } from "./utils";

import "./App.css";

class App extends Component {
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

  addNewEmployee = (name, salary) => {
    const newEmployee = {
      name,
      salary,
      key: generateId(),
      increase: false,
      rise: false,
    };

    this.setState(({ employeesDB }) => ({
      employeesDB: [...employeesDB, newEmployee],
    }));
  };

  onToggleIncrease = (key) => {
    this.setState(({ employeesDB }) => ({
      employeesDB: employeesDB.map((employee) => {
        if (employee.key === key) {
          return { ...employee, increase: !employee.increase };
        }
        return employee;
      }),
    }));
  };

  onToggleRise = (key) => {
    this.setState(({ employeesDB }) => ({
      employeesDB: employeesDB.map((employee) => {
        if (employee.key === key) {
          return { ...employee, rise: !employee.rise };
        }
        return employee;
      }),
    }));
  };

  render() {
    const employeesCount = this.state.employeesDB.length;
    const increased = this.state.employeesDB.filter(
      (employee) => employee.increase
    ).length;

    return (
      <div className="app">
        <AppInfo increased={increased} employeesCount={employeesCount} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          onToggleIncrease={this.onToggleIncrease}
          employeesDB={this.state.employeesDB}
          onDeleteEmployee={this.onDeleteEmployee}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm addNewEmployee={this.addNewEmployee} />
      </div>
    );
  }
}

export default App;
