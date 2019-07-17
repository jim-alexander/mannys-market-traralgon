import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return <div ref={this.props.refProp}>{/* <h2>Products</h2> */}</div>;
  }
}
