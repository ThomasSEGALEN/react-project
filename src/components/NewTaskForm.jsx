import TextInput from "./TextInput"
import Button from "./Button"
import { useState } from "react"

function NewTaskForm({ onSubmit }) {
    const [inputValue, setInputValue] = useState('')
    const [showErrors, toggleShowErrors] = useState(false)
    const onFormSubmit = (event) => {
        event.preventDefault()
        toggleShowErrors(true)
        if (inputValue) {
            onSubmit(inputValue)
            toggleShowErrors(false)
        }
        setInputValue("")
    }
    const onValueChange = (event) => {
        toggleShowErrors(false)
        setInputValue(event.target.value)
    }
    return (
        <form action="#" className="NewTaskForm" onSubmit={onFormSubmit}>
            <TextInput
                id="new-task-name"
                placeholder="Entrer une tâche"
                value={inputValue}
                onChange={onValueChange}>Tâche</TextInput>
            <Button type="submit" id="add-task-button">Ajouter</Button>
            {!inputValue && showErrors && (
                <p className="errorMessage" style={{ color: "red" }}>Renseignez le champ</p>
            )}
        </form>
    )
}

export default NewTaskForm