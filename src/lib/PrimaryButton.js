import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({ value, onClick, bkcolor, ftcolor }) => (
  <CustomPrimaryButton
    className='a10-primary-button'
    onClick={e => onClick && onClick(e)}
    bkcolor={bkcolor}
    ftcolor={ftcolor}
  >
    {value}
  </CustomPrimaryButton>
);

export default PrimaryButton;

const CustomPrimaryButton = styled.div`
  border: ${props => `2px solid ${props.bkcolor || '#FF9933'}`};
  border-radius: 5px;
  background: ${props => props.bkcolor || '#FF9933'};
  color: ${props => props.ftcolor || 'white'};
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
