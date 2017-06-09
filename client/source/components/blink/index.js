import React, { Component } from 'react';

class Blink extends Component {
  constructor(props) {
    super();
    this.showValue = false;

    setInterval(() => this.show(), props.time);
  }
  blink = {
    visibility: 'visible',
    color: 'red',
  };
  show() {
    this.showValue = !this.showValue;
    if (this.showValue) {
      this.blink.visibility = 'visible';
    } else {
      this.blink.visibility = 'hidden';
    }
    this.setState({ blink: this.blink });
  }

  render() {
    return (
      <div style={this.blink}>
        {this.props.children}
      </div>
    );
  }
  }

Blink.propTypes = {
  children: React.PropTypes.shape(),
  time: React.PropTypes.number,
};

export default Blink;
