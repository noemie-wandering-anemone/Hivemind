import React from 'react'

import {createHive} from '../apiClient'

class Form extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            question: '',
            explanation: '',
            duration: 7,
            creator: '',
            toEmail: 0,
            email: '',
        }
    }

    handleEntries = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
      }

    
    handleSlider = (event) => {
        this.setState({
            duration: event.target.value
        })
    }

    handleClick = (event) => {
        this.setState({
            ...this.state,
            toEmail: Number(event.target.value)
        })
    }
    
    handleFormSubmit = (event) => { 
        createHive(this.state)
            .then(res => {
               const id = Number(res.text.slice(7))
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
                <label htmlFor="duration">Choose a lifespan for your discussion:</label>
                <div className="slidecontainer">
                    <input type="range" min="1" max="15" value={this.state.duration} className="slider" id="duration" onChange={this.handleSlider} required />
                </div>
                <p>Value: <span id="value">{this.state.duration} day(s)</span></p>
                {/* Add options to add pics, sounds, ... */}
                <label htmlFor="question">Username</label>
                <input id='username' type="text" name="creator" value={this.state.creator} onChange={this.handleEntries} required />
                
                <div>
                <p>Do you wish to save this conversation once it has reached its end date?</p>
                <label htmlFor="true" >Yes</label>
                <input type="radio" name="toEmail" id="yes" value='1' onClick={this.handleClick} />
                <label htmlFor="false" >No</label>
                <input type="radio" name="toEmail" id="no" value='0' onClick={this.handleClick} />
                {this.state.toEmail == 1 && <div>
                    <label htmlFor="email">Please provide your email address: </label>
                    <input id='email' type="email" name="email" value={this.state.email} onChange={this.handleEntries} required />
                    </div>}
                </div>
                <input type="submit" name="createHive" value="Create Hive!"></input>
            </form>       
        )
    }
}

export default Form