import React, { Component } from 'react'
import Resident from './Resident'

class AllResidents extends Component {
  render() {
    return (
      <div className="residents">
        {this.props.residents.map((resident, index) => {
          return <Resident key={index} resident={resident} />
        })}
      </div>
    )
  }
}

export default AllResidents
