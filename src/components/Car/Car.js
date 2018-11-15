import React from 'react';
import PropTypes from 'prop-types';
import './Car.css';

const Car = (props) => (
  <div className="tesla-car">
    <div className="tesla-wheels">
      <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${props.wheelsize}`}></div>
      <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props.wheelsize}`}></div>
    </div>
  </div>
);

Car.propTypes = {
  wheelsize: PropTypes.number
}

export default Car;
