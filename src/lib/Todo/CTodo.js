import React from "react";
import "./CTodo.css";
import "../Input/TextInput.css";
import { TextInput, SecondaryButton } from "../../lib/index";

// Background Color

class CTodo extends React.Component {
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
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleDelete = e => {
    console.log(e.target.id);
    let list = this.state.list;
    list.splice(e.target.id, e.target.id);
    this.setState({ list });
    localStorage.setItem("list", JSON.stringify(list));
  };
  handleComplete = e => {
    if (e.target.className.includes("checked")) {
      e.target.className = "";
    } else {
      e.target.className = "checked";
    }
  };
  componentWillUnmount() {
    localStorage.removeItem("list");
  }
  render() {
    return (
      <div className="color-todo">
        <div
          id="myDIV"
          className="header"
          style={{ background: this.props.bkcolor }}
        >
          <h2>{this.state.title}</h2>
          <TextInput
            name="entry"
            change={e => this.handleInputChange(e)}
            type="text"
            label="Enter a new entry:"
            value={this.state.entry}
            ftcolor={this.props.ftcolor ? this.props.ftcolor : "white"}
            bkcolor={this.props.incolor ? this.props.incolor : "white"}
            width="100%"
          />
          <SecondaryButton
            value="Add"
            click={this.handleAdd}
            color={this.props.btcolor ? this.props.btcolor : "white"}
            className="addBtn"
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

export default CTodo;

// Attributes
// title: To do list title
// list: An array of todo items
// bkcolor: Header background color(default: teal)
// ftcolor: Input font color
// incolor: Input botom line color
// btcolor: Button color
