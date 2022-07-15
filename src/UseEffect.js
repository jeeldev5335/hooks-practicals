import React, { useEffect, useState } from "react";


const Counter = () => {
    const [counter, setCounter]  = useState(0);
    const [add, setAdd] = useState(0);

    useEffect(() =>{
        setAdd(() => counter * 10);
    }, [counter]);

    return (
        <React.Fragment>
            <p>The Counter is : {counter}</p>
            <button onClick={() => setCounter((a) => a + 1)} >+</button>
            <p>Addition is : {add}</p>
        </React.Fragment>
    );
}

export default Counter;