import React from "react";
import { Provider } from "mobx-react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import Home from "../pages/Home";
import Page2 from "../pages/Page2";
import store from "../stores/store";

export default class App extends React.Component {
  render() {
    const stores = {
      store
    };
    return (
      <Provider {...stores}>
        <Router history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/page_2" component={Page2} />
        </Router>
      </Provider>
    );
  }
}
