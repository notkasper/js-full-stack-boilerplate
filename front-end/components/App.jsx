import React from "react";
import { observer } from "mobx-react";
import request from "superagent";

@observer
export default class App extends React.Component {
  render() {
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
        <button
          onClick={() => this.props.store.incrementCounter()}
        >{`MOBX Test ${this.props.store.counter}`}</button>
      </div>
    );
  }
}
