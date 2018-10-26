import React, { Component } from "react";
import { connect } from "react-redux";
import CardComponent from "../common/CardComponent";
import { ItemComponent } from "../common/ItemComponent";
import { EnderecosComponent } from "../common/EnderecosComponent";

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
        isLoading={this.props.servers.isLoading}
        refreshAction={this.props.list}>

        {this.props.servers.list.map((item, index) => (
          <li
            className="list-group-item container"
            key={item.name}
            style={{ display: "flex", flex: 1 }}>
            
            <div
              className="container"
              style={{ flex: 20 }}>

              <ItemComponent name={"Nome"} value={item.name} />
              <EnderecosComponent enderecos={item.endpoints} />
            </div>

            <i
              className="fas fa-trash"
              style={{
                flex: 1,
                justifySelf: "center",
                alignSelf: "center",
                marginRight: 2,
                cursor: "pointer"
              }}
            />
          </li>
        ))}
        
      </CardComponent>
    );
  }
}

function listServers() {
  return fetch(
    "http://40.117.126.201:80/server"
  );
}

const mapFunctions = dispatch => {
  return {
    list: () => {
      dispatch({ type: "FETCH_SERVERS" });
      listServers()
        .then(res => res.json())
        .then(data => {
          console.log(data)
          dispatch({ type: "LIST_SERVERS", result: data });
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
