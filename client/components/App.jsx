import React from "react";

import Form from "./Form";
import { getFruits } from "../apiClient";

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

  // componentDidMount() {
  //   getFruits().then(fruits => {
  //     this.setState({ fruits });
  //   });
  // }

  render() {
    return (
      <Router>
        <div className="app">
          {/* <ul>
            {this.state.fruits.map(fruit => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul> */}
          <div id="indexHeader">
            <h1>Hivemind</h1>
            <Link to="/form">
              <button>Create a hive</button>
            </Link>
          </div>
        </div>
        <Route path="/form" component={Form} />
      </Router>
    );
  }
}

export default App;