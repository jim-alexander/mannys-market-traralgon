import React, { Component } from "react";

export default class Times extends Component {
  bg = day => {
    let today = new Date().getDay();
    if (day === today) return { background: "#f7f1df" };
  };
  render() {
    return (
      <div id="times" ref={this.props.refProp}>
        <div className="section-header">Open times</div>

        <div id="times-container">
          <div id="days-container">
            <div className="days" />
            <div className="days" style={this.bg(1)}>
              Monday
            </div>
            <div className="days" style={this.bg(2)}>
              Tuesday
            </div>
            <div className="days" style={this.bg(3)}>
              Wednesday
            </div>
            <div className="days" style={this.bg(4)}>
              Thursday
            </div>
            <div className="days" style={this.bg(5)}>
              Friday
            </div>
            <div className="days" style={this.bg(6)}>
              Saturday
            </div>
            <div className="days" style={this.bg(7)}>
              Sunday
            </div>
          </div>
          <div id="open-container">
            <div className="days time-title">Open</div>
            <div className="days" style={this.bg(1)}>
              6am
            </div>
            <div className="days" style={this.bg(2)}>
              6am
            </div>
            <div className="days" style={this.bg(3)}>
              6am
            </div>
            <div className="days" style={this.bg(4)}>
              6am
            </div>
            <div className="days" style={this.bg(5)}>
              6am
            </div>
            <div className="days" style={this.bg(6)}>
              6am
            </div>
            <div className="days" style={this.bg(7)}>
              Closed
            </div>
          </div>
          <div id="closed-container">
            <div className="days time-title">Close</div>
            <div className="days" style={this.bg(1)}>
              6pm
            </div>
            <div className="days" style={this.bg(2)}>
              6pm
            </div>
            <div className="days" style={this.bg(3)}>
              6pm
            </div>
            <div className="days" style={this.bg(4)}>
              6pm
            </div>
            <div className="days" style={this.bg(5)}>
              6pm
            </div>
            <div className="days" style={this.bg(6)}>
              1pm
            </div>
            <div className="days" style={this.bg(7)} />
          </div>
        </div>
      </div>
    );
  }
}
