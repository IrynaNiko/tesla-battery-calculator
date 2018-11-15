import React from 'react';
import './Battery.css';
import Car from '../components/Car/Car';
import Notice from '../components/Notice/Notice';

class Battery extends React.Component {
    render() {
        return (
          <form className="tesla-battery">
            <h1>Range Per Charge</h1>
            <Car />
            <Notice />
          </form>
        )
    }
}

export default Battery;
