import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThList } from '@fortawesome/free-solid-svg-icons'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'

function Header({ children, onChange, IconButton, ListButton }) {
    return (
        <div className="Header">
            <header className="HeaderTitleContainer" role="banner">
                <h1 className="HeaderTitle">{children}</h1>
            </header>
            <div className="TextInputContainer">
                <input className="TextInput" id="text-input" name="text-input" type="text" placeholder='Recherche' onChange={onChange} />
                <button className="Button" onClick={IconButton}><FontAwesomeIcon icon={faThLarge} size='2x' /></button>
                <button className="Button" onClick={ListButton}><FontAwesomeIcon icon={faThList} size='2x' /></button>
            </div>
        </div>
    )
}

export default Header