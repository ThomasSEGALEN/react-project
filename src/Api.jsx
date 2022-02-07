import './styles/Api.scss'
import Header from './api-components/Header'
import PersonsList from './api-components/PersonsList'
import Footer from './api-components/Footer'
import { useState, useEffect } from 'react'

export default function Api() {
    const [persons, setPersons] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [buttonValue, setButtonValue] = useState(false)
    const personsListClass = buttonValue ? "PersonsList" : "PersonsList--icon"
    const personsItemClass = buttonValue ? "PersonsItem" : "PersonsItem PersonsItem--icon"
    const personsImageClass = buttonValue ? "PersonsImage" : "PersonsImage PersonsImage--icon"

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20').then((response) => {
            return response.json()
        }).then((json) => {
            setPersons(json)
        })
    }, [])

    const IconButton = () => {
        setButtonValue(false)
    }

    const ListButton = () => {
        setButtonValue(true)
    }

    const onChange = (event) => {
        setInputValue(event.target.value)
    }

    // const filteredByName = (name, inputValue) => {
    //     return name.toLowerCase().includes(inputValue.toLowerCase())
    // }

    const filteredByName = (name, inputValue) => {
        let returnValue = false
        inputValue.trim().split(' ').map((value) => name.toLowerCase().includes(value.toLowerCase()) ? returnValue = true : 0)
        return returnValue
    }

    return (
        <div className="App">
            <Header onChange={onChange} IconButton={IconButton} ListButton={ListButton}>Rick and Morty API</Header>
            <div className="App-main Main">
                <PersonsList personsListClass={personsListClass} persons={persons} filteredByName={filteredByName} inputValue={inputValue} personsItemClass={personsItemClass} personsImageClass={personsImageClass}></PersonsList>
            </div>
            <div className="App-footer">
                <Footer>Application développée par Thomas SÉGALEN</Footer>
            </div>
        </div>
    )
}
