import React from 'react';
import './clock.css';

class Clock extends React.Component
{
    constructor(props) {
        super(props);
        
        this.state = {
            date: 'rendering...',
            time: 'rendering...',
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const now = new Date();

            this.setState({
                date: now.toLocaleDateString(),
                time: now.toLocaleTimeString()
            });
        }, 100);
    }

    render() {
    return (<i class="clock-text" style={{color: this.props.color}}>{this.state.date} {this.state.time}</i>);
    }
}

export default Clock;