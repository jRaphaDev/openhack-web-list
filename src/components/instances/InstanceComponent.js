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
        refreshAction={this.props.list}
      >
        {this.props.instances.list.map((item, index) => (
          <li
            className="list-group-item container"
            key={item.url}
            style={{ display: "flex", flex: 1 }}
          >
            <span style={{ flex: 12 }}>{item.name}</span>
            <i
              className="fas fa-trash"
              style={{ flex: 1, justifyContent: "flex-end" }}
            />
          </li>
        ))}
      </CardComponent>
    );
  }
}

function listInstances() {
  return fetch(
    "https://cors-anywhere.herokuapp.com/https://swapi.co/api/people"
  );
}

const mapFunctions = dispatch => {
  return {
    list: () => {
      dispatch({ type: "FETCH_INSTANCES" });
      listInstances()
        .then(res => res.json())
        .then(data => {
          dispatch({ type: "LIST_INSTANCES", result: data.results });
        })
        .catch(err => {
          dispatch({ type: "FETCH_INSTANCE_FAILED" });
        });
    },
    add: () => {
      fetch("https://api.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          instance: "NOME"
        })
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
