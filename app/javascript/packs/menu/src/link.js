import React from 'react';

export default class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = '/' + this.props.text.toLowerCase().trim().replace(' ', '-')
    return (
      <div>
        <a href={url}>{this.props.text}</a>
      </div>
    );
  }
}
