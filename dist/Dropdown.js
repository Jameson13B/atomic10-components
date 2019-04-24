import _taggedTemplateLiteral from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border: none;\n  appearance: none;\n  outline: none;\n  font-size: 14px;\n  height: 29px;\n  padding: 5px 0 5px 10px;\n  color: ", "\n  width: 100%;\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 93% 0;\n  height: 29px;\n  overflow: hidden;\n  width: ", ";\n  background-color: ", ";\n  border-radius: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
var CustomDropdown = styled.div(_templateObject(), function (props) {
  return props.width || '200px';
}, function (props) {
  return props.bkColor || '#eee';
});
var CustomSelect = styled.select(_templateObject2(), function (props) {
  return props.ftColor || 'slategray';
});

var Dropdown = function Dropdown(_ref) {
  var name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      content = _ref.content,
      ftColor = _ref.ftColor,
      bkColor = _ref.bkColor,
      width = _ref.width;
  return React.createElement(CustomDropdown, {
    className: "a10-dropdown",
    bkColor: bkColor,
    width: width
  }, React.createElement(CustomSelect, {
    value: value,
    onChange: onChange,
    name: name,
    ftColor: ftColor
  }, content.map(function (el, i) {
    return React.createElement("option", {
      value: el.value,
      key: el.key || i
    }, el.text);
  })));
};

export default Dropdown;