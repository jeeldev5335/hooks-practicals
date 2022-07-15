import React, { useReducer } from "react";

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    }
];

const todoReducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                }
                else {
                    return todo;
                }
            });
        default:
            return state;
    }
};


const initialUsers = [
    {
        name: 'A',
        age: 20
    }
];

const usersReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.loadData ]
        default:
            return state;
    }
};

const Todos = () => {
    //Todos
    const [todos, dispatchTodoReducer] = useReducer(todoReducer, initialTodos);

    const handleComplete = (todo) => {
        dispatchTodoReducer({ type: "COMPLETE", id: todo.id });
    };


    //Users
    const [users, dispatchUsers] = useReducer(usersReducer, initialUsers);

    console.log(users);

    const handleAddUser = (todo) => {
        dispatchUsers({ type: "ADD", loadData: { name: 'B', age: 25} });
    };

    return (
        <React.Fragment>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
            <button onClick={handleAddUser}>Add user</button>
        </React.Fragment>
    );
}

export default Todos;