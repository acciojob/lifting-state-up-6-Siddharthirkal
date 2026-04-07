import React from "react";

const TodoList = ({todos, handleComplete}) => {
    return(
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{margin: "10px 0",display:"flex",alignItems:"center",gap:"10px",}}>
                        <p style={{margin:0}}>{todo.task}</p>
                        {!todo.completed && (
                            <button onClick={() => handleComplete(todo.id)}>
                                Complete
                            </button>
                        )}
                        {todo.completed && (
                            <span style={{ color:"green",fontWeight:"bold"}}>
                                Completed
                            </span>
                        )}
                        </li>

                ))}
            </ul>
        </div>
    );
};

export default TodoList;