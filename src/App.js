import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import InstanceComponent from "./components/instances/InstanceComponent";
import ServerComponent from "./components/servers/ServerComponent";
import UserComponent from "./components/users/UserComponent";

class App extends Component {
  render() {
    return (
      <div className="container" style={{ flex: 1 }}>
        <div className="row justify-content-center">
          <ServerComponent />
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);
