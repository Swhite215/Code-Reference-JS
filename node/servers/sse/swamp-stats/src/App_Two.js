import React, { useState, useEffect } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nests: []
    }

    this.eventSource = new EventSource('http://localhost:3000/events');

    this.closeConnection = this.closeConnection.bind(this);
  }
  /* Example with singular event
  componentDidMount() {
    const events = new EventSource('http://localhost:3000/events');

    events.onmessage = (event) => {
      console.log(event);

      const parsedData = JSON.parse(event.data);

      let newNests = this.state.nests.concat(parsedData);

      this.setState({nests: newNests})
    }
  }
  */

  // Example with multiple events
  componentDidMount() {


    this.eventSource.addEventListener("addNest", (e) => {
      console.log(e)

      const newNest = JSON.parse(e.data);

      let newNests = this.state.nests.concat(newNest);

      this.setState({ nests: newNests });
    });

    this.eventSource.addEventListener("deleteNest", (e) => {
      console.log(e)

      const nestToDelete = JSON.parse(e.data);

      console.log(nestToDelete);

      let newNests = this.state.nests.filter((nest) => {
        if (nest.momma != nestToDelete) {
          return true
        } else {
          return false
        }
      });

      this.setState({ nests: newNests });
    });

    this.eventSource.addEventListener("closeConnection", (e) => {
      this.closeConnection();
    });
  }

  closeConnection() {
    this.eventSource.close();
  }

  render() {
    return (
      <div>
        <button onClick={this.closeConnection}>Close Connection</button>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Momma</th>
              <th>Eggs</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.nests.map((nest, i) =>
                <tr key={i}>
                  <td>{nest.momma}</td>
                  <td>{nest.eggs}</td>
                  <td>{nest.temperature} ℃</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
