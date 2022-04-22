import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBoard from "./components/TodoBoard";
import useTodos from "./hooks/useTodos";
import AddTodo from "./components/AddTodo";

export default function App() {
const {todos, addTodo} = useTodos()

    return (
        <div>
            <div>Hello World</div>
            <TodoBoard todos={todos}/>
            <AddTodo addTodo={addTodo}/>
        </div>
    )
}


