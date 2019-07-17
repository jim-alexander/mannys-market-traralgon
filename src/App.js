import React from "react";
import "./App.css";

import Header from "./components/Header";
import Times from "./components/Times";
// import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.times = React.createRef();
    this.products = React.createRef();
    this.about = React.createRef();
  }
  scroll = location => {
    this[location].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  render() {
    return (
      <div className="App">
        <Header scroll={this.scroll} />
        <Times refProp={this.times} />
        {/* <Products refProp={this.products} /> */}
        <About refProp={this.about} />
        <Footer />
      </div>
    );
  }
}
