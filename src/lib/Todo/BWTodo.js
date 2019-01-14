import React from "react";
import "./BWTodo.css";
import "../Input/TextInput.css";
import { TextInput, SecondaryButton } from "../../lib/index";

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
    if (localStorage.hasOwnProperty(`${this.props.title} list`)) {
      this.setState({
        list: JSON.parse(localStorage.getItem(`${this.props.title} list`)),
        title: this.props.title
      });
    } else {
      this.setState({ list: this.props.list, title: this.props.title });
      localStorage.setItem(
        `${this.props.title} list`,
        JSON.stringify(this.props.list)
      );
    }
  }
  handleAdd = () => {
    let list = this.state.list;
    list.push(this.state.entry);
    this.setState({ list, entry: "" });
    localStorage.setItem(`${this.props.title} list`, JSON.stringify(list));
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleDelete = e => {
    console.log(e.target.id);
    let list = this.state.list;
    list.splice(e.target.id, e.target.id);
    this.setState({ list });
    localStorage.setItem(`${this.props.title} list`, JSON.stringify(list));
  };
  handleComplete = e => {
    if (e.target.className.includes("a10-checked")) {
      e.target.className = "";
    } else {
      e.target.className = "a10-checked";
    }
  };
  componentWillUnmount() {
    localStorage.removeItem(`${this.props.title} list`);
  }
  render() {
    return (
      <div>
        <div id="myDIV" className="a10-header">
          <h2 className="a10-title">{this.state.title}</h2>
          <TextInput
            name="entry"
            change={e => this.handleInputChange(e)}
            placeholder="New Item..."
            type="text"
            value={this.state.entry}
            ftcolor="white"
            bkcolor="white"
            width="100%"
          />
          <SecondaryButton
            value="Add"
            click={this.handleAdd}
            color="white"
            className="a10-addBtn"
          />
        </div>
        <ul id="myUL">
          {this.state.list.map((li, i) => {
            return (
              <li key={i} onClick={this.handleComplete}>
                <span onClick={this.handleDelete} id={i}>
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
