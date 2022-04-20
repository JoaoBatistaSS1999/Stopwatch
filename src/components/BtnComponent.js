import React from "react";

function BtnComponent(props) {
  const startButton = (
    <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>
      Start
    </button>
  );

  const state1Button = (
    <div>
      <button className="stopwatch-btn stopwatch-btn-red" onClick={props.stop}>
        Stop
      </button>
      <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>
        Reset
      </button>
    </div>
  );

  const resumeButton = (
    <div>
      <button
        className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.resume}
      >
        Resume
      </button>
      <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>
        Reset
      </button>
    </div>
  );

  return (
    <div>
      {props.status === 0
        ? startButton
        : props.status === 1
        ? state1Button
        : resumeButton}
    </div>
  );
}

export default BtnComponent;
