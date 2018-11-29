import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount = () => {
    axios.get(`https://rickandmortyapi.com/api/location/`).then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    if (!this.state.data) {
      return <div />
    }

    return (
      <div className="App">
        <h1>
          <span className="hg-title">
            Hitchhiker's
            <br />
            Guide to
          </span>
          <br />
          <span className="rick-title">The Multiverse</span>
        </h1>
        <div className="places">
          {this.state.data.results.map((result, index) => (
            <p key={index}>{result.name}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default App
