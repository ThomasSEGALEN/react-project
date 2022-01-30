import "./styles/App.css";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useState } from "react";

function App() {
    const [items, setItems] = useState([
        "Découvrir React",
        "Découvrir les props",
        "Découvrir la prop children"
    ])
    const addItem = (item) => {
        setItems([
            ...items,
            item
        ])
    }
    const removeItem = (indexToRemove) => {
        // setItems(
        //     items.filter((item, index) => {
        //         return index !== indexToRemove
        //     })
        // )
        items.splice(indexToRemove, 1)
        setItems([...items])
    }
    return (
        <div className="App">
            <div className="App-header">
                <Header>Application de liste de tâches</Header>
            </div>
            <main role="main" className="App-content">
                <Main onAddTask={addItem} items={items} onDeleteTask={removeItem} />
            </main>
            <div className="App-footer">
                <Footer>Application réalisée pour la formation B2 dev Campus Academy</Footer>
            </div>
        </div>
    )
}

export default App