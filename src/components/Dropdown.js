import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    box-shadow: 0px 1px 4px ${props => props.bgColor};
    span {
        padding-top: 5px;
    }
`;

const Dropdown = () => (
    <div className="dropdown">
        <div className="dropdown-trigger">
            <Wrapper className="" aria-haspopup="false" aria-controls="dropdown-menu">
                <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </Wrapper>
        </div>
    </div>
);

export default Dropdown;