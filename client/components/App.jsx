import React from 'react'
import request from 'superagent'

class App extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <h1>React development has begun!</h1>
                <div id='indexHeader'>
                    <h1>Hivemind</h1>
                </div>
    
            {/* <form action="/ask" method='post'>
                <label for="question">
                    <input type="text" name="name" value="What do you want to ask?">
                </label>
                    <input type="submit" name="" value="Create a hive">
            </form> */}
            </React.Fragment>
                    )
                  }
    }
             
export default App
