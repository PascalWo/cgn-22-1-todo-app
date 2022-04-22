import {Todo} from "../model/Todo";
import axios from "axios";
import useTodos from "../hooks/useTodos";
import {useState} from "react";
import TodoBoard from "./TodoBoard";

type TodoCardProps ={
    todo: Todo
}

export default function ChangeStatus ({todo}: TodoCardProps) {


    const onClickChangeStatus = () => {
        let target = "";
        if (todo.status == "OPEN") {
            target = "IN_PROGRESS"
        } else if (todo.status == "IN_PROGRESS") {
            target = "DONE"
        } else if (todo.status == "") {
            target = "OPEN"
        }


        axios.put(`/api/todo/${todo.id}`, {id: todo.id, description: todo.description, status: target})
            .then(response => response.data)
            .catch(console.error)
    }


return (<div>
        <form onSubmit={onClickChangeStatus}>
            <button onClick={onClickChangeStatus} type={"submit"}> Advance </button>
        </form>
    </div>

)

}

// <button onClick={onClickChangeStatus}>Advance</button>
