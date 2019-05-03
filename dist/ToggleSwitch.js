import _taggedTemplateLiteral from "/Users/jameson/personal-projects/atomic10-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.5em;\n  margin-left: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-size: inherit;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import './ToggleSwitch.css';

var ToggleSwitch = function ToggleSwitch(_ref) {
  var checkIcon = _ref.checkIcon,
      uncheckIcon = _ref.uncheckIcon,
      defaultChecked = _ref.defaultChecked,
      onChange = _ref.onChange,
      label = _ref.label;
  return React.createElement(Container, null, React.createElement(Toggle, {
    id: "toggle-status",
    icons: {
      checked: React.createElement(Icon, {
        className: "theme-icon material-icons"
      }, checkIcon),
      unchecked: React.createElement(Icon, {
        className: "theme-icon material-icons"
      }, uncheckIcon)
    },
    defaultChecked: defaultChecked,
    onChange: onChange
  }), React.createElement(Label, {
    htmlFor: "toggle-status",
    className: "a10-toggle-switch-label"
  }, label));
};

export default ToggleSwitch; // Styled components

var Container = styled.div(_templateObject());
var Icon = styled.i(_templateObject2());
var Label = styled.label(_templateObject3());