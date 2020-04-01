import React from 'react';
import './clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            now: null,
            ticks: 0
        };
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

    render() {
        return (
            <div className='clock'>
                {/* <i class="clock-text" style={{ color: this.props.color }}>{this.get_date_str()} {this.get_time_str()}</i>&nbsp; */}
                <this.FormattedDateTime color={this.props.color} now={this.state.now} />&nbsp;
                <span class='ticks'>ticks: {this.state.ticks}</span>
            </div>
        );
    }
}

export default Clock;