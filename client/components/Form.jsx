import React from 'react'

import {createHive} from '../apiClient'

class Form extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            question: '',
            explanation: '',
            duration: 7,
        }
    }

    handleSlider = (event) => {
        console.log(event.target)
    }

    handleEntries = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
      }
    
      handleFormSubmit = (event) => { 
        createHive(this.state)
            .then(res => {
               const id = Number(res.text.slice(7))
                console.log(this.props)
                this.props.history.push('/hive/'+id)
            })
        event.preventDefault()
      }

    render () {
        return (
            <form  onSubmit={this.handleFormSubmit}>
                <label htmlFor="question">Question</label>
                <input id='question' type="text" name="question" value={this.state.question} onChange={this.handleEntries} required />
                <label htmlFor="explanation">Maybe you want to give some context to your question?</label>
                <textarea id="explanation" type="text" name="explanation" rows="10" cols="50" value={this.state.explanation} onChange={this.handleEntries} />
                <label htmlFor="duration">Choose for how long your discussion will be on</label>
                <div className="slidecontainer">
                    <input type="range" min="1" max="15" value={this.state.duration} className="slider" id="duration" onChange={this.handleSlider} />
                </div>
                <p>Value: <span id="value">{this.state.duration}</span></p>
                {/* Add options to add pics, sounds, ... */}
                <input type="submit" name="createHive" value="Create Hive!"></input>
            </form>       
        )
    }
}

export default Form