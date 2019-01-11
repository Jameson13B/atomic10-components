import React from "react";
import "./BWTodo.css";
import "../Input/TextInput.css";
import { TextInput } from "../../lib/index";

class BWTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      list: [],
      entry: ""
    };
  }
  componentDidMount() {
    if (localStorage.hasOwnProperty("list")) {
      this.setState({
        list: JSON.parse(localStorage.getItem("list")),
        title: this.props.title
      });
    } else {
      this.setState({ list: this.props.list, title: this.props.title });
      localStorage.setItem("list", JSON.stringify(this.props.list));
    }
  }
  handleAdd = () => {
    let list = this.state.list;
    list.push(this.state.entry);
    this.setState({ list, entry: "" });
    localStorage.setItem("list", JSON.stringify(list));
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleComplete = e => {
    console.log(e.target.id);
    let list = this.state.list;
    list.splice(e.target.id, e.target.id);
    this.setState({ list });
    localStorage.setItem("list", JSON.stringify(list));
  };
  componentWillUnmount() {
    localStorage.removeItem("list");
  }
  render() {
    return (
      <div>
        <div id="myDIV" className="header">
          <h2>{this.state.title}</h2>
          <TextInput
            name="entry"
            onChange={this.handleInputChange}
            placeholder="New Item..."
            type="text"
            value={this.state.entry}
            width="100%"
          />
          <span onClick={this.handleAdd} className="addBtn">
            Add
          </span>
        </div>
        <ul id="myUL">
          {this.state.list.map((li, i) => {
            return (
              <li key={i}>
                <span onClick={this.handleComplete} id={i}>
                  &otimes;
                </span>
                {li}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BWTodo;

// Attributes
// title: To do list title
// list: An array of todo items
