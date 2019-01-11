import React from "react";
import "./BWTodo.css";

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
    this.setState({ list: this.props.list, title: this.props.title });
  }
  handleAdd = () => {
    let list = this.state.list;
    list.push(this.state.entry);
    this.setState({ list, entry: "" });
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <div id="myDIV" className="header">
          <h2>{this.state.title}</h2>
          <input
            name="entry"
            onChange={this.handleInputChange}
            placeholder="Title..."
            type="text"
            value={this.state.entry}
          />
          <span onClick={this.handleAdd} className="addBtn">
            Add
          </span>
        </div>
        <ul id="myUL">
          {this.state.list.map((li, i) => {
            return <li id={i}>{li}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default BWTodo;

// Attributes
// value: Button Text
// click: Callback for onClick
// bkcolor: Background color, accepts hex, rgb, and string(default: teal)
// ftcolor: Font color, accepts hex, rgb, and string(default: white)
