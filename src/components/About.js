import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div ref={this.props.refProp} id="about">
        <div className="section-header">About us</div>
        <p>
          We are an old fashioned family run fresh food market that loves
          supporting our community. We have been providing restaurants and
          locals with high-quality fruit, veg, meat, fish and lollies for over
          37 years.
        </p>
      </div>
    );
  }
}
