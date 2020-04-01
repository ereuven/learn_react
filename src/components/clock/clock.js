import React from 'react';
import './clock.css';

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

    FormattedDateTime(props) {
        const now = props.now;

        const date_str = !!now ? now.toLocaleDateString() : 'rendering...';
        const time_str = !!now ? now.toLocaleTimeString() : 'rendering...';

        return (<i class="clock-text" style={{ color: props.color }}>{date_str} {time_str}</i>);
    }

    handleClick(e, num){
        e.preventDefault();
        alert(this.props.color + ' number: ' + num);
    }

    handleClick2(num){
        alert(this.props.color + ' number: ' + num);
    }

    render() {
        return (
            // <div className='clock' onClick={this.handleClick2.bind(this, this.num)} >
            <div className='clock' onClick={(e) => this.handleClick(e, this.num)} >
                {/* <i class="clock-text" style={{ color: this.props.color }}>{this.get_date_str()} {this.get_time_str()}</i>&nbsp; */}
                <this.FormattedDateTime color={this.props.color} now={this.state.now} />&nbsp;
                <span class='ticks'>ticks: {this.state.ticks}</span>
            </div>
        );
    }
}

export default Clock;