import {Todo} from "../model/Todo";
import ChangeStatus from "./ChangeStatus";
import useTodos from "../hooks/useTodos";

type TodoCardProps ={
    todo: Todo
}

export default function TodoCard({todo}: TodoCardProps) {

    const {todos, addTodo} = useTodos()

    return <div className={"todo-card"} >
        <div>TodoCard</div>
        <div id={"todo"}>
            <div id={"todo-id"}>{todo.id}</div>
            <div id={"todo-status"}>{todo.status} </div>
            <div id={"todo-desc"}>({todo.description})</div>
        </div>
        <ChangeStatus todo={todo}/>
    </div>


}

