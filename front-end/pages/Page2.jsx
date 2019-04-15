import React from "react";
import history from "../history";

export default class Page2 extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => history.push("/")}>Go to home</button>
      </div>
    );
  }
}
