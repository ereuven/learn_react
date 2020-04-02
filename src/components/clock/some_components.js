import React from 'react';

export function FormattedDateTime(props) {
    const now = props.now;

    const date_str = !!now ? now.toLocaleDateString() : 'rendering...';
    const time_str = !!now ? now.toLocaleTimeString() : 'rendering...';

    return (<i className="clock-text" style={{ color: props.color }}>{date_str} {time_str}</i>);
}

export function WarningComponent(props) {
    if (!props.warn) {
        return null;
    }

    return <div style={{backgroundColor: "orange"}}>Some warning!</div>
}