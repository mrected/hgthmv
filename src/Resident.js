import React, { Component } from 'react'

class Resident extends Component {
  render() {
    return (
      <div key={this.props.index} className="resident-box">
        <img src={this.props.resident.image} alt={this.props.resident.name} />
        <p>Name: {this.props.resident.name}</p>
        <p>Species: {this.props.resident.species}</p>
        <p>Status: {this.props.resident.status}</p>
      </div>
    )
  }
}

export default Resident
