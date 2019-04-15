import React from "react";
import request from "superagent";
import { inject, observer } from "mobx-react";
import history from "../history";

@inject("store")
@observer
export default class Home extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <p>Hello World!</p>
        <button
          onClick={() =>
            request
              .get("/api/test")
              .catch(err => console.error(err))
              .then(res => console.log(res.text))
          }
        >
          API Test
        </button>
        <button onClick={() => store.incrementCounter()}>{`MOBX Test ${
          store.counter
        }`}</button>
        <button onClick={() => history.push("/page_2")}>Go to page 2</button>
      </div>
    );
  }
}
