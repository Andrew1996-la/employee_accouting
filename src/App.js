import './App.css';
import AppInfo from "./components/app-info/app-info";
import AppFilter from "./components/app-filter/app-filter";
import SearchPanel from "./components/search-panel/search-panel";
import EmployeesList from "./components/employees-list/employees-list";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";

function App() {
  return (
      <div className="app">
          <AppInfo />

          <div className='search-panel'>
              <SearchPanel />
              <AppFilter />
          </div>

          <EmployeesList />
          <EmployeesAddForm />
      </div>
  );
}

export default App