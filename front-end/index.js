import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./stores/store";

ReactDOM.render(<App store={store} />, document.getElementById("root"));
