import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/Count';
import Test from './Test';

class Home extends Component {
componentDidMount(){
    console.log(this.props);
}
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.props.increment}>+</button>
        </div>
        <Test/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch){
    return{
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
