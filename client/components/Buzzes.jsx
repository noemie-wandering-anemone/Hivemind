import React from 'react'

import {getBuzzes} from '../apiClient'

class Buzzes extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {
            ...props,
            buzzes: []
        }
    }

    componentDidMount () {
            const hive_id = this.props.hive_id
            getBuzzes(hive_id)
                .then((buzzes) => {
                    this.setState({
                        ...this.state,
                        buzzes: buzzes
                    })
                })
    }

    render () {
        return(
            <div id='buzzes'>
                <ul>
                    {this.state.buzzes.map(buzz => <li key={buzz.id}>{buzz.content}</li>)}
                </ul>
            </div>
        )
    }
}

export default Buzzes