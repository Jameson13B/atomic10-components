import React from 'react';
import styled from 'styled-components';

const TextInput = ({
  type = 'text',
  label,
  value,
  placeholder,
  change,
  name,
  ftColor,
  bkColor,
  width
}) => (
  <FormGroup className='a10-simple-form-group'>
    {label && <Label className='a10-simple-text-label'>{label}</Label>}
    <Input
      type={type}
      name={name}
      className='a10-simple-text-input'
      value={value}
      placeholder={placeholder}
      onChange={e => change && change(e)}
      ftColor={ftColor}
      borderColor={bkColor}
      width={width}
    />
  </FormGroup>
);

export default TextInput;

// Styled components
const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;
const Label = styled.label`
  display: block;
`;
const Input = styled.input`
  background: transparent;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: ${props => `2px solid ${props.borderColor || '#FF9933'}`}
  display: block;
  margin-bottom: 0.5rem;
  padding: 5px;
  font-size: 16px;
  font-weight: 400;
  width: ${props => props.width || '30%'};
  color: ${props => props.ftColor || 'black'};
`;
