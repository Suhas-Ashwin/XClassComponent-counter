import "./styles.css";
import React from "react";

/*export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  handleDecrement() {
    this.setState((prev) => ({ count: prev.count - 1 }));
  }

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p> Count: {this.state.count} </p>
        <button onClick={this.handleIncrement}> Increment</button>
        <button onClick={this.handleDecrement}> Decrement</button>
      </div>
    );
  }
}

export default App;
