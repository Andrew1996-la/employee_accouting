import { Component } from "react";

import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
      salary: this.props.salary,
    };
  }

  handleSalaryUpdate = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };

  handleBlur = () => {
    this.props.updateSalary(this.props.idEmployee, this.state.salary);
  };

  render() {
    const {
      name,
      onDeleteEmployee,
      onToggleIncrease,
      onToggleRise,
      increase,
      rise,
    } = this.props;

    let className = "list-group-item d-flex justify-content-between";
    if (increase) {
      className += " increase";
    }
    if (rise) {
      className += " like";
    }

    return (
      <li className={className}>
        <span onClick={onToggleRise} className="list-group-item-label">
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          onBlur={this.handleBlur}
          onChange={this.handleSalaryUpdate}
          value={this.state.salary}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={onToggleIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDeleteEmployee}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
