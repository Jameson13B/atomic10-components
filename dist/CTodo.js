import _taggedTemplateLiteral from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _defineProperty from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  border-radius: 5px;\n  color: ", "\n  cursor: pointer;\n  display: inline-block;\n  padding: 10px 15px;\n  -webkit-transform: perspective(10px) translateZ(0);\n  transform: perspective(10px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  :hover,\n  :active {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: ", "\n  display: block;\n  margin-bottom: 0.5rem;\n  padding: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  width: ", ";\n  color: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 1rem;\n  width: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 30px;\n  z-index: 2;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: relative;\n  padding: 12px 8px 12px 40px;\n  list-style-type: none;\n  background: #eee;\n  font-size: 18px;\n  transition: 0.2s;\n  // make the list items unselectable\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  :nth-child(odd) {\n    background: #f9f9f9;\n  }\n  :last-child {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n  :hover {\n    background: #ddd;\n  }\n  li.a10-checked {\n    background: #888;\n    color: #fff;\n    text-decoration: line-through;\n  }\n  li.a10-checked::before {\n    content: '';\n    position: absolute;\n    border-color: #fff;\n    border-style: solid;\n    border-width: 0 2px 2px 0;\n    top: 10px;\n    left: 16px;\n    transform: rotate(45deg);\n    height: 15px;\n    width: 7px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: black;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px 40px;\n  color: white;\n  :after {\n    content: '';\n    display: table;\n    clear: both;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';

var CTodo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CTodo, _React$Component);

  function CTodo(props) {
    var _this;

    _classCallCheck(this, CTodo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CTodo).call(this, props));

    _this.handleAdd = function () {
      var list = _this.state.list;
      list.push(_this.state.entry);

      _this.setState({
        list: list,
        entry: ''
      });

      localStorage.setItem("".concat(_this.props.title, " list"), JSON.stringify(list));
    };

    _this.handleInputChange = function (e) {
      console.log(e.target);

      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };

    _this.handleDelete = function (e) {
      var list = _this.state.list;
      list.splice(e.target.id, 1);

      _this.setState({
        list: list
      });

      localStorage.setItem("".concat(_this.props.title, " list"), JSON.stringify(list));
    };

    _this.handleComplete = function (e) {
      if (e.target.className.includes('a10-checked')) {
        e.target.className = '';
      } else {
        e.target.className = 'a10-checked';
      }
    };

    _this.state = {
      title: null,
      list: [],
      entry: ''
    };
    return _this;
  }

  _createClass(CTodo, [{
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

      return React.createElement("div", {
        className: "a10-color-todo"
      }, React.createElement(Header, {
        className: "a10-header",
        style: {
          background: this.props.bkColor ? this.props.bkColor : '#FF9933'
        }
      }, React.createElement("h2", {
        className: "a10-title",
        style: {
          color: this.props.btnColor
        }
      }, this.state.title), React.createElement(TextInput, {
        name: "entry",
        change: function change(e) {
          return _this2.handleInputChange(e);
        },
        type: "text",
        value: this.state.entry,
        placeholder: this.props.placeholder ? this.props.placeholder : null,
        ftcolor: this.props.ftColor ? this.props.ftColor : 'white',
        bkcolor: this.props.inColor ? this.props.inColor : 'white',
        width: "100%"
      }), React.createElement(SecondaryButton, {
        value: "Add",
        click: this.handleAdd,
        color: this.props.btnColor ? this.props.btnColor : 'white',
        className: "a10-addBtn"
      })), React.createElement(List, {
        id: "myUL"
      }, this.state.list.map(function (li, i) {
        return React.createElement(ListItem, {
          key: i,
          onClick: _this2.handleComplete
        }, React.createElement(DelButton, {
          onClick: _this2.handleDelete,
          id: i
        }, "\u2297"), li);
      })));
    }
  }]);

  return CTodo;
}(React.Component);

export default CTodo;
var Header = styled.div(_templateObject());
var List = styled.ul(_templateObject2());
var ListItem = styled.li(_templateObject3());
var DelButton = styled.span(_templateObject4());

var TextInput = function TextInput(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      label = _ref.label,
      value = _ref.value,
      placeholder = _ref.placeholder,
      change = _ref.change,
      name = _ref.name,
      ftcolor = _ref.ftcolor,
      bkcolor = _ref.bkcolor,
      width = _ref.width;
  return React.createElement(FormGroup, {
    className: "a10-simple-form-group"
  }, label && React.createElement(Label, {
    className: "a10-simple-text-label"
  }, label), React.createElement(Input, {
    type: type,
    name: name,
    className: "a10-simple-text-input",
    value: value,
    placeholder: placeholder,
    onChange: function onChange(e) {
      return change && change(e);
    },
    ftColor: ftcolor,
    borderColor: bkcolor,
    width: width
  }));
};

var FormGroup = styled.div(_templateObject5());
var Label = styled.label(_templateObject6());
var Input = styled.input(_templateObject7(), function (props) {
  return "2px solid ".concat(props.borderColor || '#FF9933');
}, function (props) {
  return props.width || '30%';
}, function (props) {
  return props.ftColor || 'black';
});

var SecondaryButton = function SecondaryButton(_ref2) {
  var value = _ref2.value,
      click = _ref2.click,
      color = _ref2.color;
  return React.createElement(CustomSecondaryButton, {
    className: "a10-secondary-button",
    onClick: function onClick(e) {
      return click && click(e);
    },
    color: color
  }, value);
};

var CustomSecondaryButton = styled.div(_templateObject8(), function (props) {
  return "2px solid ".concat(props.color || '#FF9933');
}, function (props) {
  return props.color || '#FF9933';
});