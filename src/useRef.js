import React, { useEffect, useRef, useState } from "react";


const Ref = () => {
    const [input, setInput] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <React.Fragment>
            <input 
                type="text"
                value={input}
                onChange={ (a) => setInput(a.target.value)}
            />
            <h1>count is: {count.current}</h1>
        </React.Fragment>
    );
}

export default Ref;