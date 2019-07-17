import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import moment from "moment";
export default class Header extends Component {
  status = () => {
    let today = moment().format("ddd");
    let hours = [
      {
        day: "Mon",
        start: moment("6:00", "H:mm").day("Monday"),
        end: moment("18:00", "H:mm").day("Monday")
      },
      {
        day: "Tue",
        start: moment("6:00", "H:mm").day("Tuesday"),
        end: moment("18:00", "H:mm").day("Tuesday")
      },
      {
        day: "Wed",
        start: moment("6:00", "H:mm").day("Wednesday"),
        end: moment("18:00", "H:mm").day("Wednesday")
      },
      {
        day: "Thur",
        start: moment("6:00", "H:mm").day("Thursday"),
        end: moment("18:00", "H:mm").day("Thursday")
      },
      {
        day: "Fri",
        start: moment("6:00", "H:mm").day("Friday"),
        end: moment("18:00", "H:mm").day("Friday")
      },
      {
        day: "Sat",
        start: moment("6:00", "H:mm").day("Saturday"),
        end: moment("18:00", "H:mm").day("Saturday")
      },
      {
        day: "Sun",
        start: moment("6:00", "H:mm").day("Sunday"),
        end: moment("18:00", "H:mm").day("Sunday")
      }
    ];
    let hoursIndex = hours.findIndex(item => item.day === today);
    if (moment().isBetween(hours[hoursIndex].start, hours[hoursIndex].end)) {
      return `Open till ${hours[hoursIndex].end.format("h")}pm today`;
    } else {
      return "Currently closed";
    }
  };
  render() {
    this.status();
    return (
      <div id="header">
        <div id="map">
          {/* https://snazzymaps.com/build-a-map/edit/170184 */}
          <iframe
            src="https://snazzymaps.com/embed/170184"
            width="100%"
            height="100%"
            style={{ border: "none", cursor: "default" }}
            title="mannysmap"
          />
        </div>
        <div id="header-sub-container">
          <div id="left-container">
            <div id="business-container">
              <div id="business-name">Mannys Market Traralgon</div>
              <div id="business-name-sub">
                <div id="current-status">{this.status()}</div>
                <a
                  href="tel:(03)51748910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="option-link">
                  <div id="phone-number">(03) 5174 8910</div>
                </a>
              </div>
            </div>
          </div>
          <div id="menu">
            <div id="menu-options">
              <a
                href="https://goo.gl/maps/qwCqS3ARpyLZqXfB8"
                target="_blank"
                rel="noopener noreferrer"
                className="option-link">
                <div className="option">
                  Location
                  <IoIosArrowForward
                    className="arrow"
                    color="#EA4335"
                    size={20}
                  />
                </div>
              </a>
              <div
                className="option"
                onClick={() => this.props.scroll("times")}>
                Open times
                <IoIosArrowForward
                  className="arrow"
                  color="#EA4335"
                  size={20}
                />
              </div>
              {/* <div
                className="option"
                onClick={() => this.props.scroll("products")}>
                Products
                <IoIosArrowForward
                  className="arrow"
                  color="#EA4335"
                  size={20}
                />
              </div> */}
              <div
                className="option"
                onClick={() => this.props.scroll("about")}>
                About us
                <IoIosArrowForward
                  className="arrow"
                  color="#EA4335"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
