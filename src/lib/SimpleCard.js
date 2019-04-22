import React from 'react';
import styled from 'styled-components';

const SimpleCard = ({
  title,
  subTitle,
  paragraph,
  onClick,
  brdColor,
  bkColor,
  width
}) => {
  return (
    <CustomSimpleCard
      className='a10-simple-card'
      onClick={onClick}
      brdColor={brdColor}
      width={width}
      bkColor={bkColor}
    >
      <CustomTitle className='a10-title'>{title}</CustomTitle>
      <CustomSubTitle className='a10-subtitle'>{subTitle}</CustomSubTitle>
      <CustomParagraph className='a10-paragraph'>{paragraph}</CustomParagraph>
    </CustomSimpleCard>
  );
};

export default SimpleCard;

// Styled components
const CustomSimpleCard = styled.div`
  border: ${props => `1px solid ${props.brdColor || 'black'}`};
  border-radius: 5px;
  background: ${props => props.bkColor};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: ${props => props.width || '30%'};
`;
const CustomTitle = styled.div`
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
  margin-top: 10px;
  overflow: auto;
`;
