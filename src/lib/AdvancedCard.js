import React from 'react';
import styled from 'styled-components';

const AdvancedCard = ({
  title,
  subTitle,
  paragraph,
  onClick,
  brdColor,
  bkColor,
  btnClick,
  btnValue,
  btnColor,
  width,
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

const SecondaryButton = ({ value, onClick, color }) => (
  <CustomButton
    className='a10-secondary-button'
    onClick={e => onClick && onClick(e)}
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
  width: ${props => props.width || '400px'};
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
  border-radius: 5px;
  color: ${props => props.color || '#FF9933'};
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
`;
