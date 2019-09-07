import React from 'react'

class Form extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            question: '',
            explanation: '',
            duration: 0,
        }
    }

    handleEntries = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
      }
    
      handleFormSubmit = () => {
        const formData = this.state;
        console.log(formData)
      }

    render () {
        return (
            <form>
                <label htmlFor="question">Question</label>
                <input id='question' type="text" name="question" value={this.state.question} onChange={this.handleEntries} required />
                <label htmlFor="explanation">Maybe you want to give some context to your question?</label>
                <textarea id="explanation" type="text" name="explanation" rows="10" cols="50" value={this.state.explanation} onChange={this.handleEntries} />
                <label htmlFor="duration">Choose for how long your discussion will be on</label>
                <button type="button" name="1day">1 Day</button>
                <button type="button" name="1week">1 Week</button>
                <button type="button" name="2weeks">2 Weeks</button>
                {/* Add options to add pics, sounds, ... */}
                <input type="submit" name="createHive" value="Create Hive!"></input>
            </form>
        )
    }
}

export default Form