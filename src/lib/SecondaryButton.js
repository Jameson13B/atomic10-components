import React from 'react';
import styled from 'styled-components';

const SecondaryButton = ({ value, onClick, color }) => (
  <CustomSecondaryButton
    className='a10-secondary-button'
    onClick={e => onClick && onClick(e)}
    color={color}
  >
    {value}
  </CustomSecondaryButton>
);

export default SecondaryButton;

const CustomSecondaryButton = styled.div`
  border: ${props => `2px solid ${props.color || '#FF9933'}`};
  border-radius: 5px;
  color: ${props => props.color || '#FF9933'}
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  -webkit-transform: perspective(10px) translateZ(0);
  transform: perspective(10px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  :hover,
  :active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`;
