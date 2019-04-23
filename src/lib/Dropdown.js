import React from 'react';
import styled from 'styled-components';
// import './Dropdown.css';

const CustomDropdown = styled.div`
  background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 93% 0;
  height: 29px;
  overflow: hidden;
  width: ${props => props.width || '200px'};
  background-color: ${props => props.bkColor || '#eee'};
  border-radius: 5px;
`;
const CustomSelect = styled.select`
  background: transparent;
  border: none;
  appearance: none;
  outline: none;
  font-size: 14px;
  height: 29px;
  padding: 5px 0 5px 10px;
  color: ${props => props.ftColor || 'slategray'}
  width: 100%;
  cursor: pointer;
`;

const Dropdown = ({
  name,
  value,
  onChange,
  content,
  ftColor,
  bkColor,
  width
}) => (
  <CustomDropdown className='a10-dropdown' bkColor={bkColor} width={width}>
    <CustomSelect
      value={value}
      onChange={onChange}
      name={name}
      ftColor={ftColor}
    >
      {content.map((el, i) => {
        return (
          <option value={el.value} key={el.key || i}>
            {el.text}
          </option>
        );
      })}
    </CustomSelect>
  </CustomDropdown>
);

export default Dropdown;
