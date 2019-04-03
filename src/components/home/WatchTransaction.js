import React from 'react';
import Button from '../Button';

const WatchTransaction = () => {
    return (
        <div>
          <label className="label is-uppercase">trigger type</label>
          <div className="columns">
            <div className="column is-flex">
              <Button buttonText="Watch contract" bgColor="#8662c7" />
              <Button buttonText="Watch transaction" bgColor="#9fb3c8" />
            </div>
          </div>
        </div>
    );
};

export default WatchTransaction;