import React from 'react';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import './ToggleSwitch.css';

const ToggleSwitch = ({
  checkIcon,
  uncheckIcon,
  defaultChecked,
  onChange,
  label
}) => {
  return (
    <Container>
      <Toggle
        id='toggle-status'
        icons={{
          checked: (
            <Icon className='theme-icon material-icons'>{checkIcon}</Icon>
          ),
          unchecked: (
            <Icon className='theme-icon material-icons'>{uncheckIcon}</Icon>
          )
        }}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <Label htmlFor='toggle-status' className='a10-toggle-switch-label'>
        {label}
      </Label>
    </Container>
  );
};

export default ToggleSwitch;

// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.i`
  color: white;
  font-size: inherit;
`;
const Label = styled.label`
  font-size: 1.5em;
  margin-left: 15px;
`;
