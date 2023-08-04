import React, { useState, useEffect } from "react";

function TodosComponent() {
    const [currentTodo, setCurrentTodo] = useState("");
    const [sortOption, setSortOption] = useState(0);

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function createNewTodo(currentTodo) {
        let todosArray = [...todos];
        todosArray.push({
            todo: currentTodo,
            isCompleted: false
        });
        setTodos(todosArray);
    }

    function completeTodo(index) {
        let todosArray = [...todos];
        todosArray[index].isCompleted = !todosArray[index].isCompleted;
        setTodos(todosArray);
    }

    function deleteTodo(index) {
        let todosArray = [...todos];
        todosArray.splice(index, 1);
        setTodos(todosArray);
    }

    const onSortOptionsChange = (e) => {
        setSortOption(e.target.value);
    };

    const sortTodos = (todos, sortOption) => {
        let sortedTodos = [...todos];
        switch (+sortOption) {
            case 1: {
                sortedTodos = todos.sort((todo) =>
                    todo.isCompleted === "true"

                );
                console.log(1)
                break;
            }
            case 2: {
                // sortedTodos = todos.filter(
                //     todos.isCompleted === "true"
                // );
                console.log(2)
                break;
            }

            case 0:
            default:
                return todos;
        }

        return sortedTodos;
    };
    const sortedTodoValues = sortTodos(todos, sortOption);

    return (
        <>
            <div className="d-flex align-items-center justify-content-end gap-2 my-3">
                <select
                    className="form-select filter-options"
                    onChange={onSortOptionsChange}
                    value={sortOption}
                >
                    <option value={0}>All</option>
                    <option value={1}>Active</option>
                    <option value={2}>Completed</option>
                </select>
            </div>
            <div className="row">
                <input
                    className="todo-input col-10"
                    value={currentTodo}
                    onChange={e => {
                        setCurrentTodo(e.target.value);
                    }}
                    placeholder="add details"
                />
                <button type="submit" className="btn btn-primary col-2" onClick={() => {
                    createNewTodo(currentTodo);
                    setCurrentTodo("");
                }}>Add</button>
            </div>

            <div>
                {sortedTodoValues.map((todo, index) => (
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
        </>
    );
}
export default TodosComponent;