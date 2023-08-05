import "./index.css";

const Timer = (props) => {
  const { clockWise, anticlockWise, toStart, toStop, toClear } = props;

  const onClickToStart = () => {
    toStart();
  };
  const onClickToStop = () => {
    toStop();
  };
  const onClickToClear = () => {
    toClear();
  };
  return (
    <div className="timer-card">
      <h1 className="heading"> Timer </h1>
      <h1>
        Clock Wise: <spam className="count"> {clockWise} </spam>
      </h1>
      <h1>
        Anti-clock Wise: <spam className="rev-count"> {anticlockWise} </spam>
      </h1>
      <div>
        <button onClick={onClickToStart} className="start-btn" type="button">
          Start
        </button>
        <button onClick={onClickToStop} className="stop-btn" type="button">
          Stop
        </button>
        <button onClick={onClickToClear} type="button" className="clear-btn">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Timer;
