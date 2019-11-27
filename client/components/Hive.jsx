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
                    <div id='hiveData'>
                    <p>Initiated by {this.state.name} - Ending on {this.state.endDate}</p>
                        </div>
                {this.state.description && <p>{this.state.description}</p>}
                </div>
                <div id='replies'>
                <h3>Replies</h3>
                {this.state.id && <Buzzes hive_id={this.state.id} />}
                    {this.state.id && <NewBuzz hive_id={this.state.id} />}
                    </div>
            </React.Fragment>
        )
    }
}

export default Hive