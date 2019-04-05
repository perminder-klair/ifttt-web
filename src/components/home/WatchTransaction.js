import React from 'react';
import styled from 'styled-components';

import WatchButton from '../WatchButton';

const Wrapper = styled.div`
  .column {
    padding: 0rem 0.2rem 0.75rem 0.2rem;
  }
`;

const WatchTransaction = () => {
  return (
    <Wrapper>
      <p className="label is-uppercase">trigger type</p>
      <div className="columns is-flex is-marginless">
        <div className="column">
          <WatchButton
            buttonText="Watch"
            text="contract"
            bgColor="#8662c7"
            width="100%"
            height="5rem"
          />
        </div>
        <div className="column">
          <WatchButton
            buttonText="Watch"
            text="transaction"
            bgColor="#9fb3c8"
            width="100%"
            height="5rem"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default WatchTransaction;
