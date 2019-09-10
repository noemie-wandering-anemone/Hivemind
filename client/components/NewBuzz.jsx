import React from 'react'

import {saveBuzz} from '../apiClient'

class NewBuzz extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            ...props,
            content: "",
            name: "",
        }
    }

    handleEntries = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        saveBuzz(this.state)
        this.setState({
            ...this.state,
            content: ''
        })
        window.location.reload(false) //need redux or callback
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: 
                <input type="text" name="name" id="name" onChange={this.handleEntries} />
                </label>
                <textarea name="content" id="newBuzz" cols="70" rows="10" value={this.state.content} onChange={this.handleEntries} />
                <input type="submit" value="Add answer"/>
            </form>
        )
    }
}

export default NewBuzz