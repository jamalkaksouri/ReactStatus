import React, { Component, createRef } from "react";

class ClassRef extends Component {
  // create Ref
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}

export default ClassRef;
