import Title from "./Title"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"

function Main({ onAddTask, items, onDeleteTask }) {
    return (
        <main className="Gutter" role="main">
            <Title id="new-task">Ajouter une tâche</Title>
            <NewTaskForm onSubmit={onAddTask} />
            <Title id="list">Liste des tâches</Title>
            <TaskList items={items} onItemDelete={onDeleteTask} />
        </main>
    )
}

export default Main