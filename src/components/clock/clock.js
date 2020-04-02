import React from 'react';
import './clock.css';
import * as SomeComponents from './some_components.js'

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            now: null,
            ticks: 0
        };

        // This binding is necessary to make `this` work in the callback
        //this.handleClick = this.handleClick.bind(this);

        this.num = !!this.props.num ? this.props.num : 9999;
    }

    componentDidMount() {
        console.info('Clock mount');

        this.interval = setInterval(() => {
            this.setState((state, props) => ({
                now: new Date(),
                ticks: state.ticks + 1
            }));
        }, 100);
    }

    componentWillUnmount() {
        console.info('Clock unmount');
        clearInterval(this.interval);
    }

    // get_date_str() {
    //     return !!this.state.now ? this.state.now.toLocaleDateString() : 'rendering...';
    // }

    // get_time_str() {
    //     return !!this.state.now ? this.state.now.toLocaleTimeString() : 'rendering...';
    // }

    handleClick(e, num){
        e.preventDefault();
        alert(this.props.color + ' number: ' + num);
    }

    handleClick2(num){
        alert(this.props.color + ' number: ' + num);
    }

    render() {
        const ticks = !!this.props.ticks ? <span className='ticks'>ticks: {this.state.ticks}</span> : null;

        return (
            // <div className='clock' onClick={this.handleClick2.bind(this, this.num)} >
            <div className='clock' onClick={(e) => this.handleClick(e, this.num)} >
                {/* <i class="clock-text" style={{ color: this.props.color }}>{this.get_date_str()} {this.get_time_str()}</i>&nbsp; */}
                <SomeComponents.FormattedDateTime color={this.props.color} now={this.state.now} />&nbsp;
                {ticks}
                <span style={{marginLeft: '1em'}}>(ticks is {!!this.props.ticks ? 'displayed' : 'not displayed'})</span>
                {this.props.color === 'red' && <h3>color is red</h3>}
                <SomeComponents.WarningComponent warn={!this.props.ticks}/>
            </div>
        );
    }
}

export default Clock;