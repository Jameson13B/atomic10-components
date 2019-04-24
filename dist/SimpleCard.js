import _taggedTemplateLiteral from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  overflow: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: grey;\n  font-style: italic;\n  overflow: auto;\n  white-space: nowrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  overflow: auto;\n  white-space: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  border-radius: 5px;\n  background: ", ";\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';

var SimpleCard = function SimpleCard(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      paragraph = _ref.paragraph,
      onClick = _ref.onClick,
      brdColor = _ref.brdColor,
      bkColor = _ref.bkColor,
      width = _ref.width;
  return React.createElement(CustomSimpleCard, {
    className: "a10-simple-card",
    onClick: onClick,
    brdColor: brdColor,
    width: width,
    bkColor: bkColor
  }, React.createElement(CustomTitle, {
    className: "a10-title"
  }, title), React.createElement(CustomSubTitle, {
    className: "a10-subtitle"
  }, subTitle), React.createElement(CustomParagraph, {
    className: "a10-paragraph"
  }, paragraph));
};

export default SimpleCard; // Styled components

var CustomSimpleCard = styled.div(_templateObject(), function (props) {
  return "1px solid ".concat(props.brdColor || 'black');
}, function (props) {
  return props.bkColor;
}, function (props) {
  return props.width || '30%';
});
var CustomTitle = styled.div(_templateObject2());
var CustomSubTitle = styled.div(_templateObject3());
var CustomParagraph = styled.div(_templateObject4());