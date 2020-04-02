import React from 'react';

function UserItem(props) {
    return (<li style={{ padding: "0.9em" }}>
        <img src={props.user.avatar} style={{ width: "2em", height: "2em", borderRadius: "50%" }} alt="avatar" />
        <span>{props.user.name} ({props.user.age})</span>
    </li>);
}

function UserItemByIndex(props) {
    return (<li style={{ padding: "0.9em" }}>
        <img src={props.user.avatar} style={{ width: "2em", height: "2em", borderRadius: "50%" }} alt="avatar" />
        <span>{props.user.name} ({props.user.age})</span>
        <div>key={props.id}</div>
    </li>);
}

export default class UsersList extends React.Component {
    render() {
        const users = this.props.users;
        //const userItems = users.map(user => <UserItem key={user.id} user={user}/>)

        // not recomended, but array index could be used
        // key is not passed, so if you need it - pass it with props
        const userItems = users.map((user, index) => <UserItemByIndex key={index} user={user} id={index} />)

        return <ul style={{ listStyle: "none" }}>{userItems}</ul>
    }
}