import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        Acme
        <span className="badge badge-pill badge-primary">
          {this.props.totalCounters}
        </span>
      </nav>
    );
  }
}

export default NavBar;
