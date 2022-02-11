import React from 'react';
import PropTypes from 'prop-types';
import Each from '../components/Finance/Each';

const Home = function pagesHome({ nasdaq }) {
  const companies = nasdaq;
  companies.sort((a, b) => b.changesPercentage - a.changesPercentage);
  return (
    <>
      <div className="full-width">
        <h5 className="list-heading">Top Performers</h5>
      </div>
      <div className="container">
        {companies.map((item, index) => (
          <div key={item.ticker} className="container-child">
            <Each name={item.ticker} price={item.price} index={index} company={item.companyName} />
          </div>
        ))}
      </div>
    </>
  );
};

Home.propTypes = {
  nasdaq: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
