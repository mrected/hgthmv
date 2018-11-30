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
        data: response.data,
        residents: [
          {
            id: 38,
            name: 'Beth Smith',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Female',
            origin: {
              name: 'Earth (C-137)',
              url: 'https://rickandmortyapi.com/api/location/1'
            },
            location: {
              name: 'Earth (C-137)',
              url: 'https://rickandmortyapi.com/api/location/1'
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
            episode: [
              'https://rickandmortyapi.com/api/episode/1',
              'https://rickandmortyapi.com/api/episode/2',
              'https://rickandmortyapi.com/api/episode/3',
              'https://rickandmortyapi.com/api/episode/4',
              'https://rickandmortyapi.com/api/episode/5',
              'https://rickandmortyapi.com/api/episode/6',
              'https://rickandmortyapi.com/api/episode/22'
            ],
            url: 'https://rickandmortyapi.com/api/character/38',
            created: '2017-11-05T09:48:44.230Z'
          },
          {
            id: 45,
            name: 'Bill',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: {
              name: 'Earth (C-137)',
              url: 'https://rickandmortyapi.com/api/location/1'
            },
            location: {
              name: 'Earth (C-137)',
              url: 'https://rickandmortyapi.com/api/location/1'
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/45.jpeg',
            episode: ['https://rickandmortyapi.com/api/episode/3'],
            url: 'https://rickandmortyapi.com/api/character/45',
            created: '2017-11-05T10:22:27.446Z'
          },
          {
            id: 71,
            name: 'Conroy',
            status: 'Dead',
            species: 'Robot',
            type: '',
            gender: 'unknown',
            origin: {
              name: 'Earth (Replacement Dimension)',
              url: 'https://rickandmortyapi.com/api/location/20'
            },
            location: {
              name: 'Earth (C-137)',
              url: 'https://rickandmortyapi.com/api/location/1'
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/71.jpeg',
            episode: ['https://rickandmortyapi.com/api/episode/22'],
            url: 'https://rickandmortyapi.com/api/character/71',
            created: '2017-11-30T11:35:50.183Z'
          }
        ]
      })
    })
  }

  checkClick = event => {
    // console.log(event.target.dataset.id)
    console.log(this.state.residents)
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
        <div className="places">
          {this.state.data.results.map((result, index) => (
            <p key={index}>
              <a href="#" data-id={result.id} onClick={this.checkClick}>
                {result.name}
              </a>
            </p>
          ))}
        </div>
        <div clasnName="residents">
          {this.state.residents.map((resident, index) => {
            return <img key={index} src={resident.image} alt={resident.name} />
          })}
        </div>
      </div>
    )
  }
}

export default App
