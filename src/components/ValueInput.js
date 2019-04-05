import React from 'react';

const ValueInput = () => (
    <React.Fragment>
        <div className="is-flex">
            <p className="is-uppercase has-text-weight-bold">Value Input</p>
            <p>greater than
                <i className="fas fa-angle-down"></i>
            </p>
        </div>
        <div className="field has-addons">
            <div className="control">
                <input className="input" type="text" /> 
            </div>
            <div className="control">
                <a className="button is-info">
                    Unit
                </a>
            </div>
        </div>
    </React.Fragment>
);

export default ValueInput;