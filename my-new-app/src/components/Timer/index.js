import "./index.css";

const Timer = (props) => {
  const { clockWise, anticlockWise } = props;
  return (
    <div>
      <h1 className="heading"> Timer </h1>
      <h1>
        Clock Wise: <span className="count"> {clockWise} </span>
      </h1>
      <h1>
        Anticlock Wise: <spam className="rev-count">{anticlockWise}</spam>
      </h1>
    </div>
  );
};

export default Timer;
