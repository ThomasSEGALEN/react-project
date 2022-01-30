import TaskItem from "./TaskItem"

function TaskList({ items, onItemDelete }) {
    return (
        <ul className="TaskList">
            {items.map((name, index) =>
                <li key={`taskItem-${index + 1}`}>
                    <TaskItem id={`task-item-${index + 1}`} onDelete={() => onItemDelete(index)}>{name}</TaskItem>
                </li>
            )}
        </ul>
    )
}

export default TaskList