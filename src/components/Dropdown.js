import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    box-shadow: 2px 2px 5px ${props => props.bgColor};
`;

const Dropdown = () => (
    <div className="dropdown">
        <div className="dropdown-trigger">
            <Button className="button" aria-haspopup="false" aria-controls="dropdown-menu">
                <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </Button>
        </div>
    </div>

);

export default Dropdown;