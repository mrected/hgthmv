import React, { Component } from 'react'

class Places extends Component {
  render() {
    return (
      <div className="places">
        {this.props.results.map((result, index) => (
          <p key={index} data-id={result.id} onClick={this.props.getResidents}>
            {result.name}
          </p>
        ))}
      </div>
    )
  }
}

export default Places
