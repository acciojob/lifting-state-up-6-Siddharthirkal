import React from "react";

const TodoList = ({todos, handleComplete}) => {
    return(
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{margin: "10px 0"}}>
                        {todo.task}
                        {!todo.completed && (
                            <button
                                onClick={() => handleComplete(todo.id)}
                                style={{marginLeft:"10px"}}
                                >
                                    Complete
                                </button>
                        )}
                        </li>

                ))}
            </ul>
        </div>
    );
};

export default TodoList;