import React from 'react';
import styled from 'styled-components';
import './Button.css';

const AdvancedCard = ({
  title,
  subTitle,
  paragraph,
  onClick,
  brdColor,
  bkColor,
  btnClick,
  btnValue,
  btnColor = '#FF9933',
  width = '30%',
  image
}) => {
  return (
    <CustomAdvCard
      className='a10-advanced-card'
      onClick={onClick}
      width={width}
      brdColor={brdColor}
      bkColor={bkColor}
    >
      <CustomImg src={image} alt='Missing img property' className='a10-img' />
      <CustomTitle className='a10-title'>{title}</CustomTitle>
      <CustomSubTitle className='a10-subtitle'>{subTitle}</CustomSubTitle>
      <CustomParagraph className='a10-paragraph'>{paragraph}</CustomParagraph>
      {btnValue ? (
        <SecondaryButton click={btnClick} value={btnValue} color={btnColor} />
      ) : null}
    </CustomAdvCard>
  );
};

export default AdvancedCard;

const SecondaryButton = ({ value, click, color }) => (
  <CustomButton
    className='a10-secondary-button'
    onClick={e => click && click(e)}
    color={color}
  >
    {value}
  </CustomButton>
);

// Styled Components
const CustomAdvCard = styled.div`
  border: ${props => `1px solid ${props.brdColor || 'black'}`};
  background-color: ${props => props.bkColor};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: ${props => props.width};
`;
const CustomImg = styled.img`
  width: 100%;
`;
const CustomTitle = styled.div`
  margin-top: 10px;
  overflow: auto;
  white-space: nowrap;
`;
const CustomSubTitle = styled.div`
  color: grey;
  font-style: italic;
  overflow: auto;
  white-space: nowrap;
`;
const CustomParagraph = styled.div`
  margin: 10px 0;
  overflow: auto;
`;
const CustomButton = styled.div`
  border: ${props => `2px solid ${props.color || '#FF9933'}`};
  color: ${props => props.color || '#FF9933'};
`;
