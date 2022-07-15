import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallBack = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    const increment = () => {
        setCount((i) => i + 1);
    };

    const addTodo = useCallback(() => {
        setTodo((value) => [ ...value, "New Todo"]);
    }, [todo] );

    return (
        <React.Fragment>
            <Todos todo={todo} addTodo={addTodo} />
            <hr />
            <div>
                count: {count}
                <button onClick={increment}>+</button>
            </div>
        </React.Fragment>
    );
};

export default UseCallBack;