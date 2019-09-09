import React from 'react'

import { getHiveData } from '../apiClient'
import Buzzes from './Buzzes'
import NewBuzz from './NewBuzz'

class Hive extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        // this.getHive()
    }

    componentDidMount () {
    // getHive = () => {
        const id = this.props.match.params.id
        getHiveData(id)
            .then((hive) => {
                this.setState(hive)
            })
    // }
}

    render() {
        return (
            <React.Fragment>
                <h2>{this.state.subject}</h2>
                <p>{this.state.date_created}</p>
                <p>{this.state.description}</p>
                {this.state.id && <Buzzes hive_id={this.state.id} />}
                {this.state.id && <NewBuzz hive_id={this.state.id} />}
            </React.Fragment>
        )
    }
}

export default Hive