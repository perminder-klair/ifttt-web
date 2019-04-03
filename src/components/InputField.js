import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    input {
        padding: 21px;
    }
`;

const InputFiled = props => {
    const {
        labelText,
    } = props;

    return (
        <form>
            <Wrapper className="field">
                <label className="label is-uppercase">{labelText}</label>
                <div className="control">
                    <input className="input" />
                </div>
            </Wrapper>
        </form>
    );
};

export default InputFiled;