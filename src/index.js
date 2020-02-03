import React from "react";
import ReactDOM from "react-dom";
import CM from "./CM";
import "./index.scss";

function App() {
  return (
    <div className="portal">
      <div className="left">
        <CM />
      </div>

      <div className="center">
        <div className="header">Header</div>

        <div className="content">Content</div>

        <div className="footer">Footer</div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
