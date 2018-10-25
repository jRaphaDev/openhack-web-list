import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import InstanceComponent from "./components/instances/InstanceComponent";
import ServerComponent from "./components/servers/Server";
import { Server } from "./components/servers/Server";

class App extends Component {
  render() {
    return (
      <div className="container" style={{ flex: 1 }}>
        <div className="row">
          <InstanceComponent />
          <ServerComponent />
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);
