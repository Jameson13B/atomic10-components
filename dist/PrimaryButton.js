import _taggedTemplateLiteral from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  border-radius: 5px;\n  background: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  padding: 10px 15px;\n  -webkit-transform: perspective(10px) translateZ(0);\n  transform: perspective(10px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  :hover,\n  :active {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';

var PrimaryButton = function PrimaryButton(_ref) {
  var value = _ref.value,
      _onClick = _ref.onClick,
      bkcolor = _ref.bkcolor,
      ftcolor = _ref.ftcolor;
  return React.createElement(CustomPrimaryButton, {
    className: "a10-primary-button",
    onClick: function onClick(e) {
      return _onClick && _onClick(e);
    },
    bkcolor: bkcolor,
    ftcolor: ftcolor
  }, value);
};

export default PrimaryButton;
var CustomPrimaryButton = styled.div(_templateObject(), function (props) {
  return "2px solid ".concat(props.bkcolor || '#FF9933');
}, function (props) {
  return props.bkcolor || '#FF9933';
}, function (props) {
  return props.ftcolor || 'white';
});