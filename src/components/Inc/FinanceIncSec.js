import React from 'react';
import PropTypes from 'prop-types';

const FinanceSection = function finSection({ eachObj, indexValue }) {
  const name = Object.keys(eachObj);
  const stringified = JSON.stringify(name);
  const splicedData = stringified.slice(0, -5);
  const finalIndicator = splicedData.charAt(2).toUpperCase() + splicedData.slice(3);
  const value = Object.values(eachObj);
  const checkValue = (!value[0]) ? 'N/A' : value;

  const nameOfClass = (indexValue % 2) ? 'evenFinancial' : 'oddFinancial';
  return (
    <div className={nameOfClass}>
      <div className="financialDes">
        <h5 className="finalIndicatorVal">{finalIndicator}</h5>
        <p>{checkValue}</p>
      </div>
    </div>
  );
};

FinanceSection.propTypes = {
  eachObj: PropTypes.instanceOf(Object).isRequired,
  indexValue: PropTypes.number.isRequired,
};

export default FinanceSection;
