import React, { Component } from "react";
import { connect } from "react-redux";
import CardComponent from "../common/CardComponent";

class InstanceComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.list();
  }

  render() {
    return (
      <CardComponent
        headerTitle={"Instances"}
        isLoading={this.props.instances.isLoading}
        refreshAction={this.props.list}>

        {this.props.instances.list.map(item => (

          <li
            className="list-group-item container"
            key={item.name}
            style={{ display: "flex", flex: 1 }}>
            
            <span style={{ flex: 12 }}>{item.name}</span>
            
            <i
              className="fas fa-trash"
              style={{ flex: 1, justifyContent: "flex-end", cursor: "pointer" }}/>

          </li>
        ))}
      </CardComponent>
    );
  }
}

function listInstances() {
  return fetch(
    "http://localhost:8080/instance"
  );
}

const mapFunctions = dispatch => {
  return {

    list: () => {
      dispatch({ type: "FETCH_INSTANCES" });
      listInstances()
        .then(res => res.json())
        .then(data => {
          dispatch({ type: "LIST_INSTANCES", result: data });
        })
        .catch(err => {
          dispatch({ type: "FETCH_INSTANCE_FAILED" });
        });
    },

    add: () => {
      fetch('http://localhost:8080/instance', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          number: 1
        })
      }).then(res => {
        console.log(res);
      });
    },

    delete: (instance) => {
      fetch(`http://localhost:8080/instance/${instance}`, {
        method: "DELETE"
      }).then(res => {
        console.log(res);
      });
    }

  };
};

export default connect(
  state => state,
  mapFunctions
)(InstanceComponent);
