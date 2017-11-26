import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import 'whatwg-fetch';
import Vehicles from "./Vehicles";
import {SERVER_URL} from "./config";
import AddVehicleForm from "./AddVehicleForm";

class App extends Component {

  constructor() {
    super();

    this.state = {
      vehicles: [],
      makes: [],
      models: [],
      drivers: []
    }
  }


  componentDidMount() {
    fetch(`${SERVER_URL}/vehicle`)
      .then(r => r.json())
      .then(json => this.setState({vehicles: json}))
      .catch(error => console.error('Error retrieving vehicles: ' + error));

    fetch(`${SERVER_URL}/make`)
      .then(r => r.json())
      .then(json => this.setState({makes: json}))
      .catch(error => console.error('Error retrieving makes: ' + error));

    fetch(`${SERVER_URL}/model`)
      .then(r => r.json())
      .then(json => this.setState({models: json}))
      .catch(error => console.error('Error retrieving models ' + error));

    fetch(`${SERVER_URL}/driver`)
      .then(r => r.json())
      .then(json => this.setState({drivers: json}))
      .catch(error => console.error('Error retrieving drivers: ' + error));
  }

  submitNewVehicle = (vehicle) => {
    fetch(`${SERVER_URL}/vehicle`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vehicle)
    }).then(r => r.json())
      .then(json => {
        let vehicles = this.state.vehicles;
        vehicles.push(json);
        this.setState({vehicles});
      })
      .catch(ex => console.error('Unable to save vehicle', ex));
  };

  render() {
    const {vehicles, makes, models, drivers} = this.state;

    return <div>
      <AddVehicleForm onSubmit={this.submitNewVehicle} makes={makes} models={models} drivers={drivers}/>
      <Vehicles vehicles={vehicles} />
    </div>;
  }
}

export default App;