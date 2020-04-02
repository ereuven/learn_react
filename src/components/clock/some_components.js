import React from 'react';
import styles from './clock.module.css';

export function FormattedDateTime(props) {
    const now = props.now;

    const date_str = !!now ? now.toLocaleDateString() : 'rendering...';
    const time_str = !!now ? now.toLocaleTimeString() : 'rendering...';

    return (<i className={styles.clockText} style={{ color: props.color }}>{date_str} {time_str}</i>);
}

export function WarningComponent(props) {
    if (!props.warn) {
        return null;
    }

    return <div style={{backgroundColor: "orange"}}>Some warning!</div>
}