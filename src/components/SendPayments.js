import React from 'react';

const Payments = ({ option }) => (
<div className="control has-icons-right">
  <input className="input is-large" type="number" placeholder={option} />
  <span className="icon is-medium is-right">
    <i className="fas fa-chevron-right"></i>
  </span>
</div>
);

export default Payments;