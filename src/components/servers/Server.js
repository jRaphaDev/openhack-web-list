import React, { Component } from "react";
import { connect } from "react-redux";

class ServerComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.list();
  }

  RefreshButton = () => {
    let css = "fas fa-sync-alt";
    if (this.props.servers.isLoading) {
      css += " fa-spin";
    }

    return (
      <i
        ref={this.updateIcon}
        className={css}
        style={{ padding: 5, cursor: "pointer", marginRight: 6 }}
        onClick={this.props.list}
      />
    );
  };

  render() {
    return (
      <div className="col-md-5 col-sm-5 col-lg-5" style={{ marginTop: 12 }}>
        <div className="card">
          <div
            className="card-header"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <span style={{ justifyContent: "flex-end", flex: 4 }}>Servers</span>

            {this.RefreshButton()}

            <i
              className="fas fa-plus"
              style={{ padding: 5, cursor: "pointer" }}
            />
          </div>
          <ul className="list-group list-group-flush">
            {this.props.instances.list.map((item, index) => (
              <li className="list-group-item" key={item.url}>
                {item.name}
                <i className="fas fa-trash" />
              </li>
            ))}
          </ul>
        </div>
      </div>
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
