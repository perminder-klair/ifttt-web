import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .button {
    background-color: ${props => props.bgColor};
    width: ${props => props.width};
    height: ${props => props.height};
    display: inline-flex;
    align-items: center;
    box-shadow: 2px 2px 5px ${props => props.bgColor};
  }
  a {
    display: inline-table;
  }
`;

const WatchButton = ({ buttonText, bgColor, width, height, text }) => {
  return (
    <Wrapper bgColor={bgColor} width={width} height={height}>
      <a href=" " className="button has-text-white has-text-weight-bold">
        <div className="content">
          <p className="is-marginless">{buttonText}</p>
          <p className="is-marginless">{text}</p>
        </div>
      </a>
    </Wrapper>
  );
};

export default WatchButton;
