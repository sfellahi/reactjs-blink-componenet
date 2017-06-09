import React, { Component } from 'react';

class Acdc extends Component {
  myOnClicks() {
    this.props.myOnClick();
    console.log("J'ai click sur le button");
  }

  render() {
    return (
      <div>
        Hello { this.props.name }
        <br />
        { this.props.count }
        <br />
        <button onClick={() => this.myOnClicks()}>Click Here</button>
      </div>
    );
  }
}

Acdc.propTypes = {
  name: React.PropTypes.string,
  count: React.PropTypes.number,
  myOnClick: React.PropTypes.func,
};

export default Acdc;
