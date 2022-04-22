import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";
import "./TodoBoard.css"

type TodoBoardProps = {
    todos: Todo[]
}

export default function TodoBoard ({todos}: TodoBoardProps) {

    return (
        <div className={"todoboard"}>
            <div>TodoBoard:</div>
        <div>
            {todos.filter(todos => todos.status =="OPEN").map(todos =>
                <div>
                    <TodoCard todo={todos}/>
                </div>)}
        </div>
            <div>
                {todos.filter(todos => todos.status =="IN_PROGRESS").map(todos =>
                    <div>
                        <TodoCard todo={todos}/>
                    </div>)}
            </div>

            <div>
                {todos.filter(todos => todos.status =="DONE").map(todos =>
                    <div>
                        <TodoCard todo={todos}/>
                    </div>)}
            </div>
            <div>
                {todos.filter(todos => todos.status =="").map(todos =>
                    <div>
                        <TodoCard todo={todos}/>
                    </div>)}
            </div>
        </div>
    )

}