import React from 'react';
import { Link } from 'react-router-dom';

export const Breadcrumbs = () => {
  return (
    <div className="">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb rounded-0">
          <li className="breadcrumb-item">
            <Link to="/" title="Home" style={{ marginLeft: '10px' }}> {/* Add inline style for margin-left */}
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/" title="Men">
              Men
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            T-Shirts
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
