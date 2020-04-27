import React, { Component, Fragment } from "react";
import Counter from "./Counter";
import "./styles.css";

class MyCounters extends Component {
  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0
  };

  handleIncrement = id => {
    this.setState(prevState => ({
      [id]: prevState[id] + 1
    }));
  };

  handleDecrement = id => {
    this.setState(prevState => ({
      [id]: prevState[id] > 0 ? prevState[id] - 1 : prevState[id]
    }));
  };

  handleIncrementAll = () => {
    for (let key in this.state) {
      this.setState(prevState => ({
        [key]: prevState[key] + 1
      }));
    }
  };

  handleDecrementAll = () => {
    for (let key in this.state) {
      this.setState(prevState => ({
        [key]: prevState[key] > 0 ? prevState[key] - 1 : prevState[key]
      }));
    }
  };

  // One method instead of handleIncrement & handleDecrement:
  // handleOne = (id, type) => {
  //   if (type === "subtract" && this.state[id] === 0) return;
  //   this.setState(prevState => ({
  //     [id]: type === "add" ? prevState[id] + 1 : prevState[id] - 1
  //   }));
  // };

  // One method instead of handleIncrementAll & handleDecrementAll:
  // handleAll = type => {
  //   for (let key in this.state) {
  //     if (type === "subtract" && this.state[key] === 0) return;
  //     this.setState(prevState => ({
  //       [key]: type === "add" ? prevState[key] + 1 : prevState[key] - 1
  //     }));
  //   }
  // };

  render() {
    return (
      <div className="App">
        {Object.keys(this.state).map(key => {
          return (
            <Fragment key={Math.random()}>
              <Counter
                value={this.state[key]}
                id={key}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                // if you want to control increment and decrement with one method:
                // onModify={this.handleOne}
              />
              <br />
            </Fragment>
          );
        })}
        <br />
        <button onClick={this.handleDecrementAll}>Decrement All</button>{" "}
        <button onClick={this.handleIncrementAll}>Increment All</button>
        {/* If you want to control these two buttons with a single method: */}
        {/* <button onClick={() => this.handleAll("subtract")}>
          Decrement All
        </button>{" "}
        <button onClick={() => this.handleAll("add")}>Increment All</button> */}
      </div>
    );
  }
}

export default MyCounters;
