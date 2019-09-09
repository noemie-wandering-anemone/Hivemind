import React from "react";

import Form from "./Form";
import Hive from "./Hive"
import Home from './Home'

import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "What do you want to ask?",
      explanation: "Maybe you want to give some context to your question?",
      duration: 0
    };
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div id="indexHeader">
            <Link to="/"><h1>Hivemind</h1></Link>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/hive/:id" component={Hive} /> 
      </Router>
    );
  }
}

export default App;