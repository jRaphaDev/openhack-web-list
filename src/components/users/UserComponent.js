import React, { Component } from "react";
import { connect } from "react-redux";
import CardComponent from "../common/CardComponent";

import MinecraftAPI from 'minecraft-api';


class UserComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.list();
  }

  render() {
    return (
      <CardComponent
        headerTitle={"Users"}
        isLoading={this.props.servers.isLoading}
        refreshAction={this.props.list}>
        
        {this.props.servers.list.map((item, index) => (
          <li
            className="list-group-item container"
            key={item.name}
            style={{ display: "flex", flex: 1 }}>

            <span style={{ flex: 12 }}>{item.name}</span>
            
            <i
              className="fas fa-trash"
              style={{ flex: 1, justifyContent: "flex-end", cursor: "pointer" }} />

          </li>
        ))}

        
      </CardComponent>
    );
  }
}

function listUsers() {
  return fetch(
    "https://mcapi.us/server/status?ip=40.114.105.185&port=25575"
  );
}

const mapFunctions = dispatch => {
  return {
    list: () => {
      dispatch({ type: "FETCH_USERS" });
      
      listUsers()
        .then(res => res.json())
        .then(data => {
          console.log(data, 'result');
          dispatch({ type: "LIST_USERS", result: data.players });
        })
        .catch(err => {
          dispatch({ type: "FETCH_SERVER_FAILED" });
        });
    }
  };
};

export default connect(
  state => state,
  mapFunctions
)(UserComponent);
