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
        add={this.props.add}>

        {this.props.instances.list.map(item => (

          <li
            className="list-group-item container"
            key={item.name}
            style={{ display: "flex", flex: 1 }}>
            
            <span style={{ flex: 12 }}>{item.name}</span>
            
            <i
              className="fas fa-trash"
              style={{ flex: 1, justifyContent: "flex-end", cursor: "pointer" }}
              onClick={() => this.props.delete(item.name)}/>

          </li>
        ))}
      </CardComponent>
    );
  }
}

function listInstances() {
  return fetch(
    //"http://40.117.126.201/instance"
    // "http://localhost:8080/instance"
    "http://40.76.40.224/api/servers"
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
      console.log('ádding')
      //fetch('http://40.117.126.201/instance', {
      //fetch("http://localhost:8080/instance", {
      fetch("http://40.76.40.224/api/servers", {
        method: "POST",
        headers: {
        
        },
        body: {}
      }).then(res => {
        console.log(res);
      });
    },

    delete: (name) => {
      console.log(name)
      const newname = name.split('-');
      console.log(newname[2])
      //fetch('http://40.117.126.201/instance', {
      //fetch("http://localhost:8080/instance", {
      fetch(`http://40.76.40.224/api/servers/${newname[2]}`, {
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
