import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class About extends Component {
  move() {
    browserHistory.push('/users/');
  }
  render() {
    return (<div>
      User : {this.props.params.userId} {this.props.location.query.user}
      <button onClick={() => this.move()}>save</button>
    </div>);
  }
}
