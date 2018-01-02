import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.timeLeft == 0) {
      document.getElementById('end-of-time').play()
    }
    if (this.props.timeLeft == null || this.props.timeLeft == 0) {
      return <div />
    }
    return <h6>Time left: {this.props.timeLeft}</h6>
  }
}
