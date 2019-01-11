import React from "react";
import ReactDOM from "react-dom";

import { TextInput, PrimaryButton, SecondaryButton } from "./lib/index";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Atomic10 Component Library</h1>
    <TextInput label="Label Input" placeholder="name@example.com" width="30%" />
    <hr />
    <TextInput label="Password" placeholder="Enter Password" type="password" />
    <hr />
    <PrimaryButton value="Click" click={() => alert("Click")} /> Primary Button
    <hr />
    <SecondaryButton value="Click" click={() => alert("Click")} /> Secondary
    Button
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
