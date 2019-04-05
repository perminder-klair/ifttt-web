import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .button {
    background-color: ${props => props.bgColor};
    width: ${props => props.width};
    height: ${props => props.height};
    display: inline-flex;
    position: fixed;
    bottom: 2rem;
    left: 1.13rem;
    width: 91.1%;
    align-items: center;
    box-shadow: 0px 0px 5px ${props => props.bgColor};
  }
  a {
    display: inline-table;
  }
`;

const Button = ({ buttonText, bgColor, width, height }) => {
  return (
    <Wrapper bgColor={bgColor} width={width} height={height}>
      <a href=" " className="button has-text-white has-text-weight-bold">
        <div className="content">
          <p className="is-marginless">{buttonText}</p>
        </div>
      </a>
    </Wrapper>
  );
};

export default Button;
