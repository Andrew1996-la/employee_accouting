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

  addEmployee = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      key: generateId(),
    };

    this.setState(({ employeesDB }) => {
      const newArr = [...employeesDB, newItem];
      return {
        employeesDB: newArr,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          employeesDB={this.state.employeesDB}
          onDeleteEmployee={this.onDeleteEmployee}
        />
        <EmployeesAddForm addEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
