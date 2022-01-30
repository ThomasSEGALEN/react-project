import Link from "./Link"

function Header({ children }) {
    return (
        <div className="Header">
            <header className="Header-titleWrapper" role="banner">
                <h1 className="Header-title">{children}</h1>
            </header>
            <nav className="Header-nav" role="navigation">
                <ul>
                    <li>
                        <Link link="#new-task">Ajouter une tâche</Link>
                    </li>
                    <li>
                        <Link link="#list">Liste des tâches</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header