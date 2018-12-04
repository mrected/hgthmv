import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Places from './Places'
import AllResidents from './AllResidents'
import portal from './images/portal.gif'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount = () => {
    axios.get(`https://rickandmortyapi.com/api/location/`).then(response => {
      this.setState({
        data: response.data,
        residents: []
      })
    })
  }

  // getResidents = apiCharacters => {
  //   apiCharacters.map(character => {
  //     return axios.get(character).then(response => {
  //       this.setState({
  //         residents: response.data
  //       })
  //     })
  //   })
  // }

  getResidents = event => {
    let locationId = parseInt(event.target.dataset.id)

    //gets the location id from the location clicked
    let data = this.state.data.results

    // stores an array of objects with all locations
    let locationObject = data.find(entry => {
      return entry.id === locationId
    })

    // searches for the location the user clicked on and returns
    // console.log(locationObject.localResidents)
    // fetches this data from the api

    const promises = locationObject.residents.map(resident =>
      axios.get(resident)
    )

    this.setState({
      loading: true
    })

    Promise.all(promises).then(response => {
      this.setState({
        loading: false,
        residents: response.map(response => response.data)
      })
    })

    // selectedResidents =
    // when this is clicked,
    // get list of characters from chosen id and load into an array
    // map over this array, load characters from chosen api into a new array
    // add these to as divs into a container div
    // list name, status(alive or dead), species, type(if there is one), place
    // of origin, current location(if there is one), image
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
        <Places
          results={this.state.data.results}
          getResidents={this.getResidents}
        />
        {this.state.loading ? (
          <div>
            <img src={portal} alt="portal" />
            <p>LOADING</p>
          </div>
        ) : (
          <AllResidents residents={this.state.residents} />
        )}
      </div>
    )
  }
}

export default App
