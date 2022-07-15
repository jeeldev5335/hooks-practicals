import React, { memo } from "react";

const Todos = ({todo, addTodo}) => {
    console.log("callBack");

    return (
        <React.Fragment>
            <h2>My Todos</h2>
            {todo.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </React.Fragment>
    );
};

export default memo(Todos); 