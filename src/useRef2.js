import React, { useRef } from "react";


const Focus = () => {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    }

    return (
        <React.Fragment>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </React.Fragment>
    );
}

export default Focus;