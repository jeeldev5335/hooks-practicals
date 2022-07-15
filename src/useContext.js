import React, { useState } from "react";


const Component1 = () => {
    const [user] = useState("Jeel Patel");

    return (
        <React.Fragment>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </React.Fragment>
    );
}

const Component2 = ({ user }) => {
    return (
        <React.Fragment>
            <h1>Component 2</h1>
            <Component3 user={user} />
        </React.Fragment>
    );
}

const Component3 = ({ user }) => {
    return (
        <React.Fragment>
            <h1>Component 3</h1>
            <Component4 user={user} />
        </React.Fragment>
    );
}

const Component4 = ({ user }) => {
    return (
        <React.Fragment>
            <h1>Component 4</h1>
            <Component5 user={user} />
        </React.Fragment>
    );
}

const Component5 = ({ user }) => {
    return (
        <React.Fragment>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </React.Fragment>
    );
}

export default Component1;