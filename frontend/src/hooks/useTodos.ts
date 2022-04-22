import {useEffect, useState} from "react";
import axios from "axios";
import {Todo} from "../model/Todo";

export default function useTodos(){
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        axios.get('/api/todo')
            .then(response => response.data)
            .then(body => setTodos(body))
            .catch(console.error)
    }, [])

    const addTodo= (newTodo: Todo) =>{
        setTodos((allTodos) => [...allTodos,newTodo])
    }
    return {todos, addTodo}
}