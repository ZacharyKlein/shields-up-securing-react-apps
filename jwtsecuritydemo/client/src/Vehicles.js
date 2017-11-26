import React, {Component} from 'react';
import {array} from 'prop-types';
import {Table} from 'react-bootstrap';

class Vehicles extends Component {

  render() {

    return <div>
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Make</th>
          <th>Model</th>
          <th>Driver</th>
        </tr>
        </thead>
        <tbody>

        {this.props.vehicles.map(vehicle => {
          return <tr key={vehicle.id}>
            <td>{vehicle.id}</td>
            <td>{vehicle.name}</td>
            <td>{vehicle.make.name}</td>
            <td>{vehicle.model.name}</td>
            <td>{vehicle.driver.name}</td>
          </tr>
        })}

        </tbody>
      </Table>
    </div>;
  }
}

Vehicles.propTypes = {
  vehicles: array
};

export default Vehicles;