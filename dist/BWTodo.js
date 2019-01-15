import _defineProperty from "/Users/jameson/personal-projects/atomic10-components/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "/Users/jameson/personal-projects/atomic10-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/jameson/personal-projects/atomic10-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/jameson/personal-projects/atomic10-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/jameson/personal-projects/atomic10-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/jameson/personal-projects/atomic10-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import "./BWTodo.css";
import "./TextInput.css";
import "./Button.css";

var BWTodo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BWTodo, _React$Component);

  function BWTodo(props) {
    var _this;

    _classCallCheck(this, BWTodo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BWTodo).call(this, props));

    _this.handleAdd = function () {
      var list = _this.state.list;
      list.push(_this.state.entry);

      _this.setState({
        list: list,
        entry: ""
      });

      localStorage.setItem("".concat(_this.props.title, " list"), JSON.stringify(list));
    };

    _this.handleInputChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };

    _this.handleDelete = function (e) {
      var list = _this.state.list;
      list.splice(e.target.id, e.target.id);

      _this.setState({
        list: list
      });

      localStorage.setItem("".concat(_this.props.title, " list"), JSON.stringify(list));
    };

    _this.handleComplete = function (e) {
      if (e.target.className.includes("a10-checked")) {
        e.target.className = "";
      } else {
        e.target.className = "a10-checked";
      }
    };

    _this.state = {
      title: null,
      list: [],
      entry: ""
    };
    return _this;
  }

  _createClass(BWTodo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.hasOwnProperty("".concat(this.props.title, " list"))) {
        this.setState({
          list: JSON.parse(localStorage.getItem("".concat(this.props.title, " list"))),
          title: this.props.title
        });
      } else {
        this.setState({
          list: this.props.list,
          title: this.props.title
        });
        localStorage.setItem("".concat(this.props.title, " list"), JSON.stringify(this.props.list));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      localStorage.removeItem("".concat(this.props.title, " list"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", null, React.createElement("div", {
        id: "myDIV",
        className: "a10-header"
      }, React.createElement("h2", {
        className: "a10-title"
      }, this.state.title), React.createElement(TextInput, {
        name: "entry",
        change: function change(e) {
          return _this2.handleInputChange(e);
        },
        placeholder: "New Item...",
        type: "text",
        value: this.state.entry,
        ftcolor: "white",
        bkcolor: "white",
        width: "100%"
      }), React.createElement(SecondaryButton, {
        value: "Add",
        click: this.handleAdd,
        color: "white",
        className: "a10-addBtn"
      })), React.createElement("ul", {
        id: "myUL"
      }, this.state.list.map(function (li, i) {
        return React.createElement("li", {
          key: i,
          onClick: _this2.handleComplete
        }, React.createElement("span", {
          onClick: _this2.handleDelete,
          id: i
        }, "\u2297"), li);
      })));
    }
  }]);

  return BWTodo;
}(React.Component);

export default BWTodo;

var TextInput = function TextInput(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      label = _ref.label,
      value = _ref.value,
      placeholder = _ref.placeholder,
      change = _ref.change,
      name = _ref.name,
      ftcolor = _ref.ftcolor,
      _ref$bkcolor = _ref.bkcolor,
      bkcolor = _ref$bkcolor === void 0 ? "#FF9933" : _ref$bkcolor,
      width = _ref.width;
  return React.createElement("div", {
    className: "a10-simple-form-group"
  }, label && React.createElement("label", {
    className: "a10-simple-text-label"
  }, label), React.createElement("input", {
    type: type,
    name: name,
    className: "a10-simple-text-input",
    value: value,
    placeholder: placeholder,
    onChange: function onChange(e) {
      return change && change(e);
    },
    style: {
      width: width,
      color: ftcolor,
      borderBottomColor: bkcolor
    }
  }));
};

var SecondaryButton = function SecondaryButton(_ref2) {
  var value = _ref2.value,
      click = _ref2.click,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? "#FF9933" : _ref2$color;
  return React.createElement("div", {
    className: "a10-secondary-button",
    onClick: function onClick(e) {
      return click && click(e);
    },
    style: {
      border: "2px solid ".concat(color),
      color: color
    }
  }, value);
};