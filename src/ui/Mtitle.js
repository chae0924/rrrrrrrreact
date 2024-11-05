import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Movetool({textcolor, children }) {
  return (
    <div>
      <div
  className="d-flex bg-primary rounded-circle"
  style={{ height: '20px', width: '20px' }}
></div>

    <h2>
      {children}
      <i className="bi bi-chevron-right"></i>
    </h2>
    </div>
  );
}
