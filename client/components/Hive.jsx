import React from 'react'

import {getHiveData} from '../apiClient'

class Hive extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
        }
        this.getHive()
        //function to retrieve discussion data from database
    }

      // componentDidMount() ?
    getHive = () => {
        const id = this.props.match.params.id
        getHiveData(id)
            .then((hive) => {
                this.setState(hive)
                console.log(this.state)
            })
    }

    render () {
        return (
            <React.Fragment>
                <h2>{this.state.subject}</h2>
                <p>{this.state.dateCreated}</p>
                <p>{this.state.description}</p>
            </React.Fragment>
        )
    }
}

export default Hive