import CheckboxInput from "./CheckboxInput"
import Button from "./Button"
import { useState } from "react"

function TaskItem({ children, id, onDelete }) {
    const [checkboxValue, setCheckboxValue] = useState(false)
    const onDeleteButton = () => {
        onDelete()
    }
    const onCheck = (event) => {
        setCheckboxValue(event.target.checked)
    }
    const classNames = checkboxValue ? "TaskItem TaskItem--done" : "TaskItem"
    return (
        <div className={classNames}>
            <CheckboxInput className="TaskItem" id={id} onClick={onCheck}>{children}</CheckboxInput>
            <Button type="button" id="delete-task-button" onClick={onDeleteButton}>Supprimer</Button>
        </div>
    )
}

export default TaskItem