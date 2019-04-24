import _taggedTemplateLiteral from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: ", "\n  display: block;\n  margin-bottom: 0.5rem;\n  padding: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  width: ", ";\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 1rem;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';

var TextInput = function TextInput(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      label = _ref.label,
      value = _ref.value,
      placeholder = _ref.placeholder,
      _onChange = _ref.onChange,
      name = _ref.name,
      ftColor = _ref.ftColor,
      bkColor = _ref.bkColor,
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
      return _onChange && _onChange(e);
    },
    ftColor: ftColor,
    borderColor: bkColor,
    width: width
  }));
};

export default TextInput; // Styled components

var FormGroup = styled.div(_templateObject());
var Label = styled.label(_templateObject2());
var Input = styled.input(_templateObject3(), function (props) {
  return "2px solid ".concat(props.borderColor || '#FF9933');
}, function (props) {
  return props.width || '30%';
}, function (props) {
  return props.ftColor || 'black';
});