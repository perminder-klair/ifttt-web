import React from 'react';
import styled from 'styled-components';

import InputNumber from './InputNumber';

const Text = styled.p`
    padding: 0.8rem;
`;

const Nonce = () => (
    <React.Fragment>
        <div className="has-text-weight-bold">
            <p>Nonce between</p>
        </div>
        <div className="is-flex">
            <InputNumber />
            <Text>and</Text>
            <InputNumber />
        </div>
    </React.Fragment>
);

export default Nonce;