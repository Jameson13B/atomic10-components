import _taggedTemplateLiteral from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  border-radius: 5px;\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  padding: 10px 15px;\n  -webkit-transform: perspective(10px) translateZ(0);\n  transform: perspective(10px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  :hover,\n  :active {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px 0;\n  overflow: auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: grey;\n  font-style: italic;\n  overflow: auto;\n  white-space: nowrap;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  overflow: auto;\n  white-space: nowrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  background-color: ", ";\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';

var AdvancedCard = function AdvancedCard(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      paragraph = _ref.paragraph,
      onClick = _ref.onClick,
      brdColor = _ref.brdColor,
      bkColor = _ref.bkColor,
      btnClick = _ref.btnClick,
      btnValue = _ref.btnValue,
      btnColor = _ref.btnColor,
      width = _ref.width,
      image = _ref.image;
  return React.createElement(CustomAdvCard, {
    className: "a10-advanced-card",
    onClick: onClick,
    width: width,
    brdColor: brdColor,
    bkColor: bkColor
  }, React.createElement(CustomImg, {
    src: image,
    alt: "Missing img property",
    className: "a10-img"
  }), React.createElement(CustomTitle, {
    className: "a10-title"
  }, title), React.createElement(CustomSubTitle, {
    className: "a10-subtitle"
  }, subTitle), React.createElement(CustomParagraph, {
    className: "a10-paragraph"
  }, paragraph), btnValue ? React.createElement(SecondaryButton, {
    click: btnClick,
    value: btnValue,
    color: btnColor
  }) : null);
};

export default AdvancedCard;

var SecondaryButton = function SecondaryButton(_ref2) {
  var value = _ref2.value,
      _onClick = _ref2.onClick,
      color = _ref2.color;
  return React.createElement(CustomButton, {
    className: "a10-secondary-button",
    onClick: function onClick(e) {
      return _onClick && _onClick(e);
    },
    color: color
  }, value);
}; // Styled Components


var CustomAdvCard = styled.div(_templateObject(), function (props) {
  return "1px solid ".concat(props.brdColor || 'black');
}, function (props) {
  return props.bkColor;
}, function (props) {
  return props.width || '400px';
});
var CustomImg = styled.img(_templateObject2());
var CustomTitle = styled.div(_templateObject3());
var CustomSubTitle = styled.div(_templateObject4());
var CustomParagraph = styled.div(_templateObject5());
var CustomButton = styled.div(_templateObject6(), function (props) {
  return "2px solid ".concat(props.color || '#FF9933');
}, function (props) {
  return props.color || '#FF9933';
});