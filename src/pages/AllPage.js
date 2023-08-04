import React from 'react'
import AddTodoForm from '../components/Todo/AddTodoForm'
import { useState, useEffect } from 'react';
import TodoItem from '../components/Todo/TodoItem';


const AllPage = () => {
    const [todoList, setTodoList] = useState(() => {
        const savedTodoList = localStorage.getItem("todoList");
        if (savedTodoList) {
            return JSON.parse(savedTodoList);
        } else {
            return [];
        }
    });
    const [todo, setTodo] = useState("");
    // const [currentTodo, setCurrentTodo] = useState({});

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    function handleAddInputChange(e) {
        setTodo(e.target.value);
    }
    function handleAddFormSubmit(e) {
        e.preventDefault();

        if (todo !== "") {
            setTodoList([
                ...todoList,
                {
                    id: new Date(),
                    text: todo.trim(),
                    status: false
                }
            ]);
        }

        setTodo("");
    }

    return (
        <div>
            AllPage

            <AddTodoForm todo={todo}
                onAddInputChange={handleAddInputChange}
                onAddFormSubmit={handleAddFormSubmit} />

            <ul className="todo-list">
                {todoList.map((todo) => (
                    <TodoItem
                        todo={todo}
                    // onEditClick={handleEditClick}
                    />
                ))}
            </ul>
        </div>
    )
}

export default AllPage