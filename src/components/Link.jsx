function Link({ children, link }) {
    return (
        <a href={link}>{children}</a>
    )
}

export default Link