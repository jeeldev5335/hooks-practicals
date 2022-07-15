import React, { useEffect, useRef, useState } from "react";


const Value = () => {
    const [data, setData] = useState("");
    const previosData = useRef("");

    useEffect(() => {
        previosData.current = data;
    }, [data]);

    return(
        <React.Fragment>
            <input 
                type="text"
                value={data}
                onChange={(a) => setData(a.target.value)}
            />
            <h1>current Value is: {data}</h1>
            <h1>Previous Value is: {previosData.current}</h1>
        </React.Fragment>
    );
}

export default Value;