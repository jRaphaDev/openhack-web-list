import React, { Component } from 'react';
import { register } from '../../serviceWorker';

export class Instance extends Component {

  componentDidMount() {
    console.log('mounted')
    fetch('http://localhost:8080/instance')
    .then(response => console.log(response));
  }


  render() {
    return (
      <div className="Instance">
        Instances.
      </div>
    );
  }
}