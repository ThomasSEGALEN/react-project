function CheckboxInput({ children, className, id, onClick }) {
    return (
        <div className="CheckboxInput">
            <input type="checkbox" className={`${className}-checkbox`} id={id} name={id} onClick={onClick} />
            <label htmlFor={id} className={`${className}-title`}>{children}</label>
        </div>
    )
}

export default CheckboxInput