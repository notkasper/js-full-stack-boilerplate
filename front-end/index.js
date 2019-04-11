import React from "react";
import ReactDOM from "react-dom";
import request from "superagent";

ReactDOM.render(
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
      Click me!
    </button>
  </div>,
  document.getElementById("root")
);
