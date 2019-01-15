import React from "react";
import "./CTodo.css";
import "./TextInput.css";
import "./Button.css";

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
      <div className="a10-color-todo">
        <div
          className="a10-header"
          style={{
            background: this.props.bkColor ? this.props.bkColor : "#FF9933"
          }}
        >
          <h2 className="a10-title" style={{ color: this.props.btnColor }}>
            {this.state.title}
          </h2>
          <TextInput
            name="entry"
            change={e => this.handleInputChange(e)}
            type="text"
            value={this.state.entry}
            placeholder={this.props.placeholder ? this.props.placeholder : null}
            ftcolor={this.props.ftColor ? this.props.ftColor : "white"}
            bkcolor={this.props.inColor ? this.props.inColor : "white"}
            width="100%"
          />
          <SecondaryButton
            value="Add"
            click={this.handleAdd}
            color={this.props.btnColor ? this.props.btnColor : "white"}
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

export default CTodo;

// Attributes
// title: To do list title
// list: An array of todo items
// placeholder: Input placeholder, can leave blank
// bkColor: Header background color(default: Neon Carrot)
// ftColor: Input font color(default: White)
// inColor: Input botom line color(default: White)
// btnColor: Button and title color(default: White)

const TextInput = ({
  type = "text",
  label,
  value,
  placeholder,
  change,
  name,
  ftcolor,
  bkcolor = "#FF9933",
  width
}) => (
  <div className="a10-simple-form-group">
    {label && <label className="a10-simple-text-label">{label}</label>}
    <input
      type={type}
      name={name}
      className="a10-simple-text-input"
      value={value}
      placeholder={placeholder}
      onChange={e => change && change(e)}
      style={{ width: width, color: ftcolor, borderBottomColor: bkcolor }}
    />
  </div>
);

const SecondaryButton = ({ value, click, color = "#FF9933" }) => (
  <div
    className="a10-secondary-button"
    onClick={e => click && click(e)}
    style={{ border: `2px solid ${color}`, color: color }}
  >
    {value}
  </div>
);
