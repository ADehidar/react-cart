import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeStyle()}>{this.formatcount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counterVar)}
          className="btn btn-secondary btn-sm"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counterVar.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatcount() {
    return this.props.counterVar.value === 0
      ? "0"
      : this.props.counterVar.value;
  }

  getBadgeStyle() {
    let classes = "badge m-2 badge-";
    return (classes +=
      this.props.counterVar.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
