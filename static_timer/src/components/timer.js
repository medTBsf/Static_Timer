import React from "react";
import ReactDOM from "react-dom";
import "./timer.css";

const styles = {
  width: "400px",
  margin: "50px auto 0",
  textAlign: "center"
};

const Timer = () => (
  <div style={styles}>
    <div className="content">
      <div className="value-timer">00:30:00</div>
      <div className="txt-zone">
        <div className="timer-txt">Hour</div>
        <div className="timer-txt">Minute</div>
        <div className="timer-txt">Second</div>
      </div>
    </div>
  </div>
);

export default Timer;
