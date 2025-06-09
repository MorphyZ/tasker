import { Link, useLocation } from "react-router-dom";

export default function TaskEditPage(){
    const location = useLocation();
    const {task} = location.state;
    return(
        <div>
            <header>
                <h1>
                    Менеджер задач
                </h1>
                <Link to ='/'>На главную</Link>
            </header>

            <main>
                <h2>Редактирование задачи {task}</h2>
            </main>
        </div>
    );
}