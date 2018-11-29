import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      someData: ['1', '2']
    }
  }

  componentDidMount = () => {
    axios
      .get(`https://one-list-api.herokuapp.com/items?access_token=axis-tolkien`)
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }

  checkData = () => {
    // console.log(this.state.data.results)
    console.log(this.state.data)
  }

  render() {
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
        <button onClick={this.checkData}>data</button>
        <ul>
          {[...this.state.todos].map(todo => {
            return (
              <li
                key={todo.id}
                data-id={todo.id}
                className="test"
                onClick={this.completeTask}
                onContextMenu={this.deleteTask}
              >
                {todo.text}
              </li>
            )
          })}
        </ul>
        {/* <select>
          {this.state.data.map((location, index) => (
            <p key={index} value={location}>
              {location}
            </p>
          ))}
        </select> */}
      </div>
    )
  }
}

export default App
