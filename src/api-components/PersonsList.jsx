function PersonsList({ personsListClass, persons, filteredByName, inputValue, personsItemClass, personsImageClass }) {
    return (
        <ul className={personsListClass}>
            {persons.length ? persons.filter(({ name }) => filteredByName(name, inputValue)).map((filteredPersons, index) => (
                <li className={personsItemClass}  key={`PersonsItem-${index + 1}`}>
                    <img className={personsImageClass} id={`PersonsImage-${index + 1}`} key={`PersonsImage-${index + 1}`} src={filteredPersons.image} alt={filteredPersons.name} />
                    <div className="PersonsInformations">
                        <h2 className="PersonsTitle">{filteredPersons.name}</h2>
                            <p className="PersonsDescription">
                                <span>Gender: {filteredPersons.gender}</span><br />
                                <span>Specie: {filteredPersons.species}</span><br />
                                <span>Origin: {filteredPersons.origin.name}</span><br />
                                <span>Location: {filteredPersons.location.name}</span>
                            </p>
                    </div>
                </li>
            )) : "Chargement..."}
        </ul>
    )
}

export default PersonsList