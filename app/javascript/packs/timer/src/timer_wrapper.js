import React from 'react';
import Timer from './timer';
import Button from './button';

export default class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null
    }
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1;
      if (timeLeft === 0) clearInterval(timer)
      this.setState({ timeLeft: timeLeft })
    }, 1000);
    return this.setState({ timeLeft: timeLeft, timer: timer })
  }

  render() {
    return (
      <div className="row-fluid">
        <div className="btn-group" role="group">
          <Button time="5" startTimer={this.startTimer} />
          <Button time="10" startTimer={this.startTimer} />
          <Button time="15" startTimer={this.startTimer} />
        </div>
        <br />
        <Timer timeLeft={this.state.timeLeft} />
        <audio id="end-of-time" src="/flute_c_long_01.wav" preload="auto"></audio>
      </div>
    );
  }
}
