import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
.button {
  background-color: ${props => props.bgColor}; 
  width: ${props => props.width};
  height: ${props => props.height};
}
`;

const Button = ({ buttonText, bgColor, width, height }) => {
    return (
        <Wrapper bgColor={bgColor} width={width} height={height}>
            <a className="button has-text-white has-text-weight-bold">{buttonText}</a> 
        </Wrapper>
    );
};

export default Button;