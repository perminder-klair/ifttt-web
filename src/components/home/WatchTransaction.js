import React from 'react';
import Button from '../Button';

const WatchTransaction = () => {
  return (
    <div>
      <label className="label is-uppercase">trigger type</label>
      <div className="columns is-flex">
        <div className="column">
          <Button
            buttonText="Watch"
            text="contract"
            bgColor="#8662c7"
            width="100%"
          />
        </div>
        <div className="column">
          <Button
            buttonText="Watch"
            text="transaction"
            bgColor="#9fb3c8"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default WatchTransaction;
