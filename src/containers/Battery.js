import React from 'react';
import './Battery.css';
import Car from '../components/Car/Car';
import Stats from '../components/Stats/Stats';
import Notice from '../components/Notice/Notice';
import { getModelData } from '../services/BatteryService';

class Battery extends React.Component {
    constructor(props) {
        super(props);

        this.calculateStats = this.calculateStats.bind(this);
        this.statsUpdate = this.statsUpdate.bind(this);
        
        this.state = {
                carstats: [],
                config: {
                speed: 55,
                temperature: 20,
                climate: true,
                wheels: 19
            }
        }
    }

    calculateStats = (models, value) => {
        const dataModels = getModelData();
        return models.map(model => {
            const { speed, temperature, climate, wheels } = value;
            const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
            return {
            model,
            miles
            };
        });
    }
    
    statsUpdate() {
        const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
        // Fetch model info from BatteryService and calculate then update state
        this.setState({
            carstats: this.calculateStats(carModels, this.state.config)
        })  
    }
    
    componentDidMount() {
        this.statsUpdate(); 
    }
      
    render() {
    const { config, carstats } = this.state;
        return (
            <form className="tesla-battery">
            <h1>Range Per Charge</h1>
            <Car wheelsize={config.wheels}/>
            <Stats carstats={carstats}/>
            <Notice />
            </form>
        )
    }
}

export default Battery;
