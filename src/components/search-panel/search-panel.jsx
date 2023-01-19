import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  updateInputValue = (e) => {
    const inputValue = e.target.value;
    this.setState({
      inputValue: inputValue,
    });
    this.props.setInputValue(inputValue);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        onChange={this.updateInputValue}
        value={this.state.inputValue}
      />
    );
  }
}

export default SearchPanel;
