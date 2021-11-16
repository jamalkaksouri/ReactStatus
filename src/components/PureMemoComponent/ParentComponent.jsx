import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
class ParentComp extends Component {
  state = {
    name: "jamal",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "jamal" });
    }, 1000);
  }

  render() {
    console.log("Parent Component------------");
    return (
      <div>
        parrent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
