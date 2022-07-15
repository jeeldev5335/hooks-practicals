import React, { createContext, useContext, useState } from "react";


const UserContext = createContext();

const ComponentNo1 = () => {
    const [user] = useState("Jeel Patel")

    return (
        <UserContext.Provider value={user}>
            <h1> {`Hello ${user}!`} </h1>
            <ComponentNo2 jeel={user} />
        </UserContext.Provider>
    );
}

const ComponentNo2 = () => {
    return (
        <React.Fragment>
            <h1>Component 2</h1>
            <ComponentNo3 />
        </React.Fragment>
    );
}

const ComponentNo3 = () => {
    return (
        <React.Fragment>
            <h1>Component 3</h1>
            <ComponentNo4 />
        </React.Fragment>
    );
}

const ComponentNo4 = () => {
    return (
        <React.Fragment>
            <h1>Component 4</h1>
            <ComponentNo5 />
        </React.Fragment>
    );
}

const ComponentNo5 = () => {
    const jeel = useContext(UserContext);

    return (
        <React.Fragment>
            <h1>Component 5</h1>
            <h2>{`Hello ${jeel} again!`}</h2>
        </React.Fragment>
    );
}

export default ComponentNo1;