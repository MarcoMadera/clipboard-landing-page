import React, { Fragment } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Contents from "./components/Contents.js";
import Footer from "./components/Footer.js";

const App = () => (
  <Fragment>
    <Hero />
    <Contents />
    <Footer />
  </Fragment>
);

export default App;
