import React from "react";
import ReactDOM from "react-dom";

import { TextInput, PrimaryButton } from "./lib/index";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TextInput label="Email Address" placeholder="name@example.com" />
    <PrimaryButton value="Click" click={() => alert("Click")} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
