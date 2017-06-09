import React, { Component } from 'react';
import { connect } from 'react-redux';

import Acdc from '../../components/acdc';
import HelloCard from '../../components/hello-card';
import Blink from '../../components/blink';

class HomeView extends Component {

  constructor() {
    super();
    this.state = { counter: 0 };
  }

  increment() {
    const newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
  }

  render() {
    const { authentication = {} } = this.props;
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <HelloCard authentication={authentication} />
            <Acdc name="Soufiane" count={this.state.counter} myOnClick={() => this.increment()} />
            <Blink time={500}>
              <p>blink</p>
            </Blink>
          </div>
        </div>
      </div>
    );
  }
}

HomeView.propTypes = HelloCard.propTypes;

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}

export default connect(
  mapStateToProps,
)(HomeView);
