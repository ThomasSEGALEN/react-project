function Header({ children }) {
    return (
        <footer className="Footer" role="contentinfo">
            <p className="FooterText">{children}</p>
        </footer>
    )
}

export default Header