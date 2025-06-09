import Container from "../components/Container/Container";
import FormCreateTask from "../components/FormCreateTask/FormCreateTask";

export default function MainPage({tasks, setTasks}) {
    return (
        <div>
            <header>
                <h1>
                    Менеджер задач
                </h1>
            </header>

            <main>
                <FormCreateTask tasks={tasks} addTask={setTasks} />
                <Container tasks={tasks} removeTask={setTasks} />
            </main>
        </div>
    );
}