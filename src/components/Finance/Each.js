import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Each = function eachItem({
  name,
  price,
  index,
  company,
}) {
  let boxStyle = 'oddBox';

  if (index % 2 === 0) {
    boxStyle = 'evenBox';
  }
  return (
    <div className={boxStyle}>
      <FaArrowRight className="arrow" />
      <NavLink
        className="navLink"
        to={{
          pathname: `company/${name}`,
        }}
      >
        <h4 className="companyName">{company}</h4>
      </NavLink>
      <div className="combine-details">
        <h3 className="name">{name}</h3>
        <h3 className="price">
          $
          {price}
        </h3>
      </div>
    </div>
  );
};

Each.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
};

export default Each;
