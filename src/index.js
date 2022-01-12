import "react-hot-loader";

import "./styles.css";

import ReactDOM from "react-dom";
import React from "react";

import { App } from "./App";

ReactDOM.render(<App />, window.app);

if (module.hot) {
  // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
  // while `hot` would configure HMR for the CURRENT module
  module.hot.accept("./App", () => {
    ReactDOM.render(App);
  });
}
