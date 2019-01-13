import React from "react";
import ReactDOM from "react-dom";

import {
  TextInput,
  PrimaryButton,
  SecondaryButton,
  BWTodo,
  CTodo
} from "./lib/index";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>
      Atomic<span style={{ color: "#FF9933" }}>10</span> Component Library
    </h1>
    <TextInput label="Label Input" placeholder="name@example.com" width="30%" />
    <hr />
    <TextInput label="Password" placeholder="Enter Password" type="password" />
    <hr />
    <PrimaryButton value="Click" click={() => alert("Click")} /> Primary Button
    <hr />
    <SecondaryButton value="Click" click={() => alert("Click")} /> Secondary
    Button
    <hr />
    <CTodo
      list={["Item 1", "Item 2", "Item 3"]}
      title="Color Todo"
      placeholder="New Item..."
    />
    <hr />
    <BWTodo list={["Item 1", "Item 2", "Item 3"]} title="B&W Todo" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
