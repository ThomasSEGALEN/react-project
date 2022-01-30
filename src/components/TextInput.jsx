function TextInput({ children, id, placeholder, value, onChange }) {
    return (
        <div className="TextInput">
            <label htmlFor={id}>{children}</label>
            <input type="text" className={id} id={id} placeholder={placeholder} name={id} value={value} onChange={onChange} />
        </div>
    )
}

export default TextInput