import React from 'react'

import { getFruits } from '../apiClient'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruits: [],
      form: {
        name: 'What do you want to ask?',
      }
    }
  }

  handleEntries = (event) => {
    const {name, value} = event.target
    this.setState({
      form: {
        [name]: value
      }
    })
  }

  componentDidMount() {
    getFruits()
      .then(fruits => {
        this.setState({ fruits })
      })
  }

  render() {
    return (
      <div className='app'>
        <ul>
          {this.state.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
        <div id='indexHeader'>
          <h1>Hivemind</h1>
        </div>
        <div className="form">
          <form action="/ask" method='post'>
            <label for="question">
              <input type="text" name="name" value={this.state.name} onChange={this.handleEntries}></input>
            </label>
            <input type="submit" name="" value="Create a hive"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default App