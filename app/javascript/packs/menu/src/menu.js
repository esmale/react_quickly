import React from 'react';
import Link from './link';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.renderLinks = this.renderLinks.bind(this);
  }

  renderLinks() {
    const names = ['Home','About','Services','Portfolio','Contact us']
    const links = names.map((v, i) => {
      return <Link key={v} text={v} />
    });
    return links;
  }

  render() {
    return (
      <div>
        {this.renderLinks()}
      </div>
    );
  }
}
