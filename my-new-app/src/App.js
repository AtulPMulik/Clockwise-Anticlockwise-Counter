import { Component } from "react";
import Timer from "./components/Timer";
import "./App.css";

class App extends Component {
  state = { clockWise: 0, anticlockWise: 10 };

  constructor() {
    super();
    this.clockWiseCounter();
    this.anticlockWiseCounter();
  }
  clockWiseCounter = () => {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({ clockWise: prevState.clockWise + 1 }));
    }, 1000);
  };
  anticlockWiseCounter = () => {
    this.id = setInterval(() => {
      this.setState((prevState) => ({
        anticlockWise: prevState.anticlockWise - 1,
      }));
    }, 1000);
  };

  render() {
    const { clockWise, anticlockWise } = this.state;
    if (clockWise === 10) {
      clearInterval(this.timerId);
    }
    if (anticlockWise === 0) {
      clearInterval(this.id);
    }
    return (
      <div className="counter-container">
        <Timer clockWise={clockWise} anticlockWise={anticlockWise} />
      </div>
    );
  }
}

export default App;
