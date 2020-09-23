import React, { Component } from "react";
import "./App.css";
import UserOutput from "./components/UserOutput/index";
import UserInput from "./components/UserInput/index";

class App extends Component {
  state = {
    newUserName: "Kirsty",
  };

  changeUserNameHandler = (event) => {
    this.setState({
      newUserName: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>First Assignment</h1>

        <UserInput
          changedValue={this.changeUserNameHandler}
          currentName={this.state.userName}
        />
        <UserOutput userName="Lucy" />
        <UserOutput userName={this.state.newUserName} />
        <UserOutput userName={this.state.newUserName} />
        <UserOutput userName={this.state.newUserName} />
      </div>
    );
  }
}

export default App;
