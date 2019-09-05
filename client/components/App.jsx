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

  handleFormSubmit = () => {
    const formData = this.state.form;
    console.log(formData)
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
          <form method='post'>
            <label for="question">
              <input type="text" name="name" value={this.state.form.name} onChange={this.handleEntries}></input>
            </label>
            <button onClick={this.handleFormSubmit}>Create a hive</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App