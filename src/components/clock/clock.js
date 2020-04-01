import React from 'react';
import './clock.css';

class Clock extends React.Component
{
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'rendering...',
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()});
        }, 100);
    }

    render() {
    return (<i class="clock-text" style={{color: this.props.color}}>{this.state.time}</i>);
    }
}

export default Clock;