import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(event) {
    return this.props.startTimer(this.props.time);
  }

  render() {
    return (
      <button type="button" className="btn-primary btn" onClick={this.startTimer}>
        {this.props.time} seconds
      </button>
    );
  }
}
