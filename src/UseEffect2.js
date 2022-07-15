import React, { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime((time) => time + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return <h1>Rendered {time} Times!</h1>;
}

export default Timer;