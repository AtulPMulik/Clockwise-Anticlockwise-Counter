import { Component } from "react";
import Timer from "../Timer";
import "./index.css";
class TimerApp extends Component {
  state = { clockWise: 0, anticlockWise: 15 };

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

  toStart = () => {
    this.clockWiseCounter();
    this.anticlockWiseCounter();
  };
  toStop = () => {
    clearInterval(this.id);
    clearInterval(this.timerId);
  };
  componentWillUnmount() {
    clearInterval(this.id);
    clearInterval(this.timerId);
    this.setState({ clockWise: 0, anticlockWise: 15 });
  }
  toClear = () => {
    this.componentWillUnmount();
  };

  render() {
    const { clockWise, anticlockWise } = this.state;
    return (
      <div className="bg-container">
        <Timer
          clockWise={clockWise}
          anticlockWise={anticlockWise}
          toStart={this.toStart}
          toStop={this.toStop}
          toClear={this.toClear}
        />
      </div>
    );
  }
}

export default TimerApp;
