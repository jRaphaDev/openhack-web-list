import React, { Component } from "react";
import { connect } from "react-redux";
import CardComponent from "../common/CardComponent";

class ServerComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.list();
  }

  render() {
    return (
      <CardComponent
        headerTitle={"Servers"}
        isLoading={this.props.instances.isLoading}
        refreshAction={this.props.list}
      >
        {this.props.servers.list.map((item, index) => (
          <li className="list-group-item" key={item.url}>
            {item.name}
            <i className="fas fa-trash" />
          </li>
        ))}
      </CardComponent>
    );
  }
}

function listServers() {
  return fetch(
    "https://cors-anywhere.herokuapp.com/https://swapi.co/api/people"
  );
}

const mapFunctions = dispatch => {
  return {
    list: () => {
      dispatch({ type: "FETCH_SERVERS" });
      listServers()
        .then(res => res.json())
        .then(data => {
          dispatch({ type: "LIST_SERVERS", result: data.results });
        })
        .catch(err => {
          dispatch({ type: "FETCH_SERVER_FAILED" });
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
)(ServerComponent);
