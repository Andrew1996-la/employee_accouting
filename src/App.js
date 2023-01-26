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
      inputValue: "",
      filter: "all",
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

  searchEmployee = (arrayEmployees, inputValue) => {
    if (inputValue.length === 0) return arrayEmployees;
    return arrayEmployees.filter((employee) => {
      return employee.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    });
  };

  updateInputValue = (inputValue) => {
    this.setState({
      inputValue: inputValue,
    });
  };

  filterEmployee = (arrayEmployee, filter) => {
    switch (filter) {
      case "rise":
        return arrayEmployee.filter((emp) => emp.rise);
      case "salary":
        return arrayEmployee.filter((emp) => emp.salary > 2000);
      default:
        return arrayEmployee;
    }
  };

  setFilter = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  updateSalary = (id, newSalary) => {
    this.setState({
      employeesDB: this.state.employeesDB.map((employee) => {
        if (employee.key === id) {
          return { ...employee, salary: newSalary };
        }
        return employee;
      }),
    });
  };

  render() {
    const { employeesDB, inputValue, filter } = this.state;

    const employeesCount = this.state.employeesDB.length;
    const increased = this.state.employeesDB.filter(
      (employee) => employee.increase
    ).length;
    const visibleEmployees = this.filterEmployee(
      this.searchEmployee(employeesDB, inputValue),
      filter
    );

    return (
      <div className="app">
        <AppInfo increased={increased} employeesCount={employeesCount} />

        <div className="search-panel">
          <SearchPanel setInputValue={this.updateInputValue} />
          <AppFilter setFilter={this.setFilter} filter={filter} />
        </div>

        <EmployeesList
          onToggleIncrease={this.onToggleIncrease}
          employeesDB={visibleEmployees}
          onDeleteEmployee={this.onDeleteEmployee}
          onToggleRise={this.onToggleRise}
          updateSalary={this.updateSalary}
        />

        <EmployeesAddForm addNewEmployee={this.addNewEmployee} />
      </div>
    );
  }
}

export default App;
