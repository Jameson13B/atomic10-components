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
    console.log(e.target);
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
    if (e.target.className.includes("checked")) {
      e.target.className = "";
    } else {
      e.target.className = "checked";
    }
  };
  componentWillUnmount() {
    localStorage.removeItem(`${this.props.title} list`);
  }
  render() {
    return (
      <div className="color-todo">
        <div
          id="myDIV"
          className="header"
          style={{
            background: this.props.bkcolor ? this.props.bkcolor : "#FF9933"
          }}
        >
          <h2 style={{ color: this.props.btcolor }}>{this.state.title}</h2>
          <TextInput
            name="entry"
            change={e => this.handleInputChange(e)}
            type="text"
            value={this.state.entry}
            placeholder={this.props.placeholder ? this.props.placeholder : null}
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
// placeholder: Input placeholder, can leave blank
// bkcolor: Header background color(default: teal)
// ftcolor: Input font color
// incolor: Input botom line color
// btcolor: Button and title color
