import { Component } from "react";

import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
    };
  }

  // onIncrease = (e) => {
  //   e.stopPropagation();
  //   this.setState(({ increase }) => ({
  //     increase: !increase,
  //   }));
  // };

  onRise = () => {
    this.setState(({ rise }) => ({
      rise: !rise,
    }));
  };

  render() {
    const {
      name,
      salary,
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
          defaultValue={salary + "$"}
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
