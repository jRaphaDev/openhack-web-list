import React, { Component } from 'react';
import './App.css';
import { Instance } from './components/instances/Instance';
import { Server } from './components/servers/Server';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">

          <div className="row">
            <div className="App-instances">
              <Instance></Instance>
            </div>

            <div className="App-servers">
              <Server></Server>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
