import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as peopleActions from '../actions/peopleActions';

class People extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  render() {
    return (
      <div>
        {this.props.people.map(personn =>
          (<div> person={personn} </div>),
        )}
        <input type="text" id="name" />
        <input type="number" id="age" />
        <button onClick={() => this.props.myAction.addPeople({ name: 'sixuan', age: 22 })} value="Add personn">
          Add
        </button>
      </div>);
  }
}

People.propTypes = {
  people: PropTypes.arrayOf({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  myAction: {
    addPeople: PropTypes.func,
  },
};

function mapStateToProps(state) {
  return {
    people: state.personn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    myAction: bindActionCreators(peopleActions, dispatch),
  };
}

const myConnect = connect(mapStateToProps, mapDispatchToProps);
const PeopleRedux = myConnect(People);

export default PeopleRedux;
