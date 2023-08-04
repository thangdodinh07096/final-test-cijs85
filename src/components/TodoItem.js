import React from 'react'

const TodoItem = () => {
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={todo} className="todo">
                    <div className="checkbox" onClick={() => completeTodo(index)}>
                        {todo.isCompleted && <span>&#x2714;</span>}
                    </div>
                    <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
                    <div className="delete fa fa-trash" onClick={() => deleteTodo(index)}>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoItem