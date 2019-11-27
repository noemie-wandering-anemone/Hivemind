import React from 'react'
const moment = require('moment');

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
                var now = moment();
                var end = moment(hive.endDate);
               
                console.log('now', now, 'endDate', end)
                // if ()


                this.setState(hive)
            })
    // }
}

    render() {

        return (
            
            <React.Fragment>
                <div id="hive-info">
                <h2>{this.state.subject}</h2>
                    <p>Initiated by {this.state.name} on {this.state.dateCreated} and is set to last until the {this.state.endDate}.</p>
                {this.state.description && <p>Context: {this.state.description}</p>}
                </div>
                <h3>Answers</h3>
                {this.state.id && <Buzzes hive_id={this.state.id} />}
                {this.state.id && <NewBuzz hive_id={this.state.id} />}
            </React.Fragment>
        )
    }
}

export default Hive