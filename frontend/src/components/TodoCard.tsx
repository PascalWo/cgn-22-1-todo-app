import {Todo} from "../model/Todo";
import {useState} from "react";
import axios from "axios";

type TodoCardProps ={
    todo: Todo
}

export default function TodoCard({todo}: TodoCardProps) {


    const onClickChangeStatus = () => {
        let target = "";
        if(todo.status == "OPEN"){
            target= "IN_PROGRESS"
        } else if (todo.status== "IN_PROGRESS"){
            target= "DONE"
        } else if (todo.status == ""){
            target="OPEN"
        }


        axios.put(`/api/todo/${todo.id}`, {id: todo.id, description: todo.description, status:target})
            .then(response => response.data)
            .catch(console.error)
        console.log(Response)

    }

    return <div className={"todo-card"} >
        <div>TodoCard</div>
        <div id={"todo"}>
            <div id={"todo-id"}>{todo.id}</div>
            <div id={"todo-status"}>{todo.status} </div>
            <div id={"todo-desc"}>({todo.description})</div>
        </div>
        <button onClick={onClickChangeStatus}>Advance</button>
    </div>


}

